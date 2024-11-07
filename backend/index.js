import app from "./src/app.js";



const port = 3000;

app.get("/", (req, res)=>{
    res.send("Hello World");
})

app.listen(port, () => {    
    console.log(` server running on http://localhost:${port}`);
})