import { atom, useRecoilValue, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";

//persist in localStorage
const { persistAtom } = recoilPersist({
	key: "local_data",
	storage: localStorage,
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
	default: {},
	effects_UNSTABLE: [persistAtom],
});
const petState = atom({
	key: "pet",
	default: {},
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
	{},
	React.Dispatch<React.SetStateAction<string>>
] {
	const [user, setUser] = useRecoilState(userState);
	return [user, setUser];
}
export function usePetState(): [
	{},
	React.Dispatch<React.SetStateAction<string>>
] {
	const [pet, setPet] = useRecoilState(petState);
	return [pet, setPet];
}
