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
		// incants
		{name: "Disintegration of Monstrosity", codes: vars.Incants.Disintegration},
		{name: "Dissolution of Time", codes: vars.Incants.Dissolution},
		{name: "Unraveling of a Fateful Bond", codes: vars.Incants.Unraveling},
		{name: "Permeation of Witching-Wards", codes: vars.Incants.Permeation},
		{name: "Fated Intervention", codes: vars.Incants.FatedIntervention},
		{name: "Doomed Beckoning", codes: vars.Incants.DoomedBeckoning},
		{name: "End to Deepest Slumber", codes: vars.Incants.DeepSlumber},
		{name: "End to Dearest Slumber", codes: vars.Incants.DearSlumber},
		{name: "Consecration of Ashes", codes: vars.Incants.Consecration},
		{name: "Abyssal Insight", codes: vars.Incants.AbyssalInsight},
		{name: "Faith of Familiar Spirits", codes: vars.Incants.FaithFamiliar},
		{name: "Alteration of Familiar Forms", codes: vars.Incants.AlterationFamiliar},
		{name: "Greater Favor of Gaia", codes: vars.Incants.GreatFavorGaia},
		{name: "Night's Craftwork", codes: vars.Incants.NightsCraftwork},
		{name: "Divination of the Elements", codes: vars.Incants.Divination},
		{name: "Forget-Me-Not", codes: vars.Incants.ForgetMeNot},
		{name: "Spreading of Ashes", codes: vars.Incants.SpreadingAshes},
		{name: "Favored of All Keepsakes", codes: vars.Incants.FavoredKeepsakes},
		{name: "Reagent Sensing", codes: vars.Incants.ReagentSensing},
		{name: "Insight into Offerings", codes: vars.Incants.InsightOffering},
		{name: "Summoning of Mercantile Fortune", codes: vars.Incants.Mercantile},
		{name: "Deathly Fortune", codes: vars.Incants.DeathlyFortune},
		{name: "Earthly Fortune", codes: vars.Incants.EarthlyFortune},
		{name: "Rivals of Depths And Sea", codes: vars.Incants.DepthsAndSea},
		{name: "Rivals of Plain And Peak", codes: vars.Incants.PlainAndPeak},
		{name: "Rivals of Old And Rot", codes: vars.Incants.OldAndRot},
		{name: "Cleansing of Fountain-Waters", codes: vars.Incants.CleansingWaters},
		{name: "Rise of Stygian Wells", codes: vars.Incants.RiseWells},
		{name: "Surge of Stygian Wells", codes: vars.Incants.SurgeWells},
		{name: "Rush of Fresh Air", codes: vars.Incants.RushAir},
		{name: "Surge of Fresh Air", codes: vars.Incants.SurgeAir},
		{name: "Revival of a Desecrating Pool", codes: vars.Incants.RevivalPool},
		{name: "Woodsy Lifespring", codes: vars.Incants.WoodsyLifespring},
		{name: "Briny Lifespring", codes: vars.Incants.BrinyLifespring},
		{name: "Sandy Lifespring", codes: vars.Incants.SandyLifespring},
		{name: "Frozen Lifespring", codes: vars.Incants.FrozenLifespring},
		{name: "Summoning a Colony of Bats", codes: vars.Incants.Bats},
		{name: "Gathering of Ancient Bones", codes: vars.Incants.GatheringBones},
		{name: "Kindred Keepsakes", codes: vars.Incants.KindredKeepsakes},
		{name: "Circles of Protection", codes: vars.Incants.CircleProtection},
		{name: "Necromantic Influence", codes: vars.Incants.NecromanticInfluence},
		{name: "Exhumed Troves", codes: vars.Incants.ExhumedTroves},
		{name: "Arisen Troves", codes: vars.Incants.ArisenTroves},
		{name: "Rite of Social Solidarity", codes: vars.Incants.SocialSolidarity},
		{name: "Rite of River-Fording", codes: vars.Incants.RiverFording},
		{name: "Flourishing Soil", codes: vars.Incants.FlourishingSoil},
		{name: "Rich Soil", codes: vars.Incants.RichSoil},
		{name: "Verdant Soil", codes: vars.Incants.VerdantSoil},
		{name: "Observance of Gaia's Secrets", codes: vars.Incants.ObservanceGaia},
		{name: "Summoning of Musical Rhapsody", codes: vars.Incants.Rhapsody},
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