import { writeToFile, vars } from './utils.js'

function CanReach(area) {
	return `^$CanReach|${area}`
}
export default function createIncantationLocations() {
	let loc = {
		name: "The Cauldron",
		chest_unopened_img: "",
		chest_opened_img: "",
		visibility_rules: [vars.Settings.CauldronsanityOn],
		sections: [
			{
				name: "Disintegration of Monstrosity",
				access_rules: [`${vars.Items.Gigaros}, ${CanReach(vars.LocNames.Special.BothVictory)}`],
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
				access_rules: [`${CanReach(vars.LocNames.Areas.Oceanus)}`],
				hosted_item: vars.Events.Permeation
			},
			{
				name: "Fated Intervention",
				access_rules: [`${vars.Events.NightsCraftwork}, ${vars.Tools.CrescentPick}, ${CanReach(vars.LocNames.Areas.Erebus)}`],
				hosted_item: vars.Events.FatedIntervention
			},
			{
				name: "Doomed Beckoning",
				access_rules: [`${vars.Events.FatedIntervention}, ${vars.Tools.SilverSpade}`],
				hosted_item: vars.Events.DoomedBeckoning
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
				access_rules: [`${CanReach(vars.LocNames.Bosses.Hecate)}, ${vars.Events.Mercantile}`],
				hosted_item: vars.Events.Consecration
			},
			{
				name: "Abyssal Insight",
				access_rules: [`${CanReach(vars.LocNames.Bosses.Scylla)}, ${vars.Tools.SilverSpade}, ${vars.Events.Unraveling}`], // Spade is irrelevant cuz Unraveling?
				hosted_item: vars.Events.AbyssalInsight
			},
			{
				name: "Abyssal Reflection",
				access_rules: [vars.Events.AbyssalInsight]
			},
			{
				name: "Faith of Familiar Spirits",
				access_rules: [`${vars.Tools.CrescentPick}, ${vars.Tools.TabletOfPeace}, ${vars.Tools.SilverSpade}, ${CanReach(vars.LocNames.Areas.Oceanus)}`],
				hosted_item: vars.Events.FaithFamiliar
			},
			{
				name: "Bravery of Familiar Spirits",
				access_rules: [`${vars.Events.FaithFamiliar}, ${CanReach(vars.LocNames.Areas.Fields)}, ${CanReach(vars.LocNames.Bosses.Polyphemus)}`] // +4 Witch's Delight?
			},
			{
				name: "Alteration of Familiar Spirits",
				access_rules: [`${vars.Tools.CrescentPick}, ${vars.Helpers.Companion}:5, ${CanReach(vars.LocNames.Areas.Thessaly)}`], // +20 Witch's Delight? +30 Grasp?
				hosted_item: vars.Events.AlterationFamiliar
			},
			{
				name: "Greater Favor of Gaia",
				access_rules: [`${vars.Helpers.Tool}:4, ${vars.Events.Divination}, ${CanReach(vars.LocNames.Areas.Tartarus)}, ${CanReach(vars.LocNames.Areas.Thessaly)}`],
				hosted_item: vars.Events.GreatFavorGaia
			},
			{
				name: "Long Arm of the Unseen",
				access_rules: [`${vars.Events.AlterationFamiliar}, ${vars.Events.Mercantile}`] // +Social Solidarity?
			},
			{
				name: "Acceptance of Another Fate",
				access_rules: [`${CanReach(vars.LocNames.Special.BothVictory)}, ${vars.Events.InsightOffering}`] // +Spreading Ashes? +Favored Keepsakes?
			},
			{
				name: "Night's Craftwork",
				hosted_item: vars.Events.NightsCraftwork
			},
			{
				name: "Divination of the Elements",
				access_rules: [`${CanReach(vars.LocNames.Bosses.Hecate)}`]
			},
			{
				name: "Forget-Me-Not",
				access_rules: [`${vars.Events.FlourishingSoil}, ${vars.Events.FatedIntervention}`],
				hosted_item: vars.Events.ForgetMeNot
			},
			{
				name: "Path to Desired Blessings",
				access_rules: [`${vars.Events.ForgetMeNot}, ${vars.Events.InsightOffering}, ${CanReach(vars.LocNames.Special.BothVictory)}`]
			},
			{
				name: "Spreading of Ashes",
				access_rules: [vars.Events.Consecration]
			},
			{
				name: "Favored of All Keepsakes",
				access_rules: [`${vars.Helpers.Keepsake}:22, ${CanReach(vars.LocNames.Areas.Tartarus)}`],
				hosted_item: vars.Events.FavoredKeepsakes
			},
			{
				name: "Reagent Sensing",
				access_rules: [`${vars.Tools.CrescentPick}, ${CanReach(vars.LocNames.Areas.Erebus)}`]
			},
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
			{
				name: "Rivals of Depths and Sea",
				access_rules: [`${CanReach(vars.LocNames.Bosses.Scylla)}, ${CanReach(vars.LocNames.Bosses.Eris)}`],
				hosted_item: vars.Events.DepthsAndSea
			},
			{
				name: "Rivals of Plain and Peak",
				access_rules: [`${CanReach(vars.LocNames.Bosses.Cerberus)}, ${CanReach(vars.LocNames.Bosses.Prometheus)}`], // +Depths and Sea?
				hosted_item: vars.Events.PlainAndPeak
			},
			{
				name: "Rivals of Old and Rot",
				access_rules: [vars.Events.Dissolution], // +Plain and Peak?
				hosted_item: vars.Events.OldAndRot
			},
			{
				name: "Cleansing of Fountain-Waters",
				access_rules: [`${vars.Tools.SilverSpade}, ${vars.Events.WoodsyLifespring}`],
				hosted_item: vars.Events.CleansingWaters
			},
			{
				name: "Purification of Fountain-Waters",
				access_rules: [vars.Events.CleansingWaters]
			},
			{
				name: "Rise of Stygian Wells",
				access_rules: [vars.Tools.SilverSpade], // +some balancing to put it later?
				hosted_item: vars.Events.RiseWells
			},
			{
				name: "Surge of Stygian Wells",
				access_rules: [`${vars.Events.RiseWells}, ${vars.Events.CleansingWaters}, ${CanReach(vars.LocNames.Areas.Fields)}`], // +balance?
				hosted_item: vars.Events.SurgeWells
			},
			{
				name: "Rush of Fresh Air",
				access_rules: [`${vars.Events.RiseWells}, ${vars.Events.Unraveling}, ${vars.Events.Bats}, ${CanReach(vars.LocNames.Areas.Thessaly)}`],
				hosted_item: vars.Events.RushAir
			},
			{
				name: "Surge of Fresh Air",
				access_rules: [`${vars.Events.RushAir}, ${CanReach(vars.LocNames.Bosses.Polyphemus)}`], // +balance?
				hosted_item: vars.Events.SurgeAir
			},
			{
				name: "Revival of a Desecrating Pool",
				access_rules: [`${CanReach(vars.LocNames.Areas.Tartarus)}`],
				hosted_item: vars.Events.RevivalPool
			},
			{
				name: "Surge of Desecrating Pools",
				access_rules: [`${vars.Events.RevivalPool}, ${CanReach(vars.LocNames.Bosses.Chronos)}`]
			},
			{
				name: "Woodsy Lifespring",
				access_rules: [`${vars.Events.ReagentSensing}, ${vars.Events.ForgetMeNot}`],
				hosted_item: vars.Events.WoodsyLifespring
			},
			{
				name: "Briny Lifespring",
				access_rules: [`${vars.Tools.CrescentPick}, ${CanReach(vars.LocNames.Areas.Oceanus)}`], // pick or Raki?
				hosted_item: vars.Events.BrinyLifespring
			},
			{
				name: "Golden Lifespring",
				access_rules: [`${vars.Events.BrinyLifespring}, ${vars.Events.DeathlyFortune}, ${CanReach(vars.LocNames.Areas.Tartarus)}`] // or Chronos? Must fight him at least once
			},
			{
				name: "Sandy Lifespring",
				access_rules: [`${vars.Events.BrinyLifespring}, ${CanReach(vars.LocNames.Areas.Thessaly)}`] // or Eris? Must fight her at least once
			},
			{
				name: "Frozen Lifespring",
				access_rules: [`${vars.Events.SandyLifespring}, ${CanReach(vars.LocNames.Areas.Olympus)}`]
			},
			{
				name: "Propensity Towards Gold",
				access_rules: [vars.Events.KindredKeepsakes] // +Mercantile? +2000 gold balance?
			},
			{
				name: "Summoning a Colony of Bats",
				access_rules: [`${vars.Events.Unraveling}`],
				hosted_item: vars.Events.Bats
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
				access_rules: [vars.Events.OldAndRot] // or Vow4 + Chronos
			},
			{
				name: "Gathering of Ancient Bones",
				access_rules: [`${vars.Events.Mercantile}, ${vars.Weapons.LimAndOros}, ${vars.Events.ReagentSensing}, ${CanReach(vars.LocNames.Areas.Oceanus)}`],
				hosted_item: vars.Events.GatheringBones
			},
			{
				name: "Gathering of Subterranean Riches",
				access_rules: [`${vars.Events.EarthlyFortune}, ${vars.Tools.CrescentPick}, ${CanReach(vars.LocNames.Bosses.Chronos)}, ${CanReach(vars.LocNames.Bosses.Eris)}`]
			},
			{
				name: "Kindred Keepsakes",
				access_rules: [`${vars.Tools.CrescentPick}, ${vars.Helpers.Keepsake}:2, ${vars.Events.WoodsyLifespring}, ${CanReach(vars.LocNames.Areas.Oceanus)}`],
				hosted_item: vars.Events.KindredKeepsakes
			},
			{
				name: "Quickening of Sentimental Value",
				access_rules: [`${vars.Helpers.Keepsake}:23, ${vars.Events.RiverFording}, ${CanReach(vars.LocNames.Areas.Ephyra)}`] // +Mercantile?
			},
			{
				name: "Rage of the Elements",
				access_rules: [`${vars.Events.FrozenLifespring}, ${vars.Tools.CrescentPick}, ${CanReach(vars.LocNames.Bosses.Typhon)}, ${CanReach(vars.LocNames.Bosses.Hecate)}`]
			},
			{
				name: "Circles of Protection",
				access_rules: [`${vars.Events.ExhumedTroves}, ${vars.Events.NecromanticInfluence}, ${vars.Events.SurgeAir}, ${CanReach(vars.LocNames.Areas.Olympus)}`],
				hosted_item: vars.Events.CircleProtection
			},
			{
				name: "Circles of the Moon",
				access_rules: [vars.Events.CircleProtection]
			},
			{
				name: "Necromantic Influence",
				access_rules: [`${vars.Events.WoodsyLifespring}, ${vars.Events.GatheringBones}, ${vars.Tools.TabletOfPeace}, ${vars.Tools.SilverSpade}`]
			},
			{
				name: "Exhumed Troves",
				access_rules: [`${vars.Events.KindredKeepsakes}, ${vars.Events.Mercantile}, ${vars.Events.SurgeWells}`],
				hosted_item: vars.Events.ExhumedTroves
			},
			{
				name: "Eyes of Night and Darkness",
				access_rules: [`${vars.Events.ArisenTroves}, ${CanReach(vars.LocNames.Bosses.Chronos)}, ${CanReach(vars.LocNames.Areas.Olympus)}`]
			},
			{
				name: "Arisen Troves",
				access_rules: [`${vars.Events.ExhumedTroves}, ${CanReach(vars.LocNames.Bosses.Eris)}`],
				hosted_item: vars.Events.ArisenTroves
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
				hosted_item: vars.Events.SocialSolidarity
			},
			{
				name: "Rite of Vapor-Cleansing",
				access_rules: [vars.Events.DoomedBeckoning]
			},
			{
				name: "Rite of River-Fording",
				access_rules: [`${vars.Tools.SilverSpade}, ${vars.Tools.RodOfFishing}, ${CanReach(vars.LocNames.Areas.Oceanus)}, ${CanReach(vars.LocNames.Areas.Thessaly)}`],
				hosted_item: vars.Events.RiverFording
			},
			{
				name: "Flourishing Soil",
				access_rules: [CanReach(vars.LocNames.Areas.Erebus)],
				hosted_item: vars.Events.FlourishingSoil
			},
			{
				name: "Rich Soil",
				access_rules: [`${vars.Events.FlourishingSoil}, ${CanReach(vars.LocNames.Areas.Fields)}`],
				hosted_item: vars.Events.RichSoil
			},
			{
				name: "Verdant Soil",
				access_rules: [`${vars.Events.RichSoil}, ${CanReach(vars.LocNames.Areas.Tartarus)}, ${CanReach(vars.LocNames.Areas.Olympus)}`],
				hosted_item: vars.Events.VerdantSoil
			},
			{
				name: "Observance of Gaia's Secrets",
				access_rules: [`${vars.Events.VerdantSoil}, ${vars.Events.GreatFavorGaia}`],
				hosted_item: vars.Events.ObservanceGaia
			},
			{
				name: "Green Hand of Gaia",
				access_rules: [`${vars.Events.ObservanceGaia}, ${CanReach(vars.LocNames.Areas.Summit)}`] // +90 seeds?
			},
			{
				name: "Greater Sowing of Gardens",
				access_rules: [vars.Events.ObservanceGaia]
			},
			{
				name: "Greatest Gift of Gaia",
				access_rules: [`${vars.Helpers.Tool}:4, ${CanReach(vars.LocNames.Special.BothVictory)}`]
			},
			{
				name: "Empath's Intuition",
				access_rules: [`${vars.Helpers.Keepsake}:9, ${CanReach(vars.LocNames.Areas.Fields)}`] // +Mercantile?
			},
			{
				name: "Summoning of Musical Rhapsody",
				access_rules: [`${vars.Events.SocialSolidarity}, ${vars.Events.EarthlyFortune}, ${CanReach(vars.LocNames.Bosses.Cerberus)}`],
				hosted_item: vars.Events.Rhapsody
			},
			{
				name: "Shuffling of Noted Ballads",
				access_rules: [`${vars.Events.Rhapsody}, ${CanReach(vars.LocNames.Areas.Tartarus)}, ${vars.LocNames.Areas.Olympus}`]
			},
			{
				name: "Summoning of Historic Travails",
				access_rules: [`
					${vars.Tools.CrescentPick},
					${vars.Events.Mercantile},
					${vars.Events.SocialSolidarity},
					${CanReach(vars.LocNames.Bosses.Chronos)},
					${CanReach(vars.LocNames.Bosses.Polyphemus)}
				`]
			},
			{
				name: "Summoning of Personal Insights",
				access_rules: [`${vars.Events.Mercantile}, ${vars.Events.SocialSolidarity}, ${CanReach(vars.LocNames.Bosses.Chronos)}`]
			},
			{
				name: "Returning to a Real Possibiliity",
				access_rules: [vars.Events.Dissolution]
			},
			{
				name: "Greater Removal of Rubbish",
				access_rules: [`${vars.Events.EarthlyFortune}, ${vars.Tools.SilverSpade}, ${CanReach(vars.LocNames.Areas.Ephyra)}`]
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