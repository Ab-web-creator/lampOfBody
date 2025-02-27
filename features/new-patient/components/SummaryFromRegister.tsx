// features/new-patient/components/Summary.jsx
import React from 'react';

// Interfaces remain the same (omitted for brevity)

const SummaryFromRegister: React.FC<SummaryProps> = ({ 
  personalInfo, 
  medicalHistory, 
  visualAcuity, 
  otherCheckups 
}) => {
  return (
    <div className="mt-10 max-w-4xl mx-auto p-6 mb-20 rounded-lg shadow-lg space-y-8 bg-slate-100">
      <h2 className="text-3xl font-bold text-gray-500  pb-2">The Summary of the new Patient</h2>

      {/* Personal Information Section */}
      <section className="bg-white p-4 rounded-md">
        <h3 className="text-xl font-semibold text-gray-400 mb-3">Personal Information</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <span className="text-gray-600 font-medium">Name:</span>
            <p className="text-gray-800 min-h-10 font-bold border border-gray-300 rounded-md p-2">{personalInfo.name}</p>
          </div>
          <div>
            <span className="text-gray-600 font-medium">Email:</span>
            <p className="text-gray-800 min-h-10 font-bold border border-gray-300 rounded-md p-2">{personalInfo.email}</p>
          </div>
          <div>
            <span className="text-gray-600 font-medium">Phone:</span>
            <p className="text-gray-800 min-h-10 font-bold border border-gray-300 rounded-md p-2">{personalInfo.phone}</p>
          </div>
          <div>
            <span className="text-gray-600 font-medium">Date of Birth:</span>
            <p className="text-gray-800 min-h-10 font-bold border border-gray-300 rounded-md p-2">{personalInfo.dob}</p>
          </div>
        </div>
      </section>

      {/* Medical History Section */}
      <section className="bg-white p-4 rounded-md">
        <h3 className="text-xl font-semibold text-gray-400 mb-3">Medical History</h3>
        <div>
          <span className="text-gray-600 font-medium">Conditions:</span>
          <p className="text-gray-800 font-bold border border-gray-300 rounded-md p-2 mt-1">{medicalHistory.conditions || 'None reported'}</p>
        </div>
      </section>

      {/* Visual Acuity Section */}
      <section className="bg-white p-4 rounded-md">
        <h3 className="text-xl font-semibold text-gray-400 mb-3">Visual Acuity</h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-600 mb-2">Right Eye (OD)</h4>
            <p>VA: {visualAcuity.visualAcuityOD}</p>
            <p>Corrected: {visualAcuity.correctedVisualAcuityOD}</p>
            <p>Refraction: {visualAcuity.refractionOD.sphere}/{visualAcuity.refractionOD.cylinder} x {visualAcuity.refractionOD.axis}</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-600 mb-2">Left Eye (OS)</h4>
            <p>VA: {visualAcuity.visualAcuityOS}</p>
            <p>Corrected: {visualAcuity.correctedVisualAcuityOS}</p>
            <p>Refraction: {visualAcuity.refractionOS.sphere}/{visualAcuity.refractionOS.cylinder} x {visualAcuity.refractionOS.axis}</p>
          </div>
          <div className="col-span-2 mt-2">
            <p>PD Total: {visualAcuity.pdTotal}</p>
            <p>PD OD: {visualAcuity.pdOD} / PD OS: {visualAcuity.pdOS}</p>
          </div>
        </div>
      </section>

      {/* Other Checkups Section */}
      <section className="bg-white p-4 rounded-md">
        <h3 className="text-xl font-semibold text-gray-400 mb-3">Other Checkups</h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-600 mb-2">Right Eye (OD)</h4>
            <p>Pupil Response: {otherCheckups.pupilResponseOD}</p>
            <p>Ocular Motility: {otherCheckups.ocularMotilityOD}</p>
            <p>External Eye: {otherCheckups.externalEyeOD}</p>
            <p>Visual Field: {otherCheckups.visualFieldOD}</p>
            <p>IOP: {otherCheckups.intraocularPressureOD}</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-600 mb-2">Left Eye (OS)</h4>
            <p>Pupil Response: {otherCheckups.pupilResponseOS}</p>
            <p>Ocular Motility: {otherCheckups.ocularMotilityOS}</p>
            <p>External Eye: {otherCheckups.externalEyeOS}</p>
            <p>Visual Field: {otherCheckups.visualFieldOS}</p>
            <p>IOP: {otherCheckups.intraocularPressureOS}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SummaryFromRegister;