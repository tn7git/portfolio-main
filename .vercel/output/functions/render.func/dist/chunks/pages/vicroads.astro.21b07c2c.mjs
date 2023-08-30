import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../astro.d50e5fed.mjs';
import 'html-escaper';
import { $ as $$Header, a as $$Footer, b as $$Layout } from './index.astro.edc641df.mjs';
import 'cookie';
import 'kleur/colors';
import 'path-to-regexp';
import 'mime';
import 'string-width';
/* empty css                           */
const full_1 = "/_astro/Vicroads traffic monitor.e11f6b03.jpg";

const $$Astro$1 = createAstro();
const $$Vicroads$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Vicroads$1;
  return renderTemplate`<!-- Think Fencing -->${maybeRenderHead()}<section id="portfolio-1">
  <div>
    <h1>Vicroads - Melbourne Traffic Volume and Flow visualization</h1>
    <p>
      This is a traffic analysis and visualization tool for VicRoads
      researchers. This tool would help them monitor and analyze changes in
      traffic volume at specific intersections. The provided extensive data from
      VicRoads will be processed and integrated onto the map. This process will
      enable researchers to conveniently assess how traffic flow has evolved
      during specific times of the day. <br>
      I developed this tool during my final year at university, and it has been chosen
      to participate in an exhibition in Melbourne.
    </p>
    <p class="one-row-flex">
      <span class="stack-span">
        <a class="button disable-click" target="_blank" style="margin-right: 20px;">Offline used</a>
      </span>
      <span class="stack-span">
        <a class="stack"> Google Maps API</a>
        <a class="stack"> Jquery</a>
        <a class="stack"> HTML</a>
        <a class="stack"> CSS</a>
      </span>
    </p>
  </div>
  <div>
    <a class="image fit"><img${addAttribute(full_1, "src")} alt="Vicroads screenshot"></a>
  </div>
</section>`;
}, "F:/Learning/Astro/portfolio-main/src/components/Vicroads.astro", void 0);

const $$Astro = createAstro();
const $$Vicroads = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Vicroads;
  const title = "Hello";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Header", $$Header, {})}

  ${maybeRenderHead()}<div id="main">
    ${renderComponent($$result2, "Vicroads1", $$Vicroads$1, {})}
  </div>

  ${renderComponent($$result2, "Footer", $$Footer, {})}
` })}`;
}, "F:/Learning/Astro/portfolio-main/src/pages/vicroads.astro", void 0);

const $$file = "F:/Learning/Astro/portfolio-main/src/pages/vicroads.astro";
const $$url = "/vicroads";

export { $$Vicroads as default, $$file as file, $$url as url };
