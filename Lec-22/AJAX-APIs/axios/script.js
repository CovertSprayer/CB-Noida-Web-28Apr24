const baseURL = 'https://jsonplaceholder.typicode.com';
const btn = document.querySelector('button');

async function getData() {
    // fetch(`${baseURL}/users`, {
    //     method: 'delete',
    //     data: {},
    //     headers: {
    //         // 'reqFrom': "app",
    //         // 'token': ''
    //     }
    // })

    const res = await axios.get(`${baseURL}/users`);
    console.log(res.data);
}

btn.addEventListener('click', () => {
    getData();
})