import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, e as renderHead, f as renderSlot } from '../astro.d50e5fed.mjs';
import 'html-escaper';
/* empty css                           */
var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$6 = createAstro("https://tn7git.github.io");
const $$Featured = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Featured;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<!-- One -->", `<section id="one">
  <header class="major">
    <h2 class="disable-click">Bio</h2>
  </header>
  <p class="disable-click">
    Tim is a passionate
    <span class="waviy">
      <span style="--i:1">C</span>
      <span style="--i:2">o</span>
      <span style="--i:3">d</span>
      <span style="--i:4">e</span>
      <span style="--i:5">r</span>
    </span>
    , and he loves using his skills to turn ideas into real, useful things that make
    technology more user-friendly and enjoyable for everyone. <br>Tim
    graduated from the Swinburne University of Technology in Melbourne. He now
    lives in Geelong with his wife and has recently become a father for the
    first time. <i class="fas fa-baby-carriage fa-flip-horizontal" style="color: #46555f;"></i>
  </p>
  <span class="more-bio disable-click" style="display:none;">
    <p>
      Tim is always eager to learn and hardly ever says no to a project. His
      curiosity drives him to acquire new skills, which is great for his work.
      Besides being skilled in tech, he's also a great tradie <i class="fas fa-hammer" style="color: #46555f;"></i>. He's even renovating his house<i class="fas fa-home" style="color: #46555f;"></i>all by himself, a project that will keep him
      busy for a long time.
    </p>
    <p>
      Originally from Vietnam and now an Australian citizen. He dreams of one
      day travelling the world <i class="fas fa-plane-departure" style="color: #46555f;"></i> putting his curious mind to work discovering
      new things around every corner.
    </p>
  </span>
  <ul class="actions">
    <li>
      <a id="more-bio-btn" class="button" onclick="
        $('.more-bio').toggle('slow');

        $('.fa-chevron-down').toggleClass('fa-chevron-up');
        "><i class="fas fa-chevron-down fa-lg" style="color: #46555f;"></i>
      </a>
    </li>
  </ul>
</section>
<!-- <script>
  $("#more-bio-btn").toggleText("before", "after");
  $('#more-bio-btn').html($(this).html() == 'after' ? 'before' : 'after');
<\/script> -->`])), maybeRenderHead());
}, "F:/Learning/Astro/portfolio-main/src/components/Featured.astro", void 0);

const $$Astro$5 = createAstro("https://tn7git.github.io");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`<!-- Footer -->${maybeRenderHead()}<footer id="footer">
  <div class="inner">
    <ul class="icons">
      <li>
        <a href="https://github.com/tn7git" class="icon brands fa-github"><span class="label">Github</span></a>
      </li>
      <li>
        <a href="mailto:tn.melb@gmail.com" class="icon solid fa-envelope"><span class="label">Email</span></a>
      </li>
    </ul>
    <ul class="copyright">
      <li>&copy; Tim Nguyen</li>
      <li>Powered by <a href="https://astro.build">Astro</a></li>
    </ul>
  </div>
</footer>`;
}, "F:/Learning/Astro/portfolio-main/src/components/Footer.astro", void 0);

const avatar = "/portfolio-main/_astro/avatar.b88ad7f2.jpg";

const $$Astro$4 = createAstro("https://tn7git.github.io");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`<!-- Header -->${maybeRenderHead()}<header id="header">
  <div class="inner">
    <a href="." class="image avatar"><img${addAttribute(avatar, "src")} alt="Avatar Picture"></a>
    <h1 class="disable-click">
      <strong>Hello,</strong> my name is Tim <br>
      <p>I'm a web developer</p>
      <span>I love creating beautiful user experiences.</span>
    </h1>
  </div>
</header>`;
}, "F:/Learning/Astro/portfolio-main/src/components/Header.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$3 = createAstro("https://tn7git.github.io");
const $$VendorScripts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$VendorScripts;
  return renderTemplate(_a || (_a = __template(['<script async src="/js/jquery.min.js"><\/script>\n<script defer src="/js/jquery.poptrox.min.js"><\/script>\n<script async src="/js//browser.min.js"><\/script>\n<script async src="/js//breakpoints.min.js"><\/script>\n<script defer src="/js//util.js"><\/script>\n<script defer src="/js//main.js"><\/script>'])));
}, "F:/Learning/Astro/portfolio-main/src/components/VendorScripts.astro", void 0);

const $$Astro$2 = createAstro("https://tn7git.github.io");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">
  <head>
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <meta charset="UTF-8">
    <meta name="description" content="Astro description">
    <meta name="generator"${addAttribute(Astro2.generator, "content")}>
    <meta name="viewport" content="width=device-width">
    <!-- 3rd-party scripts -->
    <!-- <ViewTransitions /> -->
    ${renderComponent($$result, "VendorScripts", $$VendorScripts, {})}

    <title>${title}</title>
  ${renderHead()}</head>
  <body class="is-preload">
    ${renderSlot($$result, $$slots["default"])}
  </body></html>`;
}, "F:/Learning/Astro/portfolio-main/src/layouts/Layout.astro", void 0);

const th_1 = "/portfolio-main/_astro/thinkfencing.c95a8906.jpg";

const th_2 = "/portfolio-main/_astro/Walkers Ordering system 1.21391123.jpg";

const th_3 = "/portfolio-main/_astro/JU Design Booking system- ClickUp - 3.ee7efe03.jpg";

const th_4 = "/portfolio-main/_astro/Kinder garten TT 1.549fda40.jpg";

const th_6 = "/portfolio-main/_astro/Vicroads traffic monitor.e11f6b03.jpg";

const $$Astro$1 = createAstro("https://tn7git.github.io");
const $$RecentWork = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$RecentWork;
  return renderTemplate`<!-- Two -->${maybeRenderHead()}<section id="two">
  <h2 class="disable-click">Recent Works</h2>
  <div class="row">
    <article class="col-6 col-12-xsmall work-item">
      <a href="thinkfencing" class="image fit thumb"><img${addAttribute(th_1, "src")} alt=""></a>
      <h3>Think Fencing</h3>
      <p>Online Ordering System linked to Google database</p>
    </article>
    <article class="col-6 col-12-xsmall work-item">
      <a href="walkers" class="image fit thumb"><img${addAttribute(th_2, "src")} alt=""></a>
      <h3>Walkers</h3>
      <p>Online Ordering System</p>
    </article>
    <article class="col-6 col-12-xsmall work-item">
      <a href="judesign" class="image fit thumb"><img${addAttribute(th_3, "src")} alt=""></a>
      <h3>JU Design</h3>
      <p>Online Booking System linked to ClickUp</p>
    </article>
    <article class="col-6 col-12-xsmall work-item">
      <a href="https://ballaratosm.com.au/" target="_blank" class="image fit thumb2 white-bg">Ballarat OSM</a>
      <a href="https://thinkfencing.com.au/" target="_blank" class="image fit thumb2 white-bg">Think Fencing</a>
      <a href="https://mortonco.com.au/" target="_blank" class="image fit thumb2 white-bg">Morton+Co Architects</a>
      <a href="https://acssport.org.au/" target="_blank" class="image fit thumb2 white-bg">ACS Sport</a>
      <a href="https://cocoonatelier.com.au/" target="_blank" class="image fit thumb2 white-bg">Cocoon Atelier</a>
      <h3>Wordpress projects</h3>
      <p>A few projects that I worked on alongside UX designers</p>
    </article>
  </div>
  <h2>Old Works</h2>
  <div class="row">
    <article class="col-6 col-12-xsmall work-item">
      <a href="kinder" class="image fit thumb"><img${addAttribute(th_4, "src")} alt=""></a>
      <h3>Thanh Tam Kindergarten</h3>
      <p>Student management system</p>
    </article>
    <article class="col-6 col-12-xsmall work-item">
      <a href="vicroads" class="image fit thumb"><img${addAttribute(th_6, "src")} alt=""></a>
      <h3>Melbourne Traffic Volume and Flow visualization</h3>
      <p>A traffic analysis and visualization tool for VicRoads researchers</p>
    </article>
  </div>
</section>`;
}, "F:/Learning/Astro/portfolio-main/src/components/RecentWork.astro", void 0);

const $$Astro = createAstro("https://tn7git.github.io");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const title = "Tim Nguyen";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Header", $$Header, {})}

  ${maybeRenderHead()}<div id="main">
    ${renderComponent($$result2, "Featured", $$Featured, {})}
    ${renderComponent($$result2, "RecentWork", $$RecentWork, {})}
    <!-- <GetInTouch /> -->
  </div>

  ${renderComponent($$result2, "Footer", $$Footer, {})}
` })}`;
}, "F:/Learning/Astro/portfolio-main/src/pages/index.astro", void 0);

const $$file = "F:/Learning/Astro/portfolio-main/src/pages/index.astro";
const $$url = "/portfolio-main";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Header as $, $$Footer as a, $$Layout as b, index as i };
