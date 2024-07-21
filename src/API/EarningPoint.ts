import fetcher from "./fetcher";


export async function getEarningPoint() {
  try {
    const response = await fetcher.get('api/earning-point/get-earning-point');
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}