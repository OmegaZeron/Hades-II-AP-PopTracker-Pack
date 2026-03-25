Menu:connect_one_way_entrance(Erebus)
Erebus:connect_one_way_entrance(HecateBoss, function()
	return Any(
		All(
			HasFear(math.min(TotalFearAmount() / 4, 10)),
			Has(Weapon, 2)
		),
		AccessibilityLevel.SequenceBreak
	)
end)
HecateBoss:connect_one_way_entrance(Oceanus)
Oceanus:connect_one_way_entrance(ScyllaBoss, function()
	return Any(
		All(
			HasFear(math.min(TotalFearAmount() / 2, 20)),
			Has(Weapon, 3)
		),
		AccessibilityLevel.SequenceBreak
	)
end)
ScyllaBoss:connect_one_way_entrance(Fields)
Fields:connect_one_way_entrance(CerberusBoss, function()
	return Any(
		All(
			HasFear(math.min(TotalFearAmount() * 3 / 4, 30)),
			Has(Weapon, 5)
		)
	)
end)
CerberusBoss:connect_one_way_entrance(Tartarus)
Tartarus:connect_one_way_entrance(ChronosBoss, function()
	return Any(
		All(
			HasFear(math.min(TotalFearAmount(), 35)),
			Has(Weapon, 6)
		),
		AccessibilityLevel.SequenceBreak
	)
end)
ChronosBoss:connect_one_way_entrance(EitherVictory)

Hecate:connect_one_way_entrance(Ephyra, function() return Has(SurfaceAccess) end)
Ephyra:connect_one_way_entrance(PolyphemusBoss, function()
	return Any(
		All(
			HasFear(math.min(TotalFearAmount() / 4, 10)),
			Has(Weapon, 2)
		),
		AccessibilityLevel.SequenceBreak
	)
end)
PolyphemusBoss:connect_one_way_entrance(Thessaly)
Thessaly:connect_one_way_entrance(ErisBoss, function()
	return Any(
		All(
			HasFear(math.min(TotalFearAmount() / 2, 20)),
			Has(Weapon, 3)
		),
		AccessibilityLevel.SequenceBreak
	)
end)
ErisBoss:connect_one_way_entrance(Olympus)
Olympus:connect_one_way_entrance(PrometheusBoss, function()
	return Any(
		All(
			HasFear(math.min(TotalFearAmount() * 3 / 4, 30)),
			Has(Weapon, 5)
		)
	)
end)
PrometheusBoss:connect_one_way_entrance(Summit)
Summit:connect_one_way_entrance(TyphonBoss, function()
	return Any(
		All(
			HasFear(math.min(TotalFearAmount(), 35)),
			Has(Weapon, 6)
		),
		AccessibilityLevel.SequenceBreak
	)
end)
TyphonBoss:connect_one_way_entrance(EitherVictory)