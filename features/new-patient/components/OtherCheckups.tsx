import React from 'react';
import Button from '@/components/ui/button/Button';

interface OtherCheckupsProps {
  setActiveComponent: (component: string) => void;
}

const OtherCheckups: React.FC<OtherCheckupsProps> = ({ setActiveComponent }) => (

 

  <div className='py-10'>
    <h2 className="mb-10">Other Checkups</h2>
    <form>
    <section className="space-y-10">
      {/* Ocular Health and Function */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-600">Ocular Health and Function</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <label htmlFor="pupilResponseOD" className="block">Pupil Response (RE - Right Eye)</label>
            <input
              id="pupilResponseOD"
              type="text"
              placeholder="e.g., Normal, Sluggish"
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label htmlFor="pupilResponseOS" className="block">Pupil Response (LE - Left Eye)</label>
            <input
              id="pupilResponseOS"
              type="text"
              placeholder="e.g., Normal, Sluggish"
              className="w-full border p-2 rounded"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <label htmlFor="ocularMotilityOD" className="block">Ocular Motility (RE - Right Eye)</label>
            <input
              id="ocularMotilityOD"
              type="text"
              placeholder="e.g., Full, Limited"
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label htmlFor="ocularMotilityOS" className="block">Ocular Motility (LE - Left Eye)</label>
            <input
              id="ocularMotilityOS"
              type="text"
              placeholder="e.g., Full, Limited"
              className="w-full border p-2 rounded"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <label htmlFor="externalEyeOD" className="block">External Eye Exam (RE - Right Eye)</label>
            <input
              id="externalEyeOD"
              type="text"
              placeholder="e.g., Normal, Redness"
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label htmlFor="externalEyeOS" className="block">External Eye Exam (LE - Left Eye)</label>
            <input
              id="externalEyeOS"
              type="text"
              placeholder="e.g., Normal, Redness"
              className="w-full border p-2 rounded"
            />
          </div>
        </div>
      </div>

      {/* Specialized Tests */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-600">Specialized Tests</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <label htmlFor="visualFieldOD" className="block">Visual Field (RE - Right Eye)</label>
            <input
              id="visualFieldOD"
              type="text"
              placeholder="e.g., Normal, Restricted"
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label htmlFor="visualFieldOS" className="block">Visual Field (LE - Left Eye)</label>
            <input
              id="visualFieldOS"
              type="text"
              placeholder="e.g., Normal, Restricted"
              className="w-full border p-2 rounded"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <label htmlFor="intraocularPressureOD" className="block">Intraocular Pressure (RE - Right Eye, mmHg)</label>
            <input
              id="intraocularPressureOD"
              type="text"
              placeholder="e.g., 15"
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label htmlFor="intraocularPressureOS" className="block">Intraocular Pressure (LE - Left Eye, mmHg)</label>
            <input
              id="intraocularPressureOS"
              type="text"
              placeholder="e.g., 15"
              className="w-full border p-2 rounded"
            />
          </div>
        </div>
      </div>
      </section>

      <div className="mt-10 flex gap-2">
          <Button variant='secondary'
           onClick={() => setActiveComponent('visual-acuity')}
          >Prev</Button>
          <Button variant='primary'>Send</Button>
      </div>
    </form>
  </div>
);

export default OtherCheckups;