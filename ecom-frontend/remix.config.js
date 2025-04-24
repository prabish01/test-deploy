import { createRoutesFromFolders } from '@remix-run/v1-route-convention';

/**
 * @type {import('@remix-run/dev').AppConfig}
 */
const commonConfig = {
  appDirectory: 'app',
  serverModuleFormat: 'esm',
  serverDependenciesToBundle: [
    'remix-i18next',
    '@remix-validated-form/with-zod',
  ],
  tailwind: true,
  routes(defineRoutes) {
    // uses the v1 convention, works in v1.15+ and v2
    return createRoutesFromFolders(defineRoutes);
  },
};

/**
 * @type {import('@remix-run/dev').AppConfig}
 */
const cloudflarePagesConfig = {
  serverBuildPath: 'functions/[[path]].js',
  serverPlatform: 'neutral',
  server: './server-cloudflare-pages.js',
  ignoredRouteFiles: ['**/.*'],
  serverMinify: true,
  ...commonConfig,
};
/**
 * @type {import('@remix-run/dev').AppConfig}
 */
const netlifyConfig = {
  serverBuildTarget: 'netlify',
  server: './server-netlify.js',
  ignoredRouteFiles: ['**/.*'],
  ...commonConfig,
};

/**
 * @type {import('@remix-run/dev').AppConfig}
 */
const vercelConfig = {
  server: './server.js',
  ignoredRouteFiles: ['**/.*'],
  ...commonConfig,
};

/**
 * @type {import('@remix-run/dev').AppConfig}
 */
const devConfig = {
  appDirectory: 'app',
  serverModuleFormat: 'cjs',
  devServerPort: 8002,
  ignoredRouteFiles: ['.*'],
  ...commonConfig,
};

/**
 * @type {import('@remix-run/dev').AppConfig}
 */
const buildConfig = {
  appDirectory: 'app',
  assetsBuildDirectory: 'public/build',
  publicPath: '/build/',
  serverBuildDirectory: 'build',
  ignoredRouteFiles: ['.*'],
  ...commonConfig,
};

function selectConfig() {
  // Check for Vercel first, since NODE_ENV might be undefined
  if (process.env.VERCEL) return vercelConfig;
  if (process.env.CF_PAGES) return cloudflarePagesConfig;
  if (process.env.NETLIFY) return netlifyConfig;

  // Default to production if NODE_ENV is undefined
  const nodeEnv = process.env.NODE_ENV || 'production';

  if (nodeEnv === 'development') return devConfig;
  if (nodeEnv === 'production') {
    if (!process.env.CF_PAGES && !process.env.NETLIFY && !process.env.VERCEL)
      return buildConfig;
  }

  return buildConfig;
}

export default selectConfig();
