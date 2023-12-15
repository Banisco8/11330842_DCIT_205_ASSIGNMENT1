// GradeList.js
import React from 'react';
import '../Components/form.css'

const grades = [
  { id: 1, course:  'DCIT 101', grade: 'A', semester: 'FIRST SEMESTER' },
  { id: 2, course:  'DCIT 103', grade: 'B', semester: 'FIRST SEMESTER' },
  { id: 3, course:  'MATH 121', grade: 'A', semester: 'FIRST SEMESTER' },
  { id: 4, course:  'MATH 123', grade: 'B+', semester: 'FIRST SEMESTER' },
  { id: 5, course:  'UGRC 150', grade: 'B+', semester: 'FIRST SEMESTER' },
  { id: 6, course:  'STAT 111', grade: 'B+', semester: 'FIRST SEMESTER' },
  { id: 7, course:  'MATH 126', grade: 'C+', semester: 'SECOND SEMESTER' },
  { id: 8, course:  'MATH 122', grade: 'A', semester: 'SECOND SEMESTER' },
  { id: 9, course:  'UGRC 110', grade: 'A', semester: 'SECOND SEMESTER' },
  { id: 10, course: 'DCIT 102', grade: 'B', semester: 'SECOND SEMESTER' },
  { id: 11, course: 'STAT 112', grade: 'A', semester: 'SECOND SEMESTER' },
  { id: 12, course: 'DCIT 104', grade: 'B+', semester: 'SECOND SEMESTER' },
  
];

const GradeList = ({ selectedSemester }) => {
  const filteredGrades = selectedSemester
    ? grades.filter((grade) => grade.semester === selectedSemester)
    : grades;

  return (
    <div className="grade">
      <h3>List of Grades</h3>
      <ul>
        {filteredGrades.map((grade) => (
          <li key={grade.id}>
            {grade.course} - Grade: {grade.grade} (Semester: {grade.semester})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GradeList;
