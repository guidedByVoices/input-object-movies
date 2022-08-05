let movies = [];

const addMovie = (ev)=>{
    ev.preventDefault();
    let movie = {
        id: Date.now(),
        title: document.getElementById('title').value,
        year: document.getElementById('yr').value,
        genre: document.getElementById('genre').value,
        rating: document.getElementById('rating').value
    }
    movies.push(movie);
    document.querySelector('form').reset();

    console.warn('added' , {movies} );
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(movies, '\t', 2);

    localStorage.setItem('MyMovieList', JSON.stringify(movies) );
}

const deleteMovie = (ev)=>{
    movies.pop()
};

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addMovie);
});
// document.addEventListener('DOMContentLoaded', ()=>{
//     document.getElementById('btnDelete').addEventListener('click', deleteMovie);
// });