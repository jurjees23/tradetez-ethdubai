const { promisify } = require('util');
const exec = promisify(require('child_process').exec)
const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const path = require("path");


//Body Parser Middleware
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(cors())
app.use(express.static('dist'));



app.post('/api/createdns', async (req, res) => {
    const nameOutput = await exec(`npx -p @govtechsg/open-attestation-cli open-attestation dns txt-record create --address ${req.body.documentStoreAddress} --network-id ${req.body.networkID}`)
    const result = extractValues(nameOutput.stdout.trim());
    console.log(result);
    res.json(result)
})
const port = 5000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

function extractValues(inputString) {
    // Define regex patterns to match the URL and the valid until date
    const urlPattern = /(?<=at\s)([^\s]+)(?=\sand)/;
    const datePattern = /(?<=until\s)(.+)(?=\sGMT)/;

    // Extract URL and date using regex
    const urlMatch = inputString.match(urlPattern);
    const dateMatch = inputString.match(datePattern);

    // Check if matches were found
    if (urlMatch && dateMatch) {
        // Extracted values
        const url = urlMatch[0];
        const validUntil = dateMatch[0];

        // Return values in JSON format
        return {
            "url": url,
            "valid_until": validUntil
        };
    } else {
        // If no matches found, return null
        return null;
    }
}

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, './dist/index.html'), function (err) {
        if (err) {
            res.status(500).send(err)
        }
    })
})