var sites = [
  ["ThinkCertified", "https://thinkcertified.com/"],
  ["Rodlocker Blog", "https://blog.rodlocker.com/"],
  ["Vative", "https://vative.com.au/"],
  ["Fiddle Contest", "https://www.fiddlecontest.org/"],
  ["My Condolences PH", "https://mycondolences.ph/"],
  ["CVPD", "https://cvpd.com.au/"],
  ["Basileia Discipleship", "https://basileiadiscipleship.com.au/"],
  ["Illawarra Flyers", "https://illawarraflyers.com.au/"],
  ["TechInstalls", "https://techinstalls.io/"],
  ["AF Techs", "https://aftechs.com/"],
  ["Infinite Event Services", "https://infiniteeventservices.com/"],
  ["Kaleafa", "https://kaleafa.com/"],
  ["Story Mag", "https://www.storymag.co/"],
  ["StorePro", "https://storepronew.flywheelsites.com/"],
  ["Pascal Satori", "https://pascalsatori.com/"],
  ["The Little Vineyard", "https://www.thelittlevineyard.com.au/"],
  ["AX Digital", "https://axdigital.com.au/"],
  ["Rye Football Club", "https://ryefootballclub.com.au/"],
  ["Titan Locksmiths", "https://www.titanlocksmiths.com.au/"],
  ["MOR Healthcare", "https://morhealthcare.com.au/"],
  ["Market Street Finance", "https://marketstreetfinance.com.au/"],
  ["Depardo Consulting", "https://www.depardoconsulting.com/"],
  ["Essendon Hockey", "https://essendonhockey.com.au/"],
  ["RS Audits", "https://rsaudits.com.au/"],
  ["Plantation House", "https://plantationhouse.com.au/"],
  ["Oceanside Roofing", "https://oceansideroofing.com.au/"],
  ["Mirrool Counselling Centre", "https://mirroolcounsellingcentre.com.au/"],
  ["Jimmy's", "https://jimmys.org.au/"],
  ["Kithe", "https://kithe.com.au/"],
  ["A Squired Square", "https://asquiredsquare.com.au/"],
  ["Fresh Taste Bakery", "https://freshtastebakery.com/"],
  ["WLI", "https://wli.nyx.temporary.site/website_a94fde03/"],
  ["Red Gem", "https://redgem.com.au/"],
  ["Invsble AI", "https://invsble.ai/"],
];
var figma = [
  [
    "Advanced Field Technicians",
    "EDKeY2KbmJ5yh5TvmQOnpM/Advanced-Field-Technicians",
  ],
  ["Starlink Installation", "3NIsCOFuETjlZYbTn9RYpc/Starlink-Installation"],
  ["Anny Slegten", "BtWjTxmHT7PGjiYMRVoSww/Anny-Slegten"],
  ["Reiki Training", "5g0LUHTzHZlUqV0OquyXZQ/Reiki-Training"],
  ["Hypnosis Edmonton", "zqRDmeLPskMCFKnJZ97bKP/Hypnosis-Edmonton"],
  ["Slegtenian Hypnosis", "flJpBLWX9aUCSQlRbmSr2K/Slegtenian-Hypnosis"],
  [
    "Hypnotism Training Institute of Alberta",
    "w6H8sfoisLJJzmxzLjhXBr/Hypnotism-Training-Institute-of-Alberta",
  ],
  ["New Asahi Subic", "j3GC3cwWKByBqsTAHrbzgr/New-Asahi-Subic---Mockup"],
  [
    "Somerville Primary",
    "SNtf3fDesyDqt40mQSxNtn/240105-Somerville-Primary-Web-Concept",
  ],
  ["Plantation House", "uKdP3xR1bOIih5FdxPRwKs/240228-Plantation-House"],
  ["Boulevard", "0GcbUnaEOMV4kqdbHC7ZXY/Boulevard"],
  ["DevOps Layout", "YFrlHJFEI0GWGkuPN7J1ZG/DevOps-Layout"],
  ["Farewell Funeral", "qXozF38Xh5nAK7hmcXS7tR/Farewell-Funeral"],
  [
    "Torres Strait Kaziw Meta",
    "voTUJRICLO18HkoSC0fKCn/Torres-Strait-Kaziw-Meta",
  ],
  ["Kithe", "yKBLOwGxTpq5jVfyrBF4NW/240215-Kithe"],
  ["Wheelspin", "HHEhk2b6BYti3yNQ1MD17F/Mockup---Wheelspin--2-"],
  [
    "Kingston Grange Bamboo",
    "ZWkJqcAtmmoEKAcomG7wnu/Kingston-Grange-Bamboo--2-",
  ],
  ["Homepage", "2Hz4CGXsYKQ3TharNDoJIW/Homepage"],
];
document.getElementById("n1").textContent = sites.length;
function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
}
function card(t, u, tag, i) {
  var h = (i * 47 + 215) % 360,
    ini = t
      .split(" ")
      .slice(0, 2)
      .map(function (w) {
        return w[0];
      })
      .join("")
      .toUpperCase();
  return (
    '<a class="card" href="' +
    u +
    '" target="_blank" rel="noopener"><div class="th" style="background:linear-gradient(135deg,hsl(' +
    h +
    ",60%,48%),hsl(" +
    ((h + 40) % 360) +
    ',65%,38%))">' +
    ini +
    '</div><div class="bd"><h3>' +
    esc(t) +
    "</h3><p>" +
    esc(
      u
        .replace(/^https?:\/\/(www\.)?/, "")
        .split("?")[0]
        .replace(/\/$/, ""),
    ).slice(0, 60) +
    '</p><span class="tag">' +
    tag +
    "</span></div></a>"
  );
}
document.getElementById("sites").innerHTML = sites
  .map(function (s, i) {
    return card(s[0], s[1], "Website", i);
  })
  .join("");
document.getElementById("figma").innerHTML = figma
  .map(function (s, i) {
    return card(
      s[0],
      "https://www.figma.com/design/" + s[1],
      "Figma design",
      i + 5,
    );
  })
  .join("");

/* Scroll-to-top button (self-contained: injects its own CSS + button) */
(function () {
  var css =
    ".to-top{position:fixed;right:20px;bottom:calc(20px + env(safe-area-inset-bottom,0px));width:46px;height:46px;border-radius:50%;border:1px solid var(--bd,#e3e1db);background:var(--tx,#17181c);color:var(--bg,#f7f6f3);cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0;box-shadow:0 4px 14px rgba(0,0,0,.2);opacity:0;visibility:hidden;transform:translateY(10px);transition:opacity .25s,transform .25s,visibility .25s;z-index:50}" +
    ".to-top.show{opacity:1;visibility:visible;transform:none}" +
    ".to-top:hover{transform:translateY(-3px)}" +
    ".to-top:focus-visible{outline:2px solid var(--ac,#3b5bdb);outline-offset:3px}" +
    ".to-top svg{width:20px;height:20px}";
  var style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  var btn = document.createElement("button");
  btn.className = "to-top";
  btn.type = "button";
  btn.setAttribute("aria-label", "Scroll to top");
  btn.innerHTML =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
  document.body.appendChild(btn);

  function toggle() {
    btn.classList.toggle("show", window.pageYOffset > 400);
  }
  window.addEventListener("scroll", toggle, { passive: true });
  toggle();

  btn.addEventListener("click", function () {
    var reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  });
})();