const screen = document.querySelector('input');
const buttons = document.querySelectorAll('td');

for (let button of buttons) {
    button.addEventListener('click', (e) => {
        const text = e.target.innerText;

        try {
            if(text.toLowerCase() === 'c'){
                screen.value = '';
            }
            else if(text.toLowerCase() === 'x'){
                screen.value += '*';
            }
            else if(text.toLowerCase() === '='){
                const output = eval(screen.value);
                screen.value = output;
            }
            else{
                screen.value += text;
            }
        } 
        catch (error) {
            console.log(error);
            screen.value = "Invalid Operator!"
        }
    })
}
