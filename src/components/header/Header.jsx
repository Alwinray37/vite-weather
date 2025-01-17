import styles from './Header.module.css'

export default function Header() {
    return (
        <header>
            <h1>Weather App</h1>
            <nav>
                <button onClick={() => window.open('https://alwinray37.github.io/WebDev/', '_blank')}>Portfolio</button>
            </nav>
        </header>
    )
}