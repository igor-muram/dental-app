import React from 'react';
import { SectionList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styled from 'styled-components/native';

import { Appointment, SectionTitle } from '../components';

const Data = [
  {
    title: '11 сентября',
    data: [
      {
        time: '12:30',
        diagnosis: 'Пульпит, удаление зуба',
        active: true,
        user: {
          phone: '+7 (999) 490-09-20',
          fullname: 'Максимова Софья',
          avatar:
            'https://sun9-31.userapi.com/impg/0C3JI3rZQ7sPIBjOoVKvPaq2wlne2LXW3BoybA/7N25TRH5oXQ.jpg?size=703x1080&quality=96&sign=73ed7a75ac15dfc81c87d73c881794f6&type=album',
        },
      },
      {
        time: '13:40',
        diagnosis: 'Пульпит',
        user: {
          phone: '+7 (923) 148-44-74',
          fullname: 'Иванов Максим',
        },
      },
      {
        time: '15:30',
        diagnosis: 'Пародонтит',
        user: {
          phone: '+7 (999) 115-45-85',
          fullname: 'Функ Софья',
          avatar:
            'https://sun9-26.userapi.com/impf/c846220/v846220730/b5a54/De-pCwtLs8k.jpg?size=2047x2047&quality=96&sign=ddc72e2cb4d21886df608557859764e3&type=album',
        },
      },
      {
        time: '16:00',
        diagnosis: 'Чистка зубов',
        user: {
          phone: '+7 (913) 154-44-86',
          fullname: 'Январев Никита',
          avatar:
            'https://sun9-87.userapi.com/impf/c830509/v830509615/1ac85d/aN2pxMtbWUc.jpg?size=720x960&quality=96&sign=6d93bf11ad3440a3bb78b26bd8edf1a1&type=album',
        },
      },
      {
        time: '18:30',
        diagnosis: 'Кариес',
        user: {
          phone: '+7 (925) 542-11-45',
          fullname: 'Вальцев Кирилл',
        },
      },
      {
        time: '19:30',
        diagnosis: 'Чистка зубов',
        user: {
          phone: '+7 (999) 486-48-22',
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
          phone: '+7 (913) 648-41-12',
          fullname: 'Макаров Антон',
          avatar: '',
        },
      },
      {
        time: '12:30',
        diagnosis: 'Пломба',
        user: {
          phone: '+7 (925) 455-45-10',
          fullname: 'Функ Софья',
          avatar:
            'https://sun9-26.userapi.com/impf/c846220/v846220730/b5a54/De-pCwtLs8k.jpg?size=2047x2047&quality=96&sign=ddc72e2cb4d21886df608557859764e3&type=album',
        },
      },
      {
        time: '15:00',
        diagnosis: 'Пульпит',
        user: {
          phone: '+7 (996) 489-11-12',
          fullname: 'Полынцева Евгения',
          avatar:
            'https://sun9-19.userapi.com/impg/LJthW9uPjKW4HRzBH2btdBmdOqU2JKF3qJ8YnQ/XNBDMntKIpk.jpg?size=812x1080&quality=96&sign=eea7428cb73f956cdc5a38b6a90e5fd8&type=album',
        },
      },
      {
        time: '17:30',
        diagnosis: 'Пародонтит',
        user: {
          phone: '+7 (925) 936-78-41',
          fullname: 'Бергер Екатерина',
          avatar:
            'https://sun9-1.userapi.com/impg/EssbqkrZfy7uaexqiBpCv36LQIHPOVo_ph2PlQ/YNcEdgaCPaA.jpg?size=607x1080&quality=96&sign=d78b71e4162113c94081f5049a59641c&type=album',
        },
      },
    ],
  },
];

export default function HomeScreen({ navigation }) {
  return (
    <Container>
      <SectionList
        sections={Data}
        keyExtractor={(name, index) => `${name}_${index}`}
        renderItem={({ item }) => <Appointment navigate={navigation.navigate} item={item} />}
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
`;
