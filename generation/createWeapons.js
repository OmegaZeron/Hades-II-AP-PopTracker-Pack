import { vars, weaponData, writeToFile } from './utils.js'

export default function createWeapons() {
	let items = []

	for (let weapon of weaponData) {
		items.push({
			name: `${weapon.name}, the ${weapon.type}`,
			type: "toggle",
			// img: `images/items/${weapon.code}.png`,
			img: `images/items/Coronacht_Base.png`,
			codes: `${vars.Helpers.Weapon}, ${weapon.code}`
		})
		for (let aspect of weapon.aspects) {
			items.push({
				name: `Aspect of ${aspect.name} (${weapon.name})`,
				type: "toggle",
				// img: `images/items/${aspect.code}.png`,
				img: `images/items/Coronacht_Base.png`,
				codes: `${vars.Helpers.Aspect}, aspect${weapon.code}, ${aspect.code}${aspect.alt ? `, ${vars.Helpers.AltAspect}` : ''}${(aspect.hidden ? `, ${vars.Helpers.HiddenAspect}` : ``)}`
			})
		}
	}

	writeToFile("items/weapons.jsonc", JSON.stringify(items, null, "\t"))
}

if (import.meta.main) {
	createWeapons()
}