var _a = [
    {
        firstName: "Youssef",
        lastName: "Baladi",
        age: 10,
        location: "Tanger"
    },
    {
        firstName: "Adam",
        lastName: "Baladi",
        age: 8,
        location: "Casa Blanca"
    },
], student1 = _a[0], student2 = _a[1];
var studentsList = [student1, student2];
var body = document.getElementsByTagName("body")[0];
var table = document.createElement("table");
var thead = document.createElement("thead");
var tbody = document.createElement("tbody");
var rowHead = thead.insertRow(0);
var firstCellHead = rowHead.insertCell(0);
var secondCellHead = rowHead.insertCell(1);
firstCellHead.innerHTML = "firstName";
secondCellHead.innerHTML = "location";
table.append(thead);
studentsList.forEach(function (student) {
    var row = tbody.insertRow(0);
    var firstCell = row.insertCell(0);
    var secondCell = row.insertCell(1);
    firstCell.innerHTML = student.firstName;
    secondCell.innerHTML = student.location;
});
table.append(tbody);
table.append(table);
//# sourceMappingURL=main.js.map