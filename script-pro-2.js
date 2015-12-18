var model = {
  currentCat: 0,
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

    model.currentCat = model.cats[1];

    listView.init();
    displayView.init();



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
  incrementCounter: function (cat) {
    model.currentCat.counter++;
    // I think this accesses the closure – "catCopy", because cat[i].counter remains zero

    cat.counter++;
    // i think this captures the closure too, but the actual data...?


    displayView.render();
    // to refresh counter
  },
  
  updateCurrentCat: function () {
    model.currentCat.name = document.getElementById("cat-name-label").value;
    model.currentCat.src = document.getElementById("cat-src-label").value;
    model.currentCat.counter = document.getElementById("counter-label").value;
    displayView.render();
  }

};



var listView = {
  init: function () {

    this.listElem = document.getElementById("cat-list");

    this.render();


  },

  render: function () {

    var cats = octopus.getCats();
    var newItem;

    cats.forEach(function (cat) {
      newItem = document.createElement('li');
      newItem.textContent = cat.name;

      newItem.addEventListener('click', (function (catCopy) {
        return function () {
          //          console.log("hello");
          octopus.setCurrentCat(catCopy);
          // FM, left out catcopy!!!!

          octopus.incrementCounter(catCopy);
          // gotta call it as a function!!
          // I'm using increment here, instead of picture
          // If I was using picture, then I wouldn't be able to use catCopy

        };
      })(cat));

      document.getElementById("cat-list").appendChild(newItem);
      // not sure why "this" wouldn't work here (set to Window instead)

    });

  }
};



var displayView = {
  init: function () {

    this.displayElem = document.getElementById("display");

    this.catName = document.getElementById("cat-name");
    this.catNameLabel = document.getElementById("cat-name-label");

    this.counter = document.getElementById("counter");
    this.counterLabel = document.getElementById("counter-label");

    this.catImage = document.getElementById("cat-image");
    this.catImageLabel = document.getElementById("cat-src-label");

    this.admin = document.getElementById("admin");
    this.save = document.getElementById("save");
    this.cancel = document.getElementById("cancel");
    this.other = document.getElementById("other-stuff");

    this.render();





  },

  render: function () {
    
    this.other.style.display = "none";




    var currentCat = octopus.getCurrentCat();
    // HAVE to execute function, else it wil return a freaking function, and not an object

    this.catName.textContent = currentCat.name;
    this.catNameLabel.value = currentCat.name;

    this.counter.textContent = currentCat.counter;
    this.counterLabel.value = currentCat.counter;


    this.catImage.src = currentCat.src;
    // can't use catCopy, cos this is in a different **closure**
    this.catImageLabel.value = currentCat.src;


    // PRO additions
    this.admin.addEventListener('click', function () {
      var x = document.getElementById("other-stuff");
      x.style.display = (x.style.display != "none" ? "none" : '');
    });

    this.cancel.addEventListener('click', function () {
      var x = document.getElementById("other-stuff");
      x.style.display = (x.style.display != "none" ? "none" : '');
    });
    
    this.save.addEventListener('click', function () {
      octopus.updateCurrentCat();
    });


  }
};

octopus.init();