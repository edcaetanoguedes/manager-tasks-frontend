import styles from "@/styles/Components.module.css";
require("dotenv").config();

const ENDPOINT = `http://localhost:4000/api/v1/tasks`;

export function CardTask({ data, onDelete }) {
  const handleDelete = async () => {
    const res = await fetch(`${ENDPOINT}/${data.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());

    if (res.message) {
      onDelete();
    }

    if (res.error) {
      alert(res.error);
    }
  };

  return (
    <div className={styles.cardtask}>
      <div className={styles.header}>
        <button className={styles.close} onClick={handleDelete}>
          x
        </button>
      </div>
      <div className={styles.main}>
        <p>{data.text}</p>
      </div>
      <div className={styles.footer}>
        <p>{data?.creation}</p>
      </div>
    </div>
  );
}
