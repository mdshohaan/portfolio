import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

import { i18n, urlRewrite } from '$lib/middlewares';

export const handle = sequence(urlRewrite, i18n) satisfies Handle;
