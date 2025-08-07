type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: string;
  department: string;
};

type StaffMember = Person & Employee;
const printStaffInfo = (staff: StaffMember): void => {
  console.log(
    `Nhân viên: ${staff.name} (${staff.age} tuổi) , Mã nhân viên: ${staff.employeeId} - Phòng: ${staff.department}`
  );
};


const staff1: StaffMember = {
  name: "Trần Đăng Việt",
  age: 19,
  employeeId: "EMP001",
  department: "Kế toán",
};

printStaffInfo(staff1);
