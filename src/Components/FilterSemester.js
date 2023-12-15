// FilterSemester.js
import React, { useState } from 'react';

const semesters = ['FIRST SEMESTER', 'SECOND SEMESTER']; // Add more semesters as needed

const FilterSemester = ({ onSelectSemester }) => {
  const [selectedSemester, setSelectedSemester] = useState(null);

  const handleSemesterChange = (e) => {
    const selected = e.target.value;
    setSelectedSemester(selected);
    onSelectSemester(selected);
  };

  return (
    <div>
      <h3>Filter by Semester</h3>
      <select value={selectedSemester} onChange={handleSemesterChange}>
        <option value="">All Semesters</option>
        {semesters.map((semester) => (
          <option key={semester} value={semester}>
            {semester}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterSemester;
