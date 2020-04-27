const https = require('https');

function fetch(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let result = '';
        res.on('data', (chunk) => {
          result += chunk;
        });
        res.on('end', () => {
          resolve(JSON.parse(result));
        });
      })
      .on('error', (error) => {
        reject(error);
      });
  });
}

async function getAuthorHistory(author) {
  let history = [];
  try {
    let auth = await fetch(
      `https://jsonmock.hackerrank.com/api/article_users?username=${author}`
    );
    auth.data[0].about && history.push(auth.data[0].about);
    let articles = await fetch(
      `https://jsonmock.hackerrank.com/api/articles?author=${author}`
    );
    articles.data.forEach((art) => {
      if (art.title) {
        history.push(art.title);
      } else if (art.story_title) {
        history.push(art.story_title);
      }
    });
    for (let i = articles.data.page + 1; i <= articles.data.total_pages; i++) {
      let newArticle = await fetch(
        `https://jsonmock.hackerrank.com/api/articles?author=${author}`
      );
      newArticle.data.forEach((art) => {
        if (art.title) {
          history.push(art.title);
        } else if (art.story_title) {
          history.push(art.story_title);
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
  console.log(history.join('\n'));
}

getAuthorHistory('epaga');
