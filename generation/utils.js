import fs from 'fs'

export function writeToFile(file, content) {
	fs.writeFile(file, content, err => {
		if (err) {
			console.error(`Error writing to file ${file}: ${err}`)
			return
		}
		console.log(`Successfully wrote to file ${file}`)
	})
}

export function toPascalCase(str) {
	let parts = str.split(' ')
	let final = ''
	for (let part of parts) {
		final += part[0].toUpperCase() + part.slice(1)
	}
	return final
}

export function toSnakeCase(str) {
	return str.toLowerCase().split(' ').join('_')
}

export let vars = {
	Keepsakes: {
		Keepsake: "keepsake",
		SilverWheel: "SilverWheel",
		KnuckleBones: "KnuckleBones",
		LuckierTooth: "LuckierTooth",
		GhostOnion: "GhostOnion",
		EvilEye: "EvilEye",
		EngravedPin: "EngravedPin",
		DiscordantBell: "DiscordantBell",
		GoldPurse: "GoldPurse",
		MetallicDroplet: "MetallicDroplet",
		WhiteAntler: "WhiteAntler",
		MoonBeam: "MoonBeam",
		CloudBangle: "CloudBangle",
		IridescentFan: "IridescentFan",
		VividSea: "VividSea",
		BarleySheaf: "BarleySheaf",
		HarmonicPhoton: "HarmonicPhoton",
		BeautifulMirror: "BeautifulMirror",
		AdamantShard: "AdamantShard",
		EverlastingEmber: "EverlastingEmber",
		SwordHilt: "SwordHilt",
		GorgonAmulet: "GorgonAmulet",
		FigLeaf: "FigLeaf",
		SilkenSash: "SilkenSash",
		AromaticPhial: "AromaticPhial",
		ConcaveStone: "ConcaveStone",
		LionFang: "LionFang",
		BlackenedFleece: "BlackenedFleece",
		CrystalFigurine: "CrystalFigurine",
		ExperimentalHammer: "ExperimentalHammer",
		JeweledPom: "JeweledPom",
		CallingCard: "CallingCard",
		TimePiece: "TimePiece",
		TranscendentEmbryo: "TranscendentEmbryo"
	},
	Weapons: {
		Descura: "Descura",
		LimAndOros: "LimAndOros",
		Ygnium: "Ygnium",
		Zorephet: "Zorephet",
		Revall: "Revall",
		Xinth: "Xinth"
	},
	Tools: {
		CrescentPick: "CrescentPick",
		SilverSpace: "SilverSpace",
		TabletOfPeace: "TabletOfPeace",
		RodOfFishing: "RodOfFishing"
	},
	Settings: {
		LocationSystemRoom: "location_room",
		LocationSystemWeapon: "location_weapon",
		LocationSystemScore: "location_score",
		KeepsakesNeeded: "keepsakes_needed",
		FatesNeeded: "fates_needed",
		ScoreRewardsAmount: "score_rewards_amount",
	}
}