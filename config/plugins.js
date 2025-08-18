module.exports = ({ env }) => ({
  graphql: {
    enabled: true,
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: true, // Enable playground in production
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
        introspection: true, // Enable introspection in production
        playground: {
          settings: {
            "request.credentials": "same-origin",
          },
        },
      },
    },
  },
});
