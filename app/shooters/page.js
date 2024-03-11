import { CardsList } from "../components/CardsList/CardsList"
import { getNormalizedGamesDataByCategory } from "../api/api-utils"
import { endpoints } from "../api/config"

export default async function New(){
	const shootersGames = await getNormalizedGamesDataByCategory(endpoints.games, "shooter");
	return (
		<main className="main-inner">
			<CardsList id='shooters' title='Шутеры' data={shootersGames} />
		</main>
	)
}