"use strict";
const student = {
    name: "Trần Đăng Việt",
    age: 19,
    email: "trandangviet@example.com"
};
const introduce = (student) => {
    console.log(`Tên tôi là ${student.name}, tôi ${student.age} tuổi và email của tôi là ${student.email}.`);
};
introduce(student);
