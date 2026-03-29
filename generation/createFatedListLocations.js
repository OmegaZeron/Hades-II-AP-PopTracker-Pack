import { writeToFile, and, vars, CanReach, LuaFunc } from './utils.js'

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
				access_rules: [and(`${vars.Helpers.Weapon}:6`, vars.Fates.TempSetback, CanReach(vars.LocNames.Bosses.Typhon))]
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
				access_rules: [and(`${vars.Helpers.Aspect}:24`, CanReach(vars.LocNames.Special.EitherVictory))]
			},
			{
				name: "Den Mother",
				access_rules: [and(`${vars.Helpers.Familiar}:5`, CanReach(vars.LocNames.Special.EitherVictory))]
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
		],
		map_locations: [{
			
		}]
	}
	
	let output = JSON.stringify([loc], null, "\t").replace(/\[\n\s+(".+")\n\s+\]/g, "[$1]").replace(/\{\n\s+(.+)\n\s+\}/g, "{$1}")
	writeToFile("locations/incantations.jsonc", output)
}

if (import.meta.main) {
	createFatedListLocations()
}