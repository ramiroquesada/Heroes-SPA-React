import { HeroList } from "../components/HeroList"

export const MarvelPage = () => {
	return (
		<>
			<h1 >Marvel Heroes &nbsp; <span className="fs-4">{"(A-z)"}</span></h1>
			<hr />
		
			<HeroList publisher='Marvel Comics'/>
		</>
	)
}
