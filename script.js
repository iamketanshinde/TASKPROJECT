let tasks=[];

 function addTask(){
    const taskinput=document.getElementById('taskInput').Value.trim();
    if(taskinput) return;

    tasks.push({task:taskinput,complete:false});
    tasks.getElementById('taskInput').value='';
    renderTask();
 }