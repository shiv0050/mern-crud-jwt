import http from "../http-common.js";

class RestaurantDataService {
  getAll() {
    return http.get(`restaurants`);
  }

  get(id) {
    return http.get(`restaurants/id/${id}`);
  }

  find(query, by = "name", page = 0) {
    return http.get(`restaurants?${by}=${query}&page=${page}`);
  } 

  createReview(data) {
    return http.post("restaurants/review", data);
  }

  updateReview(data) {
    return http.put("restaurants/review", data);
  }

  deleteReview(id, userId) {
    return http.delete(`restaurants/review?id=${id}`, {data:{user_id: userId}});
  }

  getCuisines(id) {
    return http.get(`restaurants/cuisines`);
  }

}

export default new RestaurantDataService();