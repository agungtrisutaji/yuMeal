import '../component/food-list.js';
import '../component/food-random.js';
import DataSource from '../data/data-source.js';

const main = () => {
  const searchInputElement = document.querySelector('.searchBar input');
  const searchButtonElement = document.querySelector('.searchBar button');
  const foodListElement = document.querySelector('food-list');
  const foodRandomElement = document.querySelector('food-random');

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchMeal(searchInputElement.value);

      if (result) {
        renderResult(result);
      } else {
        fallbackResult(
          `Kami tidak dapat menemukan makanan : ${searchInputElement.value}`
        );
      }
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = (results) => {
    foodListElement.foods = results;
  };

  const fallbackResult = (message) => {
    foodListElement.renderError(message);
  };

  searchButtonElement.addEventListener('click', onButtonSearchClicked);
};

export default main;

document.addEventListener('DOMContentLoaded', main);
