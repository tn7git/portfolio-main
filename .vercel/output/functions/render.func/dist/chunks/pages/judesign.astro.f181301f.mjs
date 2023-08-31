import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../astro.d50e5fed.mjs';
import 'html-escaper';
import { $ as $$Header, a as $$Footer, b as $$Layout } from './index.astro.78d70175.mjs';
import 'cookie';
import 'kleur/colors';
import 'path-to-regexp';
import 'mime';
import 'string-width';
/* empty css                           */
const full_1 = "/portfolio-main/_astro/JU Design Booking system- ClickUp - 3.ee7efe03.jpg";

const full_2 = "/portfolio-main/_astro/JU Design Booking system- ClickUp.122e5475.jpg";

const full_3 = "/portfolio-main/_astro/JU Design Booking system- ClickUp - 2.b3cba243.jpg";

const $$Astro$1 = createAstro("https://tn7git.github.io");
const $$Judesign$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Judesign$1;
  return renderTemplate`<!-- Think Fencing -->${maybeRenderHead()}<section id="portfolio-1">
  <div>
    <h1>JU Design - Online Booking System</h1>
    <p>
      The system has been developed utilizing the WordPress PHP backend. All
      bookings will be stored within the WordPress SQL server and dynamically
      linked in real-time to the ClickUp API. The primary objective of the
      Booking System is to streamline administrative tasks while concurrently
      preserving the existing workflow.
    </p>
    <p class="one-row-flex">
      <span class="stack-span">
        <a href="#" class="button disable-click" style="margin-right: 20px;">Project under development</a>
      </span>
      <span class="stack-span">
        <a class="stack"> PHP backend</a>
        <a class="stack"> JQuery</a>
        <a class="stack"> HTML</a>
        <a class="stack"> CSS</a>
      </span>
    </p>
  </div>
  <div>
    <a class="image fit"><img${addAttribute(full_1, "src")} alt="Judesign screenshot"></a>
    <a class="image fit"><img${addAttribute(full_2, "src")} alt="Judesign screenshot"></a>
    <a class="image fit"><img${addAttribute(full_3, "src")} alt="Judesign screenshot"></a>
  </div>
</section>`;
}, "/Users/browninkimac/Desktop/Tim's work/daily work/Tim Testing/React/Astro project/portfolio/portfolio-main/src/components/Judesign.astro", void 0);

const $$Astro = createAstro("https://tn7git.github.io");
const $$Judesign = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Judesign;
  const title = "Hello";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Header", $$Header, {})}

  ${maybeRenderHead()}<div id="main">
    ${renderComponent($$result2, "Judesign1", $$Judesign$1, {})}
  </div>

  ${renderComponent($$result2, "Footer", $$Footer, {})}
` })}`;
}, "/Users/browninkimac/Desktop/Tim's work/daily work/Tim Testing/React/Astro project/portfolio/portfolio-main/src/pages/judesign.astro", void 0);

const $$file = "/Users/browninkimac/Desktop/Tim's work/daily work/Tim Testing/React/Astro project/portfolio/portfolio-main/src/pages/judesign.astro";
const $$url = "/portfolio-main/judesign";

export { $$Judesign as default, $$file as file, $$url as url };
