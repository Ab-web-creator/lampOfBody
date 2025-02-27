import React, { useEffect, useState } from 'react';
import Button from '@/components/ui/button/Button';
import { VisualAcuityData } from '../../types/types';

interface VisualAcuityProps {
  setActiveComponent: (component: string) => void;
  data: VisualAcuityData;
  onChange: (data: Partial<VisualAcuityData>) => void;
}

const VisualAcuity: React.FC<VisualAcuityProps> = ({ setActiveComponent, data, onChange }) => {
  const [formData, setFormData] = useState<VisualAcuityData>({
    visualAcuityOD: data.visualAcuityOD ?? '',
    visualAcuityOS: data.visualAcuityOS ?? '',
    correctedVisualAcuityOD: data.correctedVisualAcuityOD ?? '',
    correctedVisualAcuityOS: data.correctedVisualAcuityOS ?? '',
    refractionOD_sphere: data.refractionOD_sphere ?? '',
    refractionOD_cylinder: data.refractionOD_cylinder ?? '',
    refractionOD_axis: data.refractionOD_axis ?? '',
    refractionOS_sphere: data.refractionOS_sphere ?? '',
    refractionOS_cylinder: data.refractionOS_cylinder ?? '',
    refractionOS_axis: data.refractionOS_axis ?? '',
    pdTotal: data.pdTotal ?? '',
    pdOD: data.pdOD ?? '',
    pdOS: data.pdOS ?? '',
  });

  useEffect(() => {
    setFormData({
      visualAcuityOD: data.visualAcuityOD ?? '',
      visualAcuityOS: data.visualAcuityOS ?? '',
      correctedVisualAcuityOD: data.correctedVisualAcuityOD ?? '',
      correctedVisualAcuityOS: data.correctedVisualAcuityOS ?? '',
      refractionOD_sphere: data.refractionOD_sphere ?? '',
      refractionOD_cylinder: data.refractionOD_cylinder ?? '',
      refractionOD_axis: data.refractionOD_axis ?? '',
      refractionOS_sphere: data.refractionOS_sphere ?? '',
      refractionOS_cylinder: data.refractionOS_cylinder ?? '',
      refractionOS_axis: data.refractionOS_axis ?? '',
      pdTotal: data.pdTotal ?? '',
      pdOD: data.pdOD ?? '',
      pdOS: data.pdOS ?? '',
    });
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setFormData((prev) => {
      const updatedData = { ...prev, [id]: value };
      setTimeout(() => onChange(updatedData), 0); // Defer parent update
      return updatedData;
    });
  };

  return (
    <div className="py-10">
      <h2 className="mb-10">Initial Checkups - done at the registry</h2>
      <form>
        <section className="space-y-10">
          {/* Uncorrected Visual Acuity Assessment */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-600">Uncorrected Visual Acuity Assessment</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <div>
                <label htmlFor="visualAcuityOD" className="block">
                  Visual Acuity, RE (OD)
                </label>
                <input
                  id="visualAcuityOD"
                  type="text"
                  placeholder="e.g., 20/40"
                  className="w-full border p-2 rounded"
                  value={formData.visualAcuityOD || ''}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="visualAcuityOS" className="block">
                  Visual Acuity, LE (OS)
                </label>
                <input
                  id="visualAcuityOS"
                  type="text"
                  placeholder="e.g., 20/40"
                  className="w-full border p-2 rounded"
                  value={formData.visualAcuityOS || ''}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Corrected Visual Acuity Assessment */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-600">Corrected Visual Acuity Assessment</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <div>
                <label htmlFor="correctedVisualAcuityOD" className="block">
                  RE (OD)
                </label>
                <input
                  id="correctedVisualAcuityOD"
                  type="text"
                  placeholder="e.g., 20/20"
                  className="w-full border p-2 rounded"
                  value={formData.correctedVisualAcuityOD || ''}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="correctedVisualAcuityOS" className="block">
                  LE (OS)
                </label>
                <input
                  id="correctedVisualAcuityOS"
                  type="text"
                  placeholder="e.g., 20/20"
                  className="w-full border p-2 rounded"
                  value={formData.correctedVisualAcuityOS || ''}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Refraction Data */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-600">Refraction Data</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              {/* Right Eye Refraction */}
              <div className="space-y-4">
                <h4 className="font-medium text-gray-600">Right Eye (OD)</h4>
              <section className='flex gap-4'>
              <div>
                  <label htmlFor="refractionOD_sphere" className="block">
                    Sph
                  </label>
                  <input
                    id="refractionOD_sphere"
                    type="text"
                    placeholder="e.g., -2.50"
                    className="w-full border p-2 rounded"
                    value={formData.refractionOD_sphere || ''}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="refractionOD_cylinder" className="block">
                    Cyl
                  </label>
                  <input
                    id="refractionOD_cylinder"
                    type="text"
                    placeholder="e.g., -1.00"
                    className="w-full border p-2 rounded"
                    value={formData.refractionOD_cylinder || ''}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="refractionOD_axis" className="block">
                    Axis (°)
                  </label>
                  <input
                    id="refractionOD_axis"
                    type="text"
                    placeholder="e.g., 90"
                    className="w-full border p-2 rounded"
                    value={formData.refractionOD_axis || ''}
                    onChange={handleChange}
                  />
                </div>
              </section>
              </div>

              {/* Left Eye Refraction */}
              <div className="space-y-4">
                <h4 className="font-medium text-gray-600">Left Eye (OS)</h4>
                <section className='flex gap-4'>
               <div>
                  <label htmlFor="refractionOS_sphere" className="block">
                    Sph
                  </label>
                  <input
                    id="refractionOS_sphere"
                    type="text"
                    placeholder="e.g., +1.00"
                    className="w-full border p-2 rounded"
                    value={formData.refractionOS_sphere || ''}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="refractionOS_cylinder" className="block">
                    Cyl
                  </label>
                  <input
                    id="refractionOS_cylinder"
                    type="text"
                    placeholder="e.g., -0.50"
                    className="w-full border p-2 rounded"
                    value={formData.refractionOS_cylinder || ''}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="refractionOS_axis" className="block">
                    Axis (°)
                  </label>
                  <input
                    id="refractionOS_axis"
                    type="text"
                    placeholder="e.g., 180"
                    className="w-full border p-2 rounded"
                    value={formData.refractionOS_axis || ''}
                    onChange={handleChange}
                  />
                </div>
               </section>
              </div>
            </div>
          </div>

          {/* Pupillary Distance (PD) */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-600">Pupillary Distance (PD)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
              <div>
                <label htmlFor="pdTotal" className="block">
                  Total PD (mm)
                </label>
                <input
                  id="pdTotal"
                  type="number"
                  placeholder="e.g., 62"
                  className="w-full border p-2 rounded"
                  value={formData.pdTotal || ''}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="pdOD" className="block">
                  PD (RE, mm)
                </label>
                <input
                  id="pdOD"
                  type="number"
                  placeholder="e.g., 31"
                  className="w-full border p-2 rounded"
                  value={formData.pdOD || ''}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="pdOS" className="block">
                  PD (LE, mm)
                </label>
                <input
                  id="pdOS"
                  type="number"
                  placeholder="e.g., 31"
                  className="w-full border p-2 rounded"
                  value={formData.pdOS || ''}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </section>

        <div className="mt-10 flex gap-2">
          <Button variant="secondary" onClick={() => setActiveComponent('medical-history')}>
            Prev
          </Button>
          <Button variant="primary" onClick={() => setActiveComponent('otherExams')}>
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default VisualAcuity;