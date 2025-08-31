fetch('./health_article.json')
  .then(response => response.json())
  .then(data => {
    const articles = data.articles;
    const articlesDiv = document.getElementById('articles');

    articles.forEach(article => {
      const articleDiv = document.createElement('div');
      articleDiv.classList.add('article');

      const title = document.createElement('h2');
      title.textContent = article.title;

      const description = document.createElement('p');
      description.textContent = article.description;

      const waysHeader = document.createElement('h3');
      waysHeader.textContent = 'Ways to Achieve:';

      const waysList = document.createElement('ul');
      article.ways_to_achieve.forEach(way => {
        const listItem = document.createElement('li');
        listItem.textContent = way;
        waysList.appendChild(listItem);
      });

      const benefitsHeader = document.createElement('h3');
      benefitsHeader.textContent = 'Benefits:';

      const benefitsList = document.createElement('ul');
      article.benefits.forEach(benefit => {
        const listItem = document.createElement('li');
        listItem.textContent = benefit;
        benefitsList.appendChild(listItem);
      });

      articleDiv.appendChild(title);
      articleDiv.appendChild(description);
      articleDiv.appendChild(waysHeader);
      articleDiv.appendChild(waysList);
      articleDiv.appendChild(benefitsHeader);
      articleDiv.appendChild(benefitsList);

      articlesDiv.appendChild(articleDiv);
    });
  })
  .catch(error => {
    console.error("Failed to load JSON:", error);
  });