const todoShowBtn=document.querySelector(".todolist-show");
const todoList=document.querySelector(".todo-list");
todoShowBtn.addEventListener('click',function(){
    todoList.classList.toggle('active');
    document.querySelector(".xi-angle-right-thin").classList.toggle('active');
    document.querySelector(".xi-angle-left-thin").classList.toggle('active');
});