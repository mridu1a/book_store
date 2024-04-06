const todolist=[];

rendertodolist();

function addTodo() {
    const inputElement=document.querySelector('.js-input');
    const name=inputElement.value;   //.value reps whatevers inside the input box
    console.log(name);
    todoobj = {name:'',duedate:''} ;

    todolist.push(todoobj);
    todoobj.name= name;
    const inputElement2 = document.querySelector('.js-duedate');
    const due= inputElement2.value ;
    todoobj.duedate = due ;

    console.log(todolist);
    inputElement.value='';

    rendertodolist();
}
function rendertodolist(){
    let todolistHTML = '' ;

    for(let i=0; i<todolist.length; i++){
        const todoobj = todolist[i];
        const name= todoobj.name;
        const duedate = todoobj.duedate;
        
        const html= `<div>${name}</div>
        <div> ${duedate}</div>
        <button  onclick=" todolist.splice(${i},1);
        rendertodolist();
        " class="delete-todo">Delete</button>
        ` ; //GENERATING HTML
        todolistHTML += html ; 
        
        document.querySelector('.js-todo')
        .innerHTML = todolistHTML ;
    }
    


}