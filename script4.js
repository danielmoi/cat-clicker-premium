var view = {
  init: function () {

    view.render();

  },

  render: function () {
    var catList = document.getElementById("cat-list");
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
        };
        // this means that each time the loop runs, this function DECLARATION is returned


      })(counter, name, src));
      // but this executes that function declaration immediately

    });
  }
};

//

var view = {
  init: function () {

    view.render();

  },

  render: function () {
    var catList = document.getElementById("cat-list");
    var display = document.getElementById("display");

    octopus.getCats().forEach(function (cat) {
      var li = document.createElement('li');

      var counter = cat.counter;
      var name = cat.name;
      var src = cat.src;

      li.innerHTML = cat.name;
      catList.appendChild(li);

      li.addEventListener('click', function () {
        return (function (counterCopy, nameCopy, srcCopy) {
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
        })(counter, name, src);
        // this means that each time the loop runs, this function DECLARATION is returned


        // but this executes that function declaration immediately

      });
    });
  }
};

// this doesn't work (trying to immediately execute the closure)