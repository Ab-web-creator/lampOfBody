'use client'
import Search from '@/components/search/Search';
import Button from '@/components/ui/button/Button';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const PatientRecordsTable = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [filteredPatients, setFilteredPatients] = useState(null);

  const patients = [
    {
      id: 1,
      name: 'Yusuf Alim',
      dob: '1990-01-01',
      lastVisit: '2025-02-20',
      condition: 'Hyperopia',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      dob: '1982-05-14',
      lastVisit: '2025-02-15',
      condition: 'High degree Myopia',
      status: 'Active'
    },
    {
      id: 3,
      name: 'Michael Chen',
      dob: '1975-09-22',
      lastVisit: '2025-02-10',
      condition: 'Astigmatism',
      status: 'Active'
    },
    // Modified Alex Thompson to be Inactive
    {
      id: 13,
      name: 'Alex Thompson',
      dob: '1987-03-12',
      lastVisit: '2025-02-24',
      condition: 'Myopia',
      status: 'Inactive'
    },
    {
      id: 14,
      name: 'Emma Watson',
      dob: '1990-04-15',
      lastVisit: '2025-02-24',
      condition: 'Hyperopia',
      status: 'Active'
    },
    {
      id: 15,
      name: 'John Smith',
      dob: '1983-07-20',
      lastVisit: '2025-02-23',
      condition: 'Open-angle Glaucoma',
      status: 'Active'
    },
    {
      id: 4,
      name: 'Emily Rodriguez',
      dob: '1995-03-30',
      lastVisit: '2025-01-25',
      condition: 'Presbyopia',
      status: 'Active'
    },
    {
      id: 5,
      name: 'David Wilson',
      dob: '1988-11-11',
      lastVisit: '2025-02-05',
      condition: 'Glaucoma',
      status: 'Active'
    },
    {
      id: 6,
      name: 'Lisa Anderson',
      dob: '1992-07-19',
      lastVisit: '2025-02-18',
      condition: 'Cataracts',
      status: 'Active'
    },
    {
      id: 7,
      name: 'Robert Taylor',
      dob: '1965-12-25',
      lastVisit: '2025-01-30',
      condition: 'Macular Degeneration',
      status: 'Inactive'
    },
    {
      id: 8,
      name: 'Jennifer Brown',
      dob: '1980-04-08',
      lastVisit: '2025-02-12',
      condition: 'Dry Eye',
      status: 'Active'
    },
    {
      id: 9,
      name: 'Thomas Lee',
      dob: '1998-02-17',
      lastVisit: '2025-02-22',
      condition: 'Color Blindness',
      status: 'Active'
    },
    {
      id: 10,
      name: 'Patricia Davis',
      dob: '1970-10-05',
      lastVisit: '2025-02-01',
      condition: 'Retinal Detachment',
      status: 'Active'
    },
    {
      id: 11,
      name: 'James Martinez',
      dob: '1985-06-28',
      lastVisit: '2025-02-08',
      condition: 'Keratitis',
      status: 'Active'
    },
    {
      id: 12,
      name: 'Maria Garcia',
      dob: '1993-08-15',
      lastVisit: '2025-02-17',
      condition: 'Conjunctivitis',
      status: 'Active'
    },
  ];

  const router = useRouter();

  const handleButtonClick = (filterType) => {
    setActiveButton(filterType);

    
    const currentDate = new Date('2025-02-24');
    
    if (filterType === 'today') {
      const todayPatients = patients.filter(patient => 
        patient.lastVisit === '2025-02-24'
      );
      setFilteredPatients(todayPatients);
    } 
    else if (filterType === 'week') {
      const weekStart = new Date(currentDate);
      weekStart.setDate(currentDate.getDate() - 7);
      
      const weekPatients = patients.filter(patient => {
        const visitDate = new Date(patient.lastVisit);
        return visitDate >= weekStart && visitDate <= currentDate;
      });
      setFilteredPatients(weekPatients);
    } 
    else if (filterType === 'month') {
      const monthStart = new Date(currentDate);
      monthStart.setDate(1);
      
      const monthPatients = patients.filter(patient => {
        const visitDate = new Date(patient.lastVisit);
        return visitDate >= monthStart && visitDate <= currentDate;
      });
      setFilteredPatients(monthPatients);
    } 
    else {
      setFilteredPatients(null);
    }
  };

  const displayedPatients = (filteredPatients || patients).sort((a, b) => a.id - b.id);

 
  
  const handleNewPatientClick = () => {
    router.push('/new-patient');  
  }; 

  return (
    <div className="mx-auto">
      <article className='flex justify-between mb-5'>
        <div className='flex gap-10'>
          <h2 className="text-2xl text-gray-500 font-semibold mb-4">Patient Records</h2>
          <div className="mb-6 flex gap-4">
            <button
              className={`px-3 py-1 text-white text-sm rounded-md transition-colors min-w-[80px] ${
                activeButton === 'today' 
                  ? 'bg-blue-600' 
                  : 'bg-gray-200 !text-black hover:!text-white hover:bg-blue-600'
              }`}
              onClick={() => handleButtonClick('today')}
            >
              Today
            </button>
            <button
              className={`px-3 py-1 text-white text-sm rounded-md transition-colors min-w-[80px] ${
                activeButton === 'week' 
                  ? 'bg-blue-600' 
                  : 'bg-gray-200 !text-black hover:!text-white hover:bg-blue-600'
              }`}
              onClick={() => handleButtonClick('week')}
            >
              This Week
            </button>
            <button
              className={`px-3 py-1 text-white text-sm rounded-md transition-colors min-w-[80px] ${
                activeButton === 'month' 
                  ? 'bg-blue-600' 
                  : 'bg-gray-200 !text-black hover:!text-white hover:bg-blue-600'
              }`}
              onClick={() => handleButtonClick('month')}
            >
              This Month
            </button>
          </div>
        </div>

       <div className="flex gap-3 mb-5 justify-end items-center">
       <div>
        <Search />
      </div>
      
 

        <Button 
            variant="secondary"
            className="!py-1 h-[33px] !px-3 !rounded-xl hover:!text-white bg-transparent !text-blue-400 border border-blue-400"
            onClick={handleNewPatientClick} // Add the click handler
          >
            + New 
          </Button>
       </div>

      </article>
      
  

      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-3 text-left text-sm font-semibold rounded-l-md text-gray-700">ID</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Date of Birth</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Last Visit</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Condition</th>
              <th className="px-4 py-3 text-left text-sm font-semibold rounded-r-md text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {displayedPatients.map((patient) => (
              <tr key={patient.id} className="border-b hover:bg-gray-50">
                <td className="px-4 text-sm py-3">{patient.id}</td>
                <td className="px-4 text-sm py-3">{patient.name}</td>
                <td className="px-4 text-sm py-3">{new Date(patient.dob).toLocaleDateString()}</td>
                <td className="px-4 text-sm py-3">{new Date(patient.lastVisit).toLocaleDateString()}</td>
                <td className="px-4 text-sm py-3">{patient.condition}</td>
                <td className="px-4 text-sm py-3">
                  <span
                    className={`inline-block px-3 py-1 font-bold rounded-lg text-sm  ${
                      patient.status.toLowerCase() === 'active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-50  text-red-800'
                    }`}
                  >
                    {patient.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientRecordsTable;