var model = {
  init: function () {},
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
    model.init();
    view.init();
  },

  getCats: function () {
    return model.cats;
  }

};

var view = {
  init: function () {

    view.render();

  },

  render: function () {
    var catList = document.getElementById("cat-list");
    // could possibly move this into init
    // and use this.catList so it's accessible from render?
    var display = document.getElementById("display");

    octopus.getCats().forEach(function (cat) {
      var li = document.createElement('li');

      var counter = cat.counter;
      var name = cat.name;
      var src = cat.src;

      li.innerHTML = cat.name;
      catList.appendChild(li);

      li.addEventListener('click', (function (counterCopy, nameCopy, srcCopy) {
        return function () {
          counterCopy += 1;
          document.getElementById("counter").innerHTML = counterCopy;
          document.getElementById("name").innerHTML = nameCopy;
          document.getElementById("cat-image").src = srcCopy;



          var reset = document.getElementById("reset");
          reset.addEventListener('click', function () {
            counterCopy = 0;
            document.getElementById("counter").innerHTML = 0;
            document.getElementById("name").innerHTML = "anything";
            document.getElementById("cat-image").src = "";
          });
          // this needs to be inside the closure too, else the counters change to "0", but any subsequent clicks display a counter that is the stored value
          // but the debugger shows this being run 10+ times before it exits the reset loop??!
        };
        // this means that each time the loop runs, this function DECLARATION is returned


        // but this executes that function declaration immediately

      })(counter, name, src));

    });
  }
};

octopus.init();