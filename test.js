const arr = [99, -1, 6, 2, -10, -22, 8, 20, 0, -5, 7];
let c = 0;
let num=20
function linear(arr,item) {
  for (let i = 0; i < arr.length; i++) {
    c++
      if (arr[i]===item) {
        return i
      }
  }
  return null
}
console.log(linear(arr,num),c);

let co=0
function quickSort(arr) {
  if (arr.length<=1) {
    return arr
  }
  let pivotIndex=Math.floor(arr.length/2)
  let pivot=arr[pivotIndex]
  let less=[]
  let greatest=[]
  for (let i = 0; i < arr.length; i++) {
    co++
    if (i===pivotIndex) {
      continue
    }
    if (arr[i]>pivot) {
      greatest.push(arr[i])
    }else 
    less.push(arr[i])
  }
  return [...quickSort(less),pivot,...quickSort(greatest)]
}
console.log(quickSort(arr),co);
let con=0
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex=i
    for (let j = i+1; j < arr.length; j++) {
      con++
      if (arr[j]<arr[minIndex]) {
        minIndex=j
      }
    }
    let tmp=arr[i]
    arr[i]=arr[minIndex]
    arr[minIndex]=tmp
  }
  return arr
}
console.log(selectionSort(arr),con);
let cont=0
function buble(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      cont++
      if (arr[j+1]<arr[j]) {
        let tmp=arr[j]
        arr[j]=arr[j+1]
        arr[j+1]=tmp
      }
    }
  }
  return arr
}
console.log(buble(arr),cont);

let conte=0
function binary(arr,item) {
  let flag=false
  let position=-1
  let start=0
  let end=arr.length
  while (!flag&&start<=end) {
    conte++
    let middle=Math.floor((start+end)/2)
    if (arr[middle]===item) {
      flag=true
      position=middle
      return position
    }
    if (arr[middle]>item) {
      end=middle-1
    }else start=middle+1
  }
  return position
}
console.log(binary(buble(arr),num),conte);
let counter=0
function binaryReq(arr,item,start,end) {
  let middle=Math.floor((start+end)/2)
  counter++
  if (arr[middle]===item) {
    return middle
  }
  if (start>=end) {
    return -1
  }
  if (arr[middle]>item) {
    return binaryReq(arr,item,start,middle-1)
  }else  {
    return binaryReq(arr,item,middle+1,end)
  }
}
console.log(binaryReq(selectionSort(arr),num,0,arr.length),counter);