import { useEffect, useState } from 'react'

export default function ThemeSwitcher() {
    const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark')

    useEffect(() => {
        document.body.className = dark ? 'dark' : ''
        localStorage.setItem('theme', dark ? 'dark' : 'light')
    }, [dark])

    return (
        <button onClick={() => setDark(!dark)}>
            {dark ? '☀️ Light' : '🌙 Dark'}
        </button>
    )
}
