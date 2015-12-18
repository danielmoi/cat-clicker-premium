var model = {
  currentCat: null,
  cats: [
    {
      name: "Hank",
      src: "img/hank.jpg",
      counter: 0
  },
    {
      name: "Sally",
      src: "img/sally.jpg",
      counter: 0
  },
    {
      name: "Sam",
      src: "img/sam.jpg",
      counter: 0
  },
    {
      name: "Tom",
      src: "img/tom.jpg",
      counter: 0

  },
    {
      name: "Woolly",
      src: "img/woolly.jpg",
      counter: 0
  },
    {
      name: "Tulip",
      src: "img/tulip.jpg",
      counter: 0
  }
  ]
};

var octopus = {
  init: function () {

    model.currentCat = model.cats[0];

    catListView.init();
    catDisplayView.init();
  },

  getCats: function () {
    return model.cats;
  },

  getCurrentCat: function () {
    return model.currentCat;
  },
  
  setCurrentCat: function (cat) {
    model.currentCat = cat;
    
  },
  incrementCounter: function () {
    model.currentCat.counter++;
    catDisplayView.render();
  }

};

var catListView = {

  init: function () {
    this.catListElem = document.getElementById("cat-list");

    this.render();
  },

  render: function () {
    // return the array object "cats"
    var cats = octopus.getCats();
    var newListItem;

    cats.forEach(function (cat) {
      newListItem = document.createElement('li');
      newListItem.textContent = cat.name;
      
      newListItem.addEventListener('click', (function (catCopy) {
        return function () {
          octopus.setCurrentCat(catCopy);
          catDisplayView.render();
        };
      })(cat));
      
      this.catListView.catListElem.appendChild(newListItem);
      
      

    });




  }

};

var catDisplayView = {

  init: function () {
    this.catDisplayElem = document.getElementById("display");
    // this is catDisplayView (?)
    
    this.catName = document.getElementById("cat-name");
    this.catCounter = document.getElementById("counter");
    this.catImage = document.getElementById("cat-image");

    this.catImage.addEventListener('click', function () {
      octopus.incrementCounter();
    });

    this.render();
  },

  render: function () {
    var currentCat = octopus.getCurrentCat();
    
    this.catName.textContent = currentCat.name;
    this.catImage.src = currentCat.src;
    this.catCounter.textContent = currentCat.counter;

  }









};

octopus.init();