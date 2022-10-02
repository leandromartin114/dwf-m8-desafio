import { atom, useRecoilValue, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";

//persist in localStorage
const { persistAtom } = recoilPersist({
	key: "local_data",
	storage: sessionStorage,
});

//atoms
const emailState = atom({
	key: "email",
	default: "",
	effects_UNSTABLE: [persistAtom],
});
const tokenState = atom({
	key: "token",
	default: "",
	effects_UNSTABLE: [persistAtom],
});
const userState = atom({
	key: "user",
	default: { email: "", fullName: "", password: "" },
	effects_UNSTABLE: [persistAtom],
});
const petState = atom({
	key: "pet",
	default: { name: "", description: "", location: "", imgURL: "" },
	effects_UNSTABLE: [persistAtom],
});
const petInfoState = atom({
	key: "petInfo",
	default: { name: "", id: 0, email: "" },
	effects_UNSTABLE: [persistAtom],
});
const coordsState = atom({
	key: "coords",
	default: { lng: 0, lat: 0 },
	effects_UNSTABLE: [persistAtom],
});

//my hooks
export function useEmailState(): [
	string,
	React.Dispatch<React.SetStateAction<string>>
] {
	const [email, setEmail] = useRecoilState(emailState);
	return [email, setEmail];
}
export function useEmailValue(): string {
	const email = useRecoilValue(emailState);
	return email;
}
export function useTokenState(): [
	string,
	React.Dispatch<React.SetStateAction<string>>
] {
	const [token, setToken] = useRecoilState(tokenState);
	return [token, setToken];
}
export function useTokenValeu(): string {
	const token = useRecoilValue(tokenState);
	return token;
}
export function useUserState(): [
	any,
	React.Dispatch<React.SetStateAction<any>>
] {
	const [user, setUser] = useRecoilState(userState);
	return [user, setUser];
}
export function usePetState(): [
	any,
	React.Dispatch<React.SetStateAction<any>>
] {
	const [pet, setPet] = useRecoilState(petState);
	return [pet, setPet];
}
export function usePetInfoState(): [
	any,
	React.Dispatch<React.SetStateAction<any>>
] {
	const [petInfo, setPetInfo] = useRecoilState(petInfoState);
	return [petInfo, setPetInfo];
}
export function useCoordsState(): [
	any,
	React.Dispatch<React.SetStateAction<any>>
] {
	const [coords, setCoords] = useRecoilState(coordsState);
	return [coords, setCoords];
}
