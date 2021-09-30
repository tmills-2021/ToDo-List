function Todo({todo,index,remove}){
    function handle(){
        remove(index);
    }
    let isNew = todo.isNew ? <span className="badge bg-success">New</span> : '';
    let taskText = todo.isCompleted ? <del>{todo.text}</del> : todo.text;
    return <li className="list-group-item" onClick={handle}>{taskText} {isNew}</li>
}

export default Todo;