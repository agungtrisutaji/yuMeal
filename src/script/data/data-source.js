const axios = require('axios');

class DataSource {
  static async searchMeal(keyword) {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`
      );
      return response.data.meals;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}

export default DataSource;
