// Code your solution in this file!
const returnFirstTwoDrivers = function (arr){
  var empty = []
  empty.push(arr[0])
  empty.push(arr[1])
  return empty;
}


const returnLastTwoDrivers = function(arr){
  var empty = []
  empty.push(arr[arr.length-2])
  empty.push(arr[arr.length-1])

  return empty;
}

var final = []
final.push(returnFirstTwoDrivers, returnLastTwoDrivers)

const selectingDrivers =final



const createFareMultiplier = function (num){
  return function (num2){
    return num*num2;
  }
}


const fareDoubler = createFareMultiplier(2)


const fareTripler = createFareMultiplier(3)


const selectDifferentDrivers = function(arrayOfDrivers, func){
  return  func(arrayOfDrivers);
}
