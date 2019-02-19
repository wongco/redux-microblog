// const BASE_API_URL = 'https://wongco-microblog-api.herokuapp.com/api/posts';

const BASE_API_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:5000';

module.exports = { BASE_API_URL };
