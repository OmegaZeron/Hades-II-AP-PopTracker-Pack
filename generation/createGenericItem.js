import fs from 'fs'
import { toPascalCase } from './utils.js'

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

	fs.writeFile("items/items.jsonc", JSON.stringify(items, null, "\t"), err => {
		if (err) {
			console.error(`Error writing to file: ${err}`)
			return
		}
	})
}

if (import.meta.main) {
	createItems()
}