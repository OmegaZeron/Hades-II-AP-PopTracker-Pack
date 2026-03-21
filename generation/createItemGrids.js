import { vars, weaponData, writeToFile } from "./utils.js"

export default function createItemGrids() {
	let grids = {
		weaponGrid: {
			type: "itemgrid",
			h_alignment: "left",
			item_margin: "3, 2",
			item_size: 38,
			rows: []
		},
		keepsakeGrid: {
			type: "itemgrid",
			h_alignment: "left",
			item_margin: "3, 2",
			item_size: 32,
			rows: []
		},
		// fearGrid: {
		// 	type: "itemgrid",
		// 	h_alignment: "left",
		// 	item_margin: "3, 2",
		// 	item_size: 38,
		// 	rows: []
		// },
		// itemGrid: {
		// 	type: "itemgrid",
		// 	h_alignment: "left",
		// 	item_margin: "3, 2",
		// 	item_size: 38,
		// 	rows: []
		// },
	}

	function createWeaponGrid() {
		for (let weapon of weaponData) {
			let index = 0
			if (!grids.weaponGrid.rows[index]) {
				grids.weaponGrid.rows.push([])
			}
			grids.weaponGrid.rows[index].push(weapon.code)
			for (let aspect of weapon.aspects) {
				if (!grids.weaponGrid.rows[++index]) {
					grids.weaponGrid.rows.push([])
				}
				grids.weaponGrid.rows[index].push(aspect.code)
			}
		}
	}

	function createKeepsakeGrid() {
		let index = 0
		let current = 0
		let maxLine = 7
		for (let keepsake in vars.Keepsakes) {
			if (!grids.keepsakeGrid.rows[index]) {
				grids.keepsakeGrid.rows.push([])
			}
			grids.keepsakeGrid.rows[index].push(keepsake)
			if (++current >= maxLine) {
				index++
				current = 0
			}
		}
	}

	createWeaponGrid()
	createKeepsakeGrid()

	writeToFile("layouts/item_grids.jsonc", JSON.stringify(grids, null, "\t").replaceAll("\n\t\t\t\t", "").replaceAll("\n\t\t\t]", "]").replaceAll(`","`, `", "`))
}

if (import.meta.main) {
	createItemGrids()
}