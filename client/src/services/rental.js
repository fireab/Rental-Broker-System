// export const fetchRentalProducts = async () => {
//     // Implement your logic to fetch the rental products from the server.
//     // Example: const response = await axios.get('/api/rental-products');
//     // return response.data;
//   };

import axios from "axios";



export async function  fetchRentalProducts() {

  return await axios.get('/api/rental-products');
}