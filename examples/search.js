const HotelPro = require('./../lib/hotels-pro');

const credentials = {
    username: 'CarsolizeCoral',
    password: 'Bm?q"]xZ&gZ658rM',
};
const hotelPro = new HotelPro('https://api-test.hotelspro.com/api/v2/',credentials);


const data = hotelPro.search({
    'checkInDate': '2018-01-25',
    'checkoutDate': '2018-01-26',
    'currency': 'USD',
    'nationality': 'cn',
    'destination': {
        'type': 1,
        'destinationId': '19064'
    },
    'rooms': [
        {
            'adultsCount': 2,
            'kidsAges': [2, 5],
        },
        {
            'adultsCount': 3,
            'kidsAges': [4],
        }
    ]

}).then(result => {
    console.log(result);
});