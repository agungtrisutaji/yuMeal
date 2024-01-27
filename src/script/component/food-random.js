class FoodRandom extends HTMLElement {
  connectedCallback() {
    this.render();
    this.fetchRandomFood();
  }

  async fetchRandomFood() {
    try {
      const response = await fetch(
        'https://www.themealdb.com/api/json/v1/1/random.php'
      );
      const data = await response.json();
      const randomFood = data.meals[0];
      this.renderRandomFood(randomFood);
    } catch (error) {
      console.error('Error fetching random food:', error);
      this.renderError('Failed to fetch random food.');
    }
  }

  render() {
    this.innerHTML = `<h2>Loading...</h2>`;
  }

  renderRandomFood(food) {
    this.innerHTML = `
    <h2>Today's Recommendation</h2>
      <div class="random-item">
        <img class="random-thumb" src="${food.strMealThumb}" alt="${food.strMeal}">
        <div class="random-info">
          <h3>${food.strMeal}</h3>
          <p>${food.strInstructions}</p>
        </div>
      </div>
      `;
  }

  renderError(message) {
    this.innerHTML = `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define('food-random', FoodRandom);
