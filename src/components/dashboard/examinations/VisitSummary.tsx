/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
'use client';

import React, { useEffect, useState } from 'react';
import { usePatientService } from '@/services/usePatientService';
import { Card, CardContent, Grid, Stack, Typography } from '@mui/material';

import Loading from '@/components/Loading';

const VisitSummary = ({ examinationId }) => {
  // TODO Refactor the data fetching mess

  const { getExaminationById } = usePatientService();
  const [examination, setExamination] = useState();

  useEffect(() => {
    (async () => {
      // Get patients data and adjust it for data grid
      setExamination(await getExaminationById(examinationId));
    })();
  }, []);

  if (!examination) return <Loading />;

  return (
    <Stack>
      {/* Location Card */}
      <Card sx={{ marginTop: '1em' }}>
        <CardContent>
          <div>
            <Typography variant="h6" sx={{ marginBottom: '0.5em' }}>
              Visit Location
            </Typography>
          </div>

          <Grid container sx={{ width: '100%', padding: '2em' }} spacing={3}>
            <Grid container alignItems="center" xs={12} md={6} lg={4} item>
              <Typography color="text.secondary" variant="body2" sx={{ marginRight: '1em' }}>
                Zoba:
              </Typography>
              <Typography color="text.primary" variant="subtitle2">
                {examination.zoba || '-'}
              </Typography>
            </Grid>

            <Grid container alignItems="center" xs={12} md={6} lg={4} item>
              <Typography color="text.secondary" variant="body2" sx={{ marginRight: '1em' }}>
                Sub Zoba:
              </Typography>
              <Typography color="text.primary" variant="subtitle2">
                {examination.subZoba || '-'}
              </Typography>
            </Grid>

            <Grid container alignItems="center" xs={12} md={6} lg={4} item>
              <Typography color="text.secondary" variant="body2" sx={{ marginRight: '1em' }}>
                Local District:
              </Typography>
              <Typography color="text.primary" variant="subtitle2">
                {examination.localDistrict || '-'}
              </Typography>
            </Grid>

            <Grid container alignItems="center" xs={12} md={6} lg={4} item>
              <Typography color="text.secondary" variant="body2" sx={{ marginRight: '1em' }}>
                Longitude:
              </Typography>
              <Typography color="text.primary" variant="subtitle2">
                {examination.longitude || '-'}
              </Typography>
            </Grid>

            <Grid container alignItems="center" xs={12} md={6} lg={4} item>
              <Typography color="text.secondary" variant="body2" sx={{ marginRight: '1em' }}>
                Latitude:
              </Typography>
              <Typography color="text.primary" variant="subtitle2">
                {examination.latitude || '-'}
              </Typography>
            </Grid>

            <Grid container alignItems="center" xs={12} md={6} lg={4} item>
              <Typography color="text.secondary" variant="body2" sx={{ marginRight: '1em' }}>
                Address:
              </Typography>
              <Typography color="text.primary" variant="subtitle2">
                {examination.address || '-'}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Vitals Card */}
      <Card sx={{ marginTop: '0.5em' }}>
        <CardContent>
          <div>
            <Typography variant="h6" sx={{ marginBottom: '0.5em' }}>
              Vital Signs
            </Typography>
          </div>

          <Grid container sx={{ width: '100%', padding: '2em' }} spacing={3}>
            <Grid container alignItems="center" xs={12} md={6} lg={3} item>
              <Typography color="text.secondary" variant="body2" sx={{ marginRight: '1em' }}>
                Temperature:
              </Typography>
              <Typography color="text.primary" variant="subtitle2">
                {examination.temperature + ' C' || '-'}
              </Typography>
            </Grid>

            <Grid container alignItems="center" xs={12} md={6} lg={3} item>
              <Typography color="text.secondary" variant="body2" sx={{ marginRight: '1em' }}>
                Blood Pressure Systolic:
              </Typography>
              <Typography color="text.primary" variant="subtitle2">
                {examination.bloodPressureSystolic + ' mm/hg' || '-'}
              </Typography>
            </Grid>

            <Grid container alignItems="center" xs={12} md={6} lg={3} item>
              <Typography color="text.secondary" variant="body2" sx={{ marginRight: '1em' }}>
                Blood Pressure Diastolic:
              </Typography>
              <Typography color="text.primary" variant="subtitle2">
                {examination.bloodPressureDiastolic + ' mm/hg' || '-'}
              </Typography>
            </Grid>

            <Grid container alignItems="center" xs={12} md={6} lg={3} item>
              <Typography color="text.secondary" variant="body2" sx={{ marginRight: '1em' }}>
                Heart Rate:
              </Typography>
              <Typography color="text.primary" variant="subtitle2">
                {examination.heartRate + ' bpm' || '-'}
              </Typography>
            </Grid>

            <Grid container alignItems="center" xs={12} md={6} lg={3} item>
              <Typography color="text.secondary" variant="body2" sx={{ marginRight: '1em' }}>
                Respiratory Rate:
              </Typography>
              <Typography color="text.primary" variant="subtitle2">
                {examination.respiratoryRate + ' breath/min' || '-'}
              </Typography>
            </Grid>

            <Grid container alignItems="center" xs={12} md={6} lg={3} item>
              <Typography color="text.secondary" variant="body2" sx={{ marginRight: '1em' }}>
                Oxygen Saturation:
              </Typography>
              <Typography color="text.primary" variant="subtitle2">
                {examination.oxygenSaturation + '%' || '-'}
              </Typography>
            </Grid>

            <Grid container alignItems="center" xs={12} md={6} lg={3} item>
              <Typography color="text.secondary" variant="body2" sx={{ marginRight: '1em' }}>
                Blood Sugar:
              </Typography>
              <Typography color="text.primary" variant="subtitle2">
                {examination.bloodSugar + 'mg/dl' || '-'}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default VisitSummary;
