import express from'express';
import detectJsFramework from "js-framework-detector";
const app = express();

app.get('/api/frameworksDetect', async (req, res) => {    
    const url = req.query.url;
    const frameworkArray = await detectJsFramework(url);
    res.send(frameworkArray);
})

const port = process.env.PORT || 3000;
app.listen(port, ()=>console.log(`listening to : ${port}`))