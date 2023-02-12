import { createContext, useState } from 'react'
export const PathContext = createContext()

export function Router({ children }) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)
    const routes = []

    const navigate = to => {
        window.history.pushState({}, '', to)
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
