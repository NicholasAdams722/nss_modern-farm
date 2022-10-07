console.log("Welcome to the main module")

import { addPlant, usePlants } from './field.js'
//TODO Import createPlan() function from plan.js 
import { createPlan } from './plan.js'

//TODO Invoke function and and store in variable yearlyPlan

const yearlyPlan = createPlan()

//TODO console log the yearly plan variable to test
console.log( yearlyPlan )

//TODO console log seed creation functions to test 
//Asparagus

import { createAsparagus } from "./seeds/asparagus.js"

const asparagusSeed = createAsparagus()
console.log(asparagusSeed)

//Corn
import { createCorn } from "./seeds/corn.js"

const cornSeed = createCorn()
console.log(cornSeed)

//Potato
import { createPotato } from "./seeds/potato.js"

const potatoSeed = createPotato()
console.log(potatoSeed)

//Soybean
import { createSoybean } from "./seeds/soybean.js"

const soybeanSeed = createSoybean()
console.log(soybeanSeed)

//Sunflower
import { createSunflower } from "./seeds/sunflower.js"

const sunflowerSeed = createSunflower()
console.log(sunflowerSeed)

//Wheat
import { createWheat } from "./seeds/wheat.js"
import { plantSeeds } from './tractor.js'

const wheatSeed = createWheat()
console.log(wheatSeed)



