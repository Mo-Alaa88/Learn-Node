const event = require('events');
const util = require('util');

const Person = function (name){
    this.name = name;
}
// we inherets event.EventEmitter for Person by util.inherits
// util.inherits(constructor, superConstructor)
util.inherits(Person , event.EventEmitter);
const ahmed = new Person('Ahmed Abas'),
    mohamed = new Person('Moamed Alaa'),
    pepole = [ahmed,mohamed];
pepole.forEach((Person)=>{
    Person.on('talk',(msg)=>{
        console.log(`${Person.name} said ${msg}`);
    })
})
mohamed.emit('talk','welcome');
// // more Detailes for util
// https://nodejs.org/docs/latest-v8.x/api/util.html 