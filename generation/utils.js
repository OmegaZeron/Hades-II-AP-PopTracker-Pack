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

export function CanReach(area) {
	return `^$CanReach|${area}`
}

export function Has(item, count) {
	return `${item}:${count}`
}

export function and(...args) {
	return args.join(", ")
}

export const LuaFunc = Object.freeze({
	CanPeace: "^$CanPeace",
	CanMine: "^$CanMine",
	CanDig: "^$CanDig",
	CanFish: "^$CanFish",
})

export const vars = Object.freeze({
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
		Revaal: "Revaal",
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
		RevaalMelinoe: "RevaalMelinoe",
		RevaalMedea: "RevaalMedea",
		RevaalPersephone: "RevaalPersephone",
		RevaalHel: "RevaalHel",
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
	Familiars: {
		Frinos: "Frinos",
		Raki: "Raki",
		Hecuba: "Hecuba",
		Toula: "Toula",
		Gale: "Gale"
	},
	Items: {
		SurfaceAccess: "SurfaceAccess",
		Gigaros: "Gigaros"
	},
	Incants: {
		Disintegration: "Disintegration",
		Dissolution: "Dissolution",
		Unraveling: "Unraveling",
		Permeation: "Permeation",
		FatedIntervention: "FatedIntervention",
		DoomedBeckoning: "DoomedBeckoning",
		Purification: "Purification",
		ReturnMemories: "ReturnMemories",
		EssenceSorrow: "EssenceSorrow",
		DeepSlumber: "DeepSlumber",
		DearSlumber: "DearSlumber",
		DumbSlumber: "DumbSlumber",
		Consecration: "Consecration",
		AbyssalInsight: "AbyssalInsight",
		FaithFamiliar: "FaithFamiliar",
		AlterationFamiliar: "AlterationFamiliar",
		GreatFavorGaia: "GreatFavorGaia",
		NightsCraftwork: "NightsCraftwork",
		Divination: "Divination",
		ForgetMeNot: "ForgetMeNot",
		SpreadingAshes: "SpreadingAshes",
		FavoredKeepsakes: "FavoredKeepsakes",
		ReagentSensing: "ReagentSensing",
		InsightOffering: "InsightOffering",
		Mercantile: "Mercantile",
		DeathlyFortune: "DeathlyFortune",
		EarthlyFortune: "EarthlyFortune",
		DepthsAndSea: "DepthsAndSea",
		PlainAndPeak: "PlainAndPeak",
		OldAndRot: "OldAndRot",
		CleansingWaters: "CleansingWaters",
		RiseWells: "RiseWells",
		SurgeWells: "SurgeWells",
		RushAir: "RushAir",
		SurgeAir: "SurgeAir",
		RevivalPool: "RevivalPool",
		WoodsyLifespring: "WoodsyLifespring",
		BrinyLifespring: "BrinyLifespring",
		SandyLifespring: "SandyLifespring",
		FrozenLifespring: "FrozenLifespring",
		Bats: "Bats",
		GatheringBones: "GatheringBones",
		KindredKeepsakes: "KindredKeepsakes",
		CircleProtection: "CircleProtection",
		NecromanticInfluence: "NecromanticInfluence",
		ExhumedTroves: "ExhumedTroves",
		ArisenTroves: "ArisenTroves",
		SocialSolidarity: "SocialSolidarity",
		RiverFording: "RiverFording",
		FlourishingSoil: "FlourishingSoil",
		RichSoil: "RichSoil",
		VerdantSoil: "VerdantSoil",
		ObservanceGaia: "ObservanceGaia",
		Rhapsody: "Rhapsody"
	},
	Fates: {
		HelpUs: "HelpUs",
		RememberUs: "RememberUs",
		SeekUs: "SeekUs",
		TempSetback: "TempSetback",
		WitchCrossroads: "WitchCrossroads",
		ToolsUnseen: "ToolsUnseen"
	},
	Helpers: {
		Keepsake: "keepsake",
		KeepsakeSummon: "keepsakeSummon",
		Weapon: "weapon",
		WeaponNightDarkness: "weaponNightDarkness",
		Aspect: "aspect",
		AltAspect: "aspectAlt",
		HiddenAspect: "aspectHidden",
		Familiar: "familiar",
		Tool: "tool"
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
		FearSetting: "fearSetting",
		CauldronsanityOn: "cauldronsanityOn",
		FatesanityOn: "fatesanityOn"
	},

	LocNames: {
		Special: {
			Menu: "Menu",
			EitherVictory: "EitherVictory"
		},
		Areas: {
			Erebus: "Erebus",
			Oceanus: "Oceanus",
			Fields: "Fields",
			Tartarus: "Tartarus",
			Ephyra: "Ephyra",
			Thessaly: "Thessaly",
			Olympus: "Olympus",
			Summit: "Summit"
		},
		Bosses: {
			Hecate: "HecateBoss",
			Scylla: "ScyllaBoss",
			Cerberus: "CerberusBoss",
			Chronos: "ChronosBoss",
			Polyphemus: "PolyphemusBoss",
			Eris: "ErisBoss",
			Prometheus: "PrometheusBoss",
			Typhon: "TyphonBoss"
		},
		Keepsakes: {
			Hecate: "Hecate",
			Odysseus: "Odysseus",
			Schelemeus: "Schelemeus",
			Dora: "Dora",
			Nemesis: "Nemesis",
			Charon: "Charon",
			Moros: "Moros",
			Eris: "Eris",
			Hermes: "Hermes",
			Artemis: "Artemis",
			Selene: "Selene",
			Zeus: "Zeus",
			Hera: "Hera",
			Poseidon: "Poseidon",
			Demeter: "Demeter",
			Apollo: "Apollo",
			Aphrodite: "Aphrodite",
			Hephaestus: "Hephaestus",
			Hestia: "Hestia",
			Ares: "Ares",
			Athena: "Athena",
			Dionysus: "Dionysus",
			Arachne: "Arachne",
			Narcissus: "Narcissus",
			Echo: "Echo",
			Heracles: "Heracles",
			Medea: "Medea",
			Circe: "Circe",
			Icarus: "Icarus",
			HadesAndPersephone: "HadesAndPersephone",
			Zagreus: "Zagreus",
			Chronos: "Chronos",
			Chaos: "Chaos"
		}
	},
	NameToKeepsake: {
		Hecate: "SilverWheel",
		Odysseus: "KnuckleBones",
		Schelemeus: "LuckierTooth",
		Dora: "GhostOnion",
		Nemesis: "EvilEye",
		Charon: "EngravedPin",
		Moros: "DiscordantBell",
		Eris: "GoldPurse",
		Hermes: "MetallicDroplet",
		Artemis: "WhiteAntler",
		Selene: "MoonBeam",
		Zeus: "CloudBangle",
		Hera: "IridescentFan",
		Poseidon: "VividSea",
		Demeter: "BarleySheaf",
		Apollo: "HarmonicPhoton",
		Aphrodite: "BeautifulMirror",
		Hephaestus: "AdamantShard",
		Hestia: "EverlastingEmber",
		Ares: "SwordHilt",
		Athena: "GorgonAmulet",
		Dionysus: "FigLeaf",
		Arachne: "SilkenSash",
		Narcissus: "AromaticPhial",
		Echo: "ConcaveStone",
		Heracles: "LionFang",
		Medea: "BlackenedFleece",
		Circe: "CrystalFigurine",
		Icarus: "ExperimentalHammer",
		HadesAndPersephone: "JeweledPom",
		Zagreus: "CallingCard",
		Chronos: "TimePiece",
		Chaos: "TranscendentEmbryo"
	}
})

export const varDefinitions = Object.freeze({
	Keepsakes: vars.Keepsakes,
	Weapons: vars.Weapons,
	Aspects: vars.Aspects,
	Tools: vars.Tools,
	Familiars: vars.Familiars,
	Items: vars.Items,
	Incants: vars.Incants,
	Fates: vars.Fates,
	Helpers: vars.Helpers,
	Settings: vars.Settings
})

export const locationData = Object.freeze({
	Special: Object.values(vars.LocNames.Special),
	Areas: Object.values(vars.LocNames.Areas),
	Bosses: Object.values(vars.LocNames.Bosses),
	Keepsakes: Object.values(vars.LocNames.Keepsakes)
})

export const mapData = Object.freeze({
	BiomeMap: {name: "BiomeMap", size: 40, border: 5, buffer: 2}
})

export const weaponData = Object.freeze([
	{
		name: "Descura",
		codes: [vars.Weapons.Descura, vars.Helpers.WeaponNightDarkness],
		type: "Witch's Staff",
		aspects: [
			{name: "Melinoë", code: vars.Aspects.DescuraMelinoe},
			{name: "Circe", code: vars.Aspects.DescuraCirce, alt: true},
			{name: "Momus", code: vars.Aspects.DescuraMomus, alt: true},
			{name: "Anubis", code: vars.Aspects.DescuraAnubis, alt: true, hidden: true},
		]
	},
	{
		name: "Lim and Oros",
		codes: [vars.Weapons.LimAndOros, vars.Helpers.WeaponNightDarkness],
		type: "Sister Blades",
		aspects: [
			{name: "Melinoë", code: vars.Aspects.LimAndOrosMelinoe},
			{name: "Artemis", code: vars.Aspects.LimAndOrosArtemis, alt: true},
			{name: "Pan", code: vars.Aspects.LimAndOrosPan, alt: true},
			{name: "the Morrigan", code: vars.Aspects.LimAndOrosTheMorrigan, alt: true, hidden: true},
		]
	},
	{
		name: "Ygnium",
		codes: [vars.Weapons.Ygnium, vars.Helpers.WeaponNightDarkness],
		type: "Umbral Flames",
		aspects: [
			{name: "Melinoë", code: vars.Aspects.YgniumMelinoe},
			{name: "Moros", code: vars.Aspects.YgniumMoros, alt: true},
			{name: "Eos", code: vars.Aspects.YgniumEos, alt: true},
			{name: "Supay", code: vars.Aspects.YgniumSupay, alt: true, hidden: true},
		]
	},
	{
		name: "Zorephet",
		codes: [vars.Weapons.Zorephet, vars.Helpers.WeaponNightDarkness],
		type: "Moonstone Axe",
		aspects: [
			{name: "Melinoë", code: vars.Aspects.ZorephetMelinoe},
			{name: "Charon", code: vars.Aspects.ZorephetCharon, alt: true},
			{name: "Thanatos", code: vars.Aspects.ZorephetThanatos, alt: true},
			{name: "Nergal", code: vars.Aspects.ZorephetNergal, alt: true, hidden: true},
		]
	},
	{
		name: "Revaal",
		codes: [vars.Weapons.Revaal, vars.Helpers.WeaponNightDarkness],
		type: "Argent Skull",
		aspects: [
			{name: "Melinoë", code: vars.Aspects.RevaalMelinoe},
			{name: "Medea", code: vars.Aspects.RevaalMedea, alt: true},
			{name: "Persephone", code: vars.Aspects.RevaalPersephone, alt: true},
			{name: "Hel", code: vars.Aspects.RevaalHel, alt: true, hidden: true},
		]
	},
	{
		name: "Xinth",
		codes: [vars.Weapons.Xinth],
		type: "Black Coat",
		aspects: [
			{name: "Melinoë", code: vars.Aspects.XinthMelinoe},
			{name: "Selene", code: vars.Aspects.XinthSelene, alt: true},
			{name: "Nyx", code: vars.Aspects.XinthNyx, alt: true},
			{name: "Shiva", code: vars.Aspects.XinthShiva, alt: true, hidden: true},
		]
	}
])