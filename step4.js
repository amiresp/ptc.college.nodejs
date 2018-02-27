const
    request = require('request'),

    geturl = 'https://api.telegram.org/bot',
    token = '417941177:AAH9Iq_vGCE4Z1if53wGg3ZFKmYHL_kywLU',
    endurl = '/sendMessage',
    date = new Date(),

    reqOptions = {
        method: 'POST',
        url: `${geturl}${token}${endurl}`,
        body: {
            chat_id: 222515697,
            text: 'Hi time is : ' + date,
        },
        json: true,
    },

    startRequest = (text) => {
        return new Promise((resolve, reject) => {
            console.log(text);
            reqOptions.body.text = text;
            request(reqOptions, (error, res, body) => {
                if (!error && body && body.ok) {
                    resolve(body);
                } else {
                    reject(error, body)
                }

            });
        })
    }
    ;


const startmsg = async function () {
    try {
        for (let i = 0; i < 5; i++) {
            await startRequest('Hi' + i);
        }
    } catch (error) {
        console.log(error)
    }
}
startmsg();


// یه تمرین جالب که بالاخره باهاش حال کردم همین بود
