// Chapter No 11 : Q1

// class complex{
//     constructor(real, imaginary){
//         this.real = real;
//         this.imaginary = imaginary;             
//     }
// }

// let a = new complex(2 ,4)
// let b = new complex(6 ,5)     

// Chapter No 11 : Q2

// class complex{
//     constructor(real, imaginary){
//         this.real = real;
//         this.imaginary = imaginary;             
//     }
//     add(num){
//         this.real =  this.real + num.real 
//         this.imaginary = this.imaginary + num.imaginary;
//     }
// }

// let a = new complex(2 ,4)
// let b = new complex(6 ,5) 
// a.add(b);
// console.log(`${a.real}+${a.imaginary}i`);


// Chapter No 11 : Q3,Q4

// class Human {
//     constructor(name, favColor){
//         this.name = name;
//     }
//     walk(){
//         console.log(`${this.name} Human is walking`);
//     }
// }

// class Student extends Human{
//     walk(){
//         console.log(`${this.name} student is walking`);
//     }
// }

// let o = new Student("asif");
// o.walk();

// console.log(o instanceof Human);


// class complex{
//     constructor(real, imaginary){
//         this.real = real;
//         this.imaginary = imaginary;             
//     }
// }

// let a = new complex(2 ,4)
// let b = new complex(6 ,5)     

// Chapter No 11 : Q5

// class complex{
//     constructor(real, imaginary){
//         this.real = real;
//         this.imaginary = imaginary;             
//     }
//     add(num){
//         this.real =  this.real + num.real 
//         this.imaginary = this.imaginary + num.imaginary;
//     }
//     get real(){
//         return this._real;
//     }
//     set real(newReal){
//         this._real = newReal;
//     }
//     get imaginary(){
//         return this._imaginary;
//     }
//     set imaginary(newImaginary){
//         this._imaginary = newImaginary;
//     }
// }

// let a = new complex(2 ,4);
// console.log(a.real + " " + a.imaginary);
// a.real = 10;
// a.imaginary = 10;
// let b = new complex(6 ,5) 
// a.add(b);
// console.log(`${a.real}+${a.imaginary}i`);



