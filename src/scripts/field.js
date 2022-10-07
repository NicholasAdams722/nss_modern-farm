//TODO Define a variable with a value of empty array.  This will store all plants growing in the field.
let growingPlantsArray = [];

//TODO Define and export a function named addPlant.  Must accept a seed object as input.

//TODO The addPlant function must accept a seed object as input. The function will add the seed to the field (How do you add something to an array? Do you remember the method for it?).
export const addPlant = (seedObj) => {
  //Add seed to field
  //If seed object is array, push to growing plants array
  //! Do I need else statement?
  if (Array.isArray(seedObj)) {
    growingFieldArray.push(seedObj[0]);
    growingPlantsArray.push(seedObj[1]);
  } else {
    growingPlantsArray.push(seedObj);
  }
};

//TODO Define and export a function named usePlants that returns a copy of the array of plants.

//! How do I return a copy of an array? How does .map work in this case?

export const usePlants = () => {
  return growingPlantsArray.map((row) => ({ ...row }));
};
