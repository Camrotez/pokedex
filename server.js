const cors = require("cors")
const express = require("express")
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.post("/pokemon", async (req, res)=>{
    try {
        console.log(req.body);
        const pokemon = req.body.data
        console.log(pokemon);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        if(response.ok){
            const data = await response.json()
            res.send(data)
        } else(
            res.status(response.status).json({msg : "api failed"})
        )
    } catch (error) {
        console.log(error);
        res.status(505).json({msg : "internal error"})
        
    }
    
})

app.listen(port,()=>{
    console.log("server online");
})