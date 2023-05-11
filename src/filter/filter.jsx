import React from 'react';

const Filter = () => {
  return (
    <div className="filter">
      <h2 className="filter-title">Количество пересадок</h2>
      <label className="filter-option">
        <input type="checkbox" value="all" />
        <span>Все</span>
      </label>
      <label className="filter-option">
        <input type="checkbox" value="0" />
        <span>Без пересадок</span>
      </label>
      <label className="filter-option">
        <input type="checkbox" value="1" />
        <span>1 пересадка</span>
      </label>
      <label className="filter-option">
        <input type="checkbox" value="2" />
        <span>2 пересадки</span>
      </label>
      <label className="filter-option">
        <input type="checkbox" value="3" />
        <span>3 пересадки</span>
      </label>
    </div>
  );
};

export default Filter;