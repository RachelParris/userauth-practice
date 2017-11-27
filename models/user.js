module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [6,20]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return User;
}
