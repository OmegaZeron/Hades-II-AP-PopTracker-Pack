import { varDefinitions, locationData, writeToFile } from "./utils.js"

// export variables to Lua to keep in sync
export default function createVars() {
	function createVariableDefinitions() {
		let output = ""
		for (let [itemType, list] of Object.entries(varDefinitions)) {
			output += `-- ${itemType}\n`
			for (let [name, val] of Object.entries(list)) {
				output += `${name} = "${val}"\n`
			}
		}
		writeToFile("scripts/logic/variable_definitions.lua", output)
	}

	function createLocationDefinitions() {
		let output = ""
		for (let [varType, list] of Object.entries(locationData)) {
			output += `-- ${varType}\n`
			for (let loc of list) {
				output += `${loc} = Hades2Location.New("${loc}")\n`
			}
		}
		writeToFile("scripts/logic/location_definitions.lua", output)
	}

	createVariableDefinitions()
	createLocationDefinitions()
}

if (import.meta.main) {
	createVars()
}