import { films } from './films.js';

const API_URL = 'http://www.omdbapi.com/?apikey=e79130xad';
// Promise.all experimentation
async function getMovieData(films) {
	let filmData = await Promise.all(
		films.map(async (film) => {
			const res = await fetch(
				`http://www.omdbapi.com/?apikey=e79130ad&t=${film}`
			);
			return res.json();
		})
	);
	// Error handling..?
	localStorage.setItem('movieDetails', JSON.stringify(filmData));
}

function createMovieSquares(movies) {
	let movieTilesSection = document.getElementsByClassName('movie-tiles')[0];
	for (let movie of movies) {
		let movieTilesCard = document.createElement('div');
		movieTilesCard.classList.add('card');

		let movieTilesCardBody = document.createElement('div');
		movieTilesCardBody.classList.add('card-body','movie-tile');
		movieTilesCard.appendChild(movieTilesCardBody);
		/*
		 * Front of the card
		 */
		let movieTilesCardFront = document.createElement('div');
		movieTilesCardFront.classList.add('movie-tile-front');
		movieTilesCardBody.appendChild(movieTilesCardFront);
		/*
		 * Back of the card
		 */
		let movieTilesCardBack = document.createElement('div');
		movieTilesCardBack.classList.add('movie-tile-back');
		movieTilesCardBody.appendChild(movieTilesCardBack);

		let moviePoster = document.createElement('img');

		moviePoster.src = movie.Poster;
		moviePoster.alt = movie.Title;
		moviePoster.classList.add('poster')
		movieTilesCardFront.appendChild(moviePoster);
		movieTilesCardFront.innerHTML += `<p class="movie-title">${movie.Title} (${movie.Year})</p>`;

		movieTilesSection.appendChild(movieTilesCard);


		movieTilesCardBack.innerHTML = `<p class="plot-text">${movie.Plot}</p>`
	}
}

const init = () => {
	if (!localStorage.getItem('movieDetails')) {
		let movieData = getMovieData(films);
		createMovieSquares(movieData);
	} else {
		let filmData = JSON.parse(localStorage.getItem('movieDetails'));
		createMovieSquares(filmData);
	}
};

init();
