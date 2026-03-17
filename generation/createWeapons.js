import { toPascalCase, writeToFile } from './utils.js'

export function createWeapons() {
	let items = []

	let weaponData = [
		{
			name: "Descura",
			type: "Witch's Staff",
			aspects: [
				// {name: "Circe"},
				// {name: "Momus"},
				{name: "Anubis", hidden: true},
			]
		},
		{
			name: "Lim and Oros",
			type: "Sister Blades",
			aspects: [
				// {name: "Artemis"},
				// {name: "Pan"},
				{name: "the Morrigan", hidden: true},
			]
		},
		{
			name: "Ygnium",
			type: "Umbral Flames",
			aspects: [
				// {name: "Moros"},
				// {name: "Eos"},
				{name: "Supay", hidden: true},
			]
		},
		{
			name: "Zorephet",
			type: "Moonstone Axe",
			aspects: [
				// {name: "Charon"},
				// {name: "Thanatos"},
				{name: "Nergal", hidden: true},
			]
		},
		{
			name: "Revall",
			type: "Argent Skull",
			aspects: [
				// {name: "Medea"},
				// {name: "Persephone"},
				{name: "Hel", hidden: true},
			]
		},
		{
			name: "Xinth",
			type: "Black Coat",
			aspects: [
				// {name: "Selene"},
				// {name: "Nyx"},
				{name: "Shiva", hidden: true},
			]
		}
	]

	for (let weapon of weaponData) {
		items.push({
			name: `${weapon.name}, the ${weapon.type}`,
			type: "toggle",
			img: `images/items/${toPascalCase(weapon.name)}.png`,
			codes: `weapon, ${toPascalCase(weapon.name)}`
		})
		for (let aspect of weapon.aspects) {
			items.push({
				name: `Aspect of ${aspect.name} (${weapon.name})`,
				type: "toggle",
				img: `images/items/${aspect.name}.png`,
				codes: `aspect, aspect${toPascalCase(weapon.name)}, ${toPascalCase(aspect.name)}${(aspect.hidden ? `, aspectHidden` : ``)}`
			})
		}
	}

	writeToFile("items/weapons.jsonc", JSON.stringify(items, null, "\t"))
}

if (import.meta.main) {
	createWeapons()
}