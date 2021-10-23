const axios = require('axios');
const { json } = require('body-parser');

const apiUrl = process.env.API_URL;
const apiKey = process.env.API_KEY;
const apiCulture = process.env.API_CULTURE;

let url = apiUrl + '/' + apiCulture + '/collection?key=' + apiKey + '&format=json&p=0&ps=10&q=paint&imgonly=true';



// Retrieve all Collections from Rijksmuseum API
exports.getCollections = async (req, res) => {
    // console.log('test1: ' + urlt);
    try {
        const response = await axios.get(url);

        if (res.status >= 400) {
            throw new Error("Bad response from server");
        }

        res.status(200).json(response.data); // send response
    } catch(err) {
        res.send(err);
    }
}
