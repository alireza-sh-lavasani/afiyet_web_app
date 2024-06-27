import React from 'react';
import { type IExamination } from '@aafiat/common';
import { Card, CardContent, Divider, Grid, Icon, Stack, Typography } from '@mui/material';
import { Check } from '@phosphor-icons/react/dist/ssr';

const SymptomsList = ({ examination }: { examination: IExamination }) => {
  const symptomGroups = [
    {
      title: 'General Symptoms',
      symptoms: ['hasFever', 'hasHeadache', 'hasDizziness', 'hasNausea', 'hasFatigue', 'hasWeightLoss', 'hasSweating'],
    },
    {
      title: 'Respiratory Symptoms',
      symptoms: ['hasCough', 'hasShortnessOfBreath', 'hasSoreThroat', 'hasChestPain'],
    },
    {
      title: 'Gastrointestinal Symptoms',
      symptoms: ['hasVomiting', 'hasDiarrhea', 'hasStomachPain', 'hasConstipation', 'hasAppetiteLoss'],
    },
    {
      title: 'Musculoskeletal Symptoms',
      symptoms: ['hasMusclePain', 'hasJointPain', 'hasBackPain', 'hasNeckPain'],
    },
    {
      title: 'Neurological Symptoms',
      symptoms: ['hasNumbness', 'hasSeizures', 'hasDifficultySpeaking'],
    },
    {
      title: 'Dermatological Symptoms',
      symptoms: ['hasRash', 'hasItching', 'hasBruising'],
    },
    {
      title: 'Urinary Symptoms',
      symptoms: ['hasPainfulUrination', 'hasFrequentUrination', 'hasBloodInUrine'],
    },
    {
      title: 'ENT (Ear, Nose, Throat) Symptoms',
      symptoms: ['hasEarPain', 'hasHearingLoss', 'hasNasalCongestion', 'hasRunnyNose', 'hasSneezing'],
    },
    {
      title: 'Eye Symptoms',
      symptoms: ['hasEyePain', 'hasRedEye', 'hasBlurredVision', 'hasVisionLoss'],
    },
  ];

  return (
    <Card sx={{ marginTop: '0.5em' }}>
      <CardContent>
        {symptomGroups.map((group, groupIndex) => (
          <div key={groupIndex}>
            <Typography variant="h6" sx={{ marginTop: '0.5em' }}>
              {group.title}
            </Typography>

            <Divider sx={{ marginY: '0.5em' }} />

            <Grid container spacing={2} sx={{ marginBottom: '2.5em' }}>
              {group.symptoms.map((symptom, symptomIndex) => (
                <Grid container alignItems="center" xs={12} md={6} lg={3} item key={symptomIndex}>
                  <Typography variant="body2" color="text.secondary" sx={{ marginRight: '1em' }}>
                    {symptoms[symptom]}:
                  </Typography>
                  <Typography variant="subtitle2" color="text.primary">
                    {examination?.[symptom as keyof IExamination] ? (
                      <Check size={22} fontWeight={800} color="mediumvioletred" />
                    ) : (
                      '-'
                    )}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default SymptomsList;

const symptoms = {
  titles: [
    'General Symptoms',
    'Respiratory Symptoms',
    'Gastrointestinal Symptoms',
    'Musculoskeletal Symptoms',
    'Neurological Symptoms',
    'Dermatological Symptoms',
    'Urinary Symptoms',
    'ENT (Ear, Nose, Throat) Symptoms',
    'Eye Symptoms',
  ],
  hasFever: 'Fever',
  hasHeadache: 'Headache',
  hasDizziness: 'Dizziness',
  hasNausea: 'Nausea',
  hasFatigue: 'Fatigue',
  hasWeightLoss: 'Weight Loss',
  hasSweating: 'Sweating',
  hasCough: 'Cough',
  hasShortnessOfBreath: 'Shortness of Breath',
  hasSoreThroat: 'Soar Throat',
  hasChestPain: 'Chest Pain',
  hasVomiting: 'Vomiting',
  hasDiarrhea: 'Diarrhea',
  hasStomachPain: 'Stomach Pain',
  hasConstipation: 'Constipation',
  hasAppetiteLoss: 'Appetite Loss',
  hasMusclePain: 'Muscle Pain',
  hasJointPain: 'Joint Pain',
  hasBackPain: 'Back Pain',
  hasNeckPain: 'Neck Pain',
  hasNumbness: 'Numbness',
  hasSeizures: 'Seizures',
  hasDifficultySpeaking: 'Difficulty Speaking',
  hasRash: 'Rash',
  hasItching: 'Itching',
  hasBruising: 'Bruising',
  hasPainfulUrination: 'Painful Urination',
  hasFrequentUrination: 'Frequent Urination',
  hasBloodInUrine: 'Blood in Urine',
  hasEarPain: 'Ear Pain',
  hasHearingLoss: 'Hearing Loss',
  hasNasalCongestion: 'Nasal Congestion',
  hasRunnyNose: 'Runny Nose',
  hasSneezing: 'Sneezing',
  hasEyePain: 'Eye Pain',
  hasRedEye: 'Red Eye',
  hasBlurredVision: 'Blurred Vision',
  hasVisionLoss: 'Vision Loss',
};
