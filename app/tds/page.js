import { CardsList } from "../components/CardsList/CardsList"
import { getNormalizedGamesDataByCategory } from "../api/api-utils"
import { endpoints } from "../api/config"

export default async function New(){
	const tdsGames = await getNormalizedGamesDataByCategory(endpoints.games, "TDS");
	return (
		<main className="main-inner">
			<CardsList id='TDS' title='TDS Игры' data={tdsGames} />
		</main>
	)
}