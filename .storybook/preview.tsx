import type { Preview } from '@storybook/react';
import React from 'react';
import '../global.css'; // Import Tailwind styles
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '../components/ui/gluestack-ui-provider/config';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#F7F9F2' },
        { name: 'dark', value: '#333' },
        { name: 'beige', value: '#F5ECE0' },
        { name: 'blue', value: '#5F99AE' },
        { name: 'teal', value: '#336D82' },
        { name: 'purple', value: '#693382' },
      ],
    },
    initialGlobals: {
      backgrounds: { value: 'light' },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <GluestackUIProvider config={config}>
        <Story />
      </GluestackUIProvider>
    ),
  ],
};

export default preview;
