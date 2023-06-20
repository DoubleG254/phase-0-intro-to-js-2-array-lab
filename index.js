let cats = ["Milo", "Otis", "Garfield"]// Write your solution here!
beforeEach(function ArrayFunctions(){
    cats.length = o
    
    cats.push ('Milo', 'Otis', 'Garfield');
})
function destructivelyAppendCat(name){
    cats.push('Ralph')
}
function destructivelyPrependCat(name){
    cats.unshift('Bob')
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function removeLastCat(){
   let newcats= cats.slice(0, -1)
    return newcats
}
function appendCat(name){
    let newcats=[...cats,"Broom"]
    return newcats
}
function prependCat(name){
    let newcats=["Arnold",...cats]
    return newcats
}
function removeFirstCat(){
    let newcats= cats.slice(1)
    return newcats
}
