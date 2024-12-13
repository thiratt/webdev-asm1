(() => {
	const movies = [
		{
			link: "/starwar.html",
			image: {
				src: "assets/img/starwar/poster.jpg",
				alt: "Star Wars Skeleton Crew Poster",
			},
			title: "Star War: Skeleton Crew",
			rating: "7.2",
		},
		{
			link: "/creture.html",
			image: {
				src: "assets/img/creture/poster.jpg",
				alt: "Creture Commandos Poster",
			},
			title: "Creture Commandos",
			rating: "7.8",
		},
		{
			link: "/black-doves.html",
			image: {
				src: "assets/img/blackdoves/poster.jpg",
				alt: "Black Doves Poster",
			},
			title: "Black Doves",
			rating: "7.2",
		},
		{
			link: "/the-return.html",
			image: {
				src: "assets/img/the-return/poster.jpg",
				alt: "The Return Poster",
			},
			title: "The Return",
			rating: "6.6",
		},
		{
			link: "/y2k.html",
			image: {
				src: "assets/img/y2k/poster.jpg",
				alt: "Y2K Poster",
			},
			title: "Y2K",
			rating: "5.2",
		},
		{
			link: "/nightbitch.html",
			image: {
				src: "assets/img/nightbitch/poster.jpg",
				alt: "Nightbitch Poster",
			},
			title: "Nightbitch",
			rating: "6.2",
		},
		{
			link: "/the-order.html",
			image: {
				src: "assets/img/the-order/poster.jpg",
				alt: "The Order Poster",
			},
			title: "The Order",
			rating: "7.3",
		},
		{
			link: "/secret-level.html",
			image: {
				src: "assets/img/secret-level/poster.jpg",
				alt: "Secret Level Poster",
			},
			title: "Secret Level",
			rating: "0",
		},
		{
			link: "/maria.html",
			image: {
				src: "assets/img/maria/poster.jpg",
				alt: "Maria Poster",
			},
			title: "Maria",
			rating: "6.8",
		},
	];

	const createMovieCard = (movie, index) => {
		return `
			<div class="movie-card">
				<div class="movie-card-poster">
					<a href=".${movie.link}">
						<img src="${movie.image.src}" alt="${movie.image.alt}" />
					</a>
				</div>
				<div class="movie-card-content">
					<p>⭐ ${movie.rating}</p>
					<h4>${index + 1}. ${movie.title}</h4>
				</div>
				<div class="movie-card-footer">
					<button type="button" class="primary">
						<div class="button-wrap">
							<svg
								fill="#FFF"
								width="14px"
								height="14px"
								viewBox="0 0 45.5 45.5"
								>
								<g>
									<path
										d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141
						c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27
						c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435
						c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"
									/>
								</g>
							</svg>
							<p>Watchlist</p>
						</div>
					</button>
					<button type="button" class="ghost">
						<div class="button-wrap">
							<svg width="14px" height="14px" viewBox="0 0 24 24">
								<path
									d="M16.6582 9.28638C18.098 10.1862 18.8178 10.6361 19.0647 11.2122C19.2803 11.7152 19.2803 12.2847 19.0647 12.7878C18.8178 13.3638 18.098 13.8137 16.6582 14.7136L9.896 18.94C8.29805 19.9387 7.49907 20.4381 6.83973 20.385C6.26501 20.3388 5.73818 20.0469 5.3944 19.584C5 19.053 5 18.1108 5 16.2264V7.77357C5 5.88919 5 4.94701 5.3944 4.41598C5.73818 3.9531 6.26501 3.66111 6.83973 3.6149C7.49907 3.5619 8.29805 4.06126 9.896 5.05998L16.6582 9.28638Z"
								/>
							</svg>

							<p>Trailer</p>
						</div>
					</button>
				</div>
			</div>
        `;
	};

	const movieList = document.querySelector(".movie-lists");
	movieList.innerHTML = movies.map(createMovieCard).join("");
})();

const scrollToLeft = () => {
	document.querySelector(".movie-lists").scrollBy({ left: -700, behavior: "smooth" });
};

const scrollToRight = () => {
	document.querySelector(".movie-lists").scrollBy({ left: +700, behavior: "smooth" });
};
