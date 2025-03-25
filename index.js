const exp = require('express');
const app = exp();
const port = process.env.PORT || 3000;
app.use(exp.json());
app.get('/',(req,res)=>{
    console.log(req.headers);
    res.send("Server is working fine")
})
app.listen(port,()=>{
    console.log(`[+] Server is Live on ${port}`)
})