import { createContext, useState } from 'react'
export const PathContext = createContext()

export function Router({ children }) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)
    const routes = []
    return (
        <PathContext.Provider value={{ currentPath, setCurrentPath, routes }}>
            {children}
        </PathContext.Provider>
    )
}
