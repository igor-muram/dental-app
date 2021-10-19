import React from 'react';

import Badge from './Badge';
import { Foundation, FontAwesome5 } from '@expo/vector-icons';
import { Text } from 'react-native';

import styled from 'styled-components/native';

export default function AppointmentCard({ tooth, price, diagnosis, time }) {
  return (
    <AppointmentCardView>
      <AppointmentCardRow>
        <FontAwesome5 name="tooth" size={16} color="#a3a3a3" />
        <AppointmentCardLabel>
          Зуб: <Text style={{ fontWeight: 'bold' }}>{tooth}</Text>
        </AppointmentCardLabel>
      </AppointmentCardRow>

      <AppointmentCardRow>
        <Foundation name="clipboard-notes" size={16} style={{ marginLeft: 2 }} color="#a3a3a3" />
        <AppointmentCardLabel>
          Диагноз: <Text style={{ fontWeight: 'bold' }}>{diagnosis}</Text>
        </AppointmentCardLabel>
      </AppointmentCardRow>

      <AppointmentCardRow style={{ justifyContent: 'space-between', marginTop: 15 }}>
        <Badge style={{ width: 175 }} active>
          {time}
        </Badge>
        <Badge style={{ width: 70 }} color="green">
          {price} Р
        </Badge>
      </AppointmentCardRow>
    </AppointmentCardView>
  );
}

const AppointmentCardLabel = styled.Text`
  font-size: 16px;
  margin-left: 10px;
`;

const AppointmentCardRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
  margin-bottom: 4px;
`;

const AppointmentCardView = styled.View`
  shadow-color: black;
  elevation: 4;
  shadow-opacity: 0.4;
  shadow-radius: 5;
  padding: 20px;
  border-radius: 10px;
  background: white;
  margin-bottom: 15px;
`;
