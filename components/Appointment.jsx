import React from 'react';

import GrayText from './GrayText';
import Badge from './Badge';

import styled from 'styled-components/native';

const Appointment = ({ navigate, item }) => {
  const { user, diagnosis, active, time } = item;

  return (
    <AppointmentItem onPress={navigate.bind(this, 'Patient', item)}>
      {user.avatar && user.avatar !== '' ? (
        <Avatar
          source={{
            uri: user.avatar,
          }}
        />
      ) : (
        <Plug>
          <PlugText>{user.fullname[0].toUpperCase()}</PlugText>
        </Plug>
      )}
      <PatientInfo>
        <FullName>{user.fullname}</FullName>
        <GrayText>{diagnosis}</GrayText>
      </PatientInfo>
      <Badge active={active}>{time}</Badge>
    </AppointmentItem>
  );
};

export default Appointment;

const AppointmentItem = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #f3f3f3;
`;

const PatientInfo = styled.View`
  flex: 1;
`;

const Avatar = styled.Image`
  border-radius: 50px;
  width: 43px;
  height: 43px;
  margin-right: 15px;
`;

const Plug = styled.View`
  border-radius: 50px;
  width: 43px;
  height: 43px;
  margin-right: 15px;
  align-items: center;
  justify-content: center;
  background: #ffe49c;
`;

const PlugText = styled.Text`
  font-size: 21px;
  color: #000;
`;

const FullName = styled.Text`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 2px;
`;
