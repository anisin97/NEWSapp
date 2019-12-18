const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('f59f72ac08824e4e921cd9c69f519ccf');
// To query sources
// All options are optional
newsapi.v2.sources({
  // category: ,
  // language: 'en',
  country: 'in'
},function(err,res){
  if(err)
    console.log(err);
  else{
  // console.log(response);
  module.exports = response;
}
  /*
    {
      status: "ok",
      sources: [...]
    }
  */});
