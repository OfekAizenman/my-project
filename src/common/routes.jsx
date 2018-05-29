// @flow

import React, { type Element } from 'react';
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
  displayByDrawer: false,
}, {
  id: 2,
  path: '/signin',
  exact: true,
  component: Signin,
  displayByDrawer: false,
}, {
  id: 3,
  path: '/signup',
  exact: true,
  component: Signup,
  displayByDrawer: false,
}];

export type RouteType = {
  id: number,
  path: string,
  exact: boolean,
  icon: Element<any>,
  title: string,
  component: Element<any>,
};

export default (isUserConnected: boolean) => (
  (isUserConnected) ? connectedRoutes : notConnectedRouts
);
