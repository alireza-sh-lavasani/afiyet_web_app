import * as React from 'react';
import { Grid } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';

export function PatientProfileCard({ patient }): React.JSX.Element {
  console.log({ patient });

  return (
    <Card>
      <CardContent>
        <Stack spacing={2} sx={{ alignItems: 'center' }}>
          <div>
            <Avatar src={'/assets/avatar.png'} sx={{ height: '80px', width: '80px' }} />
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
            {dayjs(patient.birthDate as string).format('DD MMM YYYY')}
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
