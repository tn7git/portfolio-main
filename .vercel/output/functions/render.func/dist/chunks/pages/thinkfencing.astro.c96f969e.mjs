import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../astro.d50e5fed.mjs';
import 'html-escaper';
import { $ as $$Header, a as $$Footer, b as $$Layout } from './index.astro.edc641df.mjs';
import 'cookie';
import 'kleur/colors';
import 'path-to-regexp';
import 'mime';
import 'string-width';
/* empty css                           */
const full_1 = "/_astro/thinkfencing.c95a8906.jpg";

const full_2 = "/_astro/Think Fencing PDF1.954fdb88.jpg";

const full_3 = "/_astro/Think Fencing PDF2.84884a27.jpg";

const full_4 = "/_astro/Think fencing backend.2a3818cc.jpg";

const $$Astro$1 = createAstro();
const $$ThinkFencing = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ThinkFencing;
  return renderTemplate`<!-- Think Fencing -->${maybeRenderHead()}<section id="portfolio-1">
  <div>
    <h1>Think Fencing - Online Fast Quote</h1>
    <p>
      This system is designed for the purpose of reducing the need for manual
      labor. Users can visually browse fence styles and receive quotes in just
      seconds. There is no need for a sales representative, as quotes will be
      automatically calculated from input data using a Google Sheets database
      formula.
    </p>
    <p class="one-row-flex">
      <span class="stack-span">
        <a href="https://thinkfencing.com.au/online-quote/" class="button" target="_blank" style="margin-right: 20px;">LIVE VIEW</a>
      </span>
      <span class="stack-span">
        <a class="stack"> Google Apps Script</a>
        <a class="stack"> JavaScript</a>
        <a class="stack"> HTML</a>
        <a class="stack"> CSS</a>
      </span>
    </p>
  </div>
  <div>
    <a class="image fit"><img${addAttribute(full_1, "src")} alt="Think Fencing screenshot"></a>
    <a class="image fit"><img${addAttribute(full_2, "src")} alt="Think Fencing screenshot"></a>
    <a class="image fit"><img${addAttribute(full_3, "src")} alt="Think Fencing screenshot"></a>
    <a class="image fit"><img${addAttribute(full_4, "src")} alt="Think Fencing screenshot"></a>
  </div>
</section>`;
}, "F:/Learning/Astro/portfolio-main/src/components/ThinkFencing.astro", void 0);

const $$Astro = createAstro();
const $$Thinkfencing = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Thinkfencing;
  const title = "Hello";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Header", $$Header, {})}

  ${maybeRenderHead()}<div id="main">
    ${renderComponent($$result2, "ThinkFencing", $$ThinkFencing, {})}
  </div>

  ${renderComponent($$result2, "Footer", $$Footer, {})}
` })}`;
}, "F:/Learning/Astro/portfolio-main/src/pages/thinkfencing.astro", void 0);

const $$file = "F:/Learning/Astro/portfolio-main/src/pages/thinkfencing.astro";
const $$url = "/thinkfencing";

export { $$Thinkfencing as default, $$file as file, $$url as url };
