import { HeroList } from "../components"

export const DcPage = () => {
	return (
		<>
			<h1>DC Heroes &nbsp; <span className="fs-4">{"(A-z)"}</span></h1>
			<hr />

			<HeroList publisher='DC Comics'/>
		</>
	)
}
