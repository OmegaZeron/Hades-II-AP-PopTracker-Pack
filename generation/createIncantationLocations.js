import { writeToFile, vars } from './utils.js'

export default function createIncantationLocations() {
	let loc = {
		name: "The Cauldron",
		chest_unopened_img: "",
		chest_opened_img: "",
		visibility_rules: [vars.Settings.CauldronsanityOn],
		sections: [
			{
				name: "Disintegration of Monstrosity",
				access_rules: [`${vars.Items.Gigaros}, ^$CanReach|${vars.LocNames.Special.BothVictory}`],
				hosted_item: vars.Events.Disintegration
			},
			{
				name: "Dissolution of Time",
				access_rules: [vars.Events.Disintegration],
				hosted_item: vars.Events.Dissolution
			},
			{
				name: "Unraveling a Fateful Bond",
				access_rules: [`${vars.Events.DoomedBeckoning}, ${vars.Tools.SilverSpade}, ${vars.Events.Permeation}`],
				hosted_item: vars.Events.Unraveling
			},
			{
				name: "Permeation of Witching-Wards",
				access_rules: [`^$CanReach|${vars.LocNames.Areas.Oceanus}`],
				hosted_item: vars.Events.Permeation
			},
			{
				name: "Fated Intervention",
				access_rules: [`${vars.Events.NightsCraftwork}, ${vars.Tools.CrescentPick}, ^$CanReach|${vars.LocNames.Areas.Erebus}`],
				hosted_item: vars.Events.FatedIntervention
			},
			{
				name: "Doomed Beckoning",
				access_rules: [`${vars.Events.FatedIntervention}, ${vars.Tools.SilverSpade}`],
				hosted_item: vars.Events.DoomedBeckoning
			},
			{
				name: "Purification of Crystal Clarity",
				access_rules: [`${vars.Tools.SilverSpade}, ^$CanReach|${vars.LocNames.Areas.Tartarus}`] // +Thessaly for Mandrake Seeds?
			},
			{
				name: "Return of Latent Memories",
				access_rules: [`${vars.Tools.SilverSpade}, ^$CanReach|${vars.LocNames.Bosses.Prometheus}, ^$CanReach|${vars.LocNames.Areas.Oceanus}`] // +Star Dust?
			},
			{
				name: "Essence of Sorrow",
				access_rules: [`${vars.Items.SurfaceAccess}, ^$CanReach|${vars.LocNames.Bosses.Cerberus}`]
			},
			{
				name: "Augmentation of Bone Density",
				access_rules: [`${vars.Tools.CrescentPick}, ^$CanReach|${vars.LocNames.Areas.Oceanus}, ^$CanReach|${vars.LocNames.Areas.Olympus}`] // +Nightmare?
			},
			{
				name: "End to Deepest Slumber",
				access_rules: [`${vars.Tools.SilverSpade}, ^$CanReach|${vars.LocNames.Areas.Tartarus}`], // +Thessaly for Mandrake Seeds?
				hosted_item: vars.Events.DeepSlumber
			},
			{
				name: "End to Dearest Slumber",
				access_rules: [vars.Events.DeepSlumber],
				hosted_item: vars.Events.DearSlumber
			},
			{
				name: "End to Dumbest Slumber",
				access_rules: [`${vars.Events.DearSlumber}, ${vars.Events.Dissolution}`]
			},
			{
				name: "Aspects of Night and Darkness",
				access_rules: [`${vars.Tools.SilverSpade}, ${vars.Events.Permeation}, $HasWeaponsForNightAndDarkness`] // Ephyra instead of Permeation?
			},
			{
				name: "Consecration of Ashes",
				access_rules: [`^$CanReach|${vars.LocNames.Bosses.Hecate}, ${vars.Events.Mercantile}`],
				hosted_item: vars.Events.Consecration
			},
			{
				name: "Abyssal Insight",
				access_rules: [`^$CanReach|${vars.LocNames.Bosses.Scylla}, ${vars.Tools.SilverSpade}, ${vars.Events.Unraveling}`], // Spade is irrelevant cuz Unraveling?
				hosted_item: vars.Events.AbyssalInsight
			},
			{
				name: "Abyssal Reflection",
				access_rules: [vars.Events.AbyssalInsight]
			},
			{
				name: "Faith of Familiar Spirits",
				access_rules: [`${vars.Tools.CrescentPick}, ${vars.Tools.TabletOfPeace}, ${vars.Tools.SilverSpade}, ^$CanReach|${vars.LocNames.Areas.Oceanus}`],
				hosted_item: vars.Events.FaithFamiliar
			},
			{
				name: "Bravery of Familiar Spirits",
				access_rules: [`${vars.Events.FaithFamiliar}, ^$CanReach|${vars.LocNames.Areas.Fields}, ^$CanReach|${vars.LocNames.Bosses.Polyphemus}`] // +4 Witch's Delight?
			},
			{
				name: "Alteration of Familiar Spirits",
				access_rules: [`${vars.Tools.CrescentPick}, ${vars.Helpers.Companion}:5, ^$CanReach|${vars.LocNames.Areas.Thessaly}`], // +20 Witch's Delight? +30 Grasp?
				hosted_item: vars.Events.AlterationFamiliar
			},
			{
				name: "Greater Favor of Gaia",
				access_rules: [`${vars.Helpers.Tool}:4, ${vars.Events.Divination}, ^$CanReach|${vars.LocNames.Areas.Tartarus}, ^$CanReach|${vars.LocNames.Areas.Thessaly}`]
			},
			{
				name: "Long Arm of the Unseen",
				access_rules: [`${vars.Events.AlterationFamiliar}, ${vars.Events.Mercantile}`] // +Social Solidarity?
			},
			{
				name: "Acceptance of Another Fate",
				access_rules: [`^$CanReach|${vars.LocNames.Special.BothVictory}, ${vars.Events.InsightOffering}`] // +Spreading Ashes? +Favored Keepsakes?
			},
			{
				name: "Night's Craftwork",
				hosted_item: vars.Events.NightsCraftwork
			},
			{
				name: "Divination of the Elements",
				access_rules: [`^$CanReach|${vars.LocNames.Bosses.Hecate}`]
			},
			// {
			// 	name: "Forget-Me-Not",
			// 	access_rules: [`${vars.Events.FlourishingSoil}, ${vars.Events.FatedIntervention}`],
			// 	hosted_item: vars.Events.ForgetMeNot
			// },
			// {
			// 	name: "Path to Desired Blessings",
			// 	access_rules: [`${vars.Events.ForgetMeNot}, ${vars.Events.InsightOffering}, ^$CanReach|${vars.Areas.Special.BothVictory}`]
			// },
			// {
			// 	name: "Spreading of Ashes",
			// 	access_rules: [vars.Events.Consecration]
			// },
			// {
			// 	name: "Favored of All Keepsakes",
			// 	access_rules: [`${vars.Helpers.Keepsake}:22`],
			// 	hosted_item: vars.Events.FavoredKeepsakes
			// },
			// {
			// 	name: "Reagent Sensing",
			// 	access_rules: [`${vars.Tools.CrescentPick}, ^$CanReach|${vars.LocNames.Areas.Erebus}`]
			// },
			{
				name: "Insight into Offerings",
				access_rules: [vars.Events.Mercantile]
			},
			{
				name: "Summoning of Mercantile Fortune",
				hosted_item: vars.Events.Mercantile
			},
			{
				name: "Deathly Fortune",
				access_rules: [`${vars.Tools.SilverSpade}, ${vars.Events.Permeation}, ${vars.Events.Mercantile}`],
				hosted_item: vars.Events.DeathlyFortune
			},
			{
				name: "Kinship Fortune",
				access_rules: [`${vars.Events.NightsCraftwork}, ${vars.Events.Mercantile}`]
			},
			{
				name: "Earthly Fortune",
				access_rules: [] // 40 upgrades?
			},
			// {
			// 	name: "Rivals of Depths and Sea",
			// 	access_rules: [`^$CanReach|${vars.LocNames.Bosses.Scylla}, ^$CanReach|${vars.LocNames.Bosses.Eris}`]
			// },
			// {
			// 	name: "Rivals of Plain and Peak",
			// 	access_rules: [`^$CanReach|${vars.LocNames.Bosses.Cerberus}, ^$CanReach|${vars.LocNames.Bosses.Prometheus}`]
			// },
			// {
			// 	name: "Rivals of Old and Rot",
			// 	access_rules: [vars.Events.Dissolution]
			// },
			// {
			// 	name: "Cleansing of Fountain-Waters",
			// 	access_rules: [`${vars.Tools.SilverSpade}, ${vars.Events.WoodsyLifespring}`],
			// 	hosted_item: vars.Events.CleansingWaters
			// },
			// {
			// 	name: "Purification of Fountain-Waters",
			// 	access_rules: [vars.Events.CleansingWaters]
			// },
			// {
			// 	name: "Rise of Stygian Wells",
			// 	access_rules: [vars.Tools.SilverSpade], // +some balancing to put it later?
			// 	hosted_item: vars.Events.RiseWells
			// },
			// {
			// 	name: "Surge of Stygian Wells",
			// 	access_rules: [`${vars.Events.RiseWells}, ${vars.Events.CleansingWaters}`] // +balance? +Hecate since you need to at least fight her once?
			// },
			// {
			// 	name: "Rush of Fresh Air",
			// 	access_rules: [`${vars.Events.RiseWells}, ${vars.Events.Unraveling}, ${vars.Events.Bats}, ^$CanReach|${vars.LocNames.Bosses.Polyphemus}`],
			// 	hosted_item: vars.Events.RushAir
			// },
			// {
			// 	name: "Surge of Fresh Air",
			// 	access_rules: [`${vars.Events.RushAir}, ^$CanReach|${vars.LocNames.Bosses.Polyphemus}`] // +balance?
			// },
			// {
			// 	name: "Revival of a Desecrating Pool",
			// 	access_rules: [`^$CanReach|${vars.LocNames.Areas.Tartarus}`],
			// 	hosted_item: vars.Events.RevivalPool
			// },
			// {
			// 	name: "Surge of Desecrating Pools",
			// 	access_rules: [`${vars.Events.RevivalPool}, ^$CanReach|${vars.LocNames.Bosses.Chronos}`]
			// },
			// {
			// 	name: "Woodsy Lifespring",
			// 	access_rules: [`
			// 		${vars.Tools.CrescentPick},
			// 		${vars.Events.NightsCraftwork},
			// 		${vars.Events.FatedIntervention},
			// 		${vars.Events.ReagentSensing},
			// 		${vars.Events.ForgetMeNot}
			// 	`],
			// 	hosted_item: vars.Events.WoodsyLifespring
			// },
			// {
			// 	name: "Briny Lifespring",
			// 	access_rules: [`${vars.Tools.CrescentPick}, ^$CanReach|${vars.LocNames.Areas.Oceanus}`], // pick or Raki?
			// 	hosted_item: vars.Events.BrinyLifespring
			// },
			// {
			// 	name: "Golden Lifespring",
			// 	access_rules: [`${vars.Events.BrinyLifespring}, ${vars.Events.DeathlyFortune}, ^$CanReach|${vars.LocNames.Areas.Tartarus}`] // or Chronos? Must fight him at least once
			// },
			// {
			// 	name: "Sandy Lifespring",
			// 	access_rules: [`${vars.Events.BrinyLifespring}, ^$CanReach|${vars.LocNames.Areas.Thessaly}`] // or Eris? Must fight her at least once
			// },
			// {
			// 	name: "Frozen Lifespring",
			// 	access_rules: []
			// },
			// {
			// 	name: "Propensity Towards Gold",
			// 	access_rules: []
			// },
			// {
			// 	name: "Summoning a Colony of Bats",
			// 	access_rules: [],
			// 	hosted_item: vars.Events.Bats
			// },
			// {
			// 	name: "Revival of a Mournful Husk",
			// 	access_rules: []
			// },
			// {
			// 	name: "Temporal Fluctuation",
			// 	access_rules: []
			// },
			// {
			// 	name: "Power to Pause and Reflect",
			// 	access_rules: []
			// },
			// {
			// 	name: "Gathering of Ancient Bones",
			// 	access_rules: []
			// },
			// {
			// 	name: "Gathering of Subterranean Riches",
			// 	access_rules: []
			// },
			// {
			// 	name: "Kindred Keepsakes",
			// 	access_rules: []
			// },
			// {
			// 	name: "Quickening of Sentimental Value",
			// 	access_rules: []
			// },
			// {
			// 	name: "Rage of the Elements",
			// 	access_rules: []
			// },
			// {
			// 	name: "Circles of Protection",
			// 	access_rules: []
			// },
			// {
			// 	name: "Circles of the Moon",
			// 	access_rules: []
			// },
			// {
			// 	name: "Necromantic Influence",
			// 	access_rules: []
			// },
			// {
			// 	name: "Exhumed Troves",
			// 	access_rules: []
			// },
			// {
			// 	name: "Eyes of Night and Darkness",
			// 	access_rules: []
			// },
			// {
			// 	name: "Arisen Troves",
			// 	access_rules: []
			// },
			// {
			// 	name: "Bounties of the Infinite Abyss",
			// 	access_rules: []
			// },
			// {
			// 	name: "Ashen Memories of Life",
			// 	access_rules: []
			// },
			// {
			// 	name: "Bones of Arcane Wisdom",
			// 	access_rules: []
			// },
			// {
			// 	name: "Nectar of Godly Savor",
			// 	access_rules: []
			// },
			// {
			// 	name: "Rite of Social Solidarity",
			// 	// access_rules: [],
			// 	hosted_item: vars.Events.SocialSolidarity
			// },
			// {
			// 	name: "Rite of Vapor-Cleansing",
			// 	access_rules: []
			// },
			// {
			// 	name: "Rite of River-Fording",
			// 	access_rules: []
			// },
			// {
			// 	name: "Flourishing Soil",
			// 	access_rules: [`${vars.Tools.SilverSpade}, ^$CanReach|${vars.LocNames.Areas.Erebus}`],
			// 	hosted_item: vars.Events.FlourishingSoil
			// },
			// {
			// 	name: "Rich Soil",
			// 	access_rules: [`${vars.Events.FlourishingSoil}, ^$CanReach|${vars.LocNames.Areas.Fields}`],
			// 	hosted_item: vars.Events.RichSoil
			// },
			// {
			// 	name: "Verdant Soil",
			// 	access_rules: [`${vars.Events.RichSoil}, ^$CanReach|${vars.LocNames.Areas.Tartarus}, ^$CanReach|${vars.LocNames.Areas.Olympus}`]
			// },
			// {
			// 	name: "Observance of Gaia's Secrets",
			// 	access_rules: []
			// },
			// {
			// 	name: "Green Hand of Gaia",
			// 	access_rules: []
			// },
			// {
			// 	name: "Greater Sowing of Gardens",
			// 	access_rules: []
			// },
			// {
			// 	name: "Greatest Gift of Gaia",
			// 	access_rules: []
			// },
			// {
			// 	name: "Empath's Intuition",
			// 	access_rules: []
			// },
			// {
			// 	name: "Summoning of Musical Rhapsody",
			// 	access_rules: []
			// },
			// {
			// 	name: "Shuffling of Noted Ballads",
			// 	access_rules: []
			// },
			// {
			// 	name: "Summoning of Historic Travails",
			// 	access_rules: []
			// },
			// {
			// 	name: "Summoning of Personal Insights",
			// 	access_rules: []
			// },
			// {
			// 	name: "Returning to a Real Possibiliity",
			// 	access_rules: []
			// },
			// {
			// 	name: "Greater Removal of Rubbish",
			// 	access_rules: []
			// }
		]
	}

	let output = JSON.stringify([loc], null, "\t").replace(/\[\n\s+(".+")\n\s+\]/g, "[$1]").replace(/\{\n\s+(.+)\n\s+\}/g, "{$1}")
	writeToFile("locations/incantations.jsonc", output)
}

if (import.meta.main) {
	createIncantationLocations()
}