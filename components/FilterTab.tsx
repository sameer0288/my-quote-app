
import React from 'react';
import styles from './FilterTab.module.css';

interface FilterTabProps {
  options: string[];
  onSelect: (option: string) => void;
}

const FilterTab: React.FC<FilterTabProps> = ({ options, onSelect }) => {
  return (
    <div className={styles.filterTab}>
      <label htmlFor="authorFilter">Filter by Author: </label>
      <select
        id="authorFilter"
        className={styles.filterDropdown}
        onChange={(e) => onSelect(e.target.value)}
      >
        <option value="All">All</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterTab;
