import React from 'react';
import Button from '@/components/ui/button/Button';

interface VisualAcuityProps {
  setActiveComponent: (component: string) => void;
}

const VisualAcuity: React.FC<VisualAcuityProps> = ({ setActiveComponent }) => (


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
            <input
              id="visualAcuityOD"
              type="text"
              placeholder="e.g., 20/20"
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label htmlFor="visualAcuityOS" className="block">Visual Acuity (LE - Left Eye)</label>
            <input
              id="visualAcuityOS"
              type="text"
              placeholder="e.g., 20/20"
              className="w-full border p-2 rounded"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <label htmlFor="correctedVisualAcuityOD" className="block">Corrected Visual Acuity (RE - Right Eye)</label>
            <input
              id="correctedVisualAcuityOD"
              type="text"
              placeholder="e.g., 20/20"
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label htmlFor="correctedVisualAcuityOS" className="block">Corrected Visual Acuity (LE - Left Eye)</label>
            <input
              id="correctedVisualAcuityOS"
              type="text"
              placeholder="e.g., 20/20"
              className="w-full border p-2 rounded"
            />
          </div>
        </div>
      </div>

      {/* Refractive Assessment */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-600">Refractive Assessment</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <label className="block">Refraction (RE - Right Eye)</label>
            <div className="grid grid-cols-3 gap-2">
              <input
                id="refractionOD_sphere"
                type="number"
                step="0.25"
                placeholder="Sphere (e.g., -2.00)"
                className="w-full border p-2 rounded"
              />
              <input
                id="refractionOD_cylinder"
                type="number"
                step="0.25"
                placeholder="Cylinder (e.g., -0.50)"
                className="w-full border p-2 rounded"
              />
              <input
                id="refractionOD_axis"
                type="number"
                min="0"
                max="180"
                placeholder="Axis (0-180 settings)"
                className="w-full border p-2 rounded"
              />
            </div>
          </div>
          <div>
            <label className="block">Refraction (LE - Left Eye)</label>
            <div className="grid grid-cols-3 gap-2">
              <input
                id="refractionOS_sphere"
                type="number"
                step="0.25"
                placeholder="Sphere (e.g., -1.75)"
                className="w-full border p-2 rounded"
              />
              <input
                id="refractionOS_cylinder"
                type="number"
                step="0.25"
                placeholder="Cylinder (e.g., -0.25)"
                className="w-full border p-2 rounded"
              />
              <input
                id="refractionOS_axis"
                type="number"
                min="0"
                max="180"
                placeholder="Axis (0-180)"
                className="w-full border p-2 rounded"
              />
            </div>
          </div>
        </div>
      </div>

           {/* Pupillary Distance (PD) */}
           <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-600">Pupillary Distance (PD)</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          <div>
            <label htmlFor="pdTotal" className="block">Total PD (mm)</label>
            <input
              id="pdTotal"
              type="number"
              placeholder="e.g., 62"
              className="w-full border p-2 rounded"
              min="0"
            />
          </div>
          <div>
            <label htmlFor="pdOD" className="block">PD (RE - Right Eye, mm)</label>
            <input
              id="pdOD"
              type="number"
              placeholder="e.g., 31"
              className="w-full border p-2 rounded"
              min="0"
            />
          </div>
          <div>
            <label htmlFor="pdOS" className="block">PD (LE - Left Eye, mm)</label>
            <input
              id="pdOS"
              type="number"
              placeholder="e.g., 31"
              className="w-full border p-2 rounded"
              min="0"
            />
          </div>
        </div>
      </div>
 
      </section>

      <div className="mt-10 flex gap-2">
          <Button variant='secondary'
          onClick={() => setActiveComponent('medical-history')} 
          >Prev</Button>
          <Button variant='primary'
           onClick={() => setActiveComponent('otherExams')}
           >Next</Button>
      </div>
    </form>
  </div>
);

export default VisualAcuity;