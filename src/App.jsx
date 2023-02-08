import { Link } from '../router/Link'
import { Route } from '../router/Route'
import { Router } from '../router/Router'

export function App() {
    return (
        <Router>
            <Route element={<HomePage />} path="/" />
            <Route element={<BlogPage />} path="/blog" />
        </Router>
    )
}

function HomePage() {
    return (
        <>
            <p>You are in the home</p>
            <Link to="/blog">Go to blog</Link>
        </>
    )
}

function BlogPage() {
    return (
        <>
            <p>You are in the blog</p>
            <Link to="/">Back to home</Link>
        </>
    )
}
