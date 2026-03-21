import { vars, writeToFile } from "./utils.js"

// owner is kinda irrelevant, but nice to have
let keepsakeData = [
	{name: "Silver Wheel", code: vars.Keepsakes.SilverWheel, owner: vars.LocNames.Keepsakes.Hecate},
	{name: "Knuckle Bones", code: vars.Keepsakes.KnuckleBones, owner: vars.LocNames.Keepsakes.Odysseus},
	{name: "Luckier Tooth", code: vars.Keepsakes.LuckierTooth, owner: vars.LocNames.Keepsakes.Schelemeus},
	{name: "Ghost Onion", code: vars.Keepsakes.GhostOnion, owner: vars.LocNames.Keepsakes.Dora},
	{name: "Evil Eye", code: vars.Keepsakes.EvilEye, owner: vars.LocNames.Keepsakes.Nemesis},
	{name: "Engraved Pin", code: vars.Keepsakes.EngravedPin, owner: vars.LocNames.Keepsakes.Moros},
	{name: "Discordant Bell", code: vars.Keepsakes.DiscordantBell, owner: vars.LocNames.Keepsakes.Eris},
	{name: "Gold Purse", code: vars.Keepsakes.GoldPurse, owner: vars.LocNames.Keepsakes.Charon},
	{name: "Metallic Droplet", code: vars.Keepsakes.MetallicDroplet, owner: vars.LocNames.Keepsakes.Hermes},
	{name: "White Antler", code: vars.Keepsakes.WhiteAntler, owner: vars.LocNames.Keepsakes.Artemis},
	{name: "Moon Beam", code: vars.Keepsakes.MoonBeam, owner: vars.LocNames.Keepsakes.Selene},
	{name: "Cloud Bangle", code: vars.Keepsakes.CloudBangle, owner: vars.LocNames.Keepsakes.Zeus},
	{name: "Iridescent Fan", code: vars.Keepsakes.IridescentFan, owner: vars.LocNames.Keepsakes.Hera},
	{name: "Vivid Sea", code: vars.Keepsakes.VividSea, owner: vars.LocNames.Keepsakes.Poseidon},
	{name: "Barley Sheaf", code: vars.Keepsakes.BarleySheaf, owner: vars.LocNames.Keepsakes.Demeter},
	{name: "Harmonic Photon", code: vars.Keepsakes.HarmonicPhoton, owner: vars.LocNames.Keepsakes.Apollo},
	{name: "Beautiful Mirror", code: vars.Keepsakes.BeautifulMirror, owner: vars.LocNames.Keepsakes.Aphrodite},
	{name: "Adamant Shard", code: vars.Keepsakes.AdamantShard, owner: vars.LocNames.Keepsakes.Hephaestus},
	{name: "Everlasting Ember", code: vars.Keepsakes.EverlastingEmber, owner: vars.LocNames.Keepsakes.Hestia},
	{name: "Sword Hilt", code: vars.Keepsakes.SwordHilt, owner: vars.LocNames.Keepsakes.Ares},
	{name: "Gorgon Amulet", code: vars.Keepsakes.GorgonAmulet, owner: vars.LocNames.Keepsakes.Athena},
	{name: "Fig Leaf", code: vars.Keepsakes.FigLeaf, owner: vars.LocNames.Keepsakes.Dionysus},
	{name: "Silken Sash", code: vars.Keepsakes.SilkenSash, owner: vars.LocNames.Keepsakes.Arachne},
	{name: "Aromatic Phial", code: vars.Keepsakes.AromaticPhial, owner: vars.LocNames.Keepsakes.Narcissus},
	{name: "Concave Stone", code: vars.Keepsakes.ConcaveStone, owner: vars.LocNames.Keepsakes.Echo},
	{name: "Lion Fang", code: vars.Keepsakes.LionFang, owner: vars.LocNames.Keepsakes.Heracles},
	{name: "Blackened Fleece", code: vars.Keepsakes.BlackenedFleece, owner: vars.LocNames.Keepsakes.Medea},
	{name: "Crystal Figurine", code: vars.Keepsakes.CrystalFigurine, owner: vars.LocNames.Keepsakes.Circe},
	{name: "Experimental Hammer", code: vars.Keepsakes.ExperimentalHammer, owner: vars.LocNames.Keepsakes.Icarus},
	{name: "Jeweled Pom", code: vars.Keepsakes.JeweledPom, owner: "Hades & Persephone"}, // special formatting
	{name: "Calling Card", code: vars.Keepsakes.CallingCard, owner: vars.LocNames.Keepsakes.Zagreus},
	{name: "Time Piece", code: vars.Keepsakes.TimePiece, owner: vars.LocNames.Keepsakes.Chronos},
	{name: "Transcendent Embryo", code: vars.Keepsakes.TranscendentEmbryo, owner: vars.LocNames.Keepsakes.Chaos}
]

export default function createKeepsakeItems() {
	let items = []
	
	for (let keepsake of keepsakeData) {
		items.push({
			name: `${keepsake.name} (${keepsake.owner})`,
			type: "toggle",
			// img: `images/items/${keepsake.code}.png`,
			img: `images/items/AdamantArrowhead.png`,
			codes: `keepsake, ${keepsake.code}, keepsake${keepsake.owner.replace(' & ', 'And')}`
		})
	}
	
	writeToFile("items/keepsakes.jsonc", JSON.stringify(items, null, "\t"))
}

if (import.meta.main) {
	createKeepsakeItems()
}