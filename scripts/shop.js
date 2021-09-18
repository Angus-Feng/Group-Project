// List of Bakery Items 
const bakeryItems = [
  {
    id: 0,
    type: "cakes",
    imgUrl: "../images/blackberry-cake.jpeg",
    title: "vanila black berry",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum numquam magni sed voluptas delenitiomnis quod amet.",
    portion: "4-6",
    price: 40
  },
  {
    id: 1,
    type: "cakes",
    imgUrl: "../images/rasberry.jpeg",
    title: "berry festival",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum numquam magni sed voluptas delenitiomnis quod amet.",
    portion: "3-4",
    price: 30
  },
  {
    id: 2,
    type: "cakes",
    imgUrl: "../images/chocolate-moka-cream.jpeg",
    title: "chocolate moka cream",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum numquam magni sed voluptas delenitiomnis quod amet.",
    portion: "4-6",
    price: 40
  },
  {
    id: 3,
    type: "cakes",
    imgUrl: "../images/oreo-chocolate.jpeg",
    title: "oreo chocolate",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum numquam magni sed voluptas delenitiomnis quod amet.",
    portion: "3-4",
    price: 30
  },
  {
    id: 4,
    type: "cakes",
    imgUrl: "../images/blueberry-cream.jpeg",
    title: "blueberry walnut",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum numquam magni sed voluptas delenitiomnis quod amet.",
    portion: "3-4",
    price: 35
  },
  {
    id: 5,
    type: "cakes",
    imgUrl: "../images/cocoa-cheese.jpeg",
    title: "cocoa cheese",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum numquam magni sed voluptas delenitiomnis quod amet.",
    portion: "4-6",
    price: 40
  }
];

window.onload = e => {

  // loop through the bakery items then display 
  const displayItems = items => {
    const itemList = document.getElementById('shop-main-content');
    const itemHtml = items.map(item => {
      return (`
        <li class="display-flex shop-item-container">
          <a href="#" class="shop-list-item">
            <img class="shop-img" src="${item.imgUrl}">
            <div class="shop-product-adjusting">
              <h2 class="shop-product-header uppercase">${item.title}</h2>
              <p>${item.description}</p>
              <p>${item.portion} PEOPLE</p>
              <p>$${item.price}</p>
            </div>
          </a>
        </li>
      `);
    }).join('');

    itemList.innerHTML = itemHtml;
  };
  
  displayItems(bakeryItems);

  const searchItems = e => {
    // stop event bubbling 
    e.stopPropagation();

    // get input values from the search box
    const searchVal = searchBox.value.toLowerCase();
    
    // filter item with the search value
    const filteredItems = bakeryItems.filter(item => {
      return item.title.toLowerCase().includes(searchVal);
    });

    displayItems(filteredItems);
  };

  const searchBox = document.getElementById('shop-search-box');
  const button = document.getElementById('shop-search-button');
  const modal = document.getElementById('shop-modal-container');
  

  // add event handler on search box
  searchBox.addEventListener('keyup', e => {
    
    // stop event bubbling
    e.stopPropagation();

    if (e.key === 'Enter') {
      e.preventDefault();
        
    } else {
      searchItems(e); 
    }
  });

  // add event handler on search button
  button.addEventListener('click', e => {
    e.preventDefault();
    searchItems(e);
  });

  /*********
   * Modal 
   *********/
  
  // add event handler on list item 
  document.getElementById('shop-main-content').addEventListener('click', e => {
    e.preventDefault();

    if (e.currentTarget && e.target.closest('li').matches('li.shop-item-container')) {
      modal.classList.remove('hidden');
    }
  });

  // close modal when outer modal area clicked
  window.addEventListener('click', e => {
    
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });
};