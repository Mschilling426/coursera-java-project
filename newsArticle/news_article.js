var xhr = new XMLHttpRequest();
var url = './news_article.json'; // Make sure this path is correct

xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function() {
  var articles = xhr.response.articles;
  var articlesDiv = document.getElementById('news');

  articles.forEach(function(article) {
    var articleDiv = document.createElement('div');
    articleDiv.classList.add('news-article');

    var title = document.createElement('h2');
    title.textContent = article.title;

    var description = document.createElement('p');
    description.textContent = article.description;

    var highlightsHeader = document.createElement('h3');
    highlightsHeader.textContent = 'Highlights:';

    var highlightsList = document.createElement('ul');
    article.highlights.forEach(function(item) {
      var listItem = document.createElement('li');
      listItem.textContent = item;
      highlightsList.appendChild(listItem);
    });

    var impactHeader = document.createElement('h3');
    impactHeader.textContent = 'Impact:';

    var impactList = document.createElement('ul');
    article.impact.forEach(function(item) {
      var listItem = document.createElement('li');
      listItem.textContent = item;
      impactList.appendChild(listItem);
    });

    articleDiv.appendChild(title);
    articleDiv.appendChild(description);
    articleDiv.appendChild(highlightsHeader);
    articleDiv.appendChild(highlightsList);
    articleDiv.appendChild(impactHeader);
    articleDiv.appendChild(impactList);

    articlesDiv.appendChild(articleDiv);
  });
};

xhr.onerror = function() {
  console.error("Failed to load news articles.");
};

xhr.send();