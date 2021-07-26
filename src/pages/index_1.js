// Step 1: Import your component
import * as React from 'react'
import { Link } from 'gatsby'
// Step 2: Define your component
const IndexPage = () => {
    return (
        <main>
            <title>TXO Home Page</title>
            <h1>TXO Home Page </h1>
            <Link to="/about">About</Link>
            <p>Hi there! This is TXO Home Page, which is built with Gatsby.</p>
        </main>
    )
}
// Step 3: Export your component
export default IndexPage