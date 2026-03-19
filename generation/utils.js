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
	Aspects: {
		DescuraMelinoe: "DescuraMelinoe",
		DescuraCirce: "DescuraCirce",
		DescuraMomus: "DescuraMomus",
		DescuraAnubis: "DescuraAnubis",
		LimAndOrosMelinoe: "LimAndOrosMelinoe",
		LimAndOrosArtemis: "LimAndOrosArtemis",
		LimAndOrosPan: "LimAndOrosPan",
		LimAndOrosTheMorrigan: "LimAndOrosTheMorrigan",
		YgniumMelinoe: "YgniumMelinoe",
		YgniumMoros: "YgniumMoros",
		YgniumEos: "YgniumEos",
		YgniumSupay: "YgniumSupay",
		ZorephetMelinoe: "ZorephetMelinoe",
		ZorephetCharon: "ZorephetCharon",
		ZorephetThanatos: "ZorephetThanatos",
		ZorephetNergal: "ZorephetNergal",
		RevallMelinoe: "RevallMelinoe",
		RevallMedea: "RevallMedea",
		RevallPersephone: "RevallPersephone",
		RevallHel: "RevallHel",
		XinthMelinoe: "XinthMelinoe",
		XinthSelene: "XinthSelene",
		XinthNyx: "XinthNyx",
		XinthShiva: "XinthShiva"
	},
	Tools: {
		CrescentPick: "CrescentPick",
		TabletOfPeace: "TabletOfPeace",
		SilverSpade: "SilverSpade",
		RodOfFishing: "RodOfFishing"
	},
	Events: {
		DoomedReckoning: "DoomedReckoning"
	},
	Helpers: {
		Keepsake: "keepsake",
		Weapon: "weapon",
		SurfaceAccess: "surfaceAccess"
	},
	Settings: {
		LocationSystemRoom: "location_room",
		LocationSystemWeapon: "location_weapon",
		LocationSystemScore: "location_score",
		WeaponsNeeded: "weapons_needed",
		KeepsakesNeeded: "keepsakes_needed",
		FatesNeeded: "fates_needed",
		ScoreRewardsAmount: "score_rewards_amount",
		Keepsakesanity: "keepsakesanity",
		KeepsakesanityOn: "keepsakesanityOn",
		KeepsakesanityOff: "keepsakesanityOff",
		ReverseFear: "reverseFear",
		FearSetting: "fearSetting"
	}
}

export let locationData = {
	Areas: ["Menu", "Erebus", "Oceanus", "Fields", "Tartarus", "Ephyra", "Thessaly", "Olympus", "Summit"],
	Bosses: ["HecateBoss", "ScyllaBoss", "CerberusBoss", "ChronosBoss", "PolyphemusBoss", "ErisBoss", "PrometheusBoss", "TyphonBoss"],
	Keepsakes: [
		"Hecate", "Odysseus", "Schelemeus", "Dora", "Nemesis", "Charon", "Moros", "Eris", "Hermes", "Artemis",
		"Selene", "Zeus", "Hera", "Poseidon", "Demeter", "Apollo", "Aphrodite", "Hephaestus", "Hestia", "Ares", "Athena",
		"Dionysus", "Arachne", "Narcissus", "Echo", "Heracles", "Medea", "Circe", "Icarus", "HadesAndPersephone", "Zagreus", "Chronos", "Chaos"
	]
}

export let mapData = {
	BiomeMap: {name: "BiomeMap", size: 40, border: 5, buffer: 2}
}

export let weaponData = [
	{
		name: "Descura",
		code: vars.Weapons.Descura,
		type: "Witch's Staff",
		aspects: [
			{name: "Melinoë", code: vars.Aspects.DescuraMelinoe},
			{name: "Circe", code: vars.Aspects.DescuraCirce},
			{name: "Momus", code: vars.Aspects.DescuraMomus},
			{name: "Anubis", code: vars.Aspects.DescuraAnubis, hidden: true},
		]
	},
	{
		name: "Lim and Oros",
		code: vars.Weapons.LimAndOros,
		type: "Sister Blades",
		aspects: [
			{name: "Melinoë", code: vars.Aspects.LimAndOrosMelinoe},
			{name: "Artemis", code: vars.Aspects.LimAndOrosArtemis},
			{name: "Pan", code: vars.Aspects.LimAndOrosPan},
			{name: "the Morrigan", code: vars.Aspects.LimAndOrosTheMorrigan, hidden: true},
		]
	},
	{
		name: "Ygnium",
		code: vars.Weapons.Ygnium,
		type: "Umbral Flames",
		aspects: [
			{name: "Melinoë", code: vars.Aspects.YgniumMelinoe},
			{name: "Moros", code: vars.Aspects.YgniumMoros},
			{name: "Eos", code: vars.Aspects.YgniumEos},
			{name: "Supay", code: vars.Aspects.YgniumSupay, hidden: true},
		]
	},
	{
		name: "Zorephet",
		code: vars.Weapons.Zorephet,
		type: "Moonstone Axe",
		aspects: [
			{name: "Melinoë", code: vars.Aspects.ZorephetMelinoe},
			{name: "Charon", code: vars.Aspects.ZorephetCharon},
			{name: "Thanatos", code: vars.Aspects.ZorephetThanatos},
			{name: "Nergal", code: vars.Aspects.ZorephetNergal, hidden: true},
		]
	},
	{
		name: "Revall",
		code: vars.Weapons.Revall,
		type: "Argent Skull",
		aspects: [
			{name: "Melinoë", code: vars.Aspects.RevallMelinoe},
			{name: "Medea", code: vars.Aspects.RevallMedea},
			{name: "Persephone", code: vars.Aspects.RevallPersephone},
			{name: "Hel", code: vars.Aspects.RevallHel, hidden: true},
		]
	},
	{
		name: "Xinth",
		code: vars.Weapons.Xinth,
		type: "Black Coat",
		aspects: [
			{name: "Melinoë", code: vars.Aspects.XinthMelinoe},
			{name: "Selene", code: vars.Aspects.XinthSelene},
			{name: "Nyx", code: vars.Aspects.XinthNyx},
			{name: "Shiva", code: vars.Aspects.XinthShiva, hidden: true},
		]
	}
]