module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
  // Add this vite configuration
  vite: {
    server: {
      host: true,
      allowedHosts: ["back.obsidia.life", "www.back.obsidia.life", "localhost"],
    },
  },
});
