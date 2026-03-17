import { writeToFile } from "./utils.js"

let keepsakeData = [
	{name: "Silver Wheel", owner: "Hecate"},
	{name: "Knuckle Bones", owner: "Odysseus"},
	{name: "Luckier Tooth", owner: "Schelemeus"},
	{name: "Ghost Onion", owner: "Dora"},
	{name: "Evil Eye", owner: "Nemesis"},
	{name: "Engraved Pin", owner: "Moros"},
	{name: "Discordant Bell", owner: "Eris"},
	{name: "Gold Purse", owner: "Charon"},
	{name: "Metallic Droplet", owner: "Hermes"},
	{name: "White Antler", owner: "Artemis"},
	{name: "Moon Beam", owner: "Selene"},
	{name: "Cloud Bangle", owner: "Zeus"},
	{name: "Iridescent Fan", owner: "Hera"},
	{name: "Vivid Sea", owner: "Poseidon"},
	{name: "Barley Sheaf", owner: "Demeter"},
	{name: "Harmonic Photon", owner: "Apollo"},
	{name: "Beautiful Mirror", owner: "Aphrodite"},
	{name: "Adamant Shard", owner: "Hephaestus"},
	{name: "Everlasting Ember", owner: "Hestia"},
	{name: "Sword Hilt", owner: "Ares"},
	{name: "Gorgon Amulet", owner: "Athena"},
	{name: "Fig Leaf", owner: "Dionysus"},
	{name: "Silken Sash", owner: "Arachne"},
	{name: "Aromatic Phial", owner: "Narcissus"},
	{name: "Concave Stone", owner: "Echo"},
	{name: "Lion Fang", owner: "Heracles"},
	{name: "Blackened Fleece", owner: "Medea"},
	{name: "Crystal Figurine", owner: "Circe"},
	{name: "Experimental Hammer", owner: "Icarus"},
	{name: "Jeweled Pom", owner: "Hades & Persephone"},
	{name: "Calling Card", owner: "Zagreus"},
	{name: "Time Piece", owner: "Chronos"},
	{name: "Transcendent Embryo", owner: "Chaos"}
]

export function createKeepsakeItems() {
	let items = []
	
	for (let keepsake of keepsakeData) {
		items.push({
			name: `${keepsake.name} (${keepsake.owner})`,
			type: "toggle",
			img: `images/items/${keepsake.name.replace(' ', '')}.png`,
			codes: `keepsake, ${keepsake.name.replace(' ', '')}, keepsake${keepsake.owner.replace(' & ', '')}`
		})
	}
	
	writeToFile("items/keepsakes.jsonc", JSON.stringify(items, null, "\t"))
}

if (import.meta.main) {
	createKeepsakeItems()
}