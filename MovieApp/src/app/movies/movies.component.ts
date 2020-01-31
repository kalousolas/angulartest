import { Component } from '@angular/core';
//import { Movies } from '../movie.datasource';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
    selector: 'movies',
    templateUrl: 'movies.component.html',
    //styles: ['h2 {color:blue;}']
    // template: '<h2>{{"Title: " + getTitle()}}</h2> <div>{{movie.id}}</div> <div>{{movie.name}}</div> '
})
export class MoviesComponent {
    title = 'Movies List';
    // movie: Movie = {
    //     id: 1,
    //     name: 'Movie Name'
    // }

    // movies = ['movie 1', 'movie 2', 'movie 3'];
    movies: Movie[];
    selectedMovie: Movie;

    constructor(private movieService: MovieService) {

    }
    ngOnInit(): void {
        this.getMovies();
    }

    getTitle() {
        return this.title;
    }

    onSelect(movie: Movie): void {
        this.selectedMovie = movie;
    }

    getMovies(): void {
        this.movieService.getMovies().subscribe(movies => {
            this.movies = movies;
        });
    }

    add(name: string, imageUrl: string, description: string): void {
        this.movieService.add({
            name,
            imageUrl,
            description
        } as Movie).subscribe(movie => this.movies.push(movie));
    }

    delete(movie: Movie): void {
        this.movies = this.movies.filter(m => m !== movie);
        this.movieService.delete(movie).subscribe();
    }
}