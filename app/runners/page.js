import { CardsList } from "../components/CardsList/CardsList"
import { getNormalizedGamesDataByCategory } from "../api/api-utils"
import { endpoints } from "../api/config"

export default async function New(){
	const runnersGames = await getNormalizedGamesDataByCategory(endpoints.games, "runner");
	return (
		<main className="main-inner">
			<CardsList id='runners' title='Игры-раннеры' data={runnersGames} />
		</main>
	)
}