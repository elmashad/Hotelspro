const axios = require('axios')
const queryString = require('query-string');


class SearchRequest {

    /**
     *
     * @param method
     * @param baseUrl
     * @param credentials
     * @param uri
     * @author Osama Elmashad <elmashad285@gmail.com>
     */
    constructor(baseUrl, requestMethod, credentials) {
        this.method = 'get';
        this.baseUrl = baseUrl;
        this.credentials = credentials;
        this.url = this.baseUrl + requestMethod;
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

        let test = queryString.stringify(requestData, { encode: false });

       const res=   axios.get(this.url + '?' + test, {
            auth: this.credentials,
        });

        return res ;

    }


}

module.exports = SearchRequest;
