const button=document.getElementById("btn");
const inputvalue=document.getElementById("input");
const todolist=document.getElementById("todolist");
let edittodo=null;
let editvalue=null;
const handleClick=(e)=>{
    console.log(e);
    const inputtext=inputvalue.value.trim();
    if(inputtext.length===0){
        alert("Please Enter Some Value..");
    }else if(button.value==="Edit"){
        editTodo(edittodo.target.previousElementSibling.innerHTML,inputvalue.value);
        edittodo.target.previousElementSibling.innerHTML=inputvalue.value;
        editvalue=inputvalue.value;
        console.log("helo");
       
        
        inputvalue.value="";
        button.value="Add";
       
        
    }else{
        let li=document.createElement("li");
        let para=document.createElement("p");
        let del=document.createElement("button");
        let edit=document.createElement("button");
        para.innerHTML=inputtext;
        del.innerHTML="Delete";
        edit.innerHTML="Edit";
        del.setAttribute("class","del xxx")
        edit.setAttribute("class","del xxxx")
        

        li.appendChild(para);
        li.appendChild(edit);
        li.appendChild(del);
        todolist.appendChild(li);
        inputvalue.value="";
        savelocal(inputtext);
    }

}
const handletodo=(e)=>{
    
    if(e.target.innerHTML==="Delete"){
        if(button.value==="Edit"){
            alert("if you delete item then it will not edited");
            // todolist.removeChild(e.target.parentElement);
            inputvalue.value="";
            button.value="Add";
            todolist.removeChild(e.target.parentElement);
            inputvalue.focus();
            deleteTodo(e.target.parentElement);
        }else{
            todolist.removeChild(e.target.parentElement);
            deleteTodo(e.target.parentElement);
        }

    }
    if(e.target.innerHTML==="Edit"){
        inputvalue.value=e.target.previousElementSibling.innerHTML;
        // button.innerHTML="";
        inputvalue.focus();
        button.value="Edit";
        edittodo=e;
        
    }

}
const savelocal=(todo)=>{
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    }else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    // console.log(localStorage.getItem("todos"));
    // console.log(JSON.parse(localStorage.getItem("todos")));
    
    
    localStorage.setItem("todos",JSON.stringify(todos));

}
const localSave=()=>{
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    }else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(todoitem => {
        let li=document.createElement("li");
        let para=document.createElement("p");
        let del=document.createElement("button");
        let edit=document.createElement("button");
        para.innerHTML=todoitem;
        del.innerHTML="Delete";
        edit.innerHTML="Edit";
        del.setAttribute("class","del xxx")
        edit.setAttribute("class","del xxxx")
        

        li.appendChild(para);
        li.appendChild(edit);
        li.appendChild(del);
        todolist.appendChild(li);
        
    });
}
const deleteTodo=(item)=>{
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    }else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    let x=item.children[0].innerHTML;
    let newlist=todos.filter((e)=>{
        return x!==e;
    });
    console.log(newlist);
    localStorage.clear();
    if(newlist.length!==0){
        localStorage.setItem("todos",JSON.stringify(newlist));
    }
    
}
const editTodo=(x,y)=>{
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    }else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    let i=todos.indexOf(x);
    console.log(x,y);
    
    if(y!==""){
        todos[i]=y;
    }
    localStorage.setItem("todos",JSON.stringify(todos));
    console.log(todos);
}
document.addEventListener('DOMContentLoaded',localSave());
 
button.addEventListener('click',handleClick);
todolist.addEventListener('click',handletodo);
console.log("hello,jai shree Ram,Jai Mata Di..");
