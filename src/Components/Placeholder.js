import React from 'react';
import PropTypes from 'prop-types';

const Placeholder = ({ icon, text, backgroundColor }) => {
  const containerStyle = {
    backgroundColor: backgroundColor || 'black', 
    padding: '.5rem', 
    display: 'flex',
    alignItems: 'left',
    gap: '2rem',
    borderRadius: '8px',
    margin:'2rem',
    width: '400px',
    marginLeft: '-100px',
    color: 'white',
    

    
  };

  return (
    <div className="placeholder-container" style={containerStyle}>
      {icon && <span className="placeholder-icon">{icon}</span>}
      {text && <span className="placeholder-text">{text}</span>}
    </div>
  );
};

Placeholder.propTypes = {
  icon: PropTypes.node,
  text: PropTypes.string,
  backgroundColor: PropTypes.string,
  marginLeft: PropTypes.string,
 
};

export default Placeholder;
