import React from 'react';

import { GrayText, Button, AppointmentCard } from '../components';
import { Foundation } from '@expo/vector-icons';

import styled from 'styled-components/native';
import { View } from 'react-native';

const cards = [
  {
    id: 1,
    tooth: 12,
    price: 1500,
  },
  {
    id: 2,
    tooth: 15,
    price: 1100,
  },
  {
    id: 3,
    tooth: 18,
    price: 1700,
  },
];

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
        {cards.map((card) => (
          <AppointmentCard
            key={card.id}
            {...card}
            diagnosis={navigation.getParam('diagnosis')}
            time={navigation.getParam('time')}
          />
        ))}
      </PatientAppointments>
    </View>
  );
}

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
