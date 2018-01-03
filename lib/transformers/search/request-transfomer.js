const destinationType = require('../../enum/destination-type');

/**
 *
 * @param rooms
 * @return {Array}
 * @author Osama Elmashad <elmashad285@gmail.com>
 */
function parseRooms(rooms) {
    let paxValues = [];
    for (let i = 0; i < rooms.length; i++) {
        let pax = [];
        pax.push(rooms[i].adultsCount);
        let kidsAges = rooms[i].kidsAges;
        if (kidsAges.length >= 1) {
            for (let value of kidsAges) {
                pax.push(value);
            }
        }
        paxValues.push(pax.join());
    }
    return paxValues;
}

/**
 *
 * @param type
 * @param destination
 * @return {{}}
 * @author Osama Elmashad <elmashad285@gmail.com>
 */
function searchCriteria(type, destination) {

    let searchParam = {};

    switch (type) {

        case destinationType.CITY: {
            searchParam.destination_code = destination.destinationId;
            break;
        }

        case destinationType.GEO_LOCATION_INFO: {

            searchParam.lat = destination.lat;
            searchParam.lon = destination.lon;
            searchParam.radius = parseInt(destination.radius) * 1000;

            break;
        }

        case destinationType.HOTEL_IDS: {
            searchParam.hotel_code = destination.hotelIds;
            break;
        }
        default: {

        }

    }

    return searchParam;

}

/**
 *
 * @param params
 * @author Osama Elmashad <elmashad285@gmail.com>
 */
requestTransformer = function (params) {

    const payloadRequest = {}

    payloadRequest.currency = params.currency;
    payloadRequest.client_nationality = params.nationality;
    payloadRequest.checkin = params.checkInDate;
    payloadRequest.checkout = params.checkoutDate;
    payloadRequest.pax = parseRooms(params.rooms);

    const type = params.destination.type;
    let destinationObject = searchCriteria(type, params.destination);

    return Object.assign(payloadRequest, destinationObject);

}
module.exports = requestTransformer;