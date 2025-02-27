// features/new-patient/PageNewPatient.jsx
'use client'
import React, { useState } from 'react';
import PersonalInfo from './components/PersonalInfo';
import MedicalHistory from './components/MedicalHistory';
import VisualAcuity from './components/VisualAcuity';
import OtherCheckups from './components/OtherCheckups';
 

interface PageNewPatientProps {
  children?: React.ReactNode;
}

const PageNewPatient: React.FC<PageNewPatientProps> = ({ children }) => {

  const [activeComponent, setActiveComponent] = useState('personal-info');

  const renderContent = () => {
    switch (activeComponent) {
      case 'personal-info':
        return <PersonalInfo setActiveComponent={setActiveComponent} />;
      case 'medical-history':
        return <MedicalHistory setActiveComponent={setActiveComponent} />;
      case 'exams':
        return <VisualAcuity  setActiveComponent={setActiveComponent} />;
      case 'otherExams':
        return <OtherCheckups setActiveComponent={setActiveComponent} />;
      default:
        return children;
    }
  };

  return (
    <div className="flex w-full">
      <aside className="py-10 w-fit px-4 bg-gray-50">
        <ul className="mt-10 space-y-4">
          <li>
            <button
              onClick={() => setActiveComponent('personal-info')}
              className={`w-full text-left px-2 text-gray-700 hover:text-blue-600 ${
                activeComponent === 'personal-info' ? '!text-blue-600 font-bold' : ''
              }`}
            >
              Personal Info
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveComponent('medical-history')}
              className={`w-full text-left px-2 text-gray-700 hover:text-blue-600 ${
                activeComponent === 'medical-history' ? '!text-blue-600 font-bold' : ''
              }`}
            >
              Medical History
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveComponent('exams')}
              className={`w-full text-left px-2 text-gray-700 hover:text-blue-600 ${
                activeComponent === 'exams' ? '!text-blue-600 font-bold' : ''
              }`}
            >
              Visual Acuity
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveComponent('otherExams')}
              className={`w-full text-left px-2 text-gray-700 hover:text-blue-600 ${
                activeComponent === 'otherExams' ? '!text-blue-600 font-bold' : ''
              }`}
            >
              Other Checkups
            </button>
          </li>
    
        </ul>
      </aside>
      <div className="pt-10 flex-1 px-8">{renderContent()}</div>
    </div>
  );
};

export default PageNewPatient;