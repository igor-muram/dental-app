import React from 'react';

import { GrayText, Button, Badge } from '../components';
import { Foundation, FontAwesome5 } from '@expo/vector-icons';

import styled from 'styled-components/native';
import { View, Text } from 'react-native';

export default function PatientScreen({ navigation }) {
  return (
    <View>
      <MainInfo>
        <PatientFullname>{navigation.getParam('user').fullname}</PatientFullname>
        <GrayText>{navigation.getParam('user').phone}</GrayText>
        <PatientButtons>
          <ConditionButtonView>
            <Button>Состояние зубов</Button>
          </ConditionButtonView>

          <PhoneButtonView>
            <Button color="#84d269">
              <Foundation name="telephone" size={26} color="white" />
            </Button>
          </PhoneButtonView>
        </PatientButtons>
      </MainInfo>

      <PatientAppointments>
        <AppointmentCard>
          <AppointmentCardRow>
            <FontAwesome5 name="tooth" size={16} color="#a3a3a3" />
            <AppointmentCardLabel>
              Зуб: <Text style={{ fontWeight: 'bold' }}>12</Text>
            </AppointmentCardLabel>
          </AppointmentCardRow>

          <AppointmentCardRow>
            <Foundation
              name="clipboard-notes"
              size={16}
              style={{ marginLeft: 2 }}
              color="#a3a3a3"
            />
            <AppointmentCardLabel>
              Диагноз:{' '}
              <Text style={{ fontWeight: 'bold' }}>{navigation.getParam('diagnosis')}</Text>
            </AppointmentCardLabel>
          </AppointmentCardRow>

          <AppointmentCardRow style={{ justifyContent: 'space-between', marginTop: 15 }}>
            <Badge style={{ width: 175 }} active>
              {navigation.getParam('time')}
            </Badge>
            <Badge style={{ width: 70 }} color="green">
              1500 Р
            </Badge>
          </AppointmentCardRow>
        </AppointmentCard>
      </PatientAppointments>
    </View>
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

const AppointmentCard = styled.View`
  shadow-color: black;
  elevation: 4;
  shadow-opacity: 0.4;
  shadow-radius: 5;
  padding: 20px;
  border-radius: 10px;
  background: white;
  margin-bottom: 15px;
`;

const ConditionButtonView = styled.View`
  flex: 1;
`;

const PhoneButtonView = styled.View`
  margin-left: 10px;
  width: 45px;
`;

const PatientButtons = styled.View`
  flex-direction: row;
  margin-top: 20px;
`;

const PatientFullname = styled.Text`
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 5px;
`;

const MainInfo = styled.View`
  padding: 25px;
  background: #fff;
`;

const PatientAppointments = styled.View`
  padding: 25px;
`;
