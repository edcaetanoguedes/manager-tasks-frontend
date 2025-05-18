import styles from "@/styles/Components.module.css"

export function InputNewTask({ text, setText, addTask }) {
    return (
        <>
            <input value={text} 
            onChange={(e) => setText(e.target.value)} 
            onKeyDown={(e) => {
                if(e.key === "Enter") {
                    addTask()
                }
            }} 
            placeholder="Nome da nova tarefa" />
        </>
    )
}