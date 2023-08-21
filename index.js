const express = require('express');

const app = express();

app.get('/', (req, res) => res.send(`<script>alert(1)</script>`));

app.listen(3000, () => console.log('Server started'));