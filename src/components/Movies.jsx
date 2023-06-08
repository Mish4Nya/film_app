import {Movie} from './Movie';

function Movies (props){
    const { movies = [] }= props;

    return(
        <div className="movies">
           {movies.length ? (
               movies.map((movie)=> <Movie key={movie.imdbID} {...movie} />)
           ): (
            <div className='notfound'>
               <h4>Not found</h4>
            </div>
           )}
        </div>
   );
}

export {Movies};