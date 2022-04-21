import React from 'react'
import { request, gql } from 'graphql-request'

const graphAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getPost = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            category {
              name
              slug
            }
          }
        }
      }
    }
  `

  const result = await request(graphAPI, query)
  console.log(result.postsConnection.edges)
  return result.postsConnection.edges
}
