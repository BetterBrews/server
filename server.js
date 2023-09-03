const express = require("express");

const app = express();

function startServer(port) {
  app.listen(port, () => {
    console.log(
      `Express started in ${app.get("env")} mode on http://localhost:${port}` +
        "; press Ctrl-C to terminate."
    );
  });
}

// Allow this module to be exported or called directly
if (require.main == module) {
  startServer(process.env.PORT || 3030);
} else {
  module.exports = startServer;
}