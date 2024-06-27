import * as React from 'react';
import type { Metadata } from 'next';
import { usePatientService } from '@/services/usePatientService';
import { config } from '@/config';
import PatientsList from '@/components/dashboard/patients/PatientsList';

export const metadata = { title: `Patients | Dashboard | ${config.site.name}` } satisfies Metadata;

export default async function Page() {
  const { getAllPatients } = usePatientService();

  // Get patients data and adjust it for data grid
  let patients = await getAllPatients();
  patients = patients.map((patient) => ({
    id: patient.patientId || patient.tmpPatientId,
    ...patient,
  }));

  return <PatientsList patients={patients} />;
}
