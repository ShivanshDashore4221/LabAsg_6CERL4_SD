//Q22.Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.
class Rectangle{
    constructor(height,width){
        this.height = height;
        this.width = width;
    }
    area(){
        return this.height * this.width;
    }
    perimeter(){
        return 2*(this.height+this.width);
    }
}
let rect = new Rectangle(15,20);
console.log("Area is : "+rect.area());
console.log("Perimeter is : "+rect.perimeter());