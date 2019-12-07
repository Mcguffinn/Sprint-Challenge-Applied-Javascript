// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then( response =>{
    console.log(response.data);
    Object.values(response.data.articles).forEach(item =>{
        console.log(item);
        item.forEach(items =>{
            createArt(items.headline, items.authorName, items.authorPhoto)
        })
    })
})


function createArt(authLine, authName, authPhoto){

    const cards = document.createElement('div');
    const headline = document.createElement('div');
    const auth = document.createElement('div');
    const imgDiv = document.createElement('div');
    const img = document.createElement('img');
    const spanner = document.createElement('span');

    cards.classList.add('card');
    headline.classList.add('headline');
    auth.classList.add('author');
    imgDiv.classList.add('img-container');

    cards.appendChild(headline);
    cards.appendChild(auth);
    auth.appendChild(imgDiv);
    imgDiv.append(img);
    auth.appendChild(spanner);

    headline.innerText = authLine;
    spanner.textContent = 'By: ' + authName;
    img.src = authPhoto;

    document.querySelector('.cards-container').appendChild(cards);
}