import { appBackend } from '@/api.config';

export const usePatientService = () => {
  /**************************************
   ******** Get all patients
   *************************************/
  const getAllPatients = async () => {
    try {
      const { data } = await appBackend.get('/patient');
      return data;
    } catch (error) {
      console.error(`[Patient Service] Failed to fetch patients`);
      return [];
    }
  };

  /**************************************
   ******** Get patient by id
   *************************************/
  const getPatientById = async (patientId: string) => {
    try {
      const { data } = await appBackend.get(`/patient/${patientId}`);
      return data;
    } catch (error) {
      console.error(`[Patient Service] Failed to fetch patient with id: ${patientId}`);
    }
  };

  /**************************************
   ******** Get all examinations of a patient
   *************************************/
  const getAllPatientExaminations = async (patientId: string) => {
    try {
      const { data } = await appBackend.get(`/patient/${patientId}/examination`);
      return data;
    } catch (error) {
      console.error(`[Patient Service] Failed to fetch list of examinations for patient with id: ${patientId}`);
    }
  };

  /**************************************
   ******** Get examination by id
   *************************************/
  const getExaminationById = async (examinationId: string) => {
    try {
      const { data } = await appBackend.get(`/examination/${examinationId}`);
      return data;
    } catch (error) {
      console.error(`[Patient Service] Failed to fetch examination with id: ${examinationId}`);
    }
  };

  return {
    getAllPatients,
    getPatientById,
    getAllPatientExaminations,
    getExaminationById,
  };
};
