/* You need to create 4 routes (4 things that the hospital can do)
1. GET - User can check how many kidneys they have and their health
2. POST - User can add a new kidney
3. PUT - User can replace a kidney, make it healthy
4. DELETE - User can remove a kidney
*/

const express = require('express');

let app = express();

app.use(express.json());

let user = {
    userName: 'Shanket',
    kidneys: [
        {
            healthy: true
        }
    ]
}

app.get('/', function(req, res){
    let [totalKidneys, totalHealthyKidneys, totalUnhealthyKidneys] = [0, 0, 0];
    totalKidneys = user.kidneys.length;
    for(let i = 0; i < user.kidneys.length; i++){
        if (user.kidneys[i].healthy){
            totalHealthyKidneys++;
        } else {
            totalUnhealthyKidneys++;
        }
    }
    let result = {
        totalKidneys, totalHealthyKidneys, totalUnhealthyKidneys
    }
    res.json(result);
})

app.post('/', function(req, res){
    let inputKidney = req.body.isHealthy;
    user.kidneys.push({
        'healthy': inputKidney
    })

    res.status(200);
    res.json({
        'msg': 'Kidney Added successfully.'
    });
})

app.put('/', function(req, res){
    for(let i = 0; i < user.kidneys.length; i++){
        if(!user.kidneys[i].healthy){
            user.kidneys[i].healthy = true;
        }
    }

    res.status(200)
    res.json({
        "msg": "all kidneys are healthy now."
    })
})

app.delete('/', function(req, res){
    kidneys = user.kidneys.filter(x => x.healthy)

    user.kidneys = kidneys;

    res.status(200)
    res.json({
        "msg": "all unhealthy kidneys are removed successfully."
    })
})

app.listen(3001);