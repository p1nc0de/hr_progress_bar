const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserHr extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.CheckList, { foreignKey: 'author_id' });
    }
  }
  UserHr.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    passwd: DataTypes.TEXT,
    email: DataTypes.TEXT,
    admin: DataTypes.BOOLEAN,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'UserHr',
  });
  return UserHr;
};
