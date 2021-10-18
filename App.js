import React from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';

import styled from 'styled-components/native';

import { Appointment, SectionTitle } from './components';

const DATA = [
  {
    title: '11 сентября',
    data: [
      {
        time: '12:30',
        diagnosis: 'Пульпит, удаление зуба',
        active: true,
        user: {
          fullname: 'Максимова Софья',
          avatar:
            'https://sun9-31.userapi.com/impg/0C3JI3rZQ7sPIBjOoVKvPaq2wlne2LXW3BoybA/7N25TRH5oXQ.jpg?size=703x1080&quality=96&sign=73ed7a75ac15dfc81c87d73c881794f6&type=album',
        },
      },
      {
        time: '13:30',
        diagnosis: 'Пародонтит',
        user: {
          fullname: 'Функ Софья',
          avatar:
            'https://sun9-26.userapi.com/impf/c846220/v846220730/b5a54/De-pCwtLs8k.jpg?size=2047x2047&quality=96&sign=ddc72e2cb4d21886df608557859764e3&type=album',
        },
      },
    ],
  },
  {
    title: '16 сентября',
    data: [
      {
        time: '18:00',
        diagnosis: 'Пульпит, удаление зуба',
        user: {
          fullname: 'Максимова Софья',
          avatar:
            'https://sun9-31.userapi.com/impg/0C3JI3rZQ7sPIBjOoVKvPaq2wlne2LXW3BoybA/7N25TRH5oXQ.jpg?size=703x1080&quality=96&sign=73ed7a75ac15dfc81c87d73c881794f6&type=album',
        },
      },
      {
        time: '13:30',
        diagnosis: 'Пародонтит',
        user: {
          fullname: 'Функ Софья',
          avatar:
            'https://sun9-26.userapi.com/impf/c846220/v846220730/b5a54/De-pCwtLs8k.jpg?size=2047x2047&quality=96&sign=ddc72e2cb4d21886df608557859764e3&type=album',
        },
      },
    ],
  },
];

export default function App() {
  return (
    <Container>
      <SectionList
        sections={DATA}
        keyExtractor={(index) => index}
        renderItem={({ item }) => <Appointment {...item} />}
        renderSectionHeader={({ SectionTitle: { title } }) => <SectionTitle>{title}</SectionTitle>}
      />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  margin-top: 30px;
  padding: 0 20px;
`;
