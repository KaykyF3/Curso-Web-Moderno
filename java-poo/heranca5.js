String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

//revertendo a string
console.log('Escola c0d3r'.reverse())

//
Array.prototype.first = function(){
    return this[0]
}

console.log([1,2,3,4,5].first())
console.log(['a','b','c'].first())