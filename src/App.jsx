import { useState, useEffect } from "react";
import "./App.scss";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import Task from "./assets/components/Task";
import Utils from "./assets/components/Utils";

function App() {
  // État pour la nouvelle tâche à ajouter
  const [newTask, setNewTask] = useState("");
  // État pour le texte de recherche
  const [searchTask, setSearchTask] = useState("");
  // État pour la liste des tâches
  const [tasks, setTasks] = useState([]);
  // État pour le thème sombre ou clair
  const [isDark, setIsDark] = useState(true);
  // État pour déterminer si l'utilisateur est en mode recherche
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    // Applique la classe 'dark' ou 'light' au body en fonction du thème sélectionné
    document.body.className = isDark ? "dark" : "light";
  }, [isDark]);

  // Gère le changement de texte pour la nouvelle tâche
  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  // Gère l'ajout d'une nouvelle tâche
  const handleSubmit = () => {
    const newTasks = [...tasks]; // Copie de la liste actuelle des tâches
    newTasks.push({ text: newTask, done: false }); // Ajoute la nouvelle tâche dans la liste des tâches
    newTasks.sort((a, b) => a.done - b.done); // Trie les tâches de sorte que les tâches finies apparaissent en dernière
    setTasks(newTasks); // Met à jour la liste des tâches
    setNewTask(""); // Réinitialise l'entrée pour la nouvelle tâche
  };

  // Gère le changement d'état (terminé ou non) d'une tâche
  const handleTaskStatus = (event) => {
    const index = event.target.id; // Récupère l'index de la tâche
    const newTasks = [...tasks]; // Copie de la liste actuelle des tâches
    newTasks[index].done = !newTasks[index].done; // Inverse l'état 'terminé' de la tâche
    newTasks.sort((a, b) => a.done - b.done); // Trie les tâches de sorte que les tâches finies apparaissent en dernière
    setTasks(newTasks); // Met à jour la liste des tâches
  };

  // Gère la suppression d'une tâche
  const handleTaskDelete = (index) => {
    const newTasks = [...tasks]; // Copie de la liste actuelle des tâches
    newTasks.splice(index, 1); // Supprime la tâche à l'index donné
    newTasks.sort((a, b) => a.done - b.done); // Trie les tâches de sorte que les tâches finies apparaissent en dernière
    setTasks(newTasks); // Met à jour la liste des tâches
  };

  // Gère le changement de thème (clair/sombre)
  const handleThemeChange = () => {
    setIsDark(!isDark); // Inverse le thème actuel
  };

  // Gère la recherche de tâches
  const handleSearch = (event) => {
    setSearchTask(event.target.value); // Met à jour le texte de recherche
  };

  return (
    <div className={"app"}>
      <Header
        title="Todo List"
        isDark={isDark}
        handleThemeChange={handleThemeChange}
      />
      <main>
        <section className="tasks">
          {/* Affiche les tâches qui correspondent au texte de recherche */}
          {tasks.map((task, index) => {
            if (task.text.includes(searchTask)) {
              return (
                <Task
                  key={index}
                  index={index}
                  text={task.text}
                  done={task.done}
                  handleTaskStatus={handleTaskStatus}
                  handleTaskDelete={handleTaskDelete}
                />
              );
            }
            return null; // Retourne null si la tâche ne correspond pas à la recherche
          })}
        </section>
        {/* Composant Utils pour la recherche ou l'ajout d'une tâche */}
        <Utils
          isSearching={isSearching}
          handleSearch={handleSearch}
          handleChange={handleChange}
          searchTask={searchTask}
          newTask={newTask}
          handleSubmit={handleSubmit}
          setIsSearching={setIsSearching}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
