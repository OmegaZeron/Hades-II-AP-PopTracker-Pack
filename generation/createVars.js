import { vars, writeToFile } from "./utils.js"

// export variables to Lua to keep in sync
export function createVars() {
	let output = ""
	for (let [itemType, list] of Object.entries(vars)) {
		output += `-- ${itemType}\n`
		for (let [name, val] of Object.entries(list)) {
			output += `${name} = "${val}"\n`
		}
	}

	writeToFile("scripts/logic/variable_definitions.lua", output)
}

if (import.meta.main) {
	createVars()
}