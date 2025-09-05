import React from 'react';
import './Moviecard.css';

const Moviecard = ({ movie }) => {
  return (
    <a
      href={`http://www.themoviedb.org/movie/${movie.id}`}
      target="_blank"
      rel="noreferrer"
      className="movie_card"
      aria-label={`View details for ${movie.title}`}
    >
      <img
        src={
          movie.poster_path
            ? "https://image.tmdb.org/t/p/w500" + movie.poster_path
            : "/placeholder.png"
        }
        alt="movie_poster"
        className="movie_poster"
      />

      <div className="movie_details">
        <h3 className="movie_details_heading">{movie.title}</h3>
        <div className="align_center movie_date_rate">
          <p>{movie.release_date}</p>
          <p>
            {movie.vote_average}
            <img src="/star.png" alt="rating icon" className="card_emoji" />
          </p>
        </div>
        <p className="movie_description">
          {movie.overview ? movie.overview.slice(0, 100) + "..." : ""}
        </p>
      </div>
    </a>
  );
};

export default Moviecard;
