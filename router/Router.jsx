import { createContext, useState } from 'react'
export const PathContext = createContext()

export function Router({ children }) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)
    return (
        <PathContext.Provider value={{ currentPath, setCurrentPath }}>
            {children}
        </PathContext.Provider>
    )
}
