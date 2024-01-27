class FoodItem extends HTMLElement {
  set food(food) {
    this._food = food;
    this.render();
  }

  render() {
    const truncatedInstructions = this.truncateText(
      this._food.strInstructions,
      25
    );

    this.innerHTML = `
      <img class="meal-thumb" src="${this._food.strMealThumb}" alt="Meal Thumb" data-tilt>
      <div class="meal-info">
        <h2>${this._food.strMeal}</h2>
        <p>${truncatedInstructions}<a class="read-more">Read More</a></p>
        
        </div>
    `;

    const readMoreButton = this.querySelector('.read-more');
    readMoreButton.addEventListener('click', () => this.showFullInstructions());
  }

  truncateText(text, maxLength) {
    const words = text.split(' ');
    if (words.length > maxLength) {
      return words.slice(0, maxLength).join(' ') + '...';
    } else {
      return text;
    }
  }

  showFullInstructions() {
    const foodInfoElement = this.querySelector('.meal-info p');
    const fullInstructions = this._food.strInstructions;

    if (fullInstructions) {
      foodInfoElement.innerHTML = fullInstructions;
    }
  }
}

customElements.define('food-item', FoodItem);
