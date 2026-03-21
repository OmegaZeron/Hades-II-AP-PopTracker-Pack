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
		{name: "Greater Favor of Gaia", codes: vars.Events.GreatFavorGaia},
		{name: "Night's Craftwork", codes: vars.Events.NightsCraftwork},
		{name: "Divination of the Elements", codes: vars.Events.Divination},
		{name: "Forget-Me-Not", codes: vars.Events.ForgetMeNot},
		{name: "Spreading of Ashes", codes: vars.Events.SpreadingAshes},
		{name: "Favored of All Keepsakes", codes: vars.Events.FavoredKeepsakes},
		{name: "Reagent Sensing", codes: vars.Events.ReagentSensing},
		{name: "Insight into Offerings", codes: vars.Events.InsightOffering},
		{name: "Summoning of Mercantile Fortune", codes: vars.Events.Mercantile},
		{name: "Deathly Fortune", codes: vars.Events.DeathlyFortune},
		{name: "Earthly Fortune", codes: vars.Events.EarthlyFortune},
		{name: "Rivals of Depths And Sea", codes: vars.Events.DepthsAndSea},
		{name: "Rivals of Plain And Peak", codes: vars.Events.PlainAndPeak},
		{name: "Rivals of Old And Rot", codes: vars.Events.OldAndRot},
		{name: "Cleansing of Fountain-Waters", codes: vars.Events.CleansingWaters},
		{name: "Rise of Stygian Wells", codes: vars.Events.RiseWells},
		{name: "Surge of Stygian Wells", codes: vars.Events.SurgeWells},
		{name: "Rush of Fresh Air", codes: vars.Events.RushAir},
		{name: "Surge of Fresh Air", codes: vars.Events.SurgeAir},
		{name: "Revival of a Desecrating Pool", codes: vars.Events.RevivalPool},
		{name: "Woodsy Lifespring", codes: vars.Events.WoodsyLifespring},
		{name: "Briny Lifespring", codes: vars.Events.BrinyLifespring},
		{name: "Sandy Lifespring", codes: vars.Events.SandyLifespring},
		{name: "Frozen Lifespring", codes: vars.Events.FrozenLifespring},
		{name: "Summoning a Colony of Bats", codes: vars.Events.Bats},
		{name: "Gathering of Ancient Bones", codes: vars.Events.GatheringBones},
		{name: "Kindred Keepsakes", codes: vars.Events.KindredKeepsakes},
		{name: "Circles of Protection", codes: vars.Events.CircleProtection},
		{name: "Necromantic Influence", codes: vars.Events.NecromanticInfluence},
		{name: "Exhumed Troves", codes: vars.Events.ExhumedTroves},
		{name: "Arisen Troves", codes: vars.Events.ArisenTroves},
		{name: "Rite of Social Solidarity", codes: vars.Events.SocialSolidarity},
		{name: "Rite of River-Fording", codes: vars.Events.RiverFording},
		{name: "Flourishing Soil", codes: vars.Events.FlourishingSoil},
		{name: "Rich Soil", codes: vars.Events.RichSoil},
		{name: "Verdant Soil", codes: vars.Events.VerdantSoil},
		{name: "Observance of Gaia's Secrets", codes: vars.Events.ObservanceGaia},
		{name: "Summoning of Musical Rhapsody", codes: vars.Events.Rhapsody},
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