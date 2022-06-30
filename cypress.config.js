const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  hideXHR: true,
  projectId: 'ymkbzm',
  env: {
    email: 'gunnar.finkeldeh@streetbees.com',
    password: '8pbgdm!Gtmd2UeY',
    qa_email: 'qa_sb@streetbees.com',
    qa_password: 'zLFSjV8MNe7wLFKc',
    client: 'streetbees-staging',
    dashboard: 'demoboard-v2',
    api_url: "'https://dashlord-api.streetbees.com",
    qa_url: 'https://dashlord-sprinkles-9353336d.dev-bees.com',
    prod_url: 'https://insights.streetbees.com/',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://insights.streetbees.com/streetbees-staging/demoboard-v2',
    experimentalSessionAndOrigin: true,
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
