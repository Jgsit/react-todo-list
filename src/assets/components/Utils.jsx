import { FaMagnifyingGlass } from "react-icons/fa6"; // Importation de l'icône Loupe

function Utils(props) {
  // Déstructuration des props
  const {
    isSearching, // Booléen qui détermine si l'utilisateur est en mode recherche
    handleSearch, // Fonction pour gérer la recherche de tâches
    handleChange, // Fonction pour gérer la saisie d'une nouvelle tâche
    searchTask, // Valeur actuelle de la recherche
    newTask, // Texte de la nouvelle tâche à ajouter
    handleSubmit, // Fonction pour ajouter une tâche
    setIsSearching, // Fonction pour basculer entre le mode recherche et le mode ajout de tâche
  } = props;

  return (
    <section className="utils">
      <div>
        <input
          type="text"
          placeholder={isSearching ? "Search" : "new task"} // Affiche "Search" ou "new task" selon le mode actuel
          onChange={isSearching ? handleSearch : handleChange} // Appelle la fonction correspondant au mode actuel
          value={isSearching ? searchTask : newTask}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleSubmit(); // Permet d'appuyer sur la touche entrer pour ajouter une tâche
            }
          }}
        />
        {/* Icône loupe pour activer ou désactiver le mode recherche */}
        <FaMagnifyingGlass onClick={() => setIsSearching(!isSearching)} />
      </div>
      <button onClick={handleSubmit}>Add Task</button>
    </section>
  );
}

export default Utils;
