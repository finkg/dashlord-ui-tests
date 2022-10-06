const { defineConfig } = require("cypress");
// module.exports = (on, config) => {
//   const getCompareSnapshotsPlugin = require("cypress-image-diff-js/dist/plugin");
//   getCompareSnapshotsPlugin(on, config);
// };

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  hideXHR: true,
  projectId: "ymkbzm",
  env: {
    email: "gunnar.finkeldeh@streetbees.com",
    password: "8pbgdm!Gtmd2UeY",
    qa_email: "qa_sb@streetbees.com",
    qa_password: "zLFSjV8MNe7wLFKc",
    slug: "streetbees-staging",
    dashboard: "demoboard-v2",
    api_url: "'https://dashlord-api.streetbees.com",
    staging:
      "https://dashlord-sprinkles-3816c55d.dev-bees.com/streetbees-staging/demoboard-v2",
    prod_url: "https://insights.streetbees.com/streetbees-staging/demoboard-v2",
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      // return require("./cypress/plugins/index.js")(on, config);
      const getCompareSnapshotsPlugin = require("cypress-image-diff-js/dist/plugin");
      getCompareSnapshotsPlugin(on, config);
    },
    baseUrl: "https://dashlord-sprinkles-2382937c.dev-bees.com/streetbees-staging/demoboard-v2",
    // baseUrl: "https://insights.streetbees.com/streetbees-staging/demoboard-v2",
    experimentalSessionAndOrigin: true,
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
  },
});
