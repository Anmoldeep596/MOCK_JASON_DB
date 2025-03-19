const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();


//setup out view engine
app.set('view engine', 'ejs');
app.set('views', "./views");









app.listen(PORT, () => {
    console.log(`Connected to port: ${PORT}`);
});
