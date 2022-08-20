// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GraphQLClient, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export default async function comments(req, res) {
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  })
  const query = gql`
    mutation CreateComment(
      $name: String!
      $email: String!
      $comment: String!
      $slug: String!
      $commentId: String!
    ) {
      createComment(
        data: {
          name: $name
          email: $email
          comment: $comment
          commentId: $commentId
          post: { connect: { slug: $slug } }
        }
      ) {
        id
      }
      publishComment(where: { commentId: $commentId }, to: PUBLISHED) {
        id
      }
    }
  `

  try {
    const result = await graphQLClient.request(query, {
      name: req.body.name,
      email: req.body.email,
      comment: req.body.comment,
      slug: req.body.slug,
      commentId: req.body.commentId,
    })

    return res.status(200).send(result)
  } catch (error) {
    //console.log(error)
    return res.status(500).send(error)
  }
}
