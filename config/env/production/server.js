module.exports = ({ env }) => ({
  proxy: true,
  url: env("APP_URL"), // replaces `host` and `port` properties in the development environment
  app: {
    keys: env.array("APP_KEYS"),
  },
  // Add this vite configuration for production
  vite: {
    server: {
      host: true,
      allowedHosts: ["obsidia.life", "www.obsidia.life", "localhost"],
    },
  },
});
