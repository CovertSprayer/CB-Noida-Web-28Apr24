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

class Cuboid extends Rectangle{
    constructor(length, breadth, height){
        super(length, breadth);
        this.height = height;
    }

    volume(){
        return this.length * this.breadth * this.height;
    }
}

const c1 = new Cuboid(2,4,6);
console.log(c1.length)
console.log(c1.breadth)
console.log(c1.height)
console.log(c1.volume())
console.log(c1.area())

// class Cuboid{
//     constructor(length, breadth, height){
//         this.length = length;
//         this.breadth = breadth;
//         this.height = height;
//     }

//     volume(){
//         return this.length * this.breadth * this.height;
//     }
// }
