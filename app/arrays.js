exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    return arr.reduce(function (a, b) { return a+b;});
  },

  remove : function(arr, item) {
      return arr.filter(function(el) {
          return (el === item ? false : true);
      });
  },

  removeWithoutCopy : function(arr, item) {
    while (arr.indexOf(item) !== -1) {
        arr.splice(arr.indexOf(item), 1);
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
      arr.splice(arr.length - 1, 1);
      return arr;
  },

  prepend : function(arr, item) {
    arr.reverse();
    arr.push(item);
    arr.reverse();
    return arr;
  },

  curtail : function(arr) {
      arr.shift();
      return arr;
  },

  concat : function(arr1, arr2) {
      return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
  },

  count : function(arr, item) {
      return arr.filter(function (el) {
          return (el === item ? true : false);
      }).length;
  },

  duplicates : function(arr) {
      var dups = [];
      return arr.filter(function (el, i, arr) {
          return (arr.indexOf(el) !== arr.lastIndexOf(el) && i === arr.indexOf(el));
      });
  },

  square : function(arr) {
      return arr.map(function (el) {
          return (el * el);
      });
  },

  findAllOccurrences : function(arr, target) {
      var occurances = [];
      
      for (var count = 0; count < arr.length; count++) {
          if (arr[count] === target) {
              occurances.push(count);
          } 
      }
      
      return occurances;
  }
};
