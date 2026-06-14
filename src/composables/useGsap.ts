import gsap, {
	Flip,
	ScrollToPlugin,
	ScrollTrigger,
	SplitText,
} from "@/library/gsap";

export default function useGsap() {
	return {
		gsap,
		ScrollTrigger,
		ScrollToPlugin,
		SplitText,
		Flip,
	};
}
