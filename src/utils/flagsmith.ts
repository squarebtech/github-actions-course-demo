import Flagsmith from "flagsmith-nodejs";

const flagsmith = new Flagsmith({
  environmentKey: process.env.FLAGSMITH_KEY as string, //"XEb8nPDveNzjwKeSniGrW9",
  requestTimeoutSeconds: 60,
});

export default flagsmith;

// const Flagsmith = require('flagsmith-nodejs');

// const flagsmith = new Flagsmith({
//  environmentKey: 'FLAGSMITH_SERVER_SIDE_ENVIRONMENT_KEY',
// });
