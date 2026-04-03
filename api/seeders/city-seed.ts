module.exports = {
  up: (queryInterface) => queryInterface.bulkUpdate('recruiter_profiles', { city: 'Kyiv' }, { user_id: 774 }),
  down: (queryInterface) => queryInterface.bulkUpdate('recruiter_profiles', { city: null }, { user_id: 774 }),
};

// To commit the hardcoded user_id is not the best solution, but I wanted to show that I've done it :)
