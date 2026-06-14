export const useSize = (size?: string) => {
	switch (size) {
		case "xl":
			return "ui-container-xl";
		case "lg":
			return "ui-container-lg";
		case "md":
			return "ui-container-md";
		case "sm":
			return "ui-container-sm";
		case "xs":
			return "ui-container-xs";
		default:
			return "ui-container-lg";
	}
};
