// const heading = document.querySelector('h1');
const heading = $('h1');
console.log(heading);

// heading.css('color', 'green');

const styles = {
    color: 'red',
    backgroundColor: 'green' 
}

// heading.css(styles)
// heading.css({
//     color: 'red'
// })

// $(heading[0]).css({
//     color: 'red'
// })

const text = $(heading[0]).text();
console.log(text)

$(heading[1]).html('<em>JavaScript Topics</em>');

console.log($('ul').attr('id', 'special'));

$('ul').addClass('two');
$('ul').removeClass('one');

// =========================

console.log($('li').parent())
console.log($('ul').children())
console.log($('ul').children())

console.log($('p').next())
console.log($('p').prev())


// const li = document.createElement()

$('ul').append($('<li>').text('hello'))