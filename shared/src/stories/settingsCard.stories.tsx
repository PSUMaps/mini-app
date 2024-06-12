import type { Meta, StoryObj } from '@storybook/react';
// eslint-disable-next-line import/no-relative-packages
import Storage from '../../../web/src/app/storage';
import settingsCard from '../components/settings/settingsCard';

const meta: Meta<typeof settingsCard> = {
  title: 'Settings/Settings card',
  component: settingsCard,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    storage: new Storage(),
  },
};