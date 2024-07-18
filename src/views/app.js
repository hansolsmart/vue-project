const cors = require('cors');

let corsOption = {
    origin: 'http://localhost:8080',
    credentials: true
}

app.use(cors(corsOption));