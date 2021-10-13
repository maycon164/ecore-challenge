const express = require('express');
const consign = require('consign');

const app = express();
app.use(express.json());
app.use(express.urlencoded({}))

consign()
    .include('routes')
    .into(app);

app.listen(8080, () => {
    
    console.log(".....");

})