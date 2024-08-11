
$('input').on('keypress', (e) => {
    if (e.key == 'Enter') {
        // console.log(e.target.value)
        const text = $(e.target).val();
        $(e.target).val('');
        const todo = createTodo(text);

        $('.todo-list').append(todo);

    }
})

$('.todo-list').on('click', (e) => {
    if($(e.target).hasClass('trash-bin')){
        $(e.target).parent().parent().remove();
    }

    else if($(e.target).hasClass('down-arrow')){
        // const currTodo = $(e.target).parent().parent();
        // const nextTodo = currTodo.next();

        // nextTodo.after(currTodo);

        $(e.target).parent().parent().next().after($(e.target).parent().parent());
    }

    else if($(e.target).hasClass('up-arrow')){
        const currTodo = $(e.target).parent().parent();
        const prevTodo = currTodo.prev();

        prevTodo.before(currTodo);

        // $(e.target).parent().parent().next().after($(e.target).parent().parent());
    }

    else if($(e.target).hasClass('checkbox')){
        $(e.target).next().toggleClass('completed')
    }

})


function createTodo(text) {
    // const todo = document.createElement('div');
    // const todo = $('<div>')
    // todo.addClass('todo');
    // todo.html(`<div class="section-left">
    //                     <input class="checkbox" type="checkbox">
    //                     <span>${text}</span>
    //                 </div>

    //                 <div class="section-right">
    //                     <span class="down-arrow child increased">🔽</span>
    //                     <span class="trash-bin">🗑️</span>
    //                     <span class="up-arrow">🔼</span>
    //                 </div>`)
    // return todo;


    return $('<div>')
        .addClass('todo')
        .html(`<div class="section-left">
                    <input class="checkbox" type="checkbox">
                    <span>${text}</span>
                </div>

                <div class="section-right">
                    <span class="down-arrow child increased">🔽</span>
                    <span class="trash-bin">🗑️</span>
                    <span class="up-arrow">🔼</span>
                </div>`)
}