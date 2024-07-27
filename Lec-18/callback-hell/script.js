
function getFood(callback){
    setTimeout(() => {
        console.log('Food Arrived!');
        callback();
    }, 3000);
}

function getDrinks(callback){
    setTimeout(() => {
        console.log('Drinks Arrived!');
        callback();
    }, 1000);
}

function getSweets(){
    setTimeout(() => {
        console.log('Sweets Arrived!')
    }, 2000);
}

// getFood(getDrinks(getSweets));
// getDrinks();
// getSweets();

getFood(function() {
    getDrinks(function(){
        getSweets();
    })
})