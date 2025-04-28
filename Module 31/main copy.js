//for /in
var person ={firstName:"john", lastName:"doe", age:25};

var text='';
var z;
for(z in person){
    text += person[z];
}

console.log(text);
console.log("-----------------");

//for /of

var names = ['Steve', 'Bill', 'Mark'];
var y;
for(y of names){
    console.log(y);
}

console.log("-----------------");

var txt="Javascript";
var l;

for(l of txt){
    console.log(l);
}
// ↑ is the understanding after console log ------------------ prints out word by word

