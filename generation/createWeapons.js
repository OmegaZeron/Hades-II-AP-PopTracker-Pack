import { weaponData, writeToFile } from './utils.js'

export function createWeapons() {
	let items = []

	for (let weapon of weaponData) {
		items.push({
			name: `${weapon.name}, the ${weapon.type}`,
			type: "toggle",
			// img: `images/items/${weapon.code}.png`,
			img: `images/items/Coronacht_Base.png`,
			codes: `weapon, ${weapon.code}`
		})
		for (let aspect of weapon.aspects) {
			items.push({
				name: `Aspect of ${aspect.name} (${weapon.name})`,
				type: "toggle",
				// img: `images/items/${aspect.code}.png`,
				img: `images/items/Coronacht_Base.png`,
				codes: `aspect, aspect${weapon.code}, ${aspect.code}${(aspect.hidden ? `, aspectHidden` : ``)}`
			})
		}
	}

	writeToFile("items/weapons.jsonc", JSON.stringify(items, null, "\t"))
}

if (import.meta.main) {
	createWeapons()
}