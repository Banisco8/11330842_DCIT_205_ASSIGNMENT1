
import React from 'react';
import { FaPhone, FaEnvelope, FaLocationDot } from 'react-icons/fa6';
import Placeholder from './Placeholder';

const ContactInfo = () => {
  return (
    <div>
      <Placeholder icon={<FaPhone />} text="+233 501 382 035" backgroundColor="black" />
      <Placeholder icon={<FaEnvelope />} text="dcs@ug.edu.gh" backgroundColor="black" />
      <Placeholder icon={<FaLocationDot />} text="University of Ghana, Legon" backgroundColor="black" />
    </div>
  );
};

export default ContactInfo;
