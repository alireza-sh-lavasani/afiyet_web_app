import { appBackend } from '@/api/api.config';

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

  return {
    getAllPatients,
  };
};
