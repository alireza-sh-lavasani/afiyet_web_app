import * as React from 'react';
import type { Metadata } from 'next';
import { useRouter } from 'next/router';
import { usePatientService } from '@/services/usePatientService';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

import { config } from '@/config';
import { AccountDetailsForm } from '@/components/dashboard/account/account-details-form';
import { AccountInfo } from '@/components/dashboard/account/account-info';
import { PatientProfileCard } from '@/components/dashboard/patients/PatientProfileCard';

export const metadata = { title: `Account | Dashboard | ${config.site.name}` } satisfies Metadata;

export default async function PatientVisitsPage({ params: { patientId } }) {
  const { getPatientById } = usePatientService();
  const patient = await getPatientById(patientId);

  return (
    <Stack spacing={3}>
      <div>
        <Typography variant="h4">Patient Info Page</Typography>
      </div>
      <Grid container spacing={3}>
        <Grid lg={12} md={12} xs={12}>
          <PatientProfileCard patient={patient} />
        </Grid>
        <Grid lg={12} md={12} xs={12}>
          <AccountDetailsForm />
        </Grid>
      </Grid>
    </Stack>
  );
}
