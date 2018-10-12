
let newsContainer = document.getElementById('newsContainer')

let newsItems = news.articles.map(function(article){
  return `<li>
            <div class="titleArth">
            <h2 id="articleTitle"> <a href="${article.url}">${article.title}</a></h2>
            <p id="articleAuthor">By: ${article.author}</p>
            </div>
            <div>
              <img src="${article.urlToImage}" />
              <h3 id="articleDescription">${article.description}</h3>
            </div>
            <h4 id="articlePublish">${article.publishedAt}</h4>
         </li>
         `
})
newsContainer.insertAdjacentHTML('beforeend',newsItems.join(''))
