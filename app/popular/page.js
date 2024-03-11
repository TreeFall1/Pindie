"use client";
import { useEffect } from "react";
import { authorize, getNormalizedGamesDataByCategory } from "../api/api-utils"
import { endpoints } from "../api/config"
import { CardsList } from "../components/CardsList/CardsList"
import { getGamesByCategory } from "../data/data-utils";

export default async function New(){

	const popularGames = await getNormalizedGamesDataByCategory(endpoints.games, "popular");
	return (
		<main className="main-inner">
			<CardsList id='popular' title='Популярое' data={popularGames} />
		</main>
	)
}