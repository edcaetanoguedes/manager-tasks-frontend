import styles from "@/styles/Layout.module.css"

export default function Layout({ children }) {
    return (
        <div className={styles.layout}>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}

export function Header({ children }) {
    return (
        <header className={styles.header}>
            {children}
        </header>
    )
}

export function Headline({ children }) {
    return (
        <div className={styles.headline}>
            {children}
        </div>
    )
}

export function Main({ children }) {
    return (
        <main className={styles.main}>
            {children}
        </main>
    )
}

export function Footer({ children }) {
    return (
        <footer className={styles.footer}>
            {children}
        </footer>
    )
}

export function Grid({ children }) {
    return (
        <div className={styles.grid}>
            {children}
        </div>
    )
}