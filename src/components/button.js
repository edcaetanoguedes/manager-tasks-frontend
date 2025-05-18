import styles from "@/styles/Components.module.css";

export function ButtonAddTask({ addTask }) {
  return (
    <>
      <button onClick={addTask}>Adicionar</button>
    </>
  );
}

