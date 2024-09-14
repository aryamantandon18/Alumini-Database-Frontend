// SidebarData.js
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Achievements',
    path: '/admin/Achievements',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Networking',
    path: '/admin/Networking',
    icon: <FaIcons.FaNetworkWired />,
    cName: 'nav-text'
  },
  {
    title: 'Alumni Directory',
    path: '/admin/AlumniDirectory',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Student',
    path: '/admin/Student',
    icon: <IoIcons.IoMdSchool />,
    cName: 'nav-text'
  },
  {
    title: 'News',
    path: '/admin/news',
    icon: <FaIcons.FaNewspaper />,
    cName: 'nav-text'
  },
  {
    title: 'Ranklist',
    path: '/admin/ranklist',
    icon: <FaIcons.FaListAlt />,
    cName: 'nav-text'
  },
  {
    title: 'Jobs',
    path: '/admin/jobs',
    icon: <IoIcons.IoMdBriefcase />,
    cName: 'nav-text'
  },
  {
    title: 'Login',
    path: '/admin/loginnew',
    icon: <FaIcons.FaSignInAlt />,
    cName: 'nav-text'
  },
  {
    title: 'Requests',
    path: 'admin/requests',
    icon: <IoIcons.IoIosListBox />,
    cName: 'nav-text'
  }
];
