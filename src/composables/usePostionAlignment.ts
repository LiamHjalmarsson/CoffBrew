import type { Position } from "@/types/global";

export const usePositionAlignment = (alignment: Position) => {
	switch (alignment) {
		case "top":
			return "items-start justify-start text-left";

		case "bottom":
			return "items-end justify-end text-left";

		case "left":
			return "items-start justify-center text-left";

		case "right":
			return "items-end justify-center text-right";

		case "center":
			return "items-center justify-center text-center";

		default:
			return "items-center justify-center text-center";
	}
};
