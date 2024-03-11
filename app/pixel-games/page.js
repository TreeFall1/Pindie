import { CardsList } from "../components/CardsList/CardsList"
import { getNormalizedGamesDataByCategory } from "../api/api-utils"
import { endpoints } from "../api/config"

export default async function New(){
	const pixelGames = await getNormalizedGamesDataByCategory(endpoints.games, "pixel");
	return (
		<main className="main-inner">
			<CardsList id='pixel' title='Пиксельны игры' data={pixelGames} />
		</main>
	)
}