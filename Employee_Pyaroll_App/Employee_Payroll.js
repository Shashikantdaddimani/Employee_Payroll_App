class EmployeepayrollData{
    get Id(){
        return this.Id;
    }
    set Id(Id){
        this.id=this.id;
    }

    get name(){
        return this._name;
    }
    set name(name){
        let nameRegex = RegExp("^[A-Z]{1}[a-zA-Z]{2,}$");
        if(nameRegex.test(name))
        this._name=name;
        else throw "Name is Incorrect!";
    }

    get profilePic(){
    return this._profilePic;
    }
    set profilePic(profilePic){
        this._profilePic=profilePic;
    }
    get gender(){
        return this._gender
    }
    set gender(gender){
        this._gender=gender;
    }
    get department(){
        return this._department;
    }
    set department(department){
        this._department=department;
    }
    get salary (){
        return this._salary;
    }
    set salary(salary){
        this._salary=salary;
    }
    get note(){
        return this._note;
    }
    set note(note){
        this._note=note;
    }
    get startDate(){
        return this._startDate;
    }
    set startDate(startDate){
        this._startDate=startDate;
    }
    toString() {
        const options = { year: "numaric", month: "long", day: "numaric" };
        const empDate = !this.startDate ? "undefined" : this.startDate.toLocalString("en-US", options);
        return "name : " + this.name + ", gender : " + this.gender + 
        ", profilePic : " + this.profilePic + ", department : " + this.department + 
        ", salary : " + this.salary + ", startDate : " + empDate + ", note : " + this.note;
    }
}
window.addEventListener("DOMContentLoaded", (event) => {
    const name = document.querySelector("#name");
    const textError = document.querySelector(".text-error");
    name.addEventListener("input", function () {
        if (name.value && name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new EmployeepayrollData()).name = name.value;
            textError.textContent = "";
        }
        catch (exception) {
            textError.textContent = exception;
        }
    });
    const salary = document.querySelector("#salary");
    const output = document.querySelector(".salary-output");
    output.textContent = salary.value;
    salary.addEventListener("input", function () {
        output.textContent = salary.value;
    });
});
const save = () => {
    try {
        let employeePayrollData = createEmployeePayroll();
    }
    catch (exception) {
        return;
    }
}
const createEmployeePayroll = () => {
    let employeePayrollData = new EmployeepayrollData();
    try {
        employeePayrollData.name = getInputValueById("#name");
    }
    catch (exception) {
        throw exception;
    }
    employeePayrollData.profilePic = getSelectedValues("[name=profile]").pop();
    employeePayrollData.gender = getSelectedValues("[name=gender]").pop();
    employeePayrollData.department = getSelectedValues("[name=department]");
    employeePayrollData.salary = getInputValueById("#salary");
    employeePayrollData.note = getInputValueById("#notes");
    let date = getInputValueById("#day") + " " + getInputValueById("#month") + " " + getInputValueById("#year");
    //employeePayrollData.startDate = Date.parse(date);
    employeePayrollData.startDate = date;
    alert(employeePayrollData.toString());
    return employeePayrollData;
}
const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let selItems = [];
    allItems.forEach(item => {
        if (item.checked) {
            selItems.push(item.value);
        }
    });
    return selItems;
}
const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}
const getInputValue = (id) => {
    let value = document.getElementById(id).value;
    return value;
}