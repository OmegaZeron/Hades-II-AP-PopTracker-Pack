local baseID <const> = 1
local maxRoomID <const> = baseID + 2500 -- TODO change this when apworld figures out max room
local keepsakeIDs <const> = maxRoomID
local weaponIDs <const> = keepsakeIDs + 33
local toolIDs <const> = weaponIDs + 33
local prophesyIDs <const> = toolIDs + 4

LOCATION_MAPPING = {
	-- areas

	-- keepsakes
	[keepsakeIDs + 1] = {"@Keepsakes/Hecate/"},
	[keepsakeIDs + 2] = {"@Keepsakes/Odysseus/"},
	[keepsakeIDs + 3] = {"@Keepsakes/Schelemeus/"},
	[keepsakeIDs + 4] = {"@Keepsakes/Dora/"},
	[keepsakeIDs + 5] = {"@Keepsakes/Nemesis/"},
	[keepsakeIDs + 6] = {"@Keepsakes/Moros/"},
	[keepsakeIDs + 7] = {"@Keepsakes/Eris/"},
	[keepsakeIDs + 8] = {"@Keepsakes/Charon/"},
	[keepsakeIDs + 9] = {"@Keepsakes/Hermes/"},
	[keepsakeIDs + 10] = {"@Keepsakes/Artemis/"},
	[keepsakeIDs + 11] = {"@Keepsakes/Selene/"},
	[keepsakeIDs + 12] = {"@Keepsakes/Zeus/"},
	[keepsakeIDs + 13] = {"@Keepsakes/Hera/"},
	[keepsakeIDs + 14] = {"@Keepsakes/Poseidon/"},
	[keepsakeIDs + 15] = {"@Keepsakes/Demeter/"},
	[keepsakeIDs + 16] = {"@Keepsakes/Apollo/"},
	[keepsakeIDs + 17] = {"@Keepsakes/Aphrodite/"},
	[keepsakeIDs + 18] = {"@Keepsakes/Hephaestus/"},
	[keepsakeIDs + 19] = {"@Keepsakes/Hestia/"},
	[keepsakeIDs + 20] = {"@Keepsakes/Ares/"},
	[keepsakeIDs + 21] = {"@Keepsakes/Athena/"},
	[keepsakeIDs + 22] = {"@Keepsakes/Dionysis/"},
	[keepsakeIDs + 23] = {"@Keepsakes/Arachne/"},
	[keepsakeIDs + 24] = {"@Keepsakes/Narcissus/"},
	[keepsakeIDs + 25] = {"@Keepsakes/Echo/"},
	[keepsakeIDs + 26] = {"@Keepsakes/Heracles/"},
	[keepsakeIDs + 27] = {"@Keepsakes/Medea/"},
	[keepsakeIDs + 28] = {"@Keepsakes/Circe/"},
	[keepsakeIDs + 29] = {"@Keepsakes/Icarus/"},
	[keepsakeIDs + 30] = {"@Keepsakes/Hades and Persephone/"},
	[keepsakeIDs + 31] = {"@Keepsakes/Zagreus/"},
	[keepsakeIDs + 32] = {"@Keepsakes/Chronos/"},
	[keepsakeIDs + 33] = {"@Keepsakes/Chaos/"},
	-- weapons
	[weaponIDs + 1] = {"@Nocturnal Arms/Descura/Witch's Staff"},
	[weaponIDs + 2] = {"@Nocturnal Arms/Lim and Oros/Sister Blades"},
	[weaponIDs + 3] = {"@Nocturnal Arms/Ygnium/Umbral Flames"},
	[weaponIDs + 4] = {"@Nocturnal Arms/Zorephet/Moonstone Axe"},
	[weaponIDs + 5] = {"@Nocturnal Arms/Revall/Argent Skull"},
	[weaponIDs + 6] = {"@Nocturnal Arms/Xinth/Black Coat"},
	-- tools
	[toolIDs + 1] = {"@Tools/Crescent Pick/"},
	[toolIDs + 2] = {"@Tools/Silver Spade/"},
	[toolIDs + 3] = {"@Tools/Tablet of Peace/"},
	[toolIDs + 4] = {"@Tools/Rod of Fishing/"},
	-- fated list
	[prophesyIDs + 1] = {"@Fated List/Witch of the Crossroads/"},
}