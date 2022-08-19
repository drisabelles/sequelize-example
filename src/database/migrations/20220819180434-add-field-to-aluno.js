'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn("aluno", "codigocurso", {
    type: Sequelize.INTEGER,
    references: { model: 'curso', key: 'id'},
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
    allowNull:true
  }),
 
  down: (queryInterface) => queryInterface.removeColumn('aluno', 'codigocurso')
};