import React from 'react';
import { Search, Security, Mail, Notes, Code } from '@material-ui/icons';

export default [
  {
    icon: <Search />,
    text: 'Queries',
    to: '/queries',
  },
  {
    icon: <Code />,
    text: 'Coconut',
    to: 'https://github.com/spatialcurrent/coconut',
  },
  {
    icon: <Code />,
    text: 'Railgun',
    to: 'https://github.com/spatialcurrent/railgun',
  },
  {
    icon: <Code />,
    text: 'More Open Source',
    to: 'https://spatialcurrent.io/open-source/',
  },
  {
    icon: <Notes />,
    text: 'Spatial Current, Inc.',
    to: 'https://spatialcurrent.io/company/',
  },
  {
    icon: <Notes />,
    text: 'Privacy Policy',
    to: 'https://spatialcurrent.io/privacy-policy/',
  },
  {
    icon: <Notes />,
    text: 'Terms of Service',
    to: 'https://spatialcurrent.io/terms-of-service/',
  },
  {
    icon: <Security />,
    text: 'Security',
    to: 'https://spatialcurrent.io/security/',
  },
  {
    icon: <Mail />,
    text: 'Contact',
    to: 'mailto:info@spatialcurrent.io',
  }
];
