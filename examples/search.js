const HotelPro = require('./../lib/index');

const credentials = {
    username: 'CarsolizeCoral',
    password: 'Bm?q"]xZ&gZ658rM',
};
const hotelPro = new HotelPro(credentials, 'https://api-test.hotelspro.com/api/v2/search/');


// const data =  hotelPro.getHotelClient().search({
//         'checkInDate': '',
//         'checkoutDate': '',
//         'cityId' : '',
//         'rooms': [
//             {
//                 'adults': 2,
//                 'kids': 1
//             },
//             {
//                 'adults': 3,
//                 'kids': 2
//             }
//         ]
//
//     }).then(dd => {
//         console.log(dd);
// });