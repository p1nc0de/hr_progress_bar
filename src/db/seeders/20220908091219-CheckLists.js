module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('CheckLists', [{
      q1: false,
      q2: false,
      q3: false,
      q4: false,
      q5: false,
      q6: false,
      q7: false,
      q8: false,
      q9: false,
      q10: false,
      q11: false,
      q12: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('CheckLists', null, {});
  },
};
