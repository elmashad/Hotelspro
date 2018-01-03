const searchRequest = require('./requests/search-request');
const searchRequestTransformer = require('./transformers/search/request-transfomer');

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
    constructor(baseUrl, apiCredentials) {

        this.apiCredentials = apiCredentials;
        this.requestHandler = new searchRequest(baseUrl, apiCredentials);
    }

    /**
     *
     * @param params
     * @return {Promise.<*>}
     *
     * @author Osama Elmashad <elmashad285@gmail.com>
     */
    async search(params) {

        const requestXmlStringPayload = searchRequestTransformer(params,);
        let searchResult = {};
        await this.requestHandler.sendRequest(requestXmlStringPayload).then(response => {
            searchResult = response.data;
        }).catch(err => {
            searchResult = err.response.data;
        });

        return searchResult;
    }

}

module.exports = HotelPro;