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
        defaultValue: false,
      },
      q2: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      q3: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      q4: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      q5: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      q6: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      q7: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      q8: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      q9: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      q10: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      q11: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      q12: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      tim1: {
        type: Sequelize.STRING,
      },
      tim2: {
        type: Sequelize.STRING,
      },
      tim3: {
        type: Sequelize.STRING,
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
