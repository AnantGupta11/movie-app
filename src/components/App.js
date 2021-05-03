import React from 'react';
import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies } from '../actions/index';

class App extends React.Component{
  componentDidMount(){

    const {store} = this.props;

    //changes show on app
    store.subscribe(()=>{
      console.log('Updated');

      //forceUpdate forcefully render the app
      this.forceUpdate();
    })

    //making api call

    //dispatch action
    store.dispatch(addMovies(data));

    console.log('STATE', this.props.store.getState());

  }
  isMovieFavourite=(movie)=>{
      const { favourites } =this.props.store.getState();

      const index = favourites.IndexOf(movie);

      if(index !== -1){
        //found the movie
        return true;
      }
      //movie not found in the favourites list
      return false;
  }
  render () {
    const { list }= this.props.store.getState(); //{list : [], favourites:[]}
    console.log('RENDER',this.props.store.getState());
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>
          <div className="list"> 
            {list.map((movie,index) =>(
              <MovieCard 
                movie={movie}
                key={`movies-${index}`}
                dispatch={this.props.store.dispatch}
                isFavourite= {this.isMovieFavourite} 
              />
            ))}
          </div>
        </div>
      </div>
    );
  }  
}

export default App;
