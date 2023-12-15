// MissingGradesAlerts.js

import React from 'react';
const MissingGradesAlerts = () => {
  // Assume missing grades data is received as props or fetched from an API
  const missingGradesData = [
    { subject: 'History' },
    // Add more subjects with missing grades as needed
  ];

  return (
    <div>
      <h2>Missing Grades Alerts</h2>
      {missingGradesData.length > 0 ? (
        <ul>
          {missingGradesData.map((subject, index) => (
            <li key={index}>{subject} grades are missing!</li>
          ))}
        </ul>
      ) : (
        <p>No missing grades alerts.</p>
      )}
    </div>
  );
};

export default MissingGradesAlerts;
