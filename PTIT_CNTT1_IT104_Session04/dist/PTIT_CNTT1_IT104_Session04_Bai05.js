"use strict";
const printStaffInfo = (staff) => {
    console.log(`Nhân viên: ${staff.name} (${staff.age} tuổi) , Mã nhân viên: ${staff.employeeId} - Phòng: ${staff.department}`);
};
const staff1 = {
    name: "Trần Đăng Việt",
    age: 19,
    employeeId: "EMP001",
    department: "Kế toán",
};
printStaffInfo(staff1);
