var x = [5, 15, 3, 20, 8, 12, 9];
var x = tariq(x);
function tariq(arr) {
    var result = [];
  
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > 10) {
        result.push(arr[i]);
      }
    }
  
    return result;
  }
  
  function tariq2(arr) {
    var result = [];
  
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        result.push(arr[i]);
      }
    }
  
    return result;
  }
  
  var x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var x = tariq3(x);


//D

  function FirstC(arr) {
    var result = [];
  
    for (var i = 0; i < arr.length; i++) {
        result.push(arr[0]);
      }
    }
  
    return result;
  
  var x = ['apple', 'banana', 'cherry', 'date'];
  var firstChara= getFirstC(x);
  
  
