const destinationType = require('../../enum/destination-type');
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

    const type = params.destination.type;


    switch (type) {

        case destinationType.CITY: {
            payloadRequest.destination_code = params.destination.destinationId;
            break;
        }

        case destinationType.GEO_LOCATION_INFO: {

            payloadRequest.lat = params.destination.lat;
            payloadRequest.lon = params.destination.lon;
            payloadRequest.radius = parseInt(params.destination.radius) * 1000;

            break;
        }

        case destinationType.HOTEL_IDS: {
            payloadRequest.hotel_code = params.destination.hotelIds;
            break;
        }
        default: {

        }

    }

    payloadRequest.pax = [];
    for(let i =0 ;i < params.rooms.length; i ++){
        let pax=[];
        pax.push(params.rooms[i].adultsCount);
        let kidsAges =params.rooms[i].kidsAges;
        if (kidsAges.length >= 1) {
            for (let value of kidsAges) {
                pax.push(value);
            }
        }
        payloadRequest.pax.push(pax.join());
    }


    return payloadRequest;

}
module.exports = requestTransformer;