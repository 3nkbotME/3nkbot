
function findMatch(inputValue, valuesObject) {
    const objectValues = Object.values(valuesObject);
  
    if (objectValues.includes(inputValue)) {
      return "yes";
    } else {
      return "no";
    }
  }
  
  const myObject = {
    value1: 1,
    value2: 2,
    value3: 3,
    value4: 4,
    value5: 5,
    value6: 6,
    value7: 7,
  };
  
  const inputValue1 = 1;
  const inputValue2 = 2;
  const inputValue3 =3;
  const inputValue4 =5;
  const inputValue5 =6;
  const inputValue6 =7

  
  console.log(findMatch(inputValue1, myObject));
  console.log(findMatch(inputValue2, myObject)); 
  