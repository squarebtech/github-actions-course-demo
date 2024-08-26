import Flagsmith from "flagsmith-nodejs";

const flagsmith = new Flagsmith({
  environmentKey: "XEb8nPDveNzjwKeSniGrW9", //process.env.FLAGSMITH_KEY as string,
  requestTimeoutSeconds: 60,
});

export default flagsmith;

// const Flagsmith = require('flagsmith-nodejs');

// const flagsmith = new Flagsmith({
//  environmentKey: 'FLAGSMITH_SERVER_SIDE_ENVIRONMENT_KEY',
// });
