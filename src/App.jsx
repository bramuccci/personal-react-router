import { Link } from '../router/Link'
import { Route } from '../router/Route'
import { Router } from '../router/Router'

export function App() {
    return (
        <Router>
            <Route element={<HomePage />} path="/" />
            <Route element={<BlogPage />} path="/blog" />
            <Route element={<NotFound />} path="*" />
        </Router>
    )
}

function HomePage() {
    return (
        <>
            <h1>You are in the home</h1>
            <Link to="/blog">Go to blog</Link>
            <p></p>
            <Link to="/random-link">Go to non-existent page</Link>
        </>
    )
}

function BlogPage() {
    return (
        <>
            <h1>You are in the blog</h1>
            <Link to="/">Back to home</Link>
        </>
    )
}

function NotFound() {
    return (
        <>
            <h1>Page not found</h1>
            <Link to="/">Go to home</Link>
        </>
    )
}
