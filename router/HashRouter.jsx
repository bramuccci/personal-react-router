import { useState } from 'react'
import { PathContext } from './Context'

export function HashRouter({ children }) {
    const windowPath = window.location.pathname.replace(/^\/#/, '')
    const [currentPath, setCurrentPath] = useState(windowPath)
    const routes = []

    const navigate = to => {
        window.history.pushState({}, '', `/#${to}`)
        setCurrentPath(to)
    }

    return (
        <PathContext.Provider
            value={{ currentPath, setCurrentPath, routes, navigate }}
        >
            {children}
        </PathContext.Provider>
    )
}
