module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('recruiter_profiles', 'city', {
    type: Sequelize.STRING(255),
    allowNull: true,
    defaultValue: null,
  }),
  down: (queryInterface) => queryInterface.removeColumn('recruiter_profiles', 'city'),
};
