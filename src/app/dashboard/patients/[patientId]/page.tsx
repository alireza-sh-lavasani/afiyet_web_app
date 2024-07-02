import * as React from 'react';
import type { Metadata } from 'next';
import { usePatientService } from '@/services/usePatientService';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

import { config } from '@/config';
import { ExaminationsList } from '@/components/dashboard/examinations/ExaminationsList';
import { PatientProfileCard } from '@/components/dashboard/patients/PatientProfileCard';

export const metadata = { title: `Patient Info Page | Dashboard | ${config.site.name}` } satisfies Metadata;

export default async function PatientVisitsPage({ params: { patientId } }) {
  // const { getPatientById, getAllPatientExaminations } = usePatientService();

  // // Get patient data
  // const patient = await getPatientById(patientId);

  // // Get examination data and adjust it for datagrid
  // let examinations = await getAllPatientExaminations(patientId);
  // examinations = examinations.map((examination) => ({
  //   id: examination.examinationId,
  //   ...examination,
  // }));

  return (
    <Stack spacing={3}>
      <div>
        <Typography variant="h4">Patient Info Page</Typography>
      </div>
      <Grid container spacing={3}>
        <Grid lg={12} md={12} xs={12}>
          <PatientProfileCard patientId={patientId} />
        </Grid>
        <Grid lg={12} md={12} xs={12}>
          <ExaminationsList patientId={patientId} />
        </Grid>
      </Grid>
    </Stack>
  );
}
