import React from 'react';

function TodoForm({addTodo}){
    const [value, setValue] = React.useState(''); 
    
    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue('');
    }       
    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <input 
                    type="text" 
                    className="form-control" 
                    value={value} 
                    placeholder="...Add todo" 
                    onChange={e => setValue(e.target.value)} 
                />
            </div>    
        </form>
    );
}

export default TodoForm;