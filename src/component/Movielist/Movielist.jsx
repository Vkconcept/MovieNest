import React, { useEffect, useState } from 'react';
import './Movielist.css';
import Moviecard from './Moviecard';
import FilterGroup from './FilterGroup';
import { FaSun, FaMoon } from 'react-icons/fa';

const Movielist = ({ type, title, emoji }) => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState({ by: 'default', order: 'asc' });
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    fetchMovies();
  }, [type]);

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${type}?api_key=f4092e452a0d67cf166cd520f1a63c0e&language=en-US&page=1`
      );
      const data = await response.json();
      setMovies(data.results || []);
      setFilteredMovies(data.results || []);
    } catch (error) {
      console.error("Failed to fetch movies:", error);
      setMovies([]);
      setFilteredMovies([]);
    }
  }

  const handleFilter = (rating) => {
    if (rating === minRating) {
      setMinRating(0);
    } else {
      setMinRating(rating);
    }
  }

  const handleSort = (e) => {
    const { name, value } = e.target;
    setSort(prev => ({ ...prev, [name]: value }));
  }

  useEffect(() => {
    let baseList = minRating > 0 ? movies.filter(movie => movie.vote_average >= minRating) : movies;

    if (sort.by !== 'default') {
      baseList = [...baseList].sort((a, b) => {
        let aVal = a[sort.by];
        let bVal = b[sort.by];
        if (sort.by === 'release_date') {
          aVal = new Date(aVal).getTime();
          bVal = new Date(bVal).getTime();
        }
        return sort.order === 'asc' ? aVal - bVal : bVal - aVal;
      });
    }

    setFilteredMovies(baseList);
  }, [sort, minRating, movies]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  }

  return (
    <section className={`movie_list ${theme}`} id={type}>
      <header className='align_center movie_list_header'>
        <h2 className='align_center movie_list_heading'>
          {title} <img src={emoji} alt={`${title} icon`} className='Navbar_emoji' />
        </h2>

        <div className='align_center movie_list_fs'>
          <FilterGroup minRating={minRating} onRatingClick={handleFilter} />

          <select name="by" onChange={handleSort} value={sort.by} className="movie_sorting">
            <option value="default">SortBy</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>

          <select name="order" onChange={handleSort} value={sort.order} className="movie_sorting">
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>

          <button onClick={toggleTheme} className="theme_toggle">
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>
        </div>
      </header>

      <div className="movie_cards">
        {filteredMovies?.map(movie => (
          <Moviecard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}

export default Movielist;
