'use client'

import Search from '@/components/search/Search';
import React, { useState } from 'react';

const AppointmentsTable = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [filteredAppointments, setFilteredAppointments] = useState(null);

  const appointments = [
    {
      id: 1,
      patientName: 'Yusuf Alim',
      date: '2025-02-25T10:30:00Z',
      doctor: 'Dr. Smith',
      type: 'Checkup',
      status: 'Confirmed'
    },
    {
      id: 2,
      patientName: 'Sarah Johnson',
      date: '2025-02-27T14:00:00Z',
      doctor: 'Dr. Brown',
      type: 'Consultation',
      status: 'Confirmed'
    },
    {
      id: 3,
      patientName: 'Michael Chen',
      date: '2025-03-02T11:15:00Z',
      doctor: 'Dr. Lee',
      type: 'Procedure',
      status: 'Pending'
    },
    {
      id: 4,
      patientName: 'Emma Watson',
      date: '2025-03-05T09:00:00Z',
      doctor: 'Dr. Wilson',
      type: 'Checkup',
      status: 'Confirmed'
    },
    {
      id: 5,
      patientName: 'John Smith',
      date: '2025-03-10T16:30:00Z',
      doctor: 'Dr. Martinez',
      type: 'Consultation',
      status: 'Confirmed'
    },
    {
      id: 6,
      patientName: 'Emily Rodriguez',
      date: '2025-03-12T13:45:00Z',
      doctor: 'Dr. Davis',
      type: 'Procedure',
      status: 'Confirmed'
    },
    {
      id: 7,
      patientName: 'David Wilson',
      date: '2025-03-15T10:00:00Z',
      doctor: 'Dr. Thompson',
      type: 'Checkup',
      status: 'Confirmed'
    },
    {
      id: 8,
      patientName: 'Lisa Anderson',
      date: '2025-03-20T11:30:00Z',
      doctor: 'Dr. Garcia',
      type: 'Consultation',
      status: 'Confirmed'
    },
    // Two new appointments for today (24 Feb 2025)
    {
      id: 9,
      patientName: 'James Miller',
      date: '2025-02-24T09:00:00Z',
      doctor: 'Dr. Adams',
      type: 'Checkup',
      status: 'Confirmed'
    },
    {
      id: 10,
      patientName: 'Sophia Brown',
      date: '2025-02-24T14:30:00Z',
      doctor: 'Dr. Carter',
      type: 'Consultation',
      status: 'Pending'
    },
  ];

  const handleButtonClick = (filterType) => {
    setActiveButton(filterType);
    
    const currentDate = new Date();

    if (filterType === 'today') {
      const todayAppointments = appointments.filter(appointment => {
        const appointmentDate = new Date(appointment.date);
        return (
          appointmentDate.getDate() === currentDate.getDate() &&
          appointmentDate.getMonth() === currentDate.getMonth() &&
          appointmentDate.getFullYear() === currentDate.getFullYear()
        );
      });
      setFilteredAppointments(todayAppointments);
    } 
    else if (filterType === 'upcoming') {
      const upcomingAppointments = appointments.filter(appointment => {
        const appointmentDate = new Date(appointment.date);
        return appointmentDate > currentDate;
      });
      setFilteredAppointments(upcomingAppointments);
    } 
    else {
      setFilteredAppointments(null);
    }
  };

  const displayedAppointments = filteredAppointments || appointments;

  return (
    <div className="mx-auto">
      <article className='flex justify-between mb-5'>
        <div className='flex gap-10'>
          <h2 className="text-2xl  text-gray-500  font-semibold mb-4">Appointments</h2>
          <div className="mb-6 flex gap-4">
            <button
              className={`px-3 py-1 text-white text-sm rounded-md transition-colors  ${
                activeButton === 'today' 
                  ? 'bg-blue-600' 
                  : 'bg-gray-200  !text-black hover:!text-white hover:bg-blue-600'
              }`}
              onClick={() => handleButtonClick('today')}
            >
              Today
            </button>
            <button
              className={`px-3 py-1 text-white text-sm rounded-md transition-colors  ${
                activeButton === 'upcoming' 
                  ? 'bg-blue-600' 
                  : 'bg-gray-200  !text-black hover:!text-white hover:bg-blue-600'
              }`}
              onClick={() => handleButtonClick('upcoming')}
            >
              Upcoming
            </button>
          </div>
        </div>
        <div className="w-1/3"><Search  /></div>
        
      </article>
      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-3 text-left text-sm font-semibold rounded-l-md text-gray-700">ID</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Patient Name</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Date</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Doctor</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Type</th>
              <th className="px-4 py-3 text-left text-sm font-semibold rounded-r-md text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {displayedAppointments.map((appointment) => (
              <tr key={appointment.id} className="border-b hover:bg-gray-50">
                <td className="px-4 text-sm py-3">{appointment.id}</td>
                <td className="px-4 text-sm py-3">{appointment.patientName}</td>
                <td className="px-4 text-sm py-3">{new Date(appointment.date).toLocaleString()}</td>
                <td className="px-4 text-sm py-3">{appointment.doctor}</td>
                <td className="px-4 text-sm py-3">{appointment.type}</td>
                <td className="px-4 text-sm py-3">
                  <span
                    className={`inline-block px-3 py-1 font-bold rounded-lg text-sm  ${
                      appointment.status.toLowerCase() === 'confirmed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {appointment.status}
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

export default AppointmentsTable;
