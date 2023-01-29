class EmployeepayrollData{
    get Id(){
        return this.Id;
    }
    set Id(Id){
        this.id=this.id;
    }

    get name(){
        return this.name;
    }
    set name(name){
        let nameRegex = RegExp("^[A-Z]{1}[a-zA-Z\\s]{2,}$");
        if(nameRegex.test(name))
        this._name=name;
        else throw "Name is Incorrect!";
    }

    get profilePic(){
    return this.profilePic;
    }
    set profilePic(profilePic){
        this.profilePic=profilePic;
    }
    get gender(){
        return this.gender
    }
    set gender(gender){
        this.gender=gender;
    }
    get department(){
        return this.department;
    }
    set department(department){
        this.department=department;
    }
    get salary (){
        return this.salary;
    }
    set salary(salary){
        this.salary=salary;
    }
    get note(){
        return this.note;
    }
    set note(note){
        this.note=note;
    }
    get startDate(){
        return this.startDate;
    }
    set startDate(startDate){
        this.startDate=startDate;
    }
    toString() {
        const options = { year: "numaric", month: "long", day: "numaric" };
        const empDate = !this.startDate ? "undefined" : this.startDate.toLocalString("en-US", options);
        return "name : " + this.name + ", gender : " + this.gender + 
        ", profilePic : " + this.profilePic + ", department : " + this.department + 
        ", salary : " + this.salary + ", startDate : " + empDate + ", note : " + this.note;
    }
}