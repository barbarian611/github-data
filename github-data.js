let data = require('./data')

const asc = (low, high) => low < high ? -1 : low > high ? +1 : 0;
const desc = (low, high) => low > high ? -1 : low < high ? +1 : 0;

// 1)
//array.forEach(thing => console.log(thing))
const numOfRepos = (array) => {
  return array.length
}

console.log('\n1) ' + numOfRepos(data))

//node github-data.js

// 2)
const largestRepo = (array) => {
  let sizeArray = array.map(repo => repo.size);
  let maxSize = Math.max.apply(null, sizeArray);
  let biggestRepo = array.filter(repo => repo.size === maxSize)[0];
  return biggestRepo.full_name
}

//return array[2].id

//console.log(data[17].size)

console.log('\n2) ' + largestRepo(data))

// 3)
const mostRecentRepo = (array) => {
  return array.sort((repOne, repTwo) => desc(repOne.created_at, repTwo.created_at))[0].full_name
}

console.log('\n3) ' + mostRecentRepo(data))

const noGazers = (array) => {
  let zeroGaze = array.filter(repo => repo.stargazers_count === 0)
  return zeroGaze.length

}
console.log('\n4) ' + noGazers(data))

// 5)
const maxGazers = (array) => {

}
console.log('\n5) ' + maxGazers(data))

// 6)
const hasDescriptions = (array) => {

}
console.log('\n6) ' + hasDescriptions(data))

//7)
const newDescriptionsArray = (array) => {

}
console.log('\n7) ' +  newDescriptionsArray(data))

//8)
let keyInfo = (array) => {

}
console.log('\n8) ' +  keyInfo(data))

//9)
let monkeyKeys = (array) => {

}
console.log('\n9) ' + monkeyKeys(data))

//10)
let urlValue = (array) => {

}
console.log('\n10) ' + urlValue(data))

module.exports = { numOfRepos, largestRepo, mostRecentRepo, noGazers, maxGazers, hasDescriptions, newDescriptionsArray, keyInfo, monkeyKeys, urlValue }
