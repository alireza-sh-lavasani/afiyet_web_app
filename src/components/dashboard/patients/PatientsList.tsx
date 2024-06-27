'use client';

import React from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { DataGrid, GridToolbar, type GridColDef } from '@mui/x-data-grid';
import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';
import dayjs from 'dayjs';

function PatientsList({ patients }) {
  // Table Columns
  const columns: GridColDef[] = [
    {
      field: 'patientId',
      headerName: 'Patient ID',
      width: 200,
      renderCell: (params) => <BeautifyID {...params} />,
    },
    { field: 'fullName', headerName: 'Full Name', width: 350 },
    {
      field: 'birthDate',
      headerName: 'Brith Date',
      width: 150,
      renderCell: (params) => <FormatDate {...params} />,
    },
    {
      field: 'tmpPatientId',
      headerName: 'Temporary Patient ID',
      width: 200,
      renderCell: (params) => <BeautifyID {...params} />,
    },
  ];

  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
          <Typography variant="h4">Patients</Typography>
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            {/* <Button color="inherit" startIcon={<UploadIcon fontSize="var(--icon-fontSize-md)" />}>
              Import
            </Button>
            <Button color="inherit" startIcon={<DownloadIcon fontSize="var(--icon-fontSize-md)" />}>
              Export
            </Button> */}
          </Stack>
        </Stack>
        <div>
          <Button startIcon={<PlusIcon fontSize="var(--icon-fontSize-md)" />} variant="contained">
            Add New Patient
          </Button>
        </div>
      </Stack>

      <DataGrid
        rows={patients}
        columns={columns}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
        initialState={{
          sorting: {
            sortModel: [{ field: 'updatedAt', sort: 'desc' }],
          },
          filter: {
            filterModel: {
              items: [],
              quickFilterExcludeHiddenColumns: false,
            },
          },
        }}
      />
    </Stack>
  );
}

export default PatientsList;

const BeautifyID = (params) => {
  const id: string = params.value;

  return (
    <span>
      {id.slice(0, 2)}-{id.slice(2, 10)}-{id.slice(10)}
    </span>
  );
};

const FormatDate = (params) => {
  const birthDate = params.value;
  return <span>{dayjs(birthDate as string).format('DD MMM YYYY')}</span>;
};
