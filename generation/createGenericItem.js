import { writeToFile, toPascalCase } from './utils.js'

export function createItems() {
	let items = []

	let itemData = [
		{name: "Silver Spade", type: "tool"},
		{name: "Crescent Pick", type: "tool"},
		{name: "Tablet of Peace", type: "tool"},
		{name: "Rod of Fishing", type: "tool"},
	]

	for (let item of itemData) {
		items.push({
			name: `${item.name}`,
			type: "toggle",
			img: `images/items/${toPascalCase(item.name)}.png`,
			codes: `${item.type}, ${toPascalCase(item.name)}`
		})
	}

	writeToFile("items/items.jsonc", JSON.stringify(items, null, "\t"))
}

if (import.meta.main) {
	createItems()
}