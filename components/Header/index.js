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
    const main = document.createElement('div');
    const dater = document.createElement('span');
    const titleTxt = document.createElement('h1');
    const tempTxt = document.createElement('span');

    main.classList.add('header');
    dater.classList.add('date');
    tempTxt.classList.add('temp');

    main.appendChild(dater);
    main.appendChild(titleTxt);
    main.appendChild(tempTxt);

    dater.innerText = "SMARCH 28, 2019";
    titleTxt.textContent = "Lambda Times";
    tempTxt.textContent = "98°";

    document.querySelector('.header-container').appendChild(main);
}

Header();
