// Import the required modules
const express = require('express');
const corsAnywhere = require('cors-anywhere');

// Create an instance of an Express app
const app = express();

// Create a cors-proxy server
let proxy = corsAnywhere.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: [],
    removeHeaders: ['cookie', 'cookie2']
});

// Attach the cors proxy to the existing API on the '/proxy' endpoint
app.get('/proxy/:proxyUrl*', (req, res) => {
  req.url = req.url.replace('/proxy/', '/'); // Strip '/proxy' from the front of the URL, else the proxy won't work.
  proxy.emit('request', req, res);
});

// Start the server
const port = process.env.PORT || 3001; // Use the environment variable PORT, or fallback to 3000 if it's not set
app.listen(port, () => console.log(`Server is running on port ${port}`));
