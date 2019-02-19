let BASE_API_URL =
  process.env.BASE_API_URL || 'http://localhost:5000/api/posts';

console.log(BASE_API_URL);

module.exports = { BASE_API_URL };
