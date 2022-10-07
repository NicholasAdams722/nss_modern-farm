//TODO Define and Export plantSeeds function.  The function must accept the years's planting plan as input.

import { addPlant } from "./field.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import { createCorn } from "./seeds/corn.js";
import { createAsparagus } from "./seeds/asparagus.js";


//createPlan is stored in variable yearlyPlan in main.js
//use 2 for of loops
export const plantSeeds = (yearlyPlanArray) => {
  for (const plantArray of yearlyPlanArray) {
    for (const plant of plantArray) {
      //use else if for each plant type
      if (plant === "Asparagus") {
        addPlant(createAsparagus());
      } else if (plant === "Soybean") {
        addPlant(createSoybean());
      } else if (plant === "Sunflower") {
        addPlant(createSunflower());
      } else if (plant === "potato") {
        addPlant(createPotato());
      } else if (plant === "wheat") {
        addPlant(createWheat());
      } else if (plant === "corn") {
        addPlant(createCorn());
      }
    }
  }
};

//TODO The plan is an array. It contains 4 arrays representing the rows in the field to be plants. Figure out how to iterate both the parent array and the child arrays.
