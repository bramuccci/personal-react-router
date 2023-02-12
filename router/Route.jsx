import { useContext } from 'react'
import { PathContext } from './Context'

export function Route({ path, element }) {
    const { currentPath, routes } = useContext(PathContext)

    //Push all routes except '*' (not found) to routes[]
    const routeInRoutes = routes.includes(path)
    if (!routeInRoutes && path != '*') routes.push(path)

    //returning in match
    if (currentPath == path) return element

    // Not found case
    const currentPathInRoutes = routes.includes(currentPath)
    if (path == '*' && !currentPathInRoutes) return element
}
