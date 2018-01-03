const axios = require('axios')
const queryString = require('query-string');
const apiEndpoints = require('../enum/hotel-api-endpoints');

class SearchRequest {

    /**
     * @param baseUrl
     * @param credentials
     * @param uri
     * @author Osama Elmashad <elmashad285@gmail.com>
     */
    constructor(baseUrl, credentials) {
        this.baseUrl = baseUrl;
        this.credentials = credentials;
        this.url = this.baseUrl + apiEndpoints.SEARCH;
    }

    /**
     *
     * @param {string} endpoint
     * @param {string} requestMethod
     * @param {Object} requestData
     * @param {Object} optionalHeaders
     *
     * @return {string}
     */
    async sendRequest(requestData = {}) {

        const searchQuery = queryString.stringify(requestData, { encode: false });
        const apiURL = this.url + '?' + searchQuery;

        const res = axios.get(apiURL, {
            auth: this.credentials,
        });

        return res;

    }


}

module.exports = SearchRequest;
