  module.exports = {
    port: process.env.PORT || 3000,
    db: {
      database: process.env.DB_NAME || "user_db",
      username: process.env.DB_USER || "root",
      password: process.env.DB_PASS || "root",
      options: {
        host: "127.0.0.1",
        dialect: "mysql"
      }
    }
  }
