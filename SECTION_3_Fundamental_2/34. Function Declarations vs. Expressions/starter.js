

// function declarations 
const ageCreater = contentCreater1(2003);
// đặt biến khởi tạo ở đâu cũng được
function contentCreater1(Number){
    const age = 2023-Number;
    return age;
}

console.log(ageCreater)

// function expressions

// const ageCreater2 = contentCreater2(2002); -> lỗi
// đặt biến khởi tạo sau funciton mới chạy 
const contentCreater2 = function (Number){
    return 2023-Number;
}
const ageCreater2 = contentCreater2(2002);
console.log(ageCreater2);
