require("dotenv").config()

const express=require ('express')
app= express()
app.set("view engine","ejs")
app.use(express.static(__dirname + '/public'));
app.get("/",(req,res)=>{

    res.render("index")

})
app.get("/admin",(req,res)=>{
    res.render("admin")
})
app.get("/express-interest",(req,res)=>{
    res.render("form")
})
app.use(function(req, res) {
    res.status(404);
  
    // respond with html page
    if (req.accepts('html')) {
      res.render('404', { url: req.url });
      return;
    }
  
    // respond with json
    if (req.accepts('json')) {
      res.json({ error: 'Not found' });
      return;
    }
  
    // default to plain-text. send()
    res.type('txt').send('Not found');
  });
app.listen(process.env.PORT)