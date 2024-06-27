'use client';

import * as React from 'react';
import Link from 'next/link';
import { type IExamination } from '@aafiat/common';
import { Chip } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import { DataGrid, GridToolbar, type GridColDef } from '@mui/x-data-grid';
import { Eye } from '@phosphor-icons/react/dist/ssr';
import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';
import dayjs from 'dayjs';

export function ExaminationsList({ examinations }: { examinations: IExamination[] }): React.JSX.Element {
  // Table Columns
  const columns: GridColDef[] = [
    {
      field: 'examinationId',
      headerName: 'View',
      width: 300,
      renderCell: (params) => <ExaminationLinkButton {...params} />,
    },
    {
      field: 'date',
      headerName: 'Visit Date',
      width: 150,
      renderCell: (params) => <FormatDate {...params} />,
    },
    {
      field: 'localDistrict',
      headerName: 'Visit Location',
      width: 200,
    },
  ];

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <Card>
        <CardHeader subheader="Each visit can be viewd in detail" title="Visits List" />
        <Divider />
        <CardContent>
          <DataGrid
            rows={examinations}
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
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button startIcon={<PlusIcon fontSize="var(--icon-fontSize-md)" />} variant="contained">
            Add New Visit
          </Button>
        </CardActions>
      </Card>
    </form>
  );
}

const ExaminationLinkButton = (params) => {
  const examinationId = params.value;

  return (
    <Link style={{ textDecoration: 'none', color: 'black' }} href={`/dashboard/examinations/${examinationId}`}>
      <Chip
        icon={<Eye size={20} color="#4e36f5" />}
        sx={{ padding: '0.5em' }}
        label="View Examination"
        variant="filled"
      />
    </Link>
  );
};

const FormatDate = (params) => {
  const birthDate = params.value;
  return <span>{dayjs(birthDate as string).format('DD MMM YYYY')}</span>;
};
