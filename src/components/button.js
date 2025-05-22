import styles from "@/styles/Components.module.css";

export function ButtonAddTask({ addTask }) {
  return (
    <>
      <button id="add-task" onClick={addTask}>Adicionar</button>
    </>
  );
}

