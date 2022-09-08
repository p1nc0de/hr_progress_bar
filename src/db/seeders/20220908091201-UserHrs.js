module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('UserHrs', [{
      firstName: 'Иван',
      lastName: 'Иванов',
      passwd: '12345',
      email: '123@mail.ru',
      admin: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      firstName: 'Андрей',
      lastName: 'Смирнов',
      passwd: 'qwerty',
      email: 'qwer@mail.ru',
      admin: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      firstName: 'Алексей',
      lastName: 'Волков',
      passwd: 'zxcv1234',
      email: 'zxc@mail.ru',
      admin: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('UserHrs', null, {});
  },
};
