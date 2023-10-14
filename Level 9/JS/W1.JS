function elements(arr) {
    // Use the filter method to create a new array with elements greater than 10
    return arr.filter(function(element) {
      return element > 10;
    });
  }
  
  // Example usage:
  const originalArray = [5, 12, 8, 15, 3, 20];
  const resultArray = element(originalArray);
  console.log(resultArray); // Output will be [12, 15, 20]
  