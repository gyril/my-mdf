const port = process.env.PORT || 7000;
const express = require('express');
const app = express();
app.use(express.static('dist/my-mdf'));
app.listen(port, () => console.log(`Server started on port ${port}!`))