module.exports = ({ env }) => ({
  proxy: true,
  url: env("APP_URL"), // Make sure this is set to https://obsidia.life
  app: {
    keys: env.array("APP_KEYS"),
  },
});
