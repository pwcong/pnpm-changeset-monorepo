import { appTools, defineConfig } from '@modern-js/app-tools';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  runtime: {
    router: false,
  },
  plugins: [
    appTools({
      bundler: 'experimental-rspack',
    }),
  ],
  experiments: {
    sourceBuild: true,
  },
});
