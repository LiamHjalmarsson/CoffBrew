import type { BackgroundColors, ColorType } from "@/types/global";

const colorClasses = {
	none: "",
	primary: "bg-background-primary text-white",
	secondary: "bg-background-secondary",
	tertiary: "bg-background-tertiary",
	black: "bg-black text-white",
	white: "bg-white text-black",
};

export const useColor = (
	color: BackgroundColors,
	type: ColorType = "background",
) => {
	switch (type) {
		case "background":
			return colorClasses[color];
		default:
			return;
	}
};
