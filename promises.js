console.log('person1: shows ticket')
console.log('person2: shows ticket')

const promiseWifeBringingTicks = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('wife: I have the tickets')
    console.log('husband: we should go in')
    console.log('wife: no i am hungry')
    resolve(`tickets`)
    getPopcorn.then(t => console.log(`We've got ${t}`))
  }, 1000);
})

const getPopcorn = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('husband: I got some popcorn')
    console.log('husband: we should go in')
    console.log('wife: I need salt on my popcorn')
    resolve(`popcorn`)
    getButter.then(t => console.log(`We've got ${t}`))
  }, 2000);

})

const getButter = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('butter')
  }, 3000)
});

promiseWifeBringingTicks.then(t => console.log(`We've got ${t}`))


console.log('person4: shows ticket')
console.log('person5: shows ticket')
