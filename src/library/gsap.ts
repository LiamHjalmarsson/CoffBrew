import gsap from "gsap";

import { Flip } from "gsap/Flip";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, SplitText, Flip);

export default gsap;

export { Flip, ScrollToPlugin, ScrollTrigger, SplitText };
