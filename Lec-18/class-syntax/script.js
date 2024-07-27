class Rectangle{
    constructor(length, breadth){

        this.length = length;
        this.breadth = breadth;

        if(length < 0){
            this.length = 0;
        }
    }

    area(){
        return this.length * this.breadth;
    }

    isSquare(){
        return this.length === this.breadth;
    }

    static sayHello() {
        console.log('Hi there')
    }

    set changeLength(len){
        this.length = len;
    }

    get getLength(){
        return this.length;
    }
}

const r1 = new Rectangle(-2, 4);
console.log(r1);
// console.log(r1.area());
// console.log(r1.isSquare());

// const r2 = new Rectangle(4,4);
// console.log(r2.isSquare());

// r1.sayHello(); // error
// Rectangle.sayHello();

// r1.changeLength(20);
r1.changeLength = 20;
console.log(r1);
console.log(r1.getLength)