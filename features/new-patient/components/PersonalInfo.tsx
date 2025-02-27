// features/new-patient/components/PersonalInfo.jsx

import { useRouter } from 'next/navigation';
import Button from '@/components/ui/button/Button';
import React, { useState } from 'react';

interface PersonalInfoProps {
  setActiveComponent: (component: string) => void;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ setActiveComponent }) => {
  
  const router = useRouter();
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 10) {
      const formatted = value
        .replace(/(\d{0,3})(\d{0,3})(\d{0,4})/, '($1) $2-$3')
        .trim();
      setPhone(formatted);
    }
  };

  return (
    <div className='pt-10'>
      <h2 className="mb-5">Personal Information</h2>
      <form>
      <section className="space-y-4">
        <div className="w-1/2">
          <label htmlFor="name" className="block">Name</label>
          <input id="name" type="text" className="w-full border p-2 rounded" />
        </div>
        <div className="w-1/2">
          <label htmlFor="email" className="block">Email</label>
          <input id="email" type="email" className="w-full border p-2 rounded" />
        </div>
        <div className="w-1/3">
          <label htmlFor="phone" className="block">Phone Number</label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={handlePhoneChange}
            placeholder="(123) 456-7890"
            className="w-full border p-2 rounded"
            maxLength={14}
          />
        </div>
        <div className="w-1/3">
          <label htmlFor="dateOfBirth" className="block">Date of Birth</label>
          <input
            id="dateOfBirth"
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="w-full border p-2 rounded"
            max={new Date().toISOString().split('T')[0]}
          />
        </div>
        </section>

        <div className="mt-10 flex gap-2">
          <Button variant='secondary'   type="button" 
            onClick={() => router.push('/')}
           >Cancel</Button>
          <Button variant='primary'
            onClick={() => setActiveComponent('medical-history')}
            >
              Next</Button>
        </div>

      </form>
    </div>
  );
};

export default PersonalInfo;