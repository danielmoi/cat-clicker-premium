var view = {
  init: function () {

    view.render();

  },

  render: function () {
    var catList = document.getElementById("cat-list");
    var display = document.getElementById("display");

    octopus.getCats().forEach(function () {
      var li = document.createElement('li');

      var counter = model.cats[i].counter;
      // there is no [i] 
      // i is not defined
      
      // octupus.getCats() actually returns the "cat" property itself
      // ie. we are given an array object to play with

      var name = model.cats[i].name;
      var src = model.cats[i].src;

      li.innerHTML = i.name;
      catList.appendChild(li);
    });
  }
};

// V2
var view = {
  init: function () {

    view.render();

  },

  render: function () {
    var catList = document.getElementById("cat-list");
    var display = document.getElementById("display");

    octopus.getCats().forEach(function (i) {
      var li = document.createElement('li');

      var counter = [i].counter;
      // doesn't throw an error
      // but "undefined" is printed onto the screen
      // i represents each element in the array
      // going numerically, because arrays are index: value
      // where "value" is an object (with 3 cat properties)

      var name = [i].name;
      var src = [i].src;

      li.innerHTML = i.name;
      catList.appendChild(li);
    });
  }
};

// V3
var view = {
  init: function () {

    view.render();

  },

  render: function () {
    var catList = document.getElementById("cat-list");
    var display = document.getElementById("display");

    octopus.getCats().forEach(function (cat) {
      // "cat" is actually 1 of 3 parameters that can be used
      // element_value ("cat", which is provided; is "the 1st cat object", so cat.name == "Hank"
      // element_index (the number from 0, of each cat object)
      // array (the name of the array)
      // need to figure this out properly
      var li = document.createElement('li');

      var counter = cat.counter;
      var name = cat.name;
      var src = cat.src;

      li.innerHTML = cat.name;
      catList.appendChild(li);
    });
  }
};