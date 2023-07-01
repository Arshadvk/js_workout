function person(name,age){
    this.name=name
    this.age = age
}

person.prototype.hello = function(){
    console.log(this.name,this.age);
}

const data = new person("nivas",24)
console.log(data);
data.hello()