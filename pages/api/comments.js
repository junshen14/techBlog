// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GraphQLClient, gql } from 'graphql-request'

export default async function comments(req, res) {
  const endpoint =
    'https://api-ap-south-1.graphcms.com/v2/cl1w91vcy0iak01z8g26w2zfh/master'

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization:
        'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTI2ODY2NTIsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmdyYXBoY21zLmNvbS92Mi9jbDF3OTF2Y3kwaWFrMDF6OGcyNncyemZoL21hc3RlciIsImh0dHBzOi8vbWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6IjlhMTVjNDEyLTBhZGUtNDc0ZS05ZTdiLWQyZmVlNDg3ZmNmZCIsImp0aSI6ImNsMzhleW1xeTk3M3YwMXo4ZjVlNTFocnIifQ.EQvhCfV1OWtA1KtgAmH0KANzteyXo-2qlQoEreMwOdLekETv41wJRADacU9r0q5fIGL2lv6PODS9tI-lYX54mxOMc5YygBlACv9Io-Axh03X9hFvuhpklhz3D0IVHhX2fk0_32OHmmXq6CJFCqspWtISx5KW5XJBBq8Hnzci5KW4lwwNmcXYww-I6ABucpvupdhO-CL-H2Kc72_Rfms4HW_mqJziESwo5-Kyti7pcGHoi-TKc2Y4E_YAp9Z2sJsV_BhyIis1ugTyafwCm3d748TeNg2JLPOVfGuWNEgCcRAt8f5bExuIjh9fd8mTmBbma646Ot_VGQF8ghXgir9SOhqofxMXn4J68U0vxV5W91c_ejteNyef3FFEa9E5pCSqqE64CEljqpywVbcs4WNXbghx5R2JEvMymo9zW65Ilt3PV-XO92TLnuJUYhIqlIdINhGJ0AXO2v_rGehNaqkpjcK4hhaWiwckml3uq2yWROiQlFN2Yppz_M87qjilGjFOV6gYr-IIJ6v_IsouJZm7QQv6Fg_IZaFpEtiKJS88TDnkQElydzcBlavNfUPWLHS_lyYXHLS22hdjrx_GeiZmvaEK3oyexMGFsqq8WszzhaTE0z6rACfeKJvp8ksAUdSS2xAUquMVSOvxDIRlwAOoLKrhRubnHslLCOhL3VZfESs',
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
