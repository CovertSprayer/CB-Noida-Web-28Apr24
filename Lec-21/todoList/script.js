const input = document.querySelector('input');
const todoList = document.querySelector('.todo-list');

input.addEventListener('keydown', (e) => {
    if(e.key == 'Enter'){
        const text = e.target.value;
        e.target.value = '';

        const todo = createTodo(text);
        todoList.append(todo);
    }
})


function createTodo(text){
    const todo = document.createElement('div');
    todo.classList.add('todo');
    todo.innerHTML = `<div class="section-left">
                        <input type="checkbox">
                        <span>${text}</span>
                    </div>

                    <div class="section-right">
                        <span>🔽</span>
                        <span>🗑️</span>
                        <span>🔼</span>
                    </div>`
    return todo;
}