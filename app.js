const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello Its my first AWS DevOps Project! \n I have made some changes to the code! \n I have made some more changes to the code!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
