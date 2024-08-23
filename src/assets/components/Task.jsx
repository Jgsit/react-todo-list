import { FaTrash } from "react-icons/fa";
function Task(props) {
  const { index, text, done, handleTaskStatus, handleTaskDelete } = props;

  return (
    <div className="task">
      <input
        type="checkbox"
        name={text}
        id={index}
        onChange={handleTaskStatus}
      ></input>
      <p className={done ? "done" : undefined}>{text}</p>
      <button onClick={() => handleTaskDelete(index)}>
        <FaTrash />
      </button>
    </div>
  );
}

export default Task;
