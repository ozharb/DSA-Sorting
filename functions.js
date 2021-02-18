function merge(arr1, arr2){
    let result = [];
    let i = 0;
    let j = 0;
        while(i < arr1.length && j < arr2.length){
          if(arr1[i]<arr2[j]){
            result.push(arr1[i])
            i++
          } else {
            result.push(arr2[j])
            j++
          }
        
        } 
       if(arr1.length > i){
        result =  result.concat(arr1.slice(i))
        } else if (arr2.length > j){
         result = result.concat(arr2.slice(j))
        }
    return result;
  
  }
  
  
  function mergeSort(arr){
    if(arr.length <= 1){
      return arr;
    }
    let mid = Math.floor((arr.length)/2)
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left,right)
  
  }
  function swap(arr, i, j){
      let temp = arr[i];
       arr[i] = arr[j];
        arr[j] = temp;
  }
  function pivot(arr, start = 0, end = arr.length-1){
      let swapIdx = start
      let pivot = arr[start]
      for(let i = start; i< arr.length; i++){
          if(pivot>arr[i]){
              swapIdx++
              swap(arr, swapIdx, i);
          }
      }
      swap(arr, start, swapIdx)
      return swapIdx

  }
  function qSort(arr, left = 0, right = arr.length-1){
    if(left<right){
       let pivotIdx = pivot(arr, left, right)
       qSort(arr, left, pivotIdx-1)
       qSort(arr, pivotIdx+1, right)
    }
    return arr
  }
  module.exports = {
      swap,
      pivot,
      qSort,
      merge,
      mergeSort
  }