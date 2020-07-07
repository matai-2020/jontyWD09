import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function MyFiles({ data }) {
  console.log(data)
  return (
    <Layout>
       <div>
        <h1>My Site's Files and All That</h1>
        <table>
          <thead>
            <tr>
             <th>Name</th>
              <th>Birth Time</th>
              <th>Modified Time</th>
              <th>Relative Path</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.name}</td>
                <td>{node.birthTime}</td>
                <td>{node.modifiedTime}</td>
                <td>{node.relativePath}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          modifiedTime
          relativePath
          birthTime
          name
        }
      }
    }
  }`