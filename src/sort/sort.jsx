import React from 'react';

const Sort = () => {
  return (
    <div className="sort">
      <span className="sort-title">Сортировать по:</span>
      <label className="sort-option">
        <input type="radio" name="sort" value="cheap" />
        <span>Самый дешевый</span>
      </label>
      <label className="sort-option">
        <input type="radio" name="sort" value="fast" />
        <span>Самый быстрый</span>
      </label>
    </div>
  );
};

export default Sort;
