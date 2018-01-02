const searchRequest = require('./requests/search-request');
const requestTransformer = require('./transformers/search/request-transfomer');

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
    constructor(baseUrl, requestMethod, apiCredentials) {

        this.requestMethod = requestMethod;
        this.apiCredentials = apiCredentials;
        this.requestHandler = new searchRequest(baseUrl, requestMethod, apiCredentials);
    }

    /**
     *
     * @param params
     * @return {Promise.<*>}
     *
     * @author Osama Elmashad <elmashad285@gmail.com>
     */
    async search(params) {

        const requestXmlStringPayload = requestTransformer(params,);

         await this.requestHandler.sendRequest(requestXmlStringPayload).then(response=>{
             console.log(response.data);
         });


    }

}

module.exports = HotelPro;