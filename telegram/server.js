const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()

app.get('/pair', (req, res) => {

    const code = req.query.code

    const filePath = path.join(__dirname, 'session', 'session.json')

    if (!fs.existsSync(filePath)) {
        return res.send('<h1>❌ Aucune session trouvée</h1>')
    }

    const data = JSON.parse(fs.readFileSync(filePath))

    if (String(data.code) !== String(code)) {
        return res.send('<h1>❌ Code invalide</h1>')
    }

    res.send(`
<!DOCTYPE html>
<html>
<head>

<title>TRAFALGAR V2</title>

<style>

body{
background:#0d1117;
color:white;
font-family:sans-serif;
display:flex;
justify-content:center;
align-items:center;
height:100vh;
}

.box{
width:400px;
padding:30px;
border-radius:20px;
background:#161b22;
text-align:center;
box-shadow:0 0 25px cyan;
}

h1{
color:#00ffff;
}

.code{
font-size:40px;
font-weight:bold;
color:#00ff99;
margin-top:20px;
}

button{

background:#00ffff;
border:none;
padding:15px 30px;
border-radius:15px;
font-size:18px;
cursor:pointer;
margin-top:30px;

}

button:hover{
background:white;
}

</style>

</head>

<body>

<div class="box">

<h1>👑 TRAFALGAR V2</h1>

<h2>🔐 PAIR SYSTEM</h2>

<div class="code">
${code}
</div>

<button>
📱 CONNECT WHATSAPP
</button>

</div>

</body>

</html>
`)
})

app.listen(3000, () => {
console.log('✅ TRAFALGAR SERVER ONLINE')
})
