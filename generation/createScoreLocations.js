import fs from 'fs'

export function createScores() {
	let locations = []

	// some hard coded x/y values to place on the map
	// currently for Hades 1, change if needed for Hades 2
	let x = [850, 783, 716, 649, 582, 513, 446, 379, 312, 245]
	let y = [1000, 932, 863, 794, 725, 656, 587, 518, 449, 380]
	let index = -1
	let xIndex = -1
	let yIndex = -1
	for (let i = 1; i <= 1000; i++) {
		if (i % 100 == 1) {
			yIndex++;
			xIndex = -1
		}
		if (i % 10 == 1) {
			index++;
			locations.push({
				name: `Clear Score ${i}-${i+9}`,
				sections: [],
				map_locations: [{
					map: "score",
					x: x[++xIndex],
					y: y[yIndex]
				}]
			})
		}
		locations[index].sections.push({
			name: `${i}`,
			visibility_rules: [`$CanSeeScore|${i}`],
			access_rules: [`^$CanReachScore|${i}`]
		})
	}

	let result = [{
		name: "Score Locations",
		chest_unopened_img: "images/labels/Trove.png",
		chest_opened_img: "images/labels/TroveOpen.png",
		children: locations
	}]

	fs.writeFile("locations/score.jsonc", JSON.stringify(result, null, "\t").replace(/rules": \[\n\s+(".+")\n\s+\]/g, `rules": [$1]`), err => {
		if (err) {
			console.error(`Error writing to file: ${err}`)
			return
		}
	})
}

if (import.meta.main) {
	createScores()
}