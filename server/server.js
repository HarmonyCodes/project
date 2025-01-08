const express = require("express")
const app = express()
const PORT = process.env.PORT || 4444
const {people}=require("./data")
app.get('/', (req, res)=>{
    res.send("Hello world <a href='./data'>poeple</a>")
})
app.get('/list',(req,res)=>{
    res.json(people)
})
app.get('/ID/:peopleID',(req,res)=>{
const {peopleID}= req.params;
const speople= poeple.find(people=> people.id===Number(peopleID))
})
app.get('/search',(req,res)=>{
    const {type=1, limit ,search}= req.query;
    let filterPeople= [...people];
    if(search){
        if(Number(type)===1){
            filterPeople=filterPeople.filter(poeple=>{
                return poeple.name===search
            })
        }
        if(Number(type)===2){
            filterPeople=filterPeople.filter(poeple=>{
                return poeple.name.startsWith(search)
            })
        }
        if(Number(type)===3){
            filterPeople=filterPeople.filter(poeple=>{
                return poeple.name.find(search)
            })
        }
        if(limit){
            filterPeople=filterPeople.slice(0, Number(limit))
        }
    }
    res.json(filterPeople)
})
app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
})