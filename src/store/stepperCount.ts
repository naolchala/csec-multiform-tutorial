import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface State {
	count: 0;
}
interface Action {
	next: () => void;
	back: () => void;
}

export const useStepper = create(
	immer<State & Action>((set) => {
		return {
			count: 0,
			next: () =>
				set((state) => {
					if (state.count >= 3) return;
					state.count += 1;
				}),
			back: () =>
				set((state) => {
					if (state.count <= 0) return;
					state.count -= 1;
				}),
		};
	})
);
