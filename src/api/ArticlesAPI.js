const articlieAPIURL = 'http://localhost:3001/api/articles'

const fetchArticleByID =  async (articleID) => {
  let response = await fetch(articlieAPIURL + `/${articleID}`);
  let articleData = await response.json();
  return articleData;
}

const fetchArticles = async (filters = null) => {
  let response = await fetch(filters ? articlieAPIURL + `?filter=${filters}` : articlieAPIURL);
  let matchingArticles = await response.json();
  return matchingArticles;
}

const fetchArticlesBySection = async (section) => {
  let filter = `{"where":{"section":"${section}"}}`;
  return fetchArticles(filter);
}

const searchArticles = async (text) => {
  let filter = `{"where":{"title":{"ilike":"${text}"}}}`;
  return fetchArticles(filter);
}

const addArticle = async (articleObject, token) => {
  return await fetch('http://localhost:3001/api/articles', {
    headers: {
      'Authorization': token,
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(articleObject)
  });
}

export default {
  fetchArticleByID: fetchArticleByID,
  fetchArticles: fetchArticles,
  fetchArticlesBySection: fetchArticlesBySection,
  searchArticles: searchArticles,
  addArticle: addArticle,
}
