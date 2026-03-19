import { writeToFile, toPascalCase, vars } from './utils.js'

export function createItems() {
	let items = []

	let itemData = [
		{name: "Silver Spade", codes: `tool, ${vars.Tools.SilverSpade}`},
		{name: "Crescent Pick", codes: `tool, ${vars.Tools.CrescentPick}`},
		{name: "Tablet of Peace", codes: `tool, ${vars.Tools.TabletOfPeace}`},
		{name: "Rod of Fishing", codes: `tool, ${vars.Tools.RodOfFishing}`},
		{name: "Doomed Reckoning", codes: vars.Events.DoomedReckoning},
	]

	for (let item of itemData) {
		items.push({
			name: `${item.name}`,
			type: "toggle",
			img: `images/items/${toPascalCase(item.name)}.png`,
			codes: item.codes
		})
	}

	writeToFile("items/items.jsonc", JSON.stringify(items, null, "\t"))
}

if (import.meta.main) {
	createItems()
}