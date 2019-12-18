const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('f59f72ac08824e4e921cd9c69f519ccf');
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
newsapi.v2.topHeadlines({
  sources: 'bbc-news,the-verge',
  q: 'bitcoin',
  category: 'business',
  language: 'en',
  country: 'us'
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
