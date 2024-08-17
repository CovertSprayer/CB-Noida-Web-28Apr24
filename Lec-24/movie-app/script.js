const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDhlMDRiNzcwODBhN2ZkYjAwMzQ5ZmVkNzVmZGY2MyIsIm5iZiI6MTcyMzg3NTIxNi43NzAwOTYsInN1YiI6IjY2YmY5MGY0NTQ0NTk1ODk5MjQ5ZTUwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ayFXefaTlNi1wDwJkxGcIqhoWjGD7-1w6I4FaCMOy9g'
const baseURL = 'https://api.themoviedb.org/3';
const imageURL = 'https://image.tmdb.org/t/p/w500'


function createSection(heading, movies){
    const section = document.createElement('section');
    // section.innerHTML = `<h2>${heading}</h2>`
    const headingElem = document.createElement('h2');
    headingElem.innerText = heading;
    section.append(headingElem);

    const div = document.createElement('div');
    for(let movie of movies){
        const article = document.createElement('article');
        article.innerHTML = `<img src="${imageURL + movie.poster_path}" alt="">`;
        div.append(article);
    }
    section.append(div);
    return section;
}

async function getData(type){
    const options = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const res = await fetch(`${baseURL}/movie/${type}?language=en-US`, options);
    const data = await res.json();
    return data.results;
}

function changeHeader(movies){
    const header = document.querySelector('header');
    const randomInd = Math.floor(Math.random()*movies.length);
    const movie = movies[randomInd];

    header.style.background = `linear-gradient(rgb(255, 255, 255, 0), #171717), url(${'https://image.tmdb.org/t/p/original' + movie.backdrop_path})`
    header.style.backgroundSize = 'cover';
    header.style.backgroundPosition = 'center';
    
}


async function main(){
    const main = document.querySelector('main');

    //onst popularMoviesData = await getData('popular');
    // const topRatedMoviesData = await getData('top_rated');
    // const upcomingMoviesData = await getData('upcoming');

    // const popularMovies = createSection('Top Movies', popularMoviesData);
    // const topRatedMovies = createSection('Top Rated Movies', topRatedMoviesData);
    // const upcomingMovies = createSection('Upcoming Movies', upcomingMoviesData);

    const popularMoviesData = getData('popular');
    const topRatedMoviesData = getData('top_rated');
    const upcomingMoviesData = getData('upcoming');

    const movieData = await Promise.all([popularMoviesData, topRatedMoviesData, upcomingMoviesData])

    const popularMovies = createSection('Top Movies', movieData[0]);
    const topRatedMovies = createSection('Top Rated Movies', movieData[1]);
    const upcomingMovies = createSection('Upcoming Movies', movieData[2]);

    changeHeader(movieData[0]);

    main.append(popularMovies);
    main.append(topRatedMovies);
    main.append(upcomingMovies);
}

main();