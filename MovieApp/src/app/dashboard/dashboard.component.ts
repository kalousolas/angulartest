import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor(private moviesService: MovieService) { }
  movies: Movie[] = [];
  movieLength:number;

  ngOnInit() {
    this.getMovies();
  }

  getMovies(): void {
    this.moviesService.getMovies().subscribe(
      movies => {
        this.movies = movies.slice(0, 5);
        this.movieLength = movies.length;
      }    
      
      );
  }
}
