import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../astro.d50e5fed.mjs';
import 'html-escaper';
import { $ as $$Header, a as $$Footer, b as $$Layout } from './index.astro.78d70175.mjs';
import 'cookie';
import 'kleur/colors';
import 'path-to-regexp';
import 'mime';
import 'string-width';
/* empty css                           */
const full_1 = "/portfolio-main/_astro/Walkers Ordering system 1.940267ac.jpg";

const full_2 = "/portfolio-main/_astro/Walkers Ordering system 2.d17a4dff.jpg";

const full_3 = "/portfolio-main/_astro/Walkers Ordering system 3.6097a628.jpg";

const $$Astro$1 = createAstro("https://tn7git.github.io");
const $$Walkers$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Walkers$1;
  return renderTemplate`<!-- Think Fencing -->${maybeRenderHead()}<section id="portfolio-1">
  <div>
    <h1>Walkers - Online Ordering System</h1>
    <p>
      The system is intended to facilitate online order submissions for tradies.
      Product updates can be conveniently administered from the backend by the
      administrator. Immediate email notifications will be dispatched to the
      sales team for prompt order processing.
    </p>
    <p class="one-row-flex">
      <span class="stack-span">
        <a href="https://walkers.com.au/online-order/" class="button" target="_blank" style="margin-right: 20px;">LIVE VIEW</a>
      </span>
      <span class="stack-span">
        <a class="stack"> PHP backend</a>
        <a class="stack"> JavaScript</a>
        <a class="stack"> HTML</a>
        <a class="stack"> CSS</a>
      </span>
    </p>
  </div>
  <div>
    <a class="image fit"><img${addAttribute(full_1, "src")} alt="Walkers screenshot"></a>
    <a class="image fit"><img${addAttribute(full_2, "src")} alt="Walkers screenshot"></a>
    <a class="image fit"><img${addAttribute(full_3, "src")} alt="Walkers screenshot"></a>
  </div>
</section>`;
}, "/Users/browninkimac/Desktop/Tim's work/daily work/Tim Testing/React/Astro project/portfolio/portfolio-main/src/components/Walkers.astro", void 0);

const $$Astro = createAstro("https://tn7git.github.io");
const $$Walkers = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Walkers;
  const title = "Hello";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Header", $$Header, {})}

  ${maybeRenderHead()}<div id="main">
    ${renderComponent($$result2, "Walker", $$Walkers$1, {})}
  </div>

  ${renderComponent($$result2, "Footer", $$Footer, {})}
` })}`;
}, "/Users/browninkimac/Desktop/Tim's work/daily work/Tim Testing/React/Astro project/portfolio/portfolio-main/src/pages/walkers.astro", void 0);

const $$file = "/Users/browninkimac/Desktop/Tim's work/daily work/Tim Testing/React/Astro project/portfolio/portfolio-main/src/pages/walkers.astro";
const $$url = "/portfolio-main/walkers";

export { $$Walkers as default, $$file as file, $$url as url };
