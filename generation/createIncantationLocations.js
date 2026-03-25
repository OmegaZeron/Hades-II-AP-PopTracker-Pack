import { writeToFile, vars, CanReach } from './utils.js'

export default function createIncantationLocations() {
	let loc = {
		name: "The Cauldron",
		chest_unopened_img: "",
		chest_opened_img: "",
		visibility_rules: [vars.Settings.CauldronsanityOn],
		sections: [
			{
				name: "Disintegration of Monstrosity",
				access_rules: [`${vars.Items.Gigaros}, ${CanReach(vars.LocNames.Bosses.Chronos)}, ${CanReach(vars.LocNames.Bosses.Typhon)}`],
				hosted_item: vars.Incants.Disintegration
			},
			{
				name: "Dissolution of Time",
				access_rules: [vars.Incants.Disintegration],
				hosted_item: vars.Incants.Dissolution
			},
			{
				name: "Unraveling a Fateful Bond",
				access_rules: [`${vars.Incants.DoomedBeckoning}, ${vars.Tools.SilverSpade}, ${vars.Incants.Permeation}`],
				hosted_item: vars.Incants.Unraveling
			},
			{
				name: "Permeation of Witching-Wards",
				access_rules: [`${CanReach(vars.LocNames.Areas.Oceanus)}`],
				hosted_item: vars.Incants.Permeation
			},
			{
				name: "Fated Intervention",
				access_rules: [`${vars.Incants.NightsCraftwork}, ${vars.Tools.CrescentPick}, ${CanReach(vars.LocNames.Areas.Erebus)}`],
				hosted_item: vars.Incants.FatedIntervention
			},
			{
				name: "Doomed Beckoning",
				access_rules: [`${vars.Incants.FatedIntervention}, ${vars.Tools.SilverSpade}`],
				hosted_item: vars.Incants.DoomedBeckoning
			},
			{
				name: "Purification of Crystal Clarity",
				access_rules: [`${vars.Tools.SilverSpade}, ${CanReach(vars.LocNames.Areas.Tartarus)}`] // +Thessaly for Mandrake Seeds?
			},
			{
				name: "Return of Latent Memories",
				access_rules: [`${vars.Tools.SilverSpade}, ${CanReach(vars.LocNames.Bosses.Prometheus)}, ${CanReach(vars.LocNames.Areas.Oceanus)}`] // +Star Dust?
			},
			{
				name: "Essence of Sorrow",
				access_rules: [`${vars.Items.SurfaceAccess}, ${CanReach(vars.LocNames.Bosses.Cerberus)}`]
			},
			{
				name: "Augmentation of Bone Density",
				access_rules: [`${vars.Tools.CrescentPick}, ${CanReach(vars.LocNames.Areas.Oceanus)}, ${CanReach(vars.LocNames.Areas.Olympus)}`] // +Nightmare?
			},
			{
				name: "End to Deepest Slumber",
				access_rules: [`${vars.Tools.SilverSpade}, ${CanReach(vars.LocNames.Areas.Tartarus)}`], // +Thessaly for Mandrake Seeds?
				hosted_item: vars.Incants.DeepSlumber
			},
			{
				name: "End to Dearest Slumber",
				access_rules: [vars.Incants.DeepSlumber],
				hosted_item: vars.Incants.DearSlumber
			},
			{
				name: "End to Dumbest Slumber",
				access_rules: [`${vars.Incants.DearSlumber}, ${vars.Incants.Dissolution}`]
			},
			{
				name: "Aspects of Night and Darkness",
				access_rules: [`${vars.Tools.SilverSpade}, ${vars.Incants.Permeation}, $HasWeaponsForNightAndDarkness`] // Ephyra instead of Permeation?
			},
			{
				name: "Consecration of Ashes",
				access_rules: [`${CanReach(vars.LocNames.Bosses.Hecate)}, ${vars.Incants.Mercantile}`],
				hosted_item: vars.Incants.Consecration
			},
			{
				name: "Abyssal Insight",
				access_rules: [`${CanReach(vars.LocNames.Bosses.Scylla)}, ${vars.Tools.SilverSpade}, ${vars.Incants.Unraveling}`], // Spade is irrelevant cuz Unraveling?
				hosted_item: vars.Incants.AbyssalInsight
			},
			{
				name: "Abyssal Reflection",
				access_rules: [vars.Incants.AbyssalInsight]
			},
			{
				name: "Faith of Familiar Spirits",
				access_rules: [`${vars.Tools.CrescentPick}, ${vars.Tools.TabletOfPeace}, ${vars.Tools.SilverSpade}, ${CanReach(vars.LocNames.Areas.Oceanus)}`],
				hosted_item: vars.Incants.FaithFamiliar
			},
			{
				name: "Bravery of Familiar Spirits",
				access_rules: [`${vars.Incants.FaithFamiliar}, ${CanReach(vars.LocNames.Areas.Fields)}, ${CanReach(vars.LocNames.Bosses.Polyphemus)}`] // +4 Witch's Delight?
			},
			{
				name: "Alteration of Familiar Spirits",
				access_rules: [`${vars.Tools.CrescentPick}, ${vars.Helpers.Companion}:5, ${CanReach(vars.LocNames.Areas.Thessaly)}`], // +20 Witch's Delight? +30 Grasp?
				hosted_item: vars.Incants.AlterationFamiliar
			},
			{
				name: "Greater Favor of Gaia",
				access_rules: [`${vars.Helpers.Tool}:4, ${vars.Incants.Divination}, ${CanReach(vars.LocNames.Areas.Tartarus)}, ${CanReach(vars.LocNames.Areas.Thessaly)}`],
				hosted_item: vars.Incants.GreatFavorGaia
			},
			{
				name: "Long Arm of the Unseen",
				access_rules: [`${vars.Incants.AlterationFamiliar}, ${vars.Incants.Mercantile}`] // +Social Solidarity?
			},
			{
				name: "Acceptance of Another Fate",
				access_rules: [`${CanReach(vars.LocNames.Bosses.Chronos)}, ${CanReach(vars.LocNames.Bosses.Typhon)}, ${vars.Incants.InsightOffering}`] // +Spreading Ashes? +Favored Keepsakes?
			},
			{
				name: "Night's Craftwork",
				hosted_item: vars.Incants.NightsCraftwork
			},
			{
				name: "Divination of the Elements",
				access_rules: [`${CanReach(vars.LocNames.Bosses.Hecate)}`]
			},
			{
				name: "Forget-Me-Not",
				access_rules: [`${vars.Incants.FlourishingSoil}, ${vars.Incants.FatedIntervention}`],
				hosted_item: vars.Incants.ForgetMeNot
			},
			{
				name: "Path to Desired Blessings",
				access_rules: [`${vars.Incants.ForgetMeNot}, ${vars.Incants.InsightOffering}, ${CanReach(vars.LocNames.Bosses.Chronos)}, ${CanReach(vars.LocNames.Bosses.Typhon)}`]
			},
			{
				name: "Spreading of Ashes",
				access_rules: [vars.Incants.Consecration]
			},
			{
				name: "Favored of All Keepsakes",
				access_rules: [`${vars.Helpers.Keepsake}:22, ${CanReach(vars.LocNames.Areas.Tartarus)}`],
				hosted_item: vars.Incants.FavoredKeepsakes
			},
			{
				name: "Reagent Sensing",
				access_rules: [`${vars.Tools.CrescentPick}, ${CanReach(vars.LocNames.Areas.Erebus)}`]
			},
			{
				name: "Insight into Offerings",
				access_rules: [vars.Incants.Mercantile]
			},
			{
				name: "Summoning of Mercantile Fortune",
				hosted_item: vars.Incants.Mercantile
			},
			{
				name: "Deathly Fortune",
				access_rules: [`${vars.Tools.SilverSpade}, ${vars.Incants.Permeation}, ${vars.Incants.Mercantile}`],
				hosted_item: vars.Incants.DeathlyFortune
			},
			{
				name: "Kinship Fortune",
				access_rules: [`${vars.Incants.NightsCraftwork}, ${vars.Incants.Mercantile}`]
			},
			{
				name: "Earthly Fortune",
				access_rules: [] // 40 upgrades?
			},
			{
				name: "Rivals of Depths and Sea",
				access_rules: [`${CanReach(vars.LocNames.Bosses.Scylla)}, ${CanReach(vars.LocNames.Bosses.Eris)}`],
				hosted_item: vars.Incants.DepthsAndSea
			},
			{
				name: "Rivals of Plain and Peak",
				access_rules: [`${vars.Incants.DepthsAndSea}, ${CanReach(vars.LocNames.Bosses.Cerberus)}, ${CanReach(vars.LocNames.Bosses.Prometheus)}`],
				hosted_item: vars.Incants.PlainAndPeak
			},
			{
				name: "Rivals of Old and Rot",
				access_rules: [`${vars.Incants.DepthsAndSea}, ${vars.Incants.Dissolution}`],
				hosted_item: vars.Incants.OldAndRot
			},
			{
				name: "Cleansing of Fountain-Waters",
				access_rules: [`${vars.Tools.SilverSpade}, ${vars.Incants.WoodsyLifespring}`],
				hosted_item: vars.Incants.CleansingWaters
			},
			{
				name: "Purification of Fountain-Waters",
				access_rules: [vars.Incants.CleansingWaters]
			},
			{
				name: "Rise of Stygian Wells",
				access_rules: [vars.Tools.SilverSpade], // +some balancing to put it later?
				hosted_item: vars.Incants.RiseWells
			},
			{
				name: "Surge of Stygian Wells",
				access_rules: [`${vars.Incants.RiseWells}, ${vars.Incants.CleansingWaters}, ${CanReach(vars.LocNames.Areas.Fields)}`], // +balance?
				hosted_item: vars.Incants.SurgeWells
			},
			{
				name: "Rush of Fresh Air",
				access_rules: [`${vars.Incants.RiseWells}, ${vars.Incants.Unraveling}, ${vars.Incants.Bats}, ${CanReach(vars.LocNames.Areas.Thessaly)}`],
				hosted_item: vars.Incants.RushAir
			},
			{
				name: "Surge of Fresh Air",
				access_rules: [`${vars.Incants.RushAir}, ${CanReach(vars.LocNames.Bosses.Polyphemus)}`], // +balance?
				hosted_item: vars.Incants.SurgeAir
			},
			{
				name: "Revival of a Desecrating Pool",
				access_rules: [`${CanReach(vars.LocNames.Areas.Tartarus)}`],
				hosted_item: vars.Incants.RevivalPool
			},
			{
				name: "Surge of Desecrating Pools",
				access_rules: [`${vars.Incants.RevivalPool}, ${CanReach(vars.LocNames.Bosses.Chronos)}`]
			},
			{
				name: "Woodsy Lifespring",
				access_rules: [`${vars.Incants.ReagentSensing}, ${vars.Incants.ForgetMeNot}`],
				hosted_item: vars.Incants.WoodsyLifespring
			},
			{
				name: "Briny Lifespring",
				access_rules: [`${vars.Tools.CrescentPick}, ${CanReach(vars.LocNames.Areas.Oceanus)}`], // pick or Raki?
				hosted_item: vars.Incants.BrinyLifespring
			},
			{
				name: "Golden Lifespring",
				access_rules: [`${vars.Incants.BrinyLifespring}, ${vars.Incants.DeathlyFortune}, ${CanReach(vars.LocNames.Areas.Tartarus)}`] // or Chronos? Must fight him at least once
			},
			{
				name: "Sandy Lifespring",
				access_rules: [`${vars.Incants.BrinyLifespring}, ${CanReach(vars.LocNames.Areas.Thessaly)}`] // or Eris? Must fight her at least once
			},
			{
				name: "Frozen Lifespring",
				access_rules: [`${vars.Incants.SandyLifespring}, ${CanReach(vars.LocNames.Areas.Olympus)}`]
			},
			{
				name: "Propensity Towards Gold",
				access_rules: [vars.Incants.KindredKeepsakes] // +Mercantile? +2000 gold balance?
			},
			{
				name: "Summoning a Colony of Bats",
				access_rules: [`${vars.Incants.Unraveling}`],
				hosted_item: vars.Incants.Bats
			},
			{
				name: "Revival of a Mournful Husk",
				access_rules: [CanReach(vars.LocNames.Areas.Fields)]
			},
			{
				name: "Temporal Fluctuation",
				access_rules: [`${CanReach(vars.LocNames.Bosses.Chronos)}`] // or Tartarus? +Mercantile for balance? +Phase Shift Selene blessing or Eternity Arcana?
			},
			{
				name: "Power to Pause and Reflect",
				access_rules: [vars.Incants.OldAndRot] // or Vow4 + Chronos
			},
			{
				name: "Gathering of Ancient Bones",
				access_rules: [`${vars.Incants.Mercantile}, ${vars.Weapons.LimAndOros}, ${vars.Incants.ReagentSensing}, ${CanReach(vars.LocNames.Areas.Oceanus)}`],
				hosted_item: vars.Incants.GatheringBones
			},
			{
				name: "Gathering of Subterranean Riches",
				access_rules: [`${vars.Incants.EarthlyFortune}, ${vars.Tools.CrescentPick}, ${CanReach(vars.LocNames.Bosses.Chronos)}, ${CanReach(vars.LocNames.Bosses.Eris)}`]
			},
			{
				name: "Kindred Keepsakes",
				access_rules: [`${vars.Tools.CrescentPick}, ${vars.Helpers.Keepsake}:2, ${vars.Incants.WoodsyLifespring}, ${CanReach(vars.LocNames.Areas.Oceanus)}`],
				hosted_item: vars.Incants.KindredKeepsakes
			},
			{
				name: "Quickening of Sentimental Value",
				access_rules: [`${vars.Helpers.Keepsake}:23, ${vars.Incants.RiverFording}, ${CanReach(vars.LocNames.Areas.Ephyra)}`] // +Mercantile?
			},
			{
				name: "Rage of the Elements",
				access_rules: [`${vars.Incants.FrozenLifespring}, ${vars.Tools.CrescentPick}, ${CanReach(vars.LocNames.Bosses.Typhon)}, ${CanReach(vars.LocNames.Bosses.Hecate)}`]
			},
			{
				name: "Circles of Protection",
				access_rules: [`${vars.Incants.ExhumedTroves}, ${vars.Incants.NecromanticInfluence}, ${vars.Incants.SurgeAir}, ${CanReach(vars.LocNames.Areas.Olympus)}`],
				hosted_item: vars.Incants.CircleProtection
			},
			{
				name: "Circles of the Moon",
				access_rules: [vars.Incants.CircleProtection]
			},
			{
				name: "Necromantic Influence",
				access_rules: [`${vars.Incants.WoodsyLifespring}, ${vars.Incants.GatheringBones}, ${vars.Tools.TabletOfPeace}, ${vars.Tools.SilverSpade}`]
			},
			{
				name: "Exhumed Troves",
				access_rules: [`${vars.Incants.KindredKeepsakes}, ${vars.Incants.Mercantile}, ${vars.Incants.SurgeWells}`],
				hosted_item: vars.Incants.ExhumedTroves
			},
			{
				name: "Eyes of Night and Darkness",
				access_rules: [`${vars.Incants.ArisenTroves}, ${CanReach(vars.LocNames.Bosses.Chronos)}, ${CanReach(vars.LocNames.Areas.Olympus)}`]
			},
			{
				name: "Arisen Troves",
				access_rules: [`${vars.Incants.ExhumedTroves}, ${CanReach(vars.LocNames.Bosses.Eris)}`],
				hosted_item: vars.Incants.ArisenTroves
			},
			{
				name: "Bounties of the Infinite Abyss",
				access_rules: [`${vars.Tools.CrescentPick}, ${CanReach(vars.LocNames.Bosses.Chronos)}, ${CanReach(vars.LocNames.Bosses.Typhon)}`]
			},
			{
				name: "Ashen Memories of Life",
				access_rules: [`${vars.Tools.SilverSpade}, ${CanReach(vars.LocNames.Areas.Oceanus)}`] // +Star Dust? +^$HasResourcesForUpgrade? (800 ashes, 7500 bones, 50 nectar)
			},
			{
				name: "Bones of Arcane Wisdom",
				access_rules: [`${vars.Tools.SilverSpade}, ${CanReach(vars.LocNames.Areas.Fields)}`] // +Star Dust? +^$HasResourcesForUpgrade? (800 ashes, 7500 bones, 50 nectar)
			},
			{
				name: "Nectar of Godly Savor",
				access_rules: [`${vars.Tools.SilverSpade}, ${CanReach(vars.LocNames.Areas.Ephyra)}`] // +Star Dust? +^$HasResourcesForUpgrade? (800 ashes, 7500 bones, 50 nectar)
			},
			{
				name: "Rite of Social Solidarity",
				access_rules: [`${vars.Tools.SilverSpade}, ${CanReach(vars.LocNames.Areas.Ephyra)}`], // +12 Nectar?
				hosted_item: vars.Incants.SocialSolidarity
			},
			{
				name: "Rite of Vapor-Cleansing",
				access_rules: [vars.Incants.DoomedBeckoning]
			},
			{
				name: "Rite of River-Fording",
				access_rules: [`${vars.Tools.SilverSpade}, ${vars.Tools.RodOfFishing}, ${CanReach(vars.LocNames.Areas.Oceanus)}, ${CanReach(vars.LocNames.Areas.Thessaly)}`],
				hosted_item: vars.Incants.RiverFording
			},
			{
				name: "Flourishing Soil",
				access_rules: [CanReach(vars.LocNames.Areas.Erebus)],
				hosted_item: vars.Incants.FlourishingSoil
			},
			{
				name: "Rich Soil",
				access_rules: [`${vars.Incants.FlourishingSoil}, ${CanReach(vars.LocNames.Areas.Fields)}`],
				hosted_item: vars.Incants.RichSoil
			},
			{
				name: "Verdant Soil",
				access_rules: [`${vars.Incants.RichSoil}, ${CanReach(vars.LocNames.Areas.Tartarus)}, ${CanReach(vars.LocNames.Areas.Olympus)}`],
				hosted_item: vars.Incants.VerdantSoil
			},
			{
				name: "Observance of Gaia's Secrets",
				access_rules: [`${vars.Incants.VerdantSoil}, ${vars.Incants.GreatFavorGaia}`],
				hosted_item: vars.Incants.ObservanceGaia
			},
			{
				name: "Green Hand of Gaia",
				access_rules: [`${vars.Incants.ObservanceGaia}, ${CanReach(vars.LocNames.Areas.Summit)}`] // +90 seeds?
			},
			{
				name: "Greater Sowing of Gardens",
				access_rules: [vars.Incants.ObservanceGaia]
			},
			{
				name: "Greatest Gift of Gaia",
				access_rules: [`${vars.Helpers.Tool}:4, ${CanReach(vars.LocNames.Bosses.Chronos)}, ${CanReach(vars.LocNames.Bosses.Typhon)}`]
			},
			{
				name: "Empath's Intuition",
				access_rules: [`${vars.Helpers.Keepsake}:9, ${CanReach(vars.LocNames.Areas.Fields)}`] // +Mercantile?
			},
			{
				name: "Summoning of Musical Rhapsody",
				access_rules: [`${vars.Incants.SocialSolidarity}, ${vars.Incants.EarthlyFortune}, ${CanReach(vars.LocNames.Bosses.Cerberus)}`],
				hosted_item: vars.Incants.Rhapsody
			},
			{
				name: "Shuffling of Noted Ballads",
				access_rules: [`${vars.Incants.Rhapsody}, ${CanReach(vars.LocNames.Areas.Tartarus)}, ${vars.LocNames.Areas.Olympus}`]
			},
			{
				name: "Summoning of Historic Travails",
				access_rules: [`${vars.Tools.CrescentPick}, ${vars.Incants.Mercantile}, ${vars.Incants.SocialSolidarity}, ${CanReach(vars.LocNames.Bosses.Chronos)}, ${CanReach(vars.LocNames.Bosses.Polyphemus)}`]
			},
			{
				name: "Summoning of Personal Insights",
				access_rules: [`${vars.Incants.Mercantile}, ${vars.Incants.SocialSolidarity}, ${CanReach(vars.LocNames.Bosses.Chronos)}`]
			},
			{
				name: "Returning to a Real Possibiliity",
				access_rules: [vars.Incants.Dissolution]
			},
			{
				name: "Greater Removal of Rubbish",
				access_rules: [`${vars.Incants.EarthlyFortune}, ${vars.Tools.SilverSpade}, ${CanReach(vars.LocNames.Areas.Ephyra)}`]
			}
		],
		map_locations: [{
			
		}]
	}

	let output = JSON.stringify([loc], null, "\t").replace(/\[\n\s+(".+")\n\s+\]/g, "[$1]").replace(/\{\n\s+(.+)\n\s+\}/g, "{$1}")
	writeToFile("locations/incantations.jsonc", output)
}

if (import.meta.main) {
	createIncantationLocations()
}