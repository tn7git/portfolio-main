export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';
import './astro.d50e5fed.mjs';
import 'html-escaper';
import 'cookie';
import 'kleur/colors';
import 'path-to-regexp';
import 'mime';
import 'string-width';

const page = () => import('./pages/index.astro.78d70175.mjs').then(n => n.i);

export { page };
