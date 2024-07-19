// Exercise - Movies

const movies = [
    { title: 'a', year: 2018, rating: 4.5},
    { title: 'b', year: 2018, rating: 4.7},
    { title: 'c', year: 2018, rating: 3},
    { title: 'd', year: 2017, rating: 4.5}
];

// All the movies in 2018 with rating >4
// sort them by their rating
// Descending order

console.log(movieRating(movies));

function movieRating(movies) {
    return movies
    .filter(movie => movie.year === 2018 && movie.rating >= 4)
    .sort((a,b) =>{
        if( a < b ) return -1;
        if( a > b ) return 1;
        return 0;
    }
    )
    .map(movie => movie.title);
}