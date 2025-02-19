import {
	ICredentialsInformation,
	IHandleInformation,
	IPersonalInformation,
} from "@/components/signup/signup.validation";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface State {
	personalInformation: IPersonalInformation;
	handleInformation: IHandleInformation;
	credentials: ICredentialsInformation;
}

interface Action {
	setPersonalInformation: (info: IPersonalInformation) => void;
	setHandleInformation: (info: IHandleInformation) => void;
	setCredentialsInformation: (info: ICredentialsInformation) => void;
}

export const useSignupInfo = create(
	immer<State & Action>((set) => ({
		credentials: {
			username: "",
			password: "",
			confirmPassword: "",
		},
		handleInformation: {
			leetcode: "",
			codeforces: "",
			github: "",
		},
		personalInformation: {
			firstName: "",
			lastName: "",
			email: "",
			phoneNumber: "",
		},
		setPersonalInformation: (info: IPersonalInformation) =>
			set((state) => {
				state.personalInformation = info;
			}),
		setHandleInformation: (info: IHandleInformation) =>
			set((state) => {
				state.handleInformation = info;
			}),
		setCredentialsInformation: (info: ICredentialsInformation) =>
			set((state) => {
				state.credentials = info;
			}),
	}))
);
