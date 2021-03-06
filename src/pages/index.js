// Step 1: Import your component
import * as React from 'react'

//using Layout instead of Link
//import { Link } from 'gatsby'
import Layout from '../components/layout'
// Step 2: Define your component
const IndexPage = () => {
    return (
        <Layout pageTitle="TXO Home Page">
            <p>Hi there! This is TXO Home Page, which is built with Gatsby.</p>
        </Layout>
    )
}
// Step 3: Export your component
export default IndexPage