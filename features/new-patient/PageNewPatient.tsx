'use client'

import React, { useState } from 'react';
import PersonalInfo from './components/PersonalInfo';
import MedicalHistory from './components/MedicalHistory';
import VisualAcuity from './components/VisualAcuity';
import OtherCheckups from './components/OtherCheckups';

interface PersonalInfoData {
  name: string;
  age?: number;
  // Add more fields as needed
}


interface MedicalHistoryData {
  [key: string]: string | string[] | undefined;  // Generic structure
}

interface VisualAcuityData {
  leftEye: number;
  rightEye: number;
  // Add more fields as needed
}

interface OtherExamsData {
  bloodPressure: string;
  heartRate: string;
  // Add more fields as needed
}


const PageNewPatient = () => {
  const [personalInfo, setPersonalInfo] = useState({});
  const [medicalHistory, setMedicalHistory] = useState({});
  const [visualAcuity, setVisualAcuity] = useState({});
  const [otherExams, setOtherExams] = useState({});

  const [activeComponent, setActiveComponent] = useState('personal-info');

  // Callbacks to update states from child components
  const handlePersonalInfoChange = (data: PersonalInfoData) => {
    setPersonalInfo(data);
  };
  
  const handleMedicalHistoryChange = (data: MedicalHistoryData) => {
    setMedicalHistory(data);
  };
  
  const handleVisualAcuityChange = (data: VisualAcuityData) => {
    setVisualAcuity(data);
  };
  
  const handleOtherExamsChange = (data: OtherExamsData) => {
    setOtherExams(data);
  };
  


  const renderContent = () => {
    switch (activeComponent) {
      case 'personal-info':
        return (
          <PersonalInfo
            data={personalInfo}
            onChange={handlePersonalInfoChange}
            setActiveComponent={setActiveComponent}
          />
        );
      case 'medical-history':
        return (
          <MedicalHistory
            data={medicalHistory}
            onChange={handleMedicalHistoryChange}
            setActiveComponent={setActiveComponent}
          />
        );
      case 'visual-acuity':
        return (
          <VisualAcuity
            data={visualAcuity}
            onChange={handleVisualAcuityChange}
            setActiveComponent={setActiveComponent}
          />
        );
      case 'otherExams':
        return (
          <OtherCheckups
            data={otherExams}
            onChange={handleOtherExamsChange}
            setActiveComponent={setActiveComponent}
          />
        );
      default:
        return null;
    }
  };
  

  return (
    <div className="flex w-full">
      {/* Aside component with navigation buttons */}
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
              onClick={() => setActiveComponent('visual-acuity')}
              className={`w-full text-left px-2 text-gray-700 hover:text-blue-600 ${
                activeComponent === 'visual-acuity' ? '!text-blue-600 font-bold' : ''
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

      {/* Main content area */}
      <div className="pt-10 flex-1 px-8">{renderContent()}</div>
    </div>
  );
};

export default PageNewPatient;
