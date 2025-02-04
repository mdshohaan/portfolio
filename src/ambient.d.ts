// Squelch warnings of image imports from your assets dir
declare module '$lib/assets/*' {
	let meta;
	export default meta;
}

declare module '$routes/(landing)/components/what-works-i-do/banners/*' {
	let meta;
	export default meta;
}

declare module '$routes/(landing)/components/project-showcase/banners/splashr/*' {
	let meta;
	export default meta;
}

declare module '$routes/(landing)/components/project-showcase/banners/report-builder/*' {
	let meta;
	export default meta;
}
