const baseURL = 'https://jsonplaceholder.typicode.com';

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
        console.log(data)
    } catch (err) {
        console.log(err);
    }

}

getData();