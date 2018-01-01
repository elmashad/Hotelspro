

class SearchRequest{

    /**
     *
     * @param {string} baseUrl
     * @param {Object} credentials
     * @param {axios} axios
     *
     * @author Alaa Attya <alaa.attya91@gmail.com>
     */
    constructor(baseUrl, credentials, axios) {
        this.baseUrl = baseUrl;
        this.credentials = credentials;
        this.axios = axios;
        this.axios.defaults.headers.post['Content-Type'] = 'text/xml';
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
    async sendRequest(endpoint, requestMethod, requestData = {}, optionalHeaders = {}) {
        // TODO: check that base url has "/" as the last char
        const url = this.baseUrl + endpoint;
        let apiResponse = {};
        switch (requestMethod) {
            case RequestType.POST:
                apiResponse = await this.postRequest(
                    url,
                    requestData,
                );
                break;

            case RequestType.GET:
                apiResponse = await this.getRequest(
                    url,
                    requestData,
                );
                break;

            case RequestType.PUT:
                apiResponse = await this.putRequest(
                    url,
                    requestData,
                    optionalHeaders,
                );
                break;

            case RequestType.DELETE:
                apiResponse = await this.deleteRequest(
                    url,
                    requestData,
                );
                break;

            default:
                throw new Error('un supported request method');
        }

        return apiResponse;
    }


}

module.exports = SearchRequest;
