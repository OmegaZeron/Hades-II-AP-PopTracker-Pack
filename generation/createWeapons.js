import { vars, weaponData, writeToFile } from './utils.js'

export default function createWeapons() {
	let items = []

	for (let weapon of weaponData) {
		items.push({
			name: `${weapon.name}, the ${weapon.type}`,
			type: "toggle",
			// img: `images/items/${weapon.code}.png`,
			img: `images/items/Coronacht_Base.png`,
			codes: `${vars.Helpers.Weapon}, ${weapon.codes.join(", ")}`
		})
		for (let aspect of weapon.aspects) {
			let codes = `${vars.Helpers.Aspect}, aspect${weapon.codes[0]}, ${aspect.code}`
			if (aspect.alt) {
				codes += `, ${vars.Helpers.AltAspect}`
			}
			if (aspect.hidden) {
				codes += `, ${vars.Helpers.HiddenAspect}`
			}

			items.push({
				name: `Aspect of ${aspect.name} (${weapon.name})`,
				type: "toggle",
				// img: `images/items/${aspect.code}.png`,
				img: `images/items/Coronacht_Base.png`,
				codes: codes
			})
		}
	}

	writeToFile("items/weapons.jsonc", JSON.stringify(items, null, "\t"))
}

if (import.meta.main) {
	createWeapons()
}