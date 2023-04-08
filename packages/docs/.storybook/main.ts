// .storybook/main.ts

import type { StorybookConfig } from '@storybook/react-vite'; // your framework

const config: StorybookConfig = {
  stories: ['../src/pages/**/*.mdx', '../src/stories/**/*.stories.tsx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-a11y'],
  framework: '@storybook/react-vite',
  async viteFinal(config, options) {
    // Add your configuration here
    return config;
  },
};

export default config;