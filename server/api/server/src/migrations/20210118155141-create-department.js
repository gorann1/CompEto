module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Departments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      centerId: {
        type: Sequelize.INTEGER,
        foreignKey: true
      },

      code: {
        type: Sequelize.INTEGER,
        allowNull: false
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
      },
      
    },
    {
      schema: 'koncar'                      // default: public, PostgreSQL only.
    });
   
  },
  down: ( queryInterface ) => {
    queryInterface.dropTable('Centers');
  }
};

/* options['schema'] = 'dbo'; */
