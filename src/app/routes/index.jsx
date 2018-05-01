import React from 'react';
import { Home, Notes, Reminders } from '../../pages';
import { ListItemIcon } from 'material-ui/List';
import AssignmentIcon from 'material-ui-icons/Assignment';
import AccessAlarmIcon from 'material-ui-icons/AccessAlarm';

const routes = [{
    id: 1,
    path: '/notes',
    title: 'Notes',
    exact: true,
    component: Notes,
    icon: <AssignmentIcon />,
  }, {
    id: 2,
    path: '/reminders',
    title: 'Reminders',
    exact: true,
    component: Reminders,
    icon: <AccessAlarmIcon />,
  }];

  export { 
    routes 
  }