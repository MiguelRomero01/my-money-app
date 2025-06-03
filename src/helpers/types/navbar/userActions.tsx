import { LogOut, Settings } from 'lucide-react';
import { simpleAlert } from '@components/alerts/simpleAlert';
import { signOut } from '@features/auth/services/signOut';

export const userActions = [
  {
    icon: Settings,
    label: 'Settings',
    href: '/settings',
    onclick: () => {},
  },
  {
    icon: LogOut,
    label: 'Sign Out',
    href: '/',
    onclick: async () => {
      try {
        await signOut();
        simpleAlert({
          title: 'Success',
          text: 'You have been signed out',
          type: 'success',
          confirmButtonText: 'Ok',
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        simpleAlert({
          title: 'Error',
          text: error.message,
          type: 'error',
          confirmButtonText: 'Ok',
        });
      }
    },
    danger: true,
  },
];
