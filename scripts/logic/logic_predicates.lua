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

function CanSeeScore(score)
	score = tonumber(score) or 1001
	return Has(LocationSystemScore) and score <= Tracker:ProviderCountForCode(ScoreRewardsAmount)
end
function CanReachScore(score)
	score = tonumber(score) or 1001
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
end
