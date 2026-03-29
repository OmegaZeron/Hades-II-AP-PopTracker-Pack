function HasWeaponForGoal()
	return Tracker:ProviderCountForCode(Weapon) >= Tracker:ProviderCountForCode(WeaponsNeeded)
end

function HasKeepsakesForGoal()
	return Tracker:ProviderCountForCode(Keepsake) >= Tracker:ProviderCountForCode(KeepsakesNeeded)
end

function HasFateForGoal()
	local count = 0
	for _, loc in ipairs(FateLocs) do
		local section = Tracker:FindObjectForCode("@"..loc)
		---@cast section LocationSection
		if (section.AvailableChestCount ~= 1) then
			count = count + 1
		end
	end
	return count >= Tracker:ProviderCountForCode(FatesNeeded)
end

function CanGoal()
	return All(
		HasWeaponForGoal,
		HasKeepsakesForGoal,
		HasFateForGoal
	)
end

function CanSeeScore(score)
	score = tonumber(score)
	if not score then return false end
	return Has(LocationSystemScore) and score <= Tracker:ProviderCountForCode(ScoreRewardsAmount)
end
---@param val string|integer
---@return accessibilityLevel
function CanReachScore(val)
	local score = tonumber(val)
	if not score then return AccessibilityLevel.None end
	-- local maxLocations = Tracker:ProviderCountForCode(ScoreRewardsAmount)
	-- local fractionLocations = math.floor(maxLocations / 8)
	-- local tartarus = maxLocations - 7 * fractionLocations
	-- local asphodel = tartarus + 2 * fractionLocations
	-- local elysium = tartarus + 4 * fractionLocations
	-- local styx = tartarus + 6 * fractionLocations

	-- return Any(
	-- 	CanReach(StyxLate),
	-- 	score <= styx and CanReach(Styx),
	-- 	score <= elysium and CanReach(Elysium),
	-- 	score <= asphodel and CanReach(Asphodel),
	-- 	score <= tartarus,
	-- 	AccessibilityLevel.SequenceBreak
	-- )
	return AccessibilityLevel.None
end

---@param god Hades2Location
---@return Hades2Location
---@return function
function GodKeepsakeRule(god)
	return god, function()
		return Any(
			KeepsakeMap[god.name],
			KeepsakesanityOff,
			AccessibilityLevel.SequenceBreak
		)
	end
end

function HasWeaponsForNightAndDarkness()
	return Tracker:ProviderCountForCode(Weapon) - Tracker:ProviderCountForCode(Xinth) >= 4
end

function TotalFearAmount()
	return Tracker:ProviderCountForCode(FearSetting)
end
function HasFear(amount)
	if not Has(ReverseFear) then
		return true
	end
	local count = 0
	for k, v in pairs(FearMapping) do
		local setting = Tracker:ProviderCountForCode(k)
		if setting > 0 then
			local oath = Tracker:ProviderCountForCode(v)
			if (oath > setting) then
				oath = setting
			end
			count = count + (setting - oath)
		end
	end
	return count >= amount
end

function CanPeace()
	return Any(
		TabletOfPeace,
		All(
			Frinos,
			AccessibilityLevel.SequenceBreak
		)
	)
end
function CanMine()
	return Any(
		CrescentPick,
		All(
			Raki,
			AccessibilityLevel.SequenceBreak
		)
	)
end
function CanDig()
	return Any(
		SilverSpade,
		All(
			Hecuba,
			AccessibilityLevel.SequenceBreak
		)
	)
end
function CanFish()
	return Any(
		RodOfFishing,
		All(
			Toula,
			AccessibilityLevel.SequenceBreak
		)
	)
end