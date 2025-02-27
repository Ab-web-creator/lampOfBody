import { useRouter } from 'next/navigation';
import Button from '@/components/ui/button/Button';
import React, { useEffect, useState } from 'react';

interface PersonalInfoProps {
  setActiveComponent: (component: string) => void;
  data: { name?: string; email?: string; phone?: string; dob?: string };
  onChange: (data: { name?: string; email?: string; phone?: string; dob?: string }) => void;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ setActiveComponent, data = {}, onChange }) => {
  const router = useRouter();

  // Ensure defaults are always strings to prevent uncontrolled inputs
  const [formData, setFormData] = useState({
    name: data.name ?? '',
    email: data.email ?? '',
    phone: data.phone ?? '',
    dob: data.dob ?? '',
  });

  useEffect(() => {
    setFormData({
      name: data.name ?? '',
      email: data.email ?? '',
      phone: data.phone ?? '',
      dob: data.dob ?? '',
    });
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    let updatedValue = value;

    if (id === 'phone') {
      const numericValue = value.replace(/\D/g, '');
      if (numericValue.length <= 10) {
        updatedValue = numericValue
          .replace(/(\d{0,3})(\d{0,3})(\d{0,4})/, '($1) $2-$3')
          .trim();
      }
    }

    const updatedData = { ...formData, [id]: updatedValue };
    setFormData(updatedData);
    onChange(updatedData);
  };

  return (
    <div className='pt-10'>
      <h2 className="mb-5">Personal Information</h2>
      <form>
        <section className="space-y-4">
          <div className="w-1/2">
            <label htmlFor="name" className="block">Name</label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="email" className="block">Email</label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
          <div className="w-1/3">
            <label htmlFor="phone" className="block">Phone Number</label>
            <input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(123) 456-7890"
              className="w-full border p-2 rounded"
              maxLength={14}
            />
          </div>
          <div className="w-1/3">
            <label htmlFor="dob" className="block">Date of Birth</label>
            <input
              id="dob"
              type="date"
              value={formData.dob}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              max={new Date().toISOString().split('T')[0]}
            />
          </div>
        </section>

        <div className="mt-10 flex gap-2">
          <Button variant='secondary' type="button" onClick={() => router.push('/')}>Cancel</Button>
          <Button variant='primary' type="button" onClick={() => setActiveComponent('medical-history')}>
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
