class Rectangle{
    constructor(length, breadth){
        this.length = length;
        this.breadth = breadth;
    }

    area(){
        return this.length * this.breadth;
    }

    isSquare(){
        return this.length === this.breadth;
    }

}

const r1 = new Rectangle(2, 4);
console.log(r1);
console.log(r1.area());
console.log(r1.isSquare());

const r2 = new Rectangle(4,4);
console.log(r2.isSquare())