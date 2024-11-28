import API_ENDPOINT from "../config/api-endpoint";

class getDataResto {
  static async homeRestorant() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestorant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default getDataResto;
