document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide', {
        type: 'loop',
        autoplay: true,
        interval: number = 3000,
        speed: number = 2000,
        pauseOnHover: boolean = true,
        padding: '10rem',
        gap: '4rem',
    } );
    splide.mount();
});


var splide_top_movies = new Splide( '.splide_top_movies', {
    type   : 'loop',
    perPage: 6,
    perMove: 6,
    speed: number = 1000,
    fixedWidth: '15.5%',
    padding: '3.2rem',
    gap: '1rem',
    arrows: true,
    pagination: false,
} );
splide_top_movies.mount();

var splide_top_shows = new Splide( '.splide_top_shows', {
    type   : 'loop',
    perPage: 6,
    perMove: 3,
    speed: number = 1000,
    fixedWidth: '15.5%',
    padding: '3.2rem',
    gap: '1rem',
    arrows: true,
    pagination: false,
} );
splide_top_shows.mount();

var splide_watch_free = new Splide( '.splide_watch_free', {
    type   : 'loop',
    perPage: 6,
    perMove: 4,
    speed: number = 1000,
    fixedWidth: '15.5%',
    padding: '3.2rem',
    gap: '1rem',
    arrows: true,
    pagination: false,
} );
splide_watch_free.mount();

var splide_best_of_tv_shows = new Splide( '.splide_best_of_tv_shows', {
    type   : 'loop',
    perPage: 6,
    perMove: 4,
    speed: number = 1000,
    fixedWidth: '15.5%',
    padding: '3.2rem',
    gap: '1rem',
    arrows: true,
    pagination: false,
} );
splide_best_of_tv_shows.mount();

var splide_top_10_in_India = new Splide( '.splide_top_10_in_India', {
    type: 'loop',
    perPage: 6,
    perMove: 3,
    speed: number = 1000,
    fixedWidth: '15.5%',
    padding: '3.2rem',
    gap: '1rem',
    arrows: true,
    pagination: false,
} );
splide_top_10_in_India.mount();

var splide_popular_zee5_originals = new Splide( '.splide_popular_zee5_originals', {
    type: 'loop',
    perPage: 6,
    perMove: 3,
    speed: number = 1000,
    fixedWidth: '15.5%',
    padding: '3.2rem',
    gap: '1rem',
    arrows: true,
    pagination: false,
} );
splide_popular_zee5_originals.mount();

var splide_imdb_top_picks = new Splide( '.splide_imdb_top_picks', {
    type: 'loop',
    perPage: 6,
    perMove: 3,
    speed: number = 1000,
    fixedWidth: '15.5%',
    padding: '3.2rem',
    gap: '1rem',
    arrows: true,
    pagination: false,
} );
splide_imdb_top_picks.mount();

var splide_evergreen_marathi_tv_shows = new Splide( '.splide_evergreen_marathi_tv_shows', {
    type: 'loop',
    perPage: 6,
    perMove: 3,
    speed: number = 1000,
    fixedWidth: '15.5%',
    padding: '3.2rem',
    gap: '1rem',
    arrows: true,
    pagination: false,
} );
splide_evergreen_marathi_tv_shows.mount();

var splide_popular_movies_on_zee5 = new Splide( '.splide_popular_movies_on_zee5', {
    type: 'loop',
    perPage: 6,
    perMove: 6,
    speed: number = 1000,
    fixedWidth: '15.5%',
    padding: '3.2rem',
    gap: '1rem',
    arrows: true,
    pagination: false,
} );
splide_popular_movies_on_zee5.mount();