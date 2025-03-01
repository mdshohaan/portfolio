import type { Button as ButtonPrimitive } from 'bits-ui';
import { tv, type VariantProps } from 'tailwind-variants';

import Root from './button.svelte';
import ButtonArrow from './button-arrow.svelte';

const buttonVariants = tv({
	base: 'inline-flex items-center justify-center text-sm font-medium whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
	variants: {
		variant: {
			default:
				'bg-background text-foreground border-2 border-primary hover:bg-primary/5 shadow-solid focus-visible:shadow-solid-lg active:bg-primary active:text-primary-foreground active:shadow-none active:translate-x-1 active:translate-y-1',
			destructive:
				'bg-destructive text-destructive-foreground hover:bg-destructive/90',
			outline:
				'border-2 border-input bg-background hover:bg-accent hover:text-accent-foreground',
			secondary:
				'bg-secondary-light text-secondary-foreground hover:bg-secondary/80',
			ghost: 'hover:bg-accent hover:text-accent-foreground',
			link: 'text-primary underline-offset-4 underline hover:text-primary/80',
			complement:
				'border-2 border-primary hover:bg-primary hover:text-primary-foreground'
		},
		size: {
			default: 'h-10 px-4 py-2',
			sm: 'h-9 px-3',
			lg: 'h-11 px-8',
			icon: 'h-10 w-10'
		}
	},
	defaultVariants: {
		variant: 'default',
		size: 'default'
	}
});

type Variant = VariantProps<typeof buttonVariants>['variant'];
type Size = VariantProps<typeof buttonVariants>['size'];

type Props = ButtonPrimitive.Props & {
	variant?: Variant;
	size?: Size;
};

type Events = ButtonPrimitive.Events;

export {
	//
	Root as Button,
	ButtonArrow,
	type Events as ButtonEvents,
	type Props as ButtonProps,
	buttonVariants,
	type Events,
	type Props,
	Root
};
