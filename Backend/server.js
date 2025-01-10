/**
 * Server entry point.
 *
 * This file is responsible for starting the Express server. It imports the
 * application instance from the `App` module, sets the port to either the
 * environment variable `PORT` or defaults to 3000, and starts the server.
 * Upon successful startup, it logs a message with the server's URL.
 *
 * @module serverEntry
 */

const app = require("./App");

const PORT = process.env.PORT || 3000;

/**
 * Starts the Express server.
 *
 * This function listens on the specified port and logs a message when the
 * server is successfully running. It listens for incoming requests to the
 * server and ensures the app is functioning.
 *
 * @function
 * @async
 * @param {number} PORT - The port number for the server to listen on.
 * @returns {void}
 */
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
