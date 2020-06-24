import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const addIngredients = (name) => {
  return {
    ingredientName: name,
    type: actionTypes.ADD_INGREDIENT,
  };
};
export const removeIngredients = (name) => {
  return {
    ingredientName: name,
    type: actionTypes.REMOVE_INGREDIENT,
  };
};

export const setIngredients = (ingredients) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients,
  };
};

export const initIngredients = () => {
  return (dispatch) => {
    axios
      .get("https://burger-react-c67a8.firebaseio.com/ingredients.json")
      .then((response) => {
        // this.setState({ ingredients: response.data });
        dispatch(setIngredients(response.data));
      })
      .catch((error) => {
        dispatch(fetchIngredientsFailed)();
        //     this.setState({error: true})
      });
  };
};

export const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED,
  };
};
