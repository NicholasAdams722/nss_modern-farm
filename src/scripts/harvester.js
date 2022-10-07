//define and export harvestPlants function

//The function will return an array of seed objects.

//Iterate the array of growing plants. On each plant, get the value of the output property.



export const harvestPlants = (growingPlantsArray) => {
  const harvestedPlants = [];
  for (const plant of growingPlantsArray) {
    if (plant.type === "corn") {
      const plantGrowing = plant.output;
      for (let i = 0; i < plant.output / 2; i++) {
        harvestedPlants.push(plant);
      } 
    } else {
      for (let i = 0; i < plant.output; i++) {
        harvestedPlants.push(plant);
      }
    }
  }
  return harvestedPlants
};
