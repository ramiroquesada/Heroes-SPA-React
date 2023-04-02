import { HeroList } from "../components/HeroList"

export const MarvelPage = () => {
	return (
		<>
			<h1>Marvel Heroes</h1>
			<hr />
		
			<HeroList publisher='Marvel Comics'/>
		</>
	)
}
