import { FaTrash } from "react-icons/fa"; // Importation de l'icône Poubelle

function Task(props) {
  // Déstructuration des props
  const { index, text, done, handleTaskStatus, handleTaskDelete } = props;

  return (
    <div className="task">
      <input //Case à cocher si la tâche est terminée
        type="checkbox"
        name={text}
        id={index} // L'ID est l'index de la tâche dans la liste, donc unique
        onChange={handleTaskStatus} // Appelle la fonction qui gère le changement d'état de la tâche
        checked={done} // La case est cochée si la tâche est marquée comme terminée
      ></input>

      {/* Affiche le texte de la tâche avec la classe "done" si la tâche est terminée, sinon aucune classe (undefined) */}
      <p className={done ? "done" : undefined}>{text}</p>

      {/* Bouton avec l'appelle de la fonction pour supprimer la tâche de la liste des tâches */}
      <button onClick={() => handleTaskDelete(index)}>
        <FaTrash />
      </button>
    </div>
  );
}

export default Task;
