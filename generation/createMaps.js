import { mapData, writeToFile } from "./utils.js"

export default function createMaps() {
	let maps = []
	for (let map of Object.values(mapData)) {
		maps.push({
			name: map.name,
			img: `images/maps/${map.name}.png`,
			location_size: map.size,
			location_border_thickness: map.border
		})
	}

	writeToFile("maps/maps.jsonc", JSON.stringify(maps, null, "\t"))
}

if (import.meta.main) {
	createMaps()
}