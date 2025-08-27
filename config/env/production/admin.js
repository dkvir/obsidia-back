module.exports = ({ env }) => ({
  url: "/admin",
  serveAdminPanel: true,
  autoOpen: false,
  watchIgnoreFiles: ["./admin", "./admin/**"],
  auth: {
    secret: env("ADMIN_JWT_SECRET"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
  transfer: {
    token: {
      salt: env("TRANSFER_TOKEN_SALT"),
    },
  },
  flags: {
    nps: false,
    promoteEE: false,
  },
});
