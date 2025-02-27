import React from 'react';
import { PersonalInfoData, MedicalHistoryData, VisualAcuityData, OtherExamsData } from '../../types/types';

// Define the SummaryProps interface that includes the data props
interface SummaryProps {
  personalInfo: PersonalInfoData;
  medicalHistory: MedicalHistoryData;
  visualAcuity: VisualAcuityData;
  otherCheckups: OtherExamsData;
}

// The functional component
const SummaryFromRegister: React.FC<SummaryProps> = ({
  personalInfo,
  medicalHistory,
  visualAcuity,
  otherCheckups,
}) => {
  const safeOtherCheckups = otherCheckups || {}; // Safe check for undefined props

  return (
    <div className="mt-10 max-w-4xl mx-auto p-6 mb-20 rounded-lg shadow-lg space-y-8 bg-slate-100">
      <h2 className="text-3xl font-bold text-gray-500 pb-2">The Summary of the new Patient</h2>

      {/* Personal Information Section */}
      <section className="bg-white p-4 rounded-md">
        <h3 className="text-xl font-semibold text-gray-400 mb-3">Personal Information</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <span className="text-gray-600 font-medium">Name:</span>
            <p className="text-gray-800 min-h-10  border border-gray-300 rounded-md p-2">
              {personalInfo.name || 'N/A'}
            </p>
          </div>
          <div>
            <span className="text-gray-600 font-medium">Email:</span>
            <p className="text-gray-800 min-h-10  border border-gray-300 rounded-md p-2">
              {personalInfo.email || 'N/A'}
            </p>
          </div>
          <div>
            <span className="text-gray-600 font-medium">Phone:</span>
            <p className="text-gray-800 min-h-10  border border-gray-300 rounded-md p-2">
              {personalInfo.phone || 'N/A'}
            </p>
          </div>
          <div>
            <span className="text-gray-600 font-medium">Date of Birth:</span>
            <p className="text-gray-800 min-h-10  border border-gray-300 rounded-md p-2">
              {personalInfo.dob || 'N/A'}
            </p>
          </div>
        </div>
      </section>

      {/* Medical History Section */}
      <section className="bg-white p-4 rounded-md">
        <h3 className="text-xl font-semibold text-gray-400 mb-3">Medical History</h3>
        <div>
          <span className="text-gray-600 font-medium">Conditions:</span>
          <p className="text-gray-800 border border-gray-300 rounded-md p-2 mt-1">
            {medicalHistory.conditions || 'None reported'}
          </p>
        </div>
      </section>

      {/* Visual Acuity Section */}
      <section className="bg-white p-4 rounded-md">
        <h3 className="text-xl font-semibold text-gray-400 mb-3">Visual Acuity</h3>
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className=''>
              <h4 className="font-medium text-gray-600 mb-2">Right Eye (OD)</h4>
              <article className='border border-gray-200 py-2 px-4 rounded-md'>
                <p>VA: {visualAcuity.visualAcuityOD || 'N/A'}</p>
                <p>Corrected: {visualAcuity.correctedVisualAcuityOD || 'N/A'}</p>
              </article>
            </div>
            <div>
              <h4 className="font-medium text-gray-600 mb-2">Left Eye (OS)</h4>
              <article className='border border-gray-200 py-2 px-4 rounded-md'>
                <p>VA: {visualAcuity.visualAcuityOS || 'N/A'}</p>
                <p>Corrected: {visualAcuity.correctedVisualAcuityOS || 'N/A'}</p>
              </article>
            </div>
          </div>

          {/* Refraction Data */}
          <div>
            <h4 className="font-medium text-gray-600 mb-2">Refraction</h4>
            <div className="grid grid-cols-2 gap-6">
              <div>
              <article className='border border-gray-200 py-2 px-4 rounded-md'>
                <p>
                  OD:{' '}
                  {visualAcuity.refractionOD_sphere || 'N/A'}{' '} {'/'} {' '}
                  {visualAcuity.refractionOD_cylinder || 'N/A'} x{' '}
                  {visualAcuity.refractionOD_axis || 'N/A'}
                </p>
                </article>
              </div>
              <div>
              <article className='border border-gray-200 py-2 px-4 rounded-md'>
                <p>
                  OS:{' '}
                  {visualAcuity.refractionOS_sphere || 'N/A'}{' '} {'/'} {' '}
                  {visualAcuity.refractionOS_cylinder || 'N/A'} x{' '}
                  {visualAcuity.refractionOS_axis || 'N/A'}
                </p>
                </article>
              </div>
            </div>
          </div>

          {/* Pupillary Distance */}
          <div className="mt-2 flex gap-10 pl-4">
            <p>PD Total (mm): {visualAcuity.pdTotal || 'N/A'}</p>
            <p>PD OD: {visualAcuity.pdOD || 'N/A'}  </p>
            <p> PD OS: {visualAcuity.pdOS || 'N/A'}</p>
          </div>
        </div>
      </section>

      {/* Other Checkups Section */}
      <section className="bg-white p-4 rounded-md">
        <h3 className="text-xl font-semibold text-gray-400 mb-3">Other Checkups</h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-600 mb-2">Right Eye (OD)</h4>
            <article className='border border-gray-200 py-2 px-4 rounded-md'>
              <p>Pupil Response: {safeOtherCheckups.pupilResponseOD || 'N/A'}</p>
              <p>Ocular Motility: {safeOtherCheckups.ocularMotilityOD || 'N/A'}</p>
              <p>External Eye: {safeOtherCheckups.externalEyeOD || 'N/A'}</p>
              <p>Visual Field: {safeOtherCheckups.visualFieldOD || 'N/A'}</p>
              <p>IOP: {safeOtherCheckups.intraocularPressureOD || 'N/A'}</p>
            </article>
          </div>
          <div>
            <h4 className="font-medium text-gray-600 mb-2">Left Eye (OS)</h4>
            <article className='border border-gray-200 py-2 px-4 rounded-md'>
            <p>Pupil Response: {safeOtherCheckups.pupilResponseOS || 'N/A'}</p>
            <p>Ocular Motility: {safeOtherCheckups.ocularMotilityOS || 'N/A'}</p>
            <p>External Eye: {safeOtherCheckups.externalEyeOS || 'N/A'}</p>
            <p>Visual Field: {safeOtherCheckups.visualFieldOS || 'N/A'}</p>
            <p>IOP: {safeOtherCheckups.intraocularPressureOS || 'N/A'}</p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SummaryFromRegister;