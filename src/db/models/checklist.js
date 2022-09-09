const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CheckList extends Model {
    /**
     * 
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.UserHr, { foreignKey: 'author_id' });
    }
  }
  CheckList.init({
    q1: DataTypes.BOOLEAN,
    q2: DataTypes.BOOLEAN,
    q3: DataTypes.BOOLEAN,
    q4: DataTypes.BOOLEAN,
    q5: DataTypes.BOOLEAN,
    q6: DataTypes.BOOLEAN,
    q7: DataTypes.BOOLEAN,
    q8: DataTypes.BOOLEAN,
    q9: DataTypes.BOOLEAN,
    q10: DataTypes.BOOLEAN,
    q11: DataTypes.BOOLEAN,
    q12: DataTypes.BOOLEAN,
    tim1: DataTypes.STRING,
    tim2: DataTypes.STRING,
    tim3: DataTypes.STRING,
    userName: DataTypes.STRING,
    menthorName: DataTypes.STRING,
    author_id: DataTypes.INTEGER,
    uniqueUrl: DataTypes.TEXT,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'CheckList',
  });
  return CheckList;
};
