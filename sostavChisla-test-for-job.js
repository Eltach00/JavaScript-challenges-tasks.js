
function sostavChisla(massivChisel, chislo) {
	// код писать только внутри данной функции
	 // Сортируем массив чисел в порядке возрастания
  massivChisel.sort((a, b) => a - b);
  
  // Результаты будем сохранять в этом массиве
  const result = []
  
  // Вспомогательная функция для поиска комбинаций
  function findCombinations(current, startIndex, target) {
    if (target === 0) {
      // Нашли комбинацию с заданной суммой
      result.push([...current]);
      return;
    }
    
    for (let i = startIndex; i < massivChisel.length; i++) {
      if (massivChisel[i] > target) {
        // Так как числа упорядочены, если текущее число больше целевой суммы, дальше можно не искать
        break;
      }
      
      if (i > startIndex && massivChisel[i] === massivChisel[i - 1]) {
        // Пропускаем повторяющиеся числа, чтобы избежать дублирования комбинаций
        continue;
      }
      
      current.push(massivChisel[i]);
      findCombinations(current, i + 1, target - massivChisel[i]);
      current.pop();
    }
  }
  
  // Запускаем поиск комбинаций, начиная с пустого текущего массива и индекса 0
  findCombinations([], 0, chislo);
  
  return result;
}

function compareNumericArrays(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false;
  }
  
  arr1 = [...arr1].sort();
  arr2 = [...arr2].sort();
  
  for(let i=0; i<arr1.length; i++) {
    if(arr1[i] !== arr2[i]) {
      return false;
    }
  }
  
  return true;
}

function compareArraysOfNumericArrays(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false;
  }
  
  for(let el1 of arr1) {
    if(arr2.findIndex(el2 => compareNumericArrays(el1, el2)) < 0) {
      return false;
    }
  }
  
  return true;
}

runTests();

function runTests() {
    const tests = [
    {
      chislo: 5, 
      massivChisel: [8, 2, 3, 4, 6, 7, 1],
      result: [[2, 3], [4, 1]]
    },
    {
      chislo: 99, 
      massivChisel: [8, 2, 3, 4, 6, 7, 1],
      result: []
    },
    {
      chislo: 8, 
      massivChisel: [1, 2, 3, 4, 5, 6, 7, 8],
      result: [[1, 3, 4], [1, 2, 5], [3, 5], [2, 6], [1, 7], [8]]
    },
    {
      chislo: 8, 
      massivChisel: [7, 8, 3, 4, 5, 6, 1, 2],
      result: [[1, 3, 4], [1, 2, 5], [3, 5], [2, 6], [1, 7], [8]]
    },
    {
      chislo: 15, 
      massivChisel: [7, 8, 3, 4, 5, 6, 1, 2],
      result: [[1, 2, 3, 4, 5], [2, 3, 4, 6], [1, 3, 5, 6], [4, 5, 6], [1, 3, 4, 7], [1, 2, 5, 7], [3, 5, 7], [2, 6, 7], [1, 2, 4, 8], [3, 4, 8], [2, 5, 8], [1, 6, 8], [7, 8]]
    },  
    
  ];

  let errors = 0;
  for(const test of tests) {
    let result;
    try{
      result = sostavChisla(test.massivChisel, test.chislo);
      
      if(!compareArraysOfNumericArrays(
          result, 
          test.result)
      ) {
        errors++;
        console.log('--------------------------------------------')
        console.log("failed for test", test, "Got result", result);
      }
    } catch(e) {
      errors++;
      console.log("failed for", test, 'exception', e.message);
    }    
  }

  if(errors === 0) {
    console.log('checkStringForBracects test successfuly completed');
  } else {
    console.log(`checkStringForBracects test failed with ${errors} errors`);
  }
}

