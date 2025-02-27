import React, { useEffect, useState } from 'react';
import Button from '@/components/ui/button/Button';

interface MedicalHistoryProps {
  setActiveComponent: (component: string) => void;
  data: { conditions?: string };
  onChange: (data: { conditions?: string }) => void;
}

const MedicalHistory: React.FC<MedicalHistoryProps> = ({ setActiveComponent, data, onChange }) => {
  const [conditions, setConditions] = useState(data.conditions || '');

  useEffect(() => {
    setConditions(data.conditions || '');
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setConditions(e.target.value);
    onChange({ conditions: e.target.value });
  };

  return (
    <div className='pt-10'>
      <h2 className="mb-5">Medical History</h2>
      <form>
        <section className="space-y-4">
          <div>
            <label htmlFor="conditions" className="block">Existing Conditions</label>
            <textarea
              id="conditions"
              className="w-full border p-2 rounded"
              value={conditions}
              onChange={handleChange}
            />
          </div>
        </section>

        <div className="mt-10 flex gap-2">
          <Button variant='secondary' onClick={() => setActiveComponent('personal-info')}>
            Prev
          </Button>
          <Button variant='primary' onClick={() => setActiveComponent('visual-acuity')}>
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default MedicalHistory;
