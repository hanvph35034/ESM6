// bai 1
var users = [
    { id: 1, name: "Mai ngọc chi", gender: 2 },
    { id: 2, name: "Trần văn khách", gender: 1 },
    { id: 3, name: "Đào ngọc mai", gender: 2 },
    { id: 4, name: "Lê Đức thọ", gender: 1 },
];

var target = document.querySelector("#target");

users.forEach(function (user) {
    var listItem = document.createElement("li");
    listItem.textContent = `ID: ${user.id}, Name: ${user.name}, Gender: ${user.gender === 1 ? "Male" : "Female"}`;
    target.appendChild(listItem);
});
// bai 2
var users = [];

function addUser() {
    var userId = document.getElementById("userId").value;
    var userName = document.getElementById("userName").value;
    var userGender = document.getElementById("userGender").value;
    if (userId && userName && userGender) {
        var newUser = {
            id: userId,
            name: userName,
            gender: parseInt(userGender) 
        };
        users.push(newUser);

      
        displayUser(newUser);
        document.getElementById("userId").value = "";
        document.getElementById("userName").value = "";
        document.getElementById("userGender").value = "";
    } else {
        alert("Vui lòng điền đầy đủ thông tin!");
    }
}

function displayUser(user) {
    var listItem = document.createElement("li");
    listItem.textContent = `ID: ${user.id}, Name: ${user.name}, Gender: ${user.gender === 1 ? "Nam" : "Nữ"}`;
    document.getElementById("userList").appendChild(listItem);
}
// bai 3  
function convertString() {
    var inputString = document.getElementById("inputString").value;

    if (inputString) {
        var camelCaseString = toCamelCase(inputString);
        document.getElementById("outputResult").textContent = "Converted String: " + camelCaseString;
    } else {
        alert("Vui lòng nhập chuỗi!");
    }
}

function toCamelCase(str) {
    return str.replace(/[^a-zA-Z0-9]/g, ' ').toLowerCase().replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
}
// bai 4 
let classRoom = [
    "Nguyễn Tiến Duy",
    "Hoàng Xuân Hiếu",
    "Hồ Sỹ Hương",
    "Nguyễn Đức Thuận",
    "Đoàn Minh Tùng",
    "Hồ Sỹ Hùng",
    "Lê Trung Hiếu",
    "Đoàn vừa đẹp trai học giỏi Hữa Quý"
];

let separatedNames = classRoom.map(fullName => {
    let parts = fullName.split(" ");
    return {
        firstName: parts.pop(),
        lastName: parts.join(" ")
    };
});

console.log(separatedNames);
// thêm sinh viên 
let newStudent = "Phạm Thị Thu";

// thêm vào ví trí thứ 3
classRoom.splice(2, 0, newStudent);

console.log(classRoom);
// xóa 1 sinh viên khỏi mảng
let studentToRemove = "Hồ Sỹ Hương";


let indexToRemove = classRoom.indexOf(studentToRemove);

if (indexToRemove !== -1) {
    classRoom.splice(indexToRemove, 1);
}

console.log(classRoom);
// tìm kiếm theo tên 
let searchTerm = "Hieu";

let foundStudents = classRoom.filter(student => {
  
    let normalizedStudent = removeDiacritics(student.toLowerCase());
    let normalizedSearchTerm = removeDiacritics(searchTerm.toLowerCase());

    return normalizedStudent.includes(normalizedSearchTerm);
});

console.log(foundStudents);

function removeDiacritics(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

