import React from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

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
        time: '13:40',
        diagnosis: 'Пульпит',
        user: {
          fullname: 'Иванов Максим',
        },
      },
      {
        time: '15:30',
        diagnosis: 'Пародонтит',
        user: {
          fullname: 'Функ Софья',
          avatar:
            'https://sun9-26.userapi.com/impf/c846220/v846220730/b5a54/De-pCwtLs8k.jpg?size=2047x2047&quality=96&sign=ddc72e2cb4d21886df608557859764e3&type=album',
        },
      },
      {
        time: '16:00',
        diagnosis: 'Чистка зубов',
        user: {
          fullname: 'Январев Никита',
          avatar:
            'https://sun9-87.userapi.com/impf/c830509/v830509615/1ac85d/aN2pxMtbWUc.jpg?size=720x960&quality=96&sign=6d93bf11ad3440a3bb78b26bd8edf1a1&type=album',
        },
      },
      {
        time: '18:30',
        diagnosis: 'Кариес',
        user: {
          fullname: 'Вальцев Кирилл',
        },
      },
      {
        time: '19:30',
        diagnosis: 'Чистка зубов',
        user: {
          fullname: 'Бергер Екатерина',
          avatar:
            'https://sun9-1.userapi.com/impg/EssbqkrZfy7uaexqiBpCv36LQIHPOVo_ph2PlQ/YNcEdgaCPaA.jpg?size=607x1080&quality=96&sign=d78b71e4162113c94081f5049a59641c&type=album',
        },
      },
    ],
  },
  {
    title: '16 сентября',
    data: [
      {
        time: '11:00',
        diagnosis: 'Лечение зуба',
        user: {
          fullname: 'Макаров Антон',
          avatar: '',
        },
      },
      {
        time: '12:30',
        diagnosis: 'Пломба',
        user: {
          fullname: 'Функ Софья',
          avatar:
            'https://sun9-26.userapi.com/impf/c846220/v846220730/b5a54/De-pCwtLs8k.jpg?size=2047x2047&quality=96&sign=ddc72e2cb4d21886df608557859764e3&type=album',
        },
      },
      {
        time: '15:00',
        diagnosis: 'Пульпит',
        user: {
          fullname: 'Полынцева Евгения',
          avatar:
            'https://sun9-19.userapi.com/impg/LJthW9uPjKW4HRzBH2btdBmdOqU2JKF3qJ8YnQ/XNBDMntKIpk.jpg?size=812x1080&quality=96&sign=eea7428cb73f956cdc5a38b6a90e5fd8&type=album',
        },
      },
      {
        time: '17:30',
        diagnosis: 'Пародонтит',
        user: {
          fullname: 'Бергер Екатерина',
          avatar:
            'https://sun9-1.userapi.com/impg/EssbqkrZfy7uaexqiBpCv36LQIHPOVo_ph2PlQ/YNcEdgaCPaA.jpg?size=607x1080&quality=96&sign=d78b71e4162113c94081f5049a59641c&type=album',
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
        keyExtractor={(name, index) => name + index}
        renderItem={({ item }) => <Appointment {...item} />}
        renderSectionHeader={({ section: { title } }) => <SectionTitle>{title}</SectionTitle>}
      />
      <PlusButton>
        <Ionicons name="ios-add" size={36} color="white" />
      </PlusButton>
    </Container>
  );
}

const PlusButton = styled.TouchableOpacity`
  border-radius: 50px;
  width: 64px;
  height: 64px;
  background: #2a86ff;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 25px;
  bottom: 25px;
`;

const Container = styled.View`
  flex: 1;
  margin-top: 30px;
`;
