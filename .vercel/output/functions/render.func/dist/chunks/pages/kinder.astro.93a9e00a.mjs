import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../astro.d50e5fed.mjs';
import 'html-escaper';
import { $ as $$Header, a as $$Footer, b as $$Layout } from './index.astro.78d70175.mjs';
import 'cookie';
import 'kleur/colors';
import 'path-to-regexp';
import 'mime';
import 'string-width';
/* empty css                           */
const full_1 = "/portfolio-main/_astro/Kinder garten TT 1.549fda40.jpg";

const full_2 = "/portfolio-main/_astro/Kinder garten TT 2.6c5619bb.jpg";

const $$Astro$1 = createAstro("https://tn7git.github.io");
const $$Kinder$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Kinder$1;
  return renderTemplate`<!-- Think Fencing -->${maybeRenderHead()}<section id="portfolio-1">
  <div>
    <h1>Thanh Tam Kindergarten - Student Management System</h1>
    <p>
      System designed to efficiently manage a large number of students at a
      school. It includes features such as recording student details, class
      association, invoice generation, and absence records. This system is
      aiming to streamline administrative processes and enhance overall
      management.
    </p>
    <p class="one-row-flex">
      <span class="stack-span">
        <a class="button disable-click" style="margin-right: 20px;">Offline used - Vietnamese language</a>
      </span>
      <span class="stack-span">
        <a class="stack"> Visual Basic</a>
        <a class="stack"> MS Access</a>
      </span>
    </p>
  </div>
  <div>
    <a class="image fit"><img${addAttribute(full_1, "src")} alt="Walkers screenshot"></a>
    <a class="image fit"><img${addAttribute(full_2, "src")} alt="Walkers screenshot"></a>
  </div>
</section>`;
}, "/Users/browninkimac/Desktop/Tim's work/daily work/Tim Testing/React/Astro project/portfolio/portfolio-main/src/components/Kinder.astro", void 0);

const $$Astro = createAstro("https://tn7git.github.io");
const $$Kinder = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Kinder;
  const title = "Hello";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Header", $$Header, {})}

  ${maybeRenderHead()}<div id="main">
    ${renderComponent($$result2, "Kindergarten", $$Kinder$1, {})}
  </div>

  ${renderComponent($$result2, "Footer", $$Footer, {})}
` })}`;
}, "/Users/browninkimac/Desktop/Tim's work/daily work/Tim Testing/React/Astro project/portfolio/portfolio-main/src/pages/kinder.astro", void 0);

const $$file = "/Users/browninkimac/Desktop/Tim's work/daily work/Tim Testing/React/Astro project/portfolio/portfolio-main/src/pages/kinder.astro";
const $$url = "/portfolio-main/kinder";

export { $$Kinder as default, $$file as file, $$url as url };
