// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const main = document.createElement('div'),
        date = document.createElement('span'),
        title = document.createElement('h3'),
        temp = document.createElement('span');

    main.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp')

    main.appendChild(date);
    main.appendChild(title);
    main.appendChild(temp);

    date.innerText = "January 17, 2020";
    title.textContent = "Lambda Times";
    temp.textContent = "70";

    document.querySelector('.header-container').appendChild(main);
}

Header();
