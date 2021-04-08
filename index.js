const findRecursionNumber = function(array){
    let result = 0;
    for(let i = 0; i < array.length; i++){
      for(let j = i + 1; j < array.length; j++){
        if(array[i] === array[j]){
          if(result === 0){
            result = j;
          };
          if(result > 0 && j < result){
            result = j;
          };
        };
      };
    };
    if(result === 0){
      return undefined;
    } else {
      return array[result]
    }
  }; //O(n^2)
  
  const findRecursionNumber2 = function(array){
    let map = {};
    for(let i = 0; i < array.length; i++){
      if(map[array[i]] === undefined){
        map[array[i]] = array[i]
      } else {
        return array[i]
      }
    }
  };
  // O(n)
  
  const testArray1 = [2,5,1,2,3,5,1,2,4];
  //Should Return 2
  const testArray2 = [2,1,1,2,3,5,1,2,4];
  //Should Return 1
  const testArray3 = [2,3,4,5];
  //Should Return undefined
  
  const resultArray1 = findRecursionNumber(testArray1);
  const resultArray2 = findRecursionNumber(testArray2);
  const resultArray3 = findRecursionNumber(testArray3);
   
  
  if(resultArray1 === 2){
    console.log('Test 1 Passed');
  };
  
  if(resultArray2 === 1){
    console.log('Test 2 Passed');
  };
  
  if(resultArray3 === undefined){
    console.log('Test 3 Passed');
  };