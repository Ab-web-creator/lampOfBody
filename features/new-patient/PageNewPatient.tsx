// features/new-patient/PageNewPatient.jsx
'use client'
import React, { useState } from 'react';
import PersonalInfo from './components/PersonalInfo';
import MedicalHistory from './components/MedicalHistory';
import InitialExams from './components/InitialExams';
 

interface PageNewPatientProps {
  children?: React.ReactNode;
}

const PageNewPatient: React.FC<PageNewPatientProps> = ({ children }) => {
  const [activeComponent, setActiveComponent] = useState('personal');

  const renderContent = () => {
    switch (activeComponent) {
      case 'personal':
        return <PersonalInfo />;
      case 'medical':
        return <MedicalHistory />;
      case 'exams':
        return <InitialExams />;
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
              onClick={() => setActiveComponent('personal')}
              className={`w-full text-left px-2 text-gray-700 hover:text-blue-600 ${
                activeComponent === 'personal' ? '!text-blue-600 font-bold' : ''
              }`}
            >
              Personal Info
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveComponent('medical')}
              className={`w-full text-left px-2 text-gray-700 hover:text-blue-600 ${
                activeComponent === 'medical' ? '!text-blue-600 font-bold' : ''
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
              Initial Exams
            </button>
          </li>
    
        </ul>
      </aside>
      <div className="pt-10 flex-1 px-8">{renderContent()}</div>
    </div>
  );
};

export default PageNewPatient;