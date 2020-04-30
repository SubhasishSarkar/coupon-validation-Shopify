const axios = require('axios')

module.exports = {
    make_API_call : function(URL){
        const config = {
            method: 'get',
            url: URL,
            headers: { 
                'Key': 'b697692cc8ba3957e1ac73a42662d3d5',
                'Value': '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'
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