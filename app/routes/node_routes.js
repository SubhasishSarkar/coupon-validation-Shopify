const apiCaller = require('../services/apiCall');
module.exports =function(app){
    app.get('/code/:code',(req,res)=>{
        //res.send(req.params.code);
       const url = " https://<API KEY>:<Value>@dev-oziva.myshopify.com/admin/api/2020-04/discount_codes/lookup.json?code="+req.params.code;
       //console.log(url);
       apiCaller.make_API_call(url)
       .then(response => {
            //console.log(response);
            const result = {'status' : '200'}
            res.send(result)
        }).catch(error => {
            const result = {'status' : '404'}
            res.send(result)
        })
    })
}
