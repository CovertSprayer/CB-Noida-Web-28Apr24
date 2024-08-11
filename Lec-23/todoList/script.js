const input = document.querySelector('input');
const todoList = document.querySelector('.todo-list');

input.addEventListener('keydown', (e) => {
    if(e.key == 'Enter'){
        const text = e.target.value;

        if(text == '') {
            alert('Write something!');
            return;
        }
        e.target.value = '';

        const todo = createTodo(text);
        todoList.append(todo);
    }
});

todoList.addEventListener('click', e => {
    const element = e.target;
    if(element.classList.contains('trash-bin')){
        // console.log(element)
        element.parentElement.parentElement.remove();
    }

    else if(element.classList.contains('down-arrow')){
        const currentTodo = element.parentElement.parentElement;
        const nextTodo = currentTodo.nextElementSibling;

        if(nextTodo) nextTodo.after(currentTodo);
    }

    else if(element.classList.contains('up-arrow')){
        const currentTodo = element.parentElement.parentElement;
        const prevTodo = currentTodo.previousElementSibling;

        if(prevTodo) prevTodo.before(currentTodo);
    }

    else if(element.classList.contains('checkbox')){
        element.nextElementSibling.classList.toggle('completed');
    }
})


function createTodo(text){
    const todo = document.createElement('div');
    todo.classList.add('todo');
    todo.innerHTML = `<div class="section-left">
                        <input class="checkbox" type="checkbox">
                        <span>${text}</span>
                    </div>

                    <div class="section-right">
                        <span class="down-arrow child increased">🔽</span>
                        <span class="trash-bin">🗑️</span>
                        <span class="up-arrow">🔼</span>
                    </div>`
    return todo;
}