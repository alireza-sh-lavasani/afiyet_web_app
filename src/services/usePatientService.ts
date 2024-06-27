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
    }
  };

  const getPatientById = async (patientId: string) => {
    try {
      const { data } = await appBackend.get(`/patient/${patientId}`);
      return data;
    } catch (error) {
      console.error(`[Patient Service] Failed to fetch patient with id: ${patientId}`);
    }
  };

  return {
    getAllPatients,
    getPatientById,
  };
};
