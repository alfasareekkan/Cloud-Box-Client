/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { FiHardDrive, FiFileText, FiCreditCard } from 'react-icons/fi';
import { RiTimerLine } from 'react-icons/ri';
import { AiOutlineStar } from 'react-icons/ai';
import { BsTrash, BsCurrencyDollar, BsShield } from 'react-icons/bs';
import avatar from '../assets/avatar.jpg';
import avatar2 from '../assets/avatar2.jpg';
import avatar3 from '../assets/avatar3.png';
import avatar4 from '../assets/avatar4.jpg';

export const links = [
  {
    title: 'My Drive',
    icon: <FiHardDrive />,
    link: '/dashboard/v1/myDrive',

  },
  {
    title: 'Files',
    icon: <FiFileText />,
    link: '',
  },
  {
    title: 'Shared with me',
    icon: <RiTimerLine />,
    link: '/dashboard/v1/shared-with-me',
  },
  {
    title: 'Favourite',
    icon: <AiOutlineStar />,
  },
  {
    title: 'Trash',
    icon: <BsTrash />,
    link: '',
  },
];

export const chatData = [
  {
    image:
      avatar2,
    message: 'Roman Joined the Team!',
    desc: 'Congratulate him',
    time: '9:08 AM',
  },
  {
    image:
      avatar3,
    message: 'New message received',
    desc: 'Salma sent you new message',
    time: '11:56 AM',
  },
  {
    image:
      avatar4,
    message: 'New Payment received',
    desc: 'Check your earnings',
    time: '4:39 AM',
  },
  {
    image:
      avatar,
    message: 'Jolly completed tasks',
    desc: 'Assign her new tasks',
    time: '1:12 AM',
  },
];

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: 'My Profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <BsShield />,
    title: 'My Inbox',
    desc: 'Messages & Emails',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
  },
  {
    icon: <FiCreditCard />,
    title: 'My Tasks',
    desc: 'To-do and Daily Tasks',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
  },
];
