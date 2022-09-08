module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CheckLists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      q1: {
        type: Sequelize.BOOLEAN,
      },
      q2: {
        type: Sequelize.BOOLEAN,
      },
      q3: {
        type: Sequelize.BOOLEAN,
      },
      q4: {
        type: Sequelize.BOOLEAN,
      },
      q5: {
        type: Sequelize.BOOLEAN,
      },
      q6: {
        type: Sequelize.BOOLEAN,
      },
      q7: {
        type: Sequelize.BOOLEAN,
      },
      q8: {
        type: Sequelize.BOOLEAN,
      },
      q9: {
        type: Sequelize.BOOLEAN,
      },
      q10: {
        type: Sequelize.BOOLEAN,
      },
      q11: {
        type: Sequelize.BOOLEAN,
      },
      q12: {
        type: Sequelize.BOOLEAN,
      },
      userName: {
        type: Sequelize.STRING,
      },
      menthorName: {
        type: Sequelize.STRING,
      },
      author_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'UserHrs',
          },
          key: 'id',
        },
      },
      uniqueUrl: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CheckLists');
  },
};
