// features/new-patient/components/MedicalHistory.jsx
import React from 'react';
import Button from '@/components/ui/button/Button';

interface MedicalHistoryProps {
  setActiveComponent: (component: string) => void;
}

const MedicalHistory: React.FC<MedicalHistoryProps> = ({ setActiveComponent }) => (

  <div className='pt-10'>
    <h2 className="mb-5">Medical History</h2>
    <form>
    <section className="space-y-4">
      <div>
        <label htmlFor="conditions" className="block">Existing Conditions</label>
        <textarea id="conditions" className="w-full border p-2 rounded" />
      </div>
      </section>

      <div className="mt-10 flex gap-2">
          <Button variant='secondary'
          onClick={() => setActiveComponent('personal-info')} 
          >Prev</Button>
          <Button variant='primary'  
          onClick={() => setActiveComponent('exams')} 
          >Next</Button>
      </div>

    </form>
  </div>
);

export default MedicalHistory;