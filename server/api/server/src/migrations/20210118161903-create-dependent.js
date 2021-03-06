module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Dependents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      departmentId: {
        type: Sequelize.INTEGER,
        foreignKey:true
      },
      code: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },
    {
      schema: 'koncar'                      // default: public, PostgreSQL only.
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Dependents');
  }
}