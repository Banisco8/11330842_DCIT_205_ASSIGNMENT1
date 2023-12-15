// InstructorList.js
import React from 'react';
import '../Components/form.css'

const instructors = [
  { id: 1, name: 'John Doe', email: 'john@gmail.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@gmail.com' },
  { id: 1, name: 'Mark Atta', email: 'markatta@gmail.com' },
  { id: 1, name: 'Micheal Soli', email: 'michealsoli@gmail.com' },
  { id: 1, name: 'Aziz Abudulai', email: 'abduaziz@gmail.com' },
  // Add more instructors as needed
];

const InstructorList = ({ onInstructorClick }) => {
  return (
    <div className="text">
      <p>Select Your Instructor</p>
      <ul>
        {instructors.map((instructor) => (
          <li key={instructor.id} onClick={() => onInstructorClick(instructor)}>
            {instructor.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InstructorList;
