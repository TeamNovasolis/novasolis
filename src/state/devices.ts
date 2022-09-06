import { atomWithStorage } from 'jotai/utils';

const initialDevices = [
  {
    name: 'Abstract Table Light',
    currentEffect: 'strobe'
  },
  {
    name: 'Cloudly Light',
    currentEffect: 'weather'
  },
  {
    name: 'Main House Light',
    currentEffect: 'daylight'
  },
  {
    name: 'Garden Light',
    currentEffect: 'ambient'
  },
  {
    name: 'Cloudly Light 2',
    currentEffect: 'weather'
  },
  {
    name: 'Garage Light',
    currentEffect: 'white'
  }
];

export const devicesAtom = atomWithStorage<typeof initialDevices>(
  'settings',
  initialDevices
);
