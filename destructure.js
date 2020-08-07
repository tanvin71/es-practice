const person = { name: 'jack William', age: 17, job: 'facebooker', gfName: 'Ema Watson', address:'Kochu Khet', phone :'01717112211', friends: ['Tom hancks','tom cruise', 'Tom yarn']}
const {phone} = person;

const complexObject = {
    name: 'abc',
    info: {
        address : 'kola bagan',
        leader : 'Tiger Leader'
    }
}
const {leader} = complexObject.info;
console.log(leader);
// const gfName = person.gfName;
// const phone = person.phone;

// console.log(gfName, phone, address, salary);
// console.log(gfName, phone, address, salary);

const friends = ['Sakib khan', 'Arman khan', 'Amir khan','Salman khan','Shahrukh khan'];
const [chotoFriend, ...olders] = friends;
console.log(olders );