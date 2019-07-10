/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
function createMenu(menuItems) {
  // define new elements
  
  const menu = document.createElement('div');
  const ul = document.createElement('ul');

  menu.appendChild(ul)
  menu.classList.add('menu')

  const menuBtn = document.querySelector('.menu-button')
  menuBtn.addEventListener('click', event => {
  console.log('button clicked', event.target)
  menu.classList.toggle('menu--open')})

  var numberOfListItems = menuItems.length;

  for (var i = 0; i < numberOfListItems; ++i) {
      // create an item for each one
      var listItem = document.createElement('li');

      // Add the item text
      listItem.textContent = menuItems[i];

      // Add listItem to the listElement
      ul.appendChild(listItem);
  }

  return menu;
}

const header = document.querySelector('.header')
header.appendChild(createMenu(menuItems));

