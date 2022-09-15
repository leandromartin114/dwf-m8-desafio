import { atom, useRecoilValue, selector, useSetRecoilState } from "recoil";

const userState = atom({
	key: "user",
	default: {},
});

const resultsState = selector({
	key: "searchResults",
	get: async ({ get }) => {
		const valorDeQuery = get(userState);
		if (valorDeQuery) {
			const res = await fetch(
				"https://api.mercadolibre.com/sites/MLA/search?q=" + valorDeQuery
			);
			const data = await res.json();
			return data.results;
		} else {
			return [];
		}
	},
});

// mi custom hook
export function useSearchResults() {
	//1-miro el valor de params (url)

	//2-escucho cambios en la query de params con useEffect y lo uso para setear nuevo valor del atom queryState
	const setRecoilQuery = useSetRecoilState(userState);
	// useEffect(() => {
	// 	console.log("el router me dice que query cambió");
	// 	setRecoilQuery(query);
	// }, [query]);

	//3-finalmente me engancho a los cambios de resultState y retorno su resultado
	const results = useRecoilValue(resultsState);
	return results;
}
