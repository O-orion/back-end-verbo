'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users', 'birthDate', {
      type: Sequelize.DATE,
      allowNull: true, // ou false, dependendo da sua necessidade
      validate: {
        isDate: {
          msg: "Data de nascimento deve ser uma data válida."
        },
        isBefore: {
          args: new Date().toISOString().split('T')[0],
          msg: "Data de nascimento deve ser uma data no passado."
        }
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'birthDate');
  }
};
