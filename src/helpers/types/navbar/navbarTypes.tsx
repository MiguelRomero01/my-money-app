import { ChartColumn, CircleDollarSign, CreditCard, House, LogOut, Settings } from 'lucide-react';

export const navigationItems = [
  { label: 'Analytics', icon: <ChartColumn /> },
  { label: 'Home', icon: <House /> },
  { label: 'Transactions', icon: <CreditCard /> },
  { label: 'Currency Converter', icon: <CircleDollarSign /> },
];

export const menuItems = [
  {
    icon: Settings,
    label: 'Settings',
    onclick: () => {
      console.log('hola');
    },
  },
  {
    icon: LogOut,
    label: 'Sign Out',
    onclick: () => {
      console.log('hola2');
    },
    danger: true,
  },
];
