// var str = "Hello World!";
// typeof str;
// var num = 123;
// typeof num;
// var arr = [1, 2, 3, 4, 5];
// typeof arr;
// var bool = true;
// typeof bool;
// var date = new Date();
// typeof date;
// var pattern = new RegExp("\\d+", "g");
// typeof pattern;
// var pi = Math.PI;
// typeof pi;
// var json = { "name": "John", "age": 30, "city": "New York"};
// typeof json;


// console.log(num, typeof num);

// console.log(str, typeof str);

// console.log(arr, typeof arr);

// console.log(bool, typeof bool);

// console.log(date, typeof date);

// console.log(pi, typeof pi);

// console.log(pattern, typeof pattern);

// console.log(json, typeof json);


function SayHello(name){
    console.log("Hello"+name);
}
return(SayHello("John"));


const person = {

    name: 'John',
  
    age: 30,

    hello: SayHello
  
  };
  console.log(person.hello(person.name));


var numbers = [1, 2, 3, 4, 5];
var colors = ["red", "blue", "green"];
var matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

for (var i = 0; i < numbers.length; i++) {

}