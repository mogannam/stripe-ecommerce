// import our actions
// import some helper functions
import {
    UPDATE_PRODUCTS, 
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY
  } from '../utils/actions';

  import { reducer } from '../utils/reducers';
  
  // create a sample of what our global state will look like
  const initialState = { // create an initial state data structure
    products: [], // we have no products
    categories: [{ name: 'Food' }], // we have one category
    currentCategory: '1', // curent category is some id food
  };

  // test a function called UPDATE_PRODUCTS in utils/reducers.js
  test('UPDATE_PRODUCTS', () => {
    // call the test function, pass it two things 1) the name of the function testing
    // 2) the anomynous function that does work we bench mark against
    
    // create a newState Data structure to hold the updated data
    // use the reducer helper function built into REDUX
    // pass the helper function a call to the function Update_Products, the global scoped data initialState,
    // This creates a copy of the original data in initial state BUT DOES NOT alter the original data
    // the local data to update is products -> where products is updated with two empty distionary hashes
    // Update_Prodcuts modifies the local data, products array of new State and returns the result of the update
    // we end up with two different verions of the data 1) the copy in newState 2) initialState
    let newState = reducer(initialState, {
      type: UPDATE_PRODUCTS,
      products: [{}, {}]
    });
    
    // Perfrom a BenchMark test of our tests
    // New state should have two new products -> so if we test the length against two
    // then we know it should return true if the empty products array is increased to length two
    expect(newState.products.length).toBe(2);
    expect(initialState.products.length).toBe(0);
  });


  // call test helper function, pass it UPDATE_CATEGORIES and an anyomynous function
  // create a local copy of the data newState -> call helper fuction to create the local copy
  // pass the global data initialState, but DONT alter it

  // call UPDATE_CATEGORIES to perfrom a benchmark test and update the cateegories of the local data
  test('UPDATE_CATEGORIES', () => {
    let newState = reducer(initialState, {
      type: UPDATE_CATEGORIES,
      categories: [{}, {}]
    });
  
    // test teh copy to see if it updated
    expect(newState.categories.length).toBe(2);
    // test the original data to guarantee it does not change.
    expect(initialState.categories.length).toBe(1);
  });

  test('UPDATE_CURRENT_CATEGORY', () => {
    let newState = reducer(initialState, {
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: '2'
    });
  
    expect(newState.currentCategory).toBe('2');
    expect(initialState.currentCategory).toBe('1');
  });