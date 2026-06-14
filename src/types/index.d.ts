import { Position } from "@vueuse/core";
import {
	BackgroundColors,
	ButtonColors,
	ButtonType,
	Colors,
	InputType,
	LinkType,
	MediaType,
	Shape,
	Size,
	ToastType,
	Variant,
} from "./global";

export interface Toast {
	id: number;
	type: ToastType;
	title?: string;
	message?: string;
	duration?: number;
}

export interface ImageProps {
	src: string;
	alt: string;
	width: number;
	height: number;
	path?: string;
	url?: string;
	srcset?: string;
	caption?: string;
	title?: string;
	loading: "eager" | "lazy";
}

export interface VideoProps {
	poster_src: string;
	src: string;
	height: number;
	width: number;
}

export interface MediaProps {
	image?: ImageProps;
	video?: VideoProps;
	type: MediaType;
	placment?: Position;
}

export interface NavItemProps {
	url: string;
	type?: LinkType;
	size?: Size;
	label: string;
}

export interface SocialLinkProps {
	label: string;
	url: string;
	icon: string;
}

export interface ButtonProps {
	type?: ButtonType;
	label?: string;
	size?: Size;
	color?: ButtonColors;
	loading?: boolean;
	disabled?: boolean;
	icon?: string;
	iconPosition?: "left" | "right";
}

export interface BadgeProps {
	variant?: Variant;
	color?: Colors;
	size?: Size;
	shape?: Shape;
	label: string;
}

export interface CardProps {
	as?: string;
	variant?: Variant;
	size?: Size;
	backgroundColor?: BackgroundColors;
}

export interface InputProps {
	id: string;
	label: string;
	type?: InputType;
	hint?: string;
	size?: Size;
	error?: string;
	placeholder?: string;
	modelValue?: string;
	disabled?: boolean;
}

export interface SelectOption {
	label: string;
	value: string;
	disabled?: boolean;
}

export interface SelectProps {
	id?: string;
	label?: string;
	hint?: string;
	error?: string;
	placeholder?: string;
	modelValue?: string;
	options: SelectOption[];
	disabled?: boolean;
}

export interface TextareaProps {
	id?: string;
	label?: string;
	hint?: string;
	error?: string;
	placeholder?: string;
	modelValue?: string;
	rows?: number;
	resize?: boolean;
	disabled?: boolean;
}

export interface SwitchProps {
	id?: string;
	label?: string;
	hint?: string;
	modelValue?: boolean;
	disabled?: boolean;
}

export interface CheckboxProps {
	id?: string;
	label?: string;
	hint?: string;
	error?: string;
	modelValue?: boolean;
	disabled?: boolean;
}

export interface RadioProps {
	id?: string;
	label?: string;
	hint?: string;
	error?: string;
	value: string;
	modelValue?: string;
	disabled?: boolean;
}

export interface DropdownItemProps {
	disabled?: boolean;
	active?: boolean;
	as?: string;
}
