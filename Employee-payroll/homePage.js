window.addEventListener('DOMContentLoaded', (event) =>{
    createInnerHtml();
});
const createInnerHtml=()=>{
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>";
    let innerHtml=`${headerHtml}`;
    let empPayrollList=createEmployeePayrollJSON();

    for (const empPayrollData of empPayrollList){
        innerHtml= `${innerHtml}
        <tr>
        <td><img class="profile" src="${empPayrollData._profilePic}" alt=""></td>
        <td>${empPayrollData._name}</td>
        <td>${empPayrollData._gender}</td>
        <td>
        <div class='dept-label'>${empPayrollData._department[0]}</div>
        <div class='dept-label'>${empPayrollData._department[1]}</div>
        </td>
        <td>${empPayrollData._salary}</td>
        <td>${empPayrollData._startDate}</td>
        <td>
        <img name="${empPayrollData._id}" onclick ="remove(this)" src="../assets/Icons/delete-black-18dp.svg" alt="delete">
        <img name="${empPayrollData._id}" onclick ="update(this)" src="../assets/Icons/create-black-18dp.svg" alt="edit">
        </td>
        </tr>
        `;
    }
    document.querySelector('#display').innerHTML=innerHtml;

}
const createEmployeePayrollJSON=()=>{
    let empPayrollListLocal=[
        {
            _name: 'Shashikant Daddimani',
            _gender: 'Male',
            _department:[
                'Engineering',
                'Finance'
            ],
            _salary:'500000',
            _startDate: '29 Oct 2019',
            _note:'',
            _id:new Date().getTime(),
            _profilePic: '../assets/profile-images/Ellipse -2.png'
        },
        {
            _name:'Amarpa Shashanka Keerthi Kumar',
            _gender:'female',
            _department:[
                'Sales'
            ],
            _salary:'400000',
            _startDate: '29 Oct 2019',
            _note:'',
            _id:new Date().getTime() + 1,
            _profilePic: '../assets/profile-images/Ellipse -1.png'

        }
    ];
    return empPayrollListLocal;
}
const getDeptHtml =(deptList) =>{
    let getDeptHtml = '';
    for (const dept of deptList){
        deptHtml=`${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml
}