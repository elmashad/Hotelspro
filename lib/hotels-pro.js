const axios = require('axios')
const searchRequest = require('./requests/SearchRequest');
const requestTransformer= require('./transformers/search/request-transfomer');

/**
 * @author Osama Elmashad <elmashad285@gmail.com>
 */
class HotelPro {

    /**
     *
     * @param {Object} apiCredentials
     * @param {string} baseUrl
     * @param {RequestHandler} requestHandler
     *
     * @author Osama Elmashad <elmashad285@gmail.com>
     */
    constructor(apiCredentials, baseUrl = '', requestHandler = {}) {
        this.apiCredentials = apiCredentials;

        // If handler was not specified, let's create it
        if (JSON.stringify(requestHandler) === JSON.stringify({})) {
            this.requestHandler = new SearchRequest(baseUrl, apiCredentials, axios);
        } else {
            this.requestHandler = requestHandler;
        }

      console.log('Good');

    }

    /**
     *
     * @param params
     * @return {Promise.<*>}
     *
     * @author Alaa Attya <alaa.attya91@gmail.com>
     */
    async search(params) {
        const requestXmlStringPayload = requestTransformer(params, this.apiCredentials, {
            operation: 'HOTEL_SEARCH_REQUEST',
            operationType: 'Request',
        });
           console.log(requestXmlStringPayload);
        // const apiResponse = await searchRequest.sendRequest('', 'post', requestXmlStringPayload);
        //
        // return apiResponse;
    }

}

module.exports = HotelPro;