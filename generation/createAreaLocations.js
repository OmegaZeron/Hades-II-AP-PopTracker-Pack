import { vars, writeToFile } from './utils.js'

export function createAreaLocs() {
	let regions = [
		{name: "Erebus", start: 1, end: 13, x: 0, y: 0, bossName: "Hecate", subName: "The Test", offsetX: 10, offsetY: 10},
		{name: "Oceanus", start: 15, end: 23, x: 0, y: 0, bossName: "Scylla and the Sirens", bossCode: "Scylla", subName: "They Hate You", offsetX: 10, offsetY: 10},
		{name: "Fields of Mourning", code: "Fields", start: 25, end: 35, x: 0, y: 0, bossName: "Cerberus", subName: "Tormented Puppy", offsetX: 10, offsetY: 10},
		{name: "Tartarus", start: 37, end: 72, x: 0, y: 0, bossName: "Chronos", subName: "Grandfather Time", offsetX: 10, offsetY: 10},
		{name: "City of Ephyra", code: "Ephyra", start: 1, end: 13, x: 0, y: 0, bossName: "Polyphemus", subName: "Blind Shepherd", offsetX: 10, offsetY: 10},
		{name: "Rift of Thessaly", code: "Thessaly", start: 15, end: 23, x: 0, y: 0, bossName: "Eris", subName: "Strife Incarnate", offsetX: 10, offsetY: 10},
		{name: "Mount Olympus", code: "Olympus", start: 25, end: 35, x: 0, y: 0, bossName: "Prometheus", subName: "Titan of Prophecy", offsetX: 10, offsetY: 10},
		{name: "The Summit", code: "Summit", start: 37, end: 72, x: 0, y: 0, bossName: "Typhon", subName: "Father of All Monsters", offsetX: 10, offsetY: 10}
	]
	let weapons = [
		null, // room-location system
		{name: "Descura", code: vars.Weapons.Descura, offset: -95},
		{name: "Lim and Oros", code: vars.Weapons.LimAndOros, offset: -45},
		{name: "Ygnium", code: vars.Weapons.Ygnium, offset: -15},
		{name: "Zorephet", code: vars.Weapons.Zorephet, offset: 15},
		{name: "Revall", code: vars.Weapons.Revall, offset: 45},
		{name: "Xinth", code: vars.Weapons.Xinth, offset: 95}
	]
	
	let allLocations = []
	// base locations
	for (let region of regions) {
		let parent = {
			name: region.name,
			chest_unopened_img: "images/labels/Trove.png",
			chest_opened_img: "images/labels/TroveOpen.png",
			access_rules: [`^$CanReach|${(region.code ? region.code : region.name)}`],
			children: []
		}

		for (let weapon of weapons) {
			let location = {
				name: `${region.name}${(weapon ? ` (${weapon.name})` : '')}`,
				visibility_rules: [weapon ? vars.Settings.LocationSystemWeapon : vars.Settings.LocationSystemRoom],
				access_rules: [weapon ? weapon.code : ''],
				sections: [],
				map_locations: [{
					map: "areas",
					x: region.x + (weapon ? weapon.offset : 0),
					y: region.y
				}]
			}
			if (location.access_rules[0] === '') {
				delete location.access_rules
			}

			for (let i = region.start; i <= region.end; i++) {
				let section = {name: `Room ${i}`}
				location.sections.push(section)
			}

			parent.children.push(location)
		}

		let bossLocation = {
			name: region.bossName,
			access_rules: [`^$CanReach|${region.bossCode ? region.bossCode : region.bossName}`],
			sections: [],
			map_locations: [{
				map: "areas",
				x: region.x + region.offsetX,
				y: region.y + region.offsetY
			}]
		}
		for (let weapon of weapons) {
			let section = {
				name: weapon ? weapon.name : region.subName,
				visibility_rules: [weapon ? vars.Settings.LocationSystemWeapon : vars.Settings.LocationSystemRoom],
				access_rules: [weapon ? weapon.code : '']
			}

			if (section.access_rules[0] === '') {
				delete section.access_rules
			}

			bossLocation.sections.push(section)
		}
		parent.children.push(bossLocation)

		allLocations.push(parent)
	}

	let output = JSON.stringify(allLocations, null, "\t").replace(/\[\n\s+(".+")\n\s+\]/g, "[$1]").replace(/\{\n\s+(.+)\n\s+\}/g, "{$1}")
	writeToFile("locations/areas.jsonc", output)
}

if (import.meta.main) {
	createAreaLocs()
}