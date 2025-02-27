// src/types.ts
export interface PersonalInfoData {
  name?: string;
  age?: number;
  email?: string;
  phone?: string;
  dob?: string;
}

export interface MedicalHistoryData {
  [key: string]: string | string[] | undefined;
}

export interface VisualAcuityData {
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
}

export interface OtherExamsData {
  pupilResponseOD?: string;
  pupilResponseOS?: string;
  ocularMotilityOD?: string;
  ocularMotilityOS?: string;
  externalEyeOD?: string;
  externalEyeOS?: string;
  visualFieldOD?: string;
  visualFieldOS?: string;
  intraocularPressureOD?: string;
  intraocularPressureOS?: string;
}