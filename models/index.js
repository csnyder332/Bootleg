const user = require('./user');
const posts = require('./posts');
user.hasMany(posts, {
  foreignKey: 'user_id',
});

posts.belongsTo(user, {
  foreignKey: 'user_id',
});

module.exports = { user, posts};
