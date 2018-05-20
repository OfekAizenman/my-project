import React from 'react';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import { Notes, Reminders, Signin, Signup } from '../app/pages';

const connectedRoutes = [{
  id: 1,
  path: '/',
  exact: true,
  component: Notes,
  displayByDrawer: false,
}, {
  id: 2,
  path: '/notes',
  title: 'Notes',
  exact: true,
  component: Notes,
  icon: <AssignmentIcon />,
  displayByDrawer: true,
}, {
  id: 3,
  path: '/reminders',
  title: 'Reminders',
  exact: true,
  component: Reminders,
  icon: <AccessAlarmIcon />,
  displayByDrawer: true,
}];

const notConnectedRouts = [{
  id: 1,
  path: '/',
  exact: true,
  component: Signin,
}, {
  id: 2,
  path: '/signin',
  exact: true,
  component: Signin,
}, {
  id: 3,
  path: '/signup',
  exact: true,
  component: Signup,
}];

export default (isUserConnected) => {
  return (isUserConnected) ? connectedRoutes : notConnectedRouts;
};

