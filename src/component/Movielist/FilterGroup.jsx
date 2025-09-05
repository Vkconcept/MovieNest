import React from 'react';

const FilterGroup = ({ minRating, onRatingClick, options = [8, 7, 6] }) => {
  return (
    <ul className="align_center movie_filter">
      {options.map(rating => (
        <li
          key={rating}
          className={minRating === rating ? 'movie_filter_item active' : 'movie_filter_item'}
          onClick={() => onRatingClick(rating)}
          role="button"
          aria-pressed={minRating === rating}
        >
          {rating}+ Star
        </li>
      ))}
    </ul>
  );
}

export default FilterGroup;
