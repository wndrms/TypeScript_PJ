const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();

var corsOptions = {
    origin: "http://loocalhost:3000"
};
app.use(cors(corsOptions));
app.use(express.json());

app.post('/api/save-json-file', (req, res) => {
    const fileData = req.body.data;

    fs.writeFile('text.json', fileData, (error) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error saving file');
        } else {
            console.log('File saved successfully');
            res.send('File saved successfully');
        }
    });
});

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})