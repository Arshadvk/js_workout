
function * generator(num){
    yield num+2
    yield num+7
    yield 'hoi'
}

const obj = generator(3)
console.log(obj.next().value);
console.log(obj.next().value);
console.log(obj.next().value);

