import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import './FilterGroup.css';

const FilterGroup = ({ minRating, onRatingClick, options = [8, 7, 6] }) => {
  return (
    <ul className="movie_filter">
      {options.map(rating => (
        <li
          key={rating}
          className={minRating === rating ? 'movie_filter_item active' : 'movie_filter_item'}
          onClick={() => onRatingClick(rating)}
          role="button"
          aria-pressed={minRating === rating}
        >
          <span className="filter_rating">{rating} </span>
          <AiFillStar className="filter_star" />
        </li>
      ))}
    </ul>
  );
}

export default FilterGroup;
