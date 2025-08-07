type Student = {
    name: string;
    age: number;
    email: string;
};
const student: Student = {
    name: "Trần Đăng Việt",
    age: 19,
    email: "trandangviet@example.com"
};
const introduce = (student: Student): void => {
    console.log(`Tên tôi là ${student.name}, tôi ${student.age} tuổi và email của tôi là ${student.email}.`);
};
introduce(student);
