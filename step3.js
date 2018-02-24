const 
request = require('request'),

date = new Date(),

reqOptions = {
    method: 'POST',
    url: 'https://api.telegram.org/bot417941177:AAH9Iq_vGCE4Z1if53wGg3ZFKmYHL_kywLU/sendMessage',
    body: {
        chat_id: 222515697,
        text: 'Hi time is : ' + date,
    },
    json : true,
},

startRequest = ()=>{
    request(reqOptions,(error,res,body)=>{
        if(error){
            console.log(error);
            return
        }
        if(!(body && body.ok) ){
            console.log('Ops:' + error);
            return
        }
        console.log(body);
    });
}
;

startRequest();
