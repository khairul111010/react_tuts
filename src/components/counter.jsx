import React, { Component } from 'react';
import { getMovies } from './movies';


class Counter extends React.Component {
    state = {
        movies: getMovies(),
    }

    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m.id!==movie.id)
        this.setState({movies:movies})
    
    }
    render() { 
        return <React.Fragment>
            <table className="table">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Delete</td>
                    </tr>
                </thead>
                <tbody>
                    {this.state.movies.map(movie => 
                    <tr key={movie.id}>
                        <td>{movie.name}</td>
                        <td><button onClick={()=>this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                    </tr>)}
                </tbody>
            </table>
        </React.Fragment>;
    }
}
  


export default Counter;