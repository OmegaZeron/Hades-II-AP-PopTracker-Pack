import { writeToFile, toPascalCase, vars } from './utils.js'

export default function createItems() {
	let items = []

	let itemData = [
		// tools
		{name: "Silver Spade", codes: `tool, ${vars.Tools.SilverSpade}`},
		{name: "Crescent Pick", codes: `tool, ${vars.Tools.CrescentPick}`},
		{name: "Tablet of Peace", codes: `tool, ${vars.Tools.TabletOfPeace}`},
		{name: "Rod of Fishing", codes: `tool, ${vars.Tools.RodOfFishing}`},
		// items
		{name: "Gigaros", codes: vars.Items.Gigaros},
		// events
		{name: "Disintegration of Monstrosity", codes: vars.Events.Disintegration},
		{name: "Dissolution of Time", codes: vars.Events.Dissolution},
		{name: "Unraveling of a Fateful Bond", codes: vars.Events.Unraveling},
		{name: "Permeation of Witching-Wards", codes: vars.Events.Permeation},
		{name: "Fated Intervention", codes: vars.Events.FatedIntervention},
		{name: "Doomed Beckoning", codes: vars.Events.DoomedBeckoning},
		{name: "End to Deepest Slumber", codes: vars.Events.DeepSlumber},
		{name: "End to Dearest Slumber", codes: vars.Events.DearSlumber},
		{name: "Consecration of Ashes", codes: vars.Events.Consecration},
		{name: "Abyssal Insight", codes: vars.Events.AbyssalInsight},
		{name: "Faith of Familiar Spirits", codes: vars.Events.FaithFamiliar},
		{name: "Alteration of Familiar Forms", codes: vars.Events.AlterationFamiliar},
		{name: "Night's Craftwork", codes: vars.Events.NightsCraftwork},
		{name: "Divination of the Elements", codes: vars.Events.Divination},
		// {name: "ForgetMeNot", codes: vars.Events.ForgetMeNot},
		// {name: "SpreadingAshes", codes: vars.Events.SpreadingAshes},
		// {name: "FavoredKeepsakes", codes: vars.Events.FavoredKeepsakes},
		// {name: "ReagentSensing", codes: vars.Events.ReagentSensing},
		{name: "InsightOffering", codes: vars.Events.InsightOffering},
		{name: "Mercantile", codes: vars.Events.Mercantile},
		{name: "DeathlyFortune", codes: vars.Events.DeathlyFortune},
		// {name: "DepthsAndSea", codes: vars.Events.DepthsAndSea},
		// {name: "PlainAndPeak", codes: vars.Events.PlainAndPeak},
		// {name: "CleansingWaters", codes: vars.Events.CleansingWaters},
		// {name: "RiseWells", codes: vars.Events.RiseWells},
		// {name: "RushAir", codes: vars.Events.RushAir},
		// {name: "RevivalPool", codes: vars.Events.RevivalPool},
		// {name: "WoodsyLifespring", codes: vars.Events.WoodsyLifespring},
		// {name: "BrinyLifespring", codes: vars.Events.BrinyLifespring},
		// {name: "SocialSolidarity", codes: vars.Events.SocialSolidarity},
		// {name: "FlourishingSoil", codes: vars.Events.FlourishingSoil},
	]

	for (let item of itemData) {
		items.push({
			name: `${item.name}`,
			type: "toggle",
			img: `images/items/${toPascalCase(item.name)}.png`,
			codes: item.codes
		})
	}

	writeToFile("items/items.jsonc", JSON.stringify(items, null, "\t"))
}

if (import.meta.main) {
	createItems()
}