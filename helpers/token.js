const axios = require('axios');

export const listAPICollection = (id) = 
    new Promise(function (result) {
        console.log(id)
        const url = `https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20&collection=${id}`;
        return axios.get(url, {
            headers: {
              'X-API-KEY': process.env.OSKEY,
            }
        })
        .then(function (response) {
            console.log(response)
          result({error: null, response: response});
          return;
        })
        .catch(function (error) {
            console.log(error)

            result({error: error, response: null});
            return;
        });
});

// export const listPinnedPins = () => 
// new Promise(function (result) {
//   console.log("List Pins");
//     const url = `https://api.pinata.cloud/data/pinList?status=pinned`;
//     return axios
//         .get(url, {
//             headers: {
//               'pinata_api_key': process.env.PINATAKEY,
//               'pinata_secret_api_key': process.env.PINATASECRET
//             }
//         })
//         .then(function (response) {
//           result({error: null, response: response});
//           return;
//         })
//         .catch(function (error) {
//             result({error: error, response: null});
//             return;
//         });
// });

// export const removePinFromIPFS = (hashToUnpin) => 
//   new Promise(function (result) {

//   const url = `https://api.pinata.cloud/pinning/unpin/${hashToUnpin}`;
//   return axios
//       .delete(
//           url,
//           {
//               headers: {
//                 'pinata_api_key': process.env.PINATAKEY,
//                 'pinata_secret_api_key': process.env.PINATASECRET
//               }
//         })
//       .then(function (response) {
//         result({error: null, response: response});
//         return;
//       })
//       .catch(function (error) {
//           result({error: error, response: null});
//           return;
//       });
// });

