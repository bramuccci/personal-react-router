import { useContext } from 'react'
import { PathContext } from './Router'

export function Route({ path, element }) {
    const { currentPath, setCurrentPath } = useContext(PathContext)

    if (currentPath == path) return element
}
