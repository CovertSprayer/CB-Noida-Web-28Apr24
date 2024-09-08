const todoList = document.querySelector('ul');
const form = document.querySelector('form');
const input1 = document.querySelector('.input1');
// const input2 = document.querySelector('.input2');

async function getData(){
    const res = await fetch('http://localhost:5000/todos')
    const json = await res.json();
    console.log(json);
    render(json.todos); 
}

function render(data){
    todoList.innerHTML = ''
    data.forEach(todo => {
        const li = document.createElement('li');
        li.innerText = todo;
        todoList.append(li);
    });
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data1 = input1.value;
    input1.value = '';

    const res = await axios.post('http://localhost:5000/todos?name=rahul', {
        todo: data1
    })
    // const data = await res.json();
    render(res.data.todos)

})


getData();