import React from 'react';
import AssignmentIcon from 'material-ui-icons/Assignment';
import AccessAlarmIcon from 'material-ui-icons/AccessAlarm';
import { Notes, Reminders, Login, Signup } from '../app/pages';

const unUsed = {
  id: 1,
  path: '/',
  exact: true,
  component: Notes,
};

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
  component: Login,
}, {
  id: 2,
  path: '/login',
  exact: true,
  component: Login,
}];

export default (isUserConnected) => {
  return (isUserConnected) ? connectedRoutes : notConnectedRouts;
};

