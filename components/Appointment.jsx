import React from 'react';

import styled from 'styled-components/native';

const Group = ({ user, diagnosis, active, time }) => {
  return (
    <GroupItem>
      <Avatar
        source={{
          uri: user.avatar,
        }}
      />
      <PatientInfo>
        <FullName>{user.fullname}</FullName>
        <Diagnosis>{diagnosis}</Diagnosis>
      </PatientInfo>
      <GroupDate active={active}>{time}</GroupDate>
    </GroupItem>
  );
};

export default Group;

const GroupItem = styled.TouchableOpacity`
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

const FullName = styled.Text`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 2px;
`;

const Diagnosis = styled.Text`
  font-size: 15px;
  color: #8b979f;
`;

const GroupDate = styled.Text`
  border-radius: 18px;
  background: ${(props) => (props.active ? '#2a86ff' : '#e9f5ff')};
  color: ${(props) => (props.active ? '#fff' : '#4294ff')};
  font-weight: bold;
  font-size: 14px;
  width: 55px;
  height: 32px;
  text-align: center;
  line-height: 32px;
`;
