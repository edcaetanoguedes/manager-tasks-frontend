import styles from "@/styles/Components.module.css";
import { sqlite_convertTimestampToUTC, sqlite_convertTimestampToUTCLocale, sqlite_convertUTCtoUTCLocale2 } from "../scripts/database/sqlite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
require("dotenv").config();

const ENDPOINT = `http://localhost:4000/api/v1/tasks`;

export function CardTask({ data, onStatusChange, onDelete }) {
  const [initialText, setInitialText] = useState(data.text)
  const [status, setStatus] = useState(data.status)
  const [text, setText] = useState(data.text)
  
  const handleFinish = async () => {
    const res = await fetch(`${ENDPOINT}/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: "concluído"
      })
    })

    if(res.status == 200) {
      onStatusChange()
      setStatus("concluído")
    }

    if (res.status == 400 || res.status == 500) {
      alert(res.message);
    }
  }

  const handleUnfinish = async () => {
    const res = await fetch(`${ENDPOINT}/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: "pendente"
      })
    })

    if(res.status == 200) {
      onStatusChange()
      setStatus("pendente")
    }

    if (res.status == 400 || res.status == 500) {
      alert(res.message);
    }
  }
  
  const handleDelete = async () => {
    const res = await fetch(`${ENDPOINT}/${data.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (res.status == 200) {
      onDelete();
    }

    if (res.status == 400 || res.status == 500) {
      alert(res.message);
    }
  };

  const handleTextAreaChange = (e) => {
    setText(e.target.value)

    console.log("Alterou de: ", text)
    console.log("Para: ", e.target.value)
  }

  // Atualização de texto da tarefa
  const updateText = async () => {
    const res = await fetch(`${ENDPOINT}/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text
      })
    })

    return res
  }

  // Controla o fluxo de atualização
  const update = async () => {
    if(initialText !== text) {
      const res = await updateText()
      .then((response) => {
        if(response.status == 200) {
          setInitialText(text);
        }
        return response.json()
      })
      .then(body => alert(body.message))
    }
  }

  const _data_creation = sqlite_convertTimestampToUTCLocale(data.creation)

  return (
    <div className={styles.cardtask}>
      <div className={styles.header}>
        {status && status == "pendente" ? (
          <button className={styles.finish} onClick={handleFinish}>
          <FontAwesomeIcon icon={faCheck} width={26} height={26} />
        </button>
        ) : null}

        {status && status == "concluído" ? (
          <button className={styles.unfinish} onClick={handleUnfinish}>
          <FontAwesomeIcon icon={faCheck} width={26} height={26} />
        </button>
        ) : null}

        <button className={styles.close} onClick={handleDelete}>
          <FontAwesomeIcon icon={faXmark} width={26} height={26} />
        </button>
      </div>
      <div className={styles.main}>
        <textarea value={text} onChange={handleTextAreaChange}/>
      </div>
      <div className={styles.footer}>
        <p>{_data_creation}</p>
        <button onClick={update}>Salvar</button>
      </div>
    </div>
  );
}
