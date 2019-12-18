const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('f59f72ac08824e4e921cd9c69f519ccf');
// To query /v2/everything
// You must include at least one q, source, or domain
newsapi.v2.everything({
  q: 'bitcoin',
  sources: 'bbc-news,the-verge',
  domains: 'bbc.co.uk, techcrunch.com',
  from: '2019-12-13',
  to: '2019-12-12',
  language: 'en',
  sortBy: 'relevancy',
  page: 2
}).then(response => {
  console.log(response);
  module.exports = response;
  /*
    {
      status: "ok",
      articles: [...]
    }
  */
});
