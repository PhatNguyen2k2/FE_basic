var list_students_block = document.querySelector('#list-students');

var studentsAPI = 'http://localhost:3000/info';

start = () => {
    getStudent(renderStudents);
    handleCreateForm();
}

start();

//function

function getStudent(callback){//read
    fetch(studentsAPI)
        .then((response) =>{
            return response.json();
        })
        .then(callback);
}
function createStudent(data, callback){//post
    let options = {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    };

    fetch(studentsAPI, options)
        .then((response) =>{
            response.json();
        })
        .then(callback);
}
function deleteStudent(id){//delete
    let options = {
        method: 'DELETE',
        headers: {
            'Content-Type':'application/json'
        }
    };

    fetch(studentsAPI + '/' + id, options)
        .then((response) =>{
            response.json();
        })
        .then(()=>{
            let studentItem = document.querySelector('.student-item-' + id);
            if(studentItem){
                studentItem.remove();
            }
        });
}
function renderStudents(students){
    let html = students.map((student) => {
        return `
            <li class = "student-item-${student.id}">
                <h4>${student.name}</h4>
                <p>${student.class}</p>
                <button onclick = "deleteStudent(${student.id})">Delete</button>
            </li>
        `;
    })
    list_students_block.innerHTML = html.join('');
}
function handleCreateForm(){
    var createbtn = document.querySelector('#create');
    createbtn.onclick = () => {
        let name = document.querySelector('input[name="name"]').value;
        let Class = document.querySelector('input[name="class"]').value;
        console.log(name);
        console.log(Class);
        let formdata = {
            name : name,
            class : Class
        };
        createStudent(formdata, ()=>{
            getStudent(renderStudents);
        });
    }
}