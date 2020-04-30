const axios = require('axios')

module.exports = {
    make_API_call : function(URL){
        const config = {
            method: 'get',
            url: URL,
            headers: { 
                'Key': '<API KEY>',
                'Value': '<VALUE>'
             }
        }
        console.log("Respns                ");
        return new Promise(function (res, rej) {
            axios(config).then(function (response) {
                console.log(response.status);
                res(response.data);
            }).catch(function (error){
                console.log(error);
                rej(error);
            })
            
    })
        
    }
}
