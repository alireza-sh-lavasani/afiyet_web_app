'use client';

import React, { useEffect, useState } from 'react';
import { usePatientService } from '@/services/usePatientService';
import { beautifyId, type IPatient } from '@aafiat/common';
import { Grid } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';

import Loading from '@/components/Loading';

export function PatientProfileCard({ patientId }): React.JSX.Element {
  // TODO Refactor the data fetching mess

  const { getPatientById } = usePatientService();
  const [patient, setPatient] = useState<IPatient>();

  useEffect(() => {
    (async () => {
      // Get patient data
      setPatient(await getPatientById(patientId));
    })();
  }, []);

  if (!patient) return <Loading />;

  return (
    <Card>
      <CardContent>
        <Stack spacing={2} sx={{ alignItems: 'center' }}>
          <div>
            <Avatar src="/assets/generic-user.png" sx={{ height: '80px', width: '80px' }} />
          </div>
          <Stack spacing={1} sx={{ textAlign: 'center' }}>
            <Typography variant="h5">{patient.fullName}</Typography>
          </Stack>
        </Stack>
      </CardContent>

      <Divider />

      <Grid container sx={{ width: '100%', padding: '2em' }} spacing={3}>
        <Grid container alignItems="center" xs={12} md={6} lg={4} item>
          <Typography color="text.secondary" variant="body2" sx={{ marginRight: '1em' }}>
            Patient ID:
          </Typography>
          <Typography color="text.primary" variant="subtitle2">
            {(patient.patientId && beautifyId(patient.patientId)) || '-'}
          </Typography>
        </Grid>

        <Grid container alignItems="center" xs={12} md={6} lg={4} item>
          <Typography color="text.secondary" variant="body2" sx={{ marginRight: '1em' }}>
            Temporary Patient ID:
          </Typography>
          <Typography color="text.primary" variant="subtitle2">
            {(patient.tmpPatientId && beautifyId(patient.tmpPatientId)) || '-'}
          </Typography>
        </Grid>

        <Grid container alignItems="center" xs={12} md={6} lg={4} item />

        <Grid container alignItems="center" xs={12} md={6} lg={4} item>
          <Typography color="text.secondary" variant="body2" sx={{ marginRight: '1em' }}>
            Gender:
          </Typography>
          <Typography color="text.primary" variant="subtitle2">
            {patient.gender}
          </Typography>
        </Grid>

        <Grid container alignItems="center" xs={12} md={6} lg={4} item>
          <Typography color="text.secondary" variant="body2" sx={{ marginRight: '1em' }}>
            Marital Status:
          </Typography>
          <Typography color="text.primary" variant="subtitle2">
            {patient.maritalStatus}
          </Typography>
        </Grid>

        <Grid container alignItems="center" xs={12} md={6} lg={4} item>
          <Typography color="text.secondary" variant="body2" sx={{ marginRight: '1em' }}>
            Birth Date:
          </Typography>
          <Typography color="text.primary" variant="subtitle2">
            {dayjs(patient.birthDate).format('DD MMM YYYY')}
          </Typography>
        </Grid>

        <Grid container alignItems="center" xs={12} md={6} lg={4} item>
          <Typography color="text.secondary" variant="body2" sx={{ marginRight: '1em' }}>
            National ID:
          </Typography>
          <Typography color="text.primary" variant="subtitle2">
            {patient.uniqueGovID || '-'}
          </Typography>
        </Grid>

        <Grid container alignItems="center" xs={12} md={6} lg={4} item>
          <Typography color="text.secondary" variant="body2" sx={{ marginRight: '1em' }}>
            Emmergency Contact:
          </Typography>
          <Typography color="text.primary" variant="subtitle2">
            {patient.emmergencyContact || '-'}
          </Typography>
        </Grid>

        <Grid container alignItems="center" xs={12} md={6} lg={4} item>
          <Typography color="text.secondary" variant="body2" sx={{ marginRight: '1em' }}>
            Education:
          </Typography>
          <Typography color="text.primary" variant="subtitle2">
            {patient.education || '-'}
          </Typography>
        </Grid>
      </Grid>
      {/* <Divider />
      <CardActions>
        <Button fullWidth variant="text">
          Upload picture
        </Button>
      </CardActions> */}
    </Card>
  );
}
