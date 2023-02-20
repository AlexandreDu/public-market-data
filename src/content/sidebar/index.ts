import { faBitcoinSign, faCircle } from '@fortawesome/free-solid-svg-icons';

import { faEthereum } from '@fortawesome/free-brands-svg-icons';

export const sideMenuContent = [
  {
    label: 'Bitcoin',
    icon: faBitcoinSign,
    to: '/',
  },
  {
    label: 'Ethereum',
    icon: faEthereum,
    to: '/ethereum',
  },
  {
    label: 'PAX Gold',
    icon: faCircle,
    to: '/paxgold',
  },
  {
    label: '1',
    icon: faCircle,
    to: '/1',
    descendant: [
      {
        label: '2',
        to: '2',
        descendant: [
          {
            label: '3',
            to: '3',
            descendant: [
              {
                label: '4',
                to: '4',
                descendant: [
                  {
                    label: '5',
                    to: '5',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
