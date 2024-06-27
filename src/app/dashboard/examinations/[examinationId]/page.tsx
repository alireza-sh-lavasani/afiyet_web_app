import * as React from 'react';
import type { Metadata } from 'next';
import { usePatientService } from '@/services/usePatientService';
import { Grid, Stack, Typography } from '@mui/material';

import { config } from '@/config';
import VisitSummary from '@/components/dashboard/examinations/VisitSummary';
import SymptomsList from '@/components/dashboard/examinations/Symptoms'

export const metadata = { title: `Examination | Dashboard | ${config.site.name}` } satisfies Metadata;

export default async function ExaminationPage({ params: { examinationId } }) {
  const { getExaminationById } = usePatientService();

  // Get patients data and adjust it for data grid
  const examination = await getExaminationById(examinationId);

  return (
    <Stack spacing={3}>
      <div>
        <Typography variant="h4">
          Visit Details
        </Typography>
      </div>
      <Grid container spacing={3}>
        <Grid lg={12} md={12} xs={12}>
          <VisitSummary examination={examination} />
        </Grid>
        <Grid lg={12} md={12} xs={12}>
          <SymptomsList examination={examination} />
        </Grid>
      </Grid>
    </Stack>
  );
}
