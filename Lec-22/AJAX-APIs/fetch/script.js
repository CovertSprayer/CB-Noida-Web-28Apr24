const baseURL = 'https://jsonplaceholder.typicode.com';
const todoList = document.querySelector('.todos');

async function getData(){
    // fetch(`${baseURL}/todos`)
    //     .then((res) => {
    //         console.log(res)
    //         return res.json();
    //     })
    //     .then((data)=>{
    //         console.log(data);
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })

    try {
        const response = await fetch(`${baseURL}/todos`);
        const data = await response.json();
        // console.log(data);

        for(let i=0; i<10; i++){
            console.log(data[i]);
            const todo = document.createElement('li');
            todo.innerText = data[i].title;
            todoList.append(todo);
        }

    } catch (err) {
        console.log(err);
    }

}

getData();