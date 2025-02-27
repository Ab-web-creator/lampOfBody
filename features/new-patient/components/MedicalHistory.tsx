// features/new-patient/components/MedicalHistory.jsx
import React from 'react';

const MedicalHistory = () => (
  <div className='pt-10'>
    <h2 className="mb-5">Medical History</h2>
    <form className="space-y-4">
      <div>
        <label htmlFor="conditions" className="block">Existing Conditions</label>
        <textarea id="conditions" className="w-full border p-2 rounded" />
      </div>
    </form>
  </div>
);

export default MedicalHistory;