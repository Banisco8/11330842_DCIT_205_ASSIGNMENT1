import React from 'react';
import Contactsection from '../Components/Contactsection';
import Footer from '../Components/Footer';
import '../Components/image.css';

const Help = () => {
  return (
    <>
      <Contactsection />

      <div className='faq-section'>
        <h2>Frequently Asked Questions (FAQ)</h2>
        <ul>
          <li>
            <strong>Q: How often is the grade information updated in the system?</strong>
            <p>A:The grade information is updated nightly, providing you with the latest information on your academic performance.</p>
          </li>
          <li>
            <strong>Q: What should I do if I notice a missing grade in my report?</strong>
            <p>A: If you notice a missing grade, please contact the respective instructor or course coordinator to inquire about the status of the missing assessment</p>
          </li>
          <li>
            <strong>Q:Are there any specific deadlines for instructors to submit grades?</strong>
            <p>A: Yes, instructors are required to submit grades within one week of the assessment completion. Delays beyond this timeframe should be reported to the department.</p>
          </li>
          <li>
            <strong>Q:What if I miss a deadline for submitting a missing grade report?</strong>
            <p>A:  Late submissions may be considered on a case-by-case basis. Contact the registrar's office as soon as possible to discuss your situation.</p>
          </li>
          <li>
            <strong>Q: How does the system handle temporary technical issues that may lead to missing grade information?</strong>
            <p>A: In case of technical issues, the system has automated checks and redundancies. However, if you encounter persistent problems, please report them to our technical support team.</p>
          </li>
          <li>
            <strong>Q: Can I appeal or request a review if I believe a grade is missing or incorrect?</strong>
            <p>A: Yes, you can submit a grade appeal or request a review by following the procedures outlined in our Academic Appeals Policy.</p>
          </li>
          <li>
            <strong>Q:How can I receive notifications for missing grades in real-time?</strong>
            <p>A: The system sends automated notifications via email and SMS for any missing grades. Ensure your contact information is up-to-date in your profile settings.</p>
          </li>
          
        </ul>
      </div>

      <div className='footer-grade'>
        <Footer />
      </div>
    </>
  );
};

export default Help;
