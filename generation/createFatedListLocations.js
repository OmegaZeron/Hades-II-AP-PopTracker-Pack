import { writeToFile, and, vars, CanReach, LuaFunc, Has } from './utils.js'

export default function createFatedListLocations() {
	let loc = {
		name: "Fated List of Minor Prophesies",
		chest_unopened_img: "",
		chest_opened_img: "",
		visibility_rules: [vars.Settings.FatesanityOn],
		sections: [
			{
				name: "Melinoë, Help Us",
				access_rules: [and(vars.Incants.Dissolution, vars.Incants.DoomedBeckoning)],
				hosted_item: vars.Fates.HelpUs
			},
			{
				name: "Melinoë, Remember Us",
				access_rules: [vars.Fates.HelpUs],
				hosted_item: vars.Fates.RememberUs
			},
			{
				name: "Melinoë, Seek Us",
				access_rules: [vars.Fates.RememberUs],
				hosted_item: vars.Fates.SeekUs
			},
			{
				name: "Melinoë, Find Us",
				access_rules: [and(vars.Fates.SeekUs, vars.Keepsakes.EngravedPin)] // vars.Incants.Dissolution if the above 3 are removed
			},
			{
				name: "Storm in the Heavens",
				access_rules: [CanReach(vars.LocNames.Bosses.Typhon)]
			},
			{
				name: "Temporary Setback",
				access_rules: [CanReach(vars.LocNames.Bosses.Chronos)],
				hosted_item: vars.Fates.TempSetback
			},
			{
				name: "Harbinger of Doom",
				access_rules: [vars.Incants.DoomedBeckoning]
			},
			{
				name: "Witch of the Crossroads",
				access_rules: [CanReach(vars.LocNames.Bosses.Hecate)],
				hosted_item: vars.Fates.WitchCrossroads
			},
			{
				name: "Natural Talent",
				access_rules: [vars.Fates.WitchCrossroads] // +some balance?
			},
			{
				name: "Sword of the Night",
				access_rules: [and(Has(vars.Helpers.Weapon, 6), vars.Fates.TempSetback, CanReach(vars.LocNames.Bosses.Typhon))]
			},
			{
				name: "Arcana of the Ages",
				access_rules: [vars.Fates.TempSetback] // +all arcana?
			},
			{
				name: "Unrivaled Prowess",
				access_rules: [vars.Incants.OldAndRot]
			},
			{
				name: "Bearing Dark Gifts",
				access_rules: [and(Has(vars.Helpers.Aspect, 24), CanReach(vars.LocNames.Special.EitherVictory))]
			},
			{
				name: "Den Mother",
				access_rules: [and(Has(vars.Helpers.Familiar, 5), CanReach(vars.LocNames.Special.EitherVictory))]
			},
			{
				name: "Family in Need",
				access_rules: [and(vars.NameToKeepsake.Poseidon, LuaFunc.CanMine, CanReach(vars.LocNames.Areas.Oceanus))]
			},
			{
				name: "Visions of Victory",
				access_rules: [vars.Incants.AbyssalInsight]
			},
			{
				name: "Unfinished Business",
				access_rules: [and(vars.Incants.Dissolution, vars.Keepsakes.KnuckleBones)]
			},
			{
				name: "Haunted by the Past",
				access_rules: [and(vars.Incants.ReturnMemories, CanReach(vars.LocNames.Bosses.Prometheus))]
			},
			{
				name: "Silk and Spitefulness",
				access_rules: [and(vars.Keepsakes.GorgonAmulet, CanReach(vars.LocNames.Areas.Olympus))]
			},
			{
				name: "Voice and Vanity",
				access_rules: [vars.Incants.Purification]
			},
			{
				name: "Bitter Tears",
				access_rules: [and(vars.Incants.EssenceSorrow, CanReach(vars.LocNames.Bosses.Chronos), CanReach(vars.LocNames.Bosses.Polyphemus))]
			},
			{
				name: "Drowned Ambitions",
				access_rules: [and(vars.Incants.EssenceSorrow, CanReach(vars.LocNames.Bosses.Chronos))]
			},
			{
				name: "The Jackal's Aspect",
				access_rules: [and(vars.Aspects.DescuraAnubis, CanReach(vars.LocNames.Bosses.Chronos))]
			},
			{
				name: "The Crow's Aspect",
				access_rules: [and(vars.Aspects.LimAndOrosTheMorrigan, CanReach(vars.LocNames.Bosses.Chronos))]
			},
			{
				name: "The Shadow's Aspect",
				access_rules: [and(vars.Aspects.YgniumSupay, CanReach(vars.LocNames.Bosses.Chronos))]
			},
			{
				name: "The Warrior's Aspect",
				access_rules: [and(vars.Aspects.ZorephetNergal, CanReach(vars.LocNames.Bosses.Chronos))]
			},
			{
				name: "The Grave's Aspect",
				access_rules: [and(vars.Aspects.RevallHel, CanReach(vars.LocNames.Bosses.Chronos))]
			},
			{
				name: "The Destroyed's Aspect",
				access_rules: [and(vars.Aspects.XinthShiva, CanReach(vars.LocNames.Bosses.Chronos))]
			},
			{
				name: "Nobody But Nobody",
				access_rules: [and(vars.Keepsakes.KnuckleBones, CanReach(vars.LocNames.Bosses.Polyphemus))]
			},
			{
				name: "Born to Win",
				access_rules: [and(vars.Keepsakes.TranscendentEmbryo, CanReach(vars.LocNames.Special.EitherVictory))]
			},
			{
				name: "Improbable Outcomes",
				access_rules: [and(
					Has(vars.Helpers.Weapon, 6),
					Has(vars.Helpers.Aspect, 24),
					Has(vars.Helpers.Keepsake, 33),
					Has(vars.Helpers.Familiar, 5),
					CanReach(vars.LocNames.Bosses.Chronos),
					CanReach(vars.LocNames.Bosses.Typhon)
				)]
			},
			{
				name: "Soundest of Sleepers",
				access_rules: [vars.Incants.DumbSlumber]
			},
			{name: "Customary Gift"},
			{name: "Mindful Craft"},
			{
				name: "Blades of Pure Silver",
				access_rules: [vars.Weapons.LimAndOros] // might instead be the weapon unlock location
			},
			{
				name: "The Arms of Night",
				access_rules: [Has(vars.Helpers.Weapon, 6)]
			},
			{
				name: "The Unseen Sentinel",
				access_rules: [Has(vars.Helpers.AltAspect, 18)]
			},
			{
				name: "Awakened Aspect",
				access_rules: [vars.Helpers.Aspect] // +balance for upgrading an aspect?
			},
			{
				name: "Major Arcana",
				access_rules: [vars.Incants.Consecration] // +balance?
			},
			{
				name: "Familiar Confidant",
				access_rules: [vars.Incants.FatedIntervention]
			},
			{
				name: "Note to Self",
				access_rules: [vars.Incants.ForgetMeNot]
			},
			{
				name: "The Invoker",
				access_rules: [] // balance for completing 10 incantations?
			},
			{name: "Whims of Chaos"},
			{
				name: "Breadth of Knowledge",
				// access_rules: [] // 18/14 can be unlocked with only Ashes, so no rules? Caerberus+Prometheus? Arcana AP items?
				// access_rules: [and(CanReach(vars.LocNames.Bosses.Cerberus), CanReach(vars.LocNames.Bosses.Prometheus))]
			},
			{
				name: "Weight in Gold",
				// access_rules: [] // +balance for 5000 gold?
			},
			{
				name: "Valued Customer",
				access_rules: [vars.Incants.RiseWells]
			},
			{
				name: "Close Companions",
				access_rules: [Has(vars.Helpers.Familiar, 3)]
			},
			{
				name: "Beyond Familiar",
				access_rules: [vars.Helpers.Familiar] // +balance for Witch's Delight?
			},
			{
				name: "Denizens of the Deep",
				access_rules: [and(LuaFunc.CanFish, CanReach(vars.LocNames.Areas.Tartarus), CanReach(vars.LocNames.Areas.Summit))]
			},
			{
				name: "Keeper of Shadows",
				access_rules: [CanReach(vars.LocNames.Bosses.Hecate)] // +balance to see 50 entries?
			},
			{
				name: "Tools of the Unseen",
				access_rules: [and(vars.Incants.NightsCraftwork, Has(vars.Helpers.Tool, 4))],
				hosted_item: vars.Fates.ToolsUnseen
			},
			{
				name: "Precision Instruments",
				access_rules: [and(vars.Fates.ToolsUnseen, vars.Incants.ObservanceGaia)]
			},
			{
				name: "Home in the Crossroads",
				access_rules: [vars.Incants.EarthlyFortune] // 10000 Kudos?
			},
			{
				name: "Spectral Forms",
				access_rules: [vars.Incants.NecromanticInfluence]
			},
			{
				name: "Shadow of Death",
				access_rules: [CanReach(vars.LocNames.Areas.Tartarus)]
			},
			{
				name: "Shadow of Doom",
				access_rules: [CanReach(vars.LocNames.Areas.Summit)]
			},
			{
				name: "Gifts of the Moon",
				// access_rules: [] // balance?
			},
			{
				name: "Godsent Favor",
				// access_rules: [CanReach(vars.LocNames.Bosses.Typhon)] // balance? Gifts of the Moon? Typhon not required if Ares/Hera show up by default
			},
			{
				name: "Master of the Dead",
				access_rules: [CanReach(vars.LocNames.Areas.Tartarus)]
			},
			{
				name: "Master of the Heavens",
				access_rules: [vars.NameToKeepsake.Zeus]
			},
			{
				name: "Mistress of Wedlock",
				access_rules: [vars.NameToKeepsake.Hera]
			},
			{
				name: "Master of the Sea",
				access_rules: [vars.NameToKeepsake.Poseidon]
			},
			{
				name: "Mistress of Seasons",
				access_rules: [vars.NameToKeepsake.Demeter]
			},
			{
				name: "Master of Light",
				access_rules: [vars.NameToKeepsake.Apollo]
			},
			{
				name: "Mistress of Beauty",
				access_rules: [vars.NameToKeepsake.Aphrodite]
			},
			{
				name: "Master of the Forge",
				access_rules: [vars.NameToKeepsake.Hephaestus]
			},
			{
				name: "Mistress of the Hearth",
				access_rules: [vars.NameToKeepsake.Hestia]
			},
			{
				name: "Master of War",
				access_rules: [vars.NameToKeepsake.Ares]
			},
			{name: "Mistress of the Hunt"},
			{
				name: "Master of Swiftness",
				access_rules: [CanReach(vars.LocNames.Bosses.Hecate)]
			},
			{
				name: "Mistress of Battle",
				access_rules: [vars.NameToKeepsake.Athena]
			},
			{
				name: "Master of Revelry",
				access_rules: [CanReach(vars.LocNames.Areas.Olympus)]
			},
			{
				name: "Original Sins",
				access_rules: []
			},
			{
				name: "Original Virtues",
				access_rules: []
			},
			{
				name: "Power Beyond Legend",
				access_rules: []
			},
			{
				name: "Combined Might",
				access_rules: [Has(vars.Helpers.KeepsakeSummon, 11)]
			},
			{
				name: "Weaver of Fineries",
				access_rules: [CanReach(vars.LocNames.Areas.Erebus)]
			},
			{
				name: "Denier of Suitors",
				access_rules: [CanReach(vars.LocNames.Areas.Oceanus)]
			},
			{
				name: "Voice of Truth",
				access_rules: [CanReach(vars.LocNames.Areas.Fields)]
			},
			{
				name: "Witch of Shadows",
				access_rules: [CanReach(vars.LocNames.Areas.Ephyra)]
			},
			{
				name: "Witch of Changing",
				access_rules: [CanReach(vars.LocNames.Areas.Thessaly)]
			},
			{
				name: "Wings of Freedom",
				access_rules: [CanReach(vars.LocNames.Areas.Thessaly)]
			},
			{
				name: "Bared Fangs",
				access_rules: [and(CanReach(vars.LocNames.Bosses.Chronos), CanReach(vars.LocNames.Areas.Ephyra))] // +balance?
			},
			{
				name: "The Witch's Staff",
				access_rules: [vars.Weapons.Descura] // +balance?
			},
			{
				name: "The Sister Blades",
				access_rules: [vars.Weapons.LimAndOros] // +balance?
			},
			{
				name: "The Umbral Flames",
				access_rules: [vars.Weapons.Ygnium] // +balance?
			},
			{
				name: "The Moonstone Axe",
				access_rules: [vars.Weapons.Zorephet] // +balance?
			},
			{
				name: "The Argent Skull",
				access_rules: [vars.Weapons.Revall] // +balance?
			},
			{
				name: "The Black Coat",
				access_rules: [vars.Weapons.Xinth] // +balance?
			},
		],
		map_locations: [{
			
		}]
	}
	
	let output = JSON.stringify([loc], null, "\t").replace(/\[\n\s+(".+")\n\s+\]/g, "[$1]").replace(/\{\n\s+(.+)\n\s+\}/g, "{$1}")
	writeToFile("locations/fated_list.jsonc", output)
}

if (import.meta.main) {
	createFatedListLocations()
}