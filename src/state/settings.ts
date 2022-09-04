import { atomWithStorage } from 'jotai/utils';

const initialSettings = {
  theme: 'dark'
};

export const settingsAtom = atomWithStorage<typeof initialSettings>(
  'settings',
  initialSettings
);
