import React, { useState, useEffect } from 'react';
import Button from '@/components/ui/button/Button';

interface VisualAcuityProps {
  setActiveComponent: (component: string) => void;
  data: {
    visualAcuityOD?: string;
    visualAcuityOS?: string;
    correctedVisualAcuityOD?: string;
    correctedVisualAcuityOS?: string;
    refractionOD_sphere?: string;
    refractionOD_cylinder?: string;
    refractionOD_axis?: string;
    refractionOS_sphere?: string;
    refractionOS_cylinder?: string;
    refractionOS_axis?: string;
    pdTotal?: string;
    pdOD?: string;
    pdOS?: string;
  };
  onChange: (data: Partial<VisualAcuityProps['data']>) => void;
}

const VisualAcuity: React.FC<VisualAcuityProps> = ({ setActiveComponent, data, onChange }) => {
  const [formData, setFormData] = useState(data);

  useEffect(() => {
    setFormData(data);
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    onChange({ [id]: value });
  };

  return (
    <div className='py-10'>
      <h2 className="mb-10">Initial Checkups - done at the registry</h2>
      <form>
        <section className="space-y-10">
          {/* Visual Acuity Assessment */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-600">Visual Acuity Assessment</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <div>
                <label htmlFor="visualAcuityOD" className="block">Visual Acuity (RE - Right Eye)</label>
                <input id="visualAcuityOD" type="text" placeholder="e.g., 20/20" className="w-full border p-2 rounded" value={formData.visualAcuityOD || ''} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="visualAcuityOS" className="block">Visual Acuity (LE - Left Eye)</label>
                <input id="visualAcuityOS" type="text" placeholder="e.g., 20/20" className="w-full border p-2 rounded" value={formData.visualAcuityOS || ''} onChange={handleChange} />
              </div>
            </div>
          </div>

          {/* Pupillary Distance (PD) */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-600">Pupillary Distance (PD)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
              <div>
                <label htmlFor="pdTotal" className="block">Total PD (mm)</label>
                <input id="pdTotal" type="number" placeholder="e.g., 62" className="w-full border p-2 rounded" value={formData.pdTotal || ''} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="pdOD" className="block">PD (RE - Right Eye, mm)</label>
                <input id="pdOD" type="number" placeholder="e.g., 31" className="w-full border p-2 rounded" value={formData.pdOD || ''} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="pdOS" className="block">PD (LE - Left Eye, mm)</label>
                <input id="pdOS" type="number" placeholder="e.g., 31" className="w-full border p-2 rounded" value={formData.pdOS || ''} onChange={handleChange} />
              </div>
            </div>
          </div>
        </section>

        <div className="mt-10 flex gap-2">
          <Button variant='secondary' onClick={() => setActiveComponent('medical-history')}>Prev</Button>
          <Button variant='primary' onClick={() => setActiveComponent('otherExams')}>Next</Button>
        </div>
      </form>
    </div>
  );
};

export default VisualAcuity;
