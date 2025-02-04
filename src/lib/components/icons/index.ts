import type { Icon as LucideIcon } from 'lucide-svelte';
import {
	ArrowRight,
	Check,
	ChevronsUpDown,
	Loader2,
	X as Close
} from 'lucide-svelte';

import Facebook from './facebook.svelte';
import Github from './github.svelte';
import Google from './google.svelte';
import Linkedin from './linkedin.svelte';
import X from './x.svelte';

export type Icon = LucideIcon;

export const Icons = {
	spinner: Loader2,
	google: Google,
	close: Close,
	select: ChevronsUpDown,
	arrowRight: ArrowRight,
	x: X,
	github: Github,
	linkedin: Linkedin,
	facebook: Facebook,
	check: Check
};

export type IconType = any;
