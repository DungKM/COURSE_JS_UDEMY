 

function blogger(){
    console.log("KeyMagic want it !");
}
blogger();


function fruitProcessor(apple, oranges){
    console.log(apple, oranges);
    const juice = `Juice with ${apple} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(6, 12);
console.log(appleJuice);


// -> hàm kiến tạo phải sạch tối ưu dùng được nhiều lần 