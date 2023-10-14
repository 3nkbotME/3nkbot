(D)
function firstCharacter(arr) {

    const firstChars = [];

    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
  
      if (typeof element === 'string' && element.length > 0) {
        firstChars.push(element[0]);
      } else {
        firstChars.push(null);
      }
    }
  
    return firstChars;
  }
  

  const myArray = ["apple", "banana", "cherry", 123, "", "grape"];
  const result = firstCharacter(myArray);
  console.log(result);
  
  [ 'a', 'b', 'c', null, null, 'g' ]
