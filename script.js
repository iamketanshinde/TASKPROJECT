let tasks=[];

 function addTask(){
    const taskinput=document.getElementById('taskInput').Value.trim();
    if(taskinput) return;

    tasks.push({task:taskinput,complete:false});
    tasks.getElementById('taskInput').value='';
    renderTask();
 }


 function renderTask() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td id="task-${index}" onclick="toggleComplete(${index})" style="cursor:pointer; ${task.completed ? 'text-decoration: line-through;' : ''}">
                ${task.task}
            </td>
            <td>
                <button class="btn btn-success btn-sm" onclick="editTask(${index})">Edit</button>
                <button class="btn btn-primary btn-sm" onclick="toggleComplete(${index})">${task.completed ? 'Undo' : 'Complete'}</button>
                <button class="btn btn-danger btn-sm" onclick="deleteTask(${index})">Delete</button>
            </td>
        `;
        taskList.appendChild(row);
    });
}
function editTask(index){
    const newtask=prompt('enter a new task:-',tasks[index].task)
    if (newtask !== null) {
        tasks[index].task = newtask.trim();
        renderTask();
    }
}
 functio