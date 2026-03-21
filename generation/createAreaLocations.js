import { vars, mapData, writeToFile } from './utils.js'

export default function createAreaLocs() {
	let regions = [
		{name: "Erebus", code: vars.LocNames.Areas.Erebus, start: 1, end: 13, x: 655, y: 1247, bossName: "Hecate", bossCode: vars.LocNames.Bosses.Hecate, subName: "The Test", bossX: 777, bossY: 1343},
		{name: "Oceanus", code: vars.LocNames.Areas.Oceanus, start: 15, end: 23, x: 1015, y: 1367, bossName: "Scylla and the Sirens", bossCode: vars.LocNames.Bosses.Scylla, subName: "They Hate You", bossX: 1110, bossY: 1453},
		{name: "Fields of Mourning", code: vars.LocNames.Areas.Fields, start: 25, end: 35, x: 1310, y: 1501, bossName: "Cerberus", bossCode: vars.LocNames.Bosses.Cerberus, subName: "Tormented Puppy", bossX: 1210, bossY: 1606},
		{name: "Tartarus", code: vars.LocNames.Areas.Tartarus, start: 37, end: 72, x: 998, y: 1729, bossName: "Chronos", bossCode: vars.LocNames.Bosses.Chronos, subName: "Grandfather Time", bossX: 1010, bossY: 1872},
		{name: "City of Ephyra", code: vars.LocNames.Areas.Ephyra, start: 1, end: 13, x: 0, y: 0, bossName: "Polyphemus", bossCode: vars.LocNames.Bosses.Polyphemus, subName: "Blind Shepherd", bossX: 10, bossY: 10},
		{name: "Rift of Thessaly", code: vars.LocNames.Areas.Thessaly, start: 15, end: 23, x: 0, y: 0, bossName: "Eris", bossCode: vars.LocNames.Bosses.Eris, subName: "Strife Incarnate", bossX: 10, bossY: 10},
		{name: "Mount Olympus", code: vars.LocNames.Areas.Olympus, start: 25, end: 35, x: 0, y: 0, bossName: "Prometheus", bossCode: vars.LocNames.Bosses.Prometheus, subName: "Titan of Prophecy", bossX: 10, bossY: 10},
		{name: "The Summit", code: vars.LocNames.Areas.Summit, start: 37, end: 72, x: 0, y: 0, bossName: "Typhon", bossCode: vars.LocNames.Bosses.Typhon, subName: "Father of All Monsters", bossX: 10, bossY: 10}
	]
	let weapons = [
		null, // room-location system
		{name: "Descura", code: vars.Weapons.Descura, offset: -2.5},
		{name: "Lim and Oros", code: vars.Weapons.LimAndOros, offset: -1.5},
		{name: "Ygnium", code: vars.Weapons.Ygnium, offset: -.5},
		{name: "Zorephet", code: vars.Weapons.Zorephet, offset: .5},
		{name: "Revall", code: vars.Weapons.Revall, offset: 1.5},
		{name: "Xinth", code: vars.Weapons.Xinth, offset: 2.5}
	]
	
	let allLocations = []
	// base locations
	for (let region of regions) {
		let parent = {
			name: region.name,
			chest_unopened_img: "images/labels/Trove.png",
			chest_opened_img: "images/labels/TroveOpen.png",
			access_rules: [`^$CanReach|${region.code}`],
			children: []
		}

		for (let weapon of weapons) {
			let location = {
				name: `${region.name}${(weapon ? ` (${weapon.name})` : '')}`,
				visibility_rules: [weapon ? vars.Settings.LocationSystemWeapon : vars.Settings.LocationSystemRoom],
				access_rules: [weapon ? weapon.code : ''],
				sections: [],
				map_locations: [{
					map: mapData.BiomeMap.name,
					x: Math.floor(region.x + (weapon ? weapon.offset * (mapData.BiomeMap.size + mapData.BiomeMap.border * 2 + mapData.BiomeMap.buffer) : 0)),
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
			access_rules: [`^$CanReach|${region.bossCode}`],
			sections: [],
			map_locations: [{
				map: mapData.BiomeMap.name,
				x: region.bossX,
				y: region.bossY
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