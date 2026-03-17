import { createVars } from "./createVars.js"
import { createKeepsakeItems } from "./createKeepsakes.js"
import { createWeapons } from "./createWeapons.js"
import { createItems } from "./createGenericItem.js"
import { createMaps } from "./createMaps.js"
import { createScoresLocs } from "./createScoreLocations.js"
import { createAreaLocs } from "./createAreaLocations.js"

createVars()

createKeepsakeItems()
createWeapons()
createItems()

createMaps()
createScoresLocs()
createAreaLocs()
