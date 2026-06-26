# Handoff: HK Editing — Single-Page Marketing Website

## Overview
A single-page marketing website for **HK Editing**, a small independent book-editing business run by one editor ("Hannah K."). The page introduces the editor, presents three editorial services, builds trust through testimonials, and converts visitors via a contact form. Tone is warm, literary, and personal — a skilled individual who loves books, never a corporate agency.

## About the Design Files
The file in this bundle (`HK Editing.dc.html`) is a **design reference created in HTML** — a working prototype showing the intended look, copy, and behavior. It is **not production code to copy directly**. It uses a small in-house templating runtime (`*.dc.html`), so do not lift its markup verbatim.

Your task is to **recreate this design in the target codebase's environment** (React, Vue, Astro, plain HTML/CSS, etc.) using that project's established patterns, component conventions, and libraries. If no codebase exists yet, this is a brochure site with no backend logic — a static-site framework (Astro, Eleventy, Next static export) or even hand-authored HTML/CSS is a perfectly good choice. The contact form needs a real submission target (see Interactions).

## Fidelity
**High-fidelity (hifi).** Final colors, typography, spacing, copy, and interactions are all specified below and should be reproduced faithfully. Recreate the UI pixel-accurately using the codebase's libraries/patterns.

---

## Design Tokens

### Colors
- `--bg` warm off-white background: **#F7F3EE**
- Card / band alt background (testimonials, headshot fill): **#F1EBE1** / **#F2ECE3**
- `--ink` primary text / dark buttons: **#2C2A27**
- `--muted` secondary text: **#6E675C**
- `--accent` aged gold (default): **#B5935A**
- `--sage` hairline dividers & subtle labels: **#9BA391**
- Hairline rules use sage at low alpha: `rgba(155,163,145,.4–.6)`
- Card surface fill: `rgba(255,255,255,.45–.6)`
- Text selection: `rgba(181,147,90,.25)`

**Accent is themeable.** The prototype exposes 4 accent presets — gold `#B5935A`, rust `#9C5C4E`, sage-green `#6E7F5B`, plum `#7A6E8F` — applied via a `--accent` CSS custom property. Default ships gold. Implement as a single token so it can be swapped.

### Typography
- **Headings:** Cormorant Garamond (Google Fonts). Weights 500/600/700, plus italic 500/600. Used for the wordmark, all section headings, testimonial quotes, service titles, and the "— Hannah K." signature.
- **Body:** Source Serif 4 (Google Fonts). Weights 400/500/600, plus italic. Used for paragraphs, form inputs.
- **Utility labels ONLY:** Work Sans (Google Fonts), weights 500/600. Used exclusively for small uppercase eyebrow labels, nav links, button text, field labels, and footer meta. No other sans-serif anywhere.
- Eyebrow/label style: ~11.5–13px, weight 600, `letter-spacing: .14em–.28em`, `text-transform: uppercase`.

### Spacing & layout
- Content max-width: **1120px** (narrower bands: 1000px testimonials, 840px contact).
- Horizontal page padding: **32px**.
- Section vertical padding uses fluid `clamp()` — roughly `clamp(60px, 9vw, 110px)` top/bottom.
- Body font-size base **18px**, line-height **1.7**.

### Radius, borders, shadows
- Border radius: **2–3px** everywhere (buttons/inputs 2px, cards 3px). Nothing rounder.
- Borders: 1px sage hairlines only.
- **No box-shadows. No gradients.** This is a hard constraint of the aesthetic — keep it flat and understated. (One exception: an optional subtle paper-grain texture, below.)

### Paper texture (optional enhancement)
A fixed full-viewport overlay div with an inline SVG `feTurbulence` fractal-noise pattern, `opacity: .06`, `mix-blend-mode: multiply`, `pointer-events: none`, behind content. Toggleable. Adds subtle grain; safe to omit if it complicates the stack.

---

## Screens / Views
Single scrolling page. Sections in DOM order: Header → Hero → Services → About → Testimonials → Contact → Footer. Smooth scroll between sections via in-page anchors; header is sticky with `scroll-padding-top: 84px` on the root so anchors clear it.

### Header (sticky)
- **Layout:** sticky top, full width, `backdrop-filter: blur(6px)` over `rgba(247,243,238,.82)`, 1px sage bottom hairline. Inner row max-width 1120px, padded 18px/32px, `display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px`.
- **Left — wordmark:** "HK Editing" in Cormorant 600, 26px, followed by a 7px accent-color filled dot.
- **Right — nav:** flex row, gap 30px, Work Sans 12.5px/600 uppercase, letter-spacing .13em. Links: Services / About / Voices / Contact. "Contact" is emphasized (ink color + 1px accent underline); others are `--muted`.

### Hero
- **Layout:** centered text, max-width 1120px, generous top padding `clamp(80px,14vw,150px)`.
- **Eyebrow:** "Manuscript Editing & Care" — accent color, uppercase, letter-spacing .28em.
- **H1:** "HK Editing" — Cormorant 600, `clamp(48px, 9vw, 104px)`, line-height 1.02, letter-spacing -.01em.
- **Tagline:** "Thoughtful editing for writers who care about their words." — Cormorant **italic** 500, `clamp(22px,3.4vw,32px)`, color `--muted`, max-width 620px centered.
- **CTA button:** "Work With Me" → anchors to `#contact`. Work Sans 13px/600 uppercase, letter-spacing .16em, off-white text on `--ink` background, padding 17px/38px, radius 2px. **Hover:** background → `--accent`, `translateY(-2px)`, 0.25s ease.
- **Sub-flourish:** centered row — hairline, italic Cormorant "an independent editor" in muted, hairline.

### Services
- **Heading block (centered):** eyebrow "What I Offer"; H2 "Three ways to shape a manuscript" — Cormorant 600, `clamp(34px,5.5vw,54px)`.
- **Grid:** `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`, gap `clamp(24px,3vw,40px)`. Three cards.
- **Card:** `rgba(255,255,255,.45)` fill, 1px sage border, radius 3px, padding ~`clamp(32px,3.5vw,44px)`. Flex column.
  - **Flourish row:** italic Cormorant numeral ("01"/"02"/"03") in accent, 30px, beside a 1px sage rule that flexes to fill.
  - **Title:** Cormorant 600, 28px.
  - **Kicker:** Work Sans 11.5px/500 uppercase, letter-spacing .16em, sage color.
  - **Body:** `--muted`, 17px, line-height 1.65.
- **Card content (exact copy):**
  - **01 · Developmental Editing** — kicker "The big picture": *"We step back and look at the whole — structure, pacing, character, the shape of the argument. This is the deep, generous read that helps a manuscript become the book it's reaching to be."*
  - **02 · Copy Editing** — kicker "Line by line": *"A close pass for clarity, consistency, and grace. I tune sentences, smooth transitions, and catch the small contradictions, always working with your voice rather than over it."*
  - **03 · Proofreading** — kicker "The final polish": *"The last careful look before your words meet the world: typos, punctuation, stray spaces, and formatting — so nothing distracts from the story you've worked so hard to tell."*
- **No pricing** on these cards (intentional).

### About
- **Layout:** two-column `repeat(auto-fit, minmax(280px,1fr))`, gap `clamp(40px,6vw,80px)`, vertically centered. Image left, text right (stacks on narrow).
- **Headshot placeholder:** `aspect-ratio: 4/5`, 1px sage border, radius 3px, fill `#F2ECE3` with a 135° repeating-linear-gradient hatch in sage at low alpha. Centered monospace/Work Sans label "headshot" in sage, plus an inset 1px sage frame (12px margin). **Replace with a real photo** of the editor — `object-fit: cover`, keep the 4/5 ratio.
- **Text column:**
  - Eyebrow "About".
  - H2: "The reader your book deserves before anyone else meets it" — Cormorant 600, `clamp(32px,4.6vw,48px)`.
  - Two muted paragraphs (18px). Exact copy:
    1. *"I'm Hannah — an editor who has spent the better part of a decade in the quiet company of other people's sentences. I came to this work the long way, through bookshops and slush piles and far too many late nights with a red pencil, and I've never quite gotten over the thrill of helping a story find its truest shape."*
    2. *"Every manuscript that lands on my desk gets the same thing: unhurried attention, an honest ear, and a deep respect for the voice that's already there. I'm not here to make your book sound like mine — I'm here to make it sound unmistakably, confidently like you."*
  - Signature: "— Hannah K." in Cormorant italic, 26px, ink.

### Testimonials ("Voices")
- **Band:** full-width section with alt background **#F1EBE1** and 1px sage top+bottom hairlines. Inner max-width 1000px.
- **Eyebrow (centered):** "In Their Words".
- **Quotes:** stacked, gap `clamp(56px,8vw,88px)`, each centered, max-width 760px.
  - Large accent open-quote glyph `"` (Cormorant 56px) above.
  - **Quote:** Cormorant **italic** 500, `clamp(24px,3.6vw,34px)`, line-height 1.34, ink.
  - **Caption:** Work Sans 12px/600 uppercase, letter-spacing .14em, muted — author name, then ` · ` + work title in sage 500.
- **Content (exact, fictional):**
  1. *"Hannah saw the book I was trying to write long before I could. Her notes were kind, exacting, and exactly right — I trust her with anything now."* — **Mara Ellison · The Salt Houses**
  2. *"I've worked with editors who flatten you. Hannah does the opposite. She made my voice louder, not quieter, and the manuscript sharper on every page."* — **Daniel Okafor · A Quiet Inheritance**
  3. *"Careful, warm, and astonishingly thorough. I sent her a messy draft and got back a roadmap I'm still grateful for."* — **Priya Raman · Notes from the Allotment**

### Contact
- **Layout:** centered, max-width 840px.
- **Heading block (centered):** eyebrow "Get In Touch"; H2 "Let's talk about your manuscript" — Cormorant 600, `clamp(36px,6vw,58px)`; muted intro paragraph: *"Tell me a little about your project and where it is in its life. I read every note myself and reply within a few days."*
- **Form:** flex column, gap 22px.
  - **Row 1:** Name + Email side by side via `repeat(auto-fit, minmax(220px,1fr))` (stack on narrow). Both required.
  - **Project Type:** native `<select>`, custom chevron via inline SVG background. Options: "Developmental editing", "Copy editing", "Proofreading", "Not sure yet — let's discuss".
  - **Message:** textarea, 5 rows, `resize: vertical`, required.
  - **Field chrome:** label = Work Sans 11.5px/600 uppercase muted; input = Source Serif 4 17px, fill `rgba(255,255,255,.6)`, 1px sage border, radius 2px, padding 14px/16px, `outline:none`. **Focus:** border-color → `--accent`.
  - **Submit button:** "Send Message" — same style as the hero CTA (ink → accent on hover, translateY(-2px)).
- **Success state:** on valid submit, the form is replaced by a centered confirmation card (`rgba(255,255,255,.5)` fill, 1px sage border, radius 3px): accent ✦ glyph, H3 "Thank you — your note is on its way." (Cormorant 600, 32px), muted line "I'll be in touch within a few days. In the meantime, keep writing."

### Footer
- **Layout:** 1px sage top hairline, inner 1120px, padded 48px/32px, `flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:20px`.
- **Left:** "HK Editing" wordmark (Cormorant 600, 24px) + 6px accent dot.
- **Center:** "© 2026 HK Editing · Crafted for writers who care" — Work Sans 12.5px, muted.
- **Right:** links Email / Instagram / Goodreads — Work Sans 12px/500 uppercase, letter-spacing .12em, muted. (Wire to real URLs; currently anchor to `#contact` as placeholders.)

---

## Interactions & Behavior
- **Smooth scroll:** `html { scroll-behavior: smooth; scroll-padding-top: 84px; }`. Nav links and the hero CTA are in-page anchors (`#services`, `#about`, `#voices`, `#contact`, `#top`).
- **Scroll-reveal animations (restrained):** each major block fades up — start `opacity:0; transform:translateY(18–20px)`, transition `opacity/transform .9–1s ease` (some with a .1–.15s stagger delay), end `opacity:1; transform:none` when it enters the viewport. Use `IntersectionObserver` (threshold ~0.08, `rootMargin: 0px 0px -6% 0px`). **Critical:** do NOT gate visibility solely on IO — include a fallback (immediate in-viewport sweep on mount + scroll/resize listener + a safety timeout) so content is always visible even if IO never fires. When honoring `prefers-reduced-motion`, render everything visible immediately.
- **Button hover:** background `--ink` → `--accent`, `translateY(-2px)`, 0.25s ease.
- **Input focus:** border → `--accent`.
- **Form validation:** HTML5 required + email type; block submit and surface native validity if invalid; on success swap to the confirmation card. **The prototype does not actually send anything** — wire submit to the project's real backend / form service (e.g. an email endpoint, Formspree, Resend, etc.).
- **Responsive:** mobile-first, fully fluid. Achieved with `clamp()` type/spacing and `auto-fit minmax()` grids — services and the about/contact rows collapse to single column naturally; header & footer rows wrap. No fixed breakpoints required.

## State Management
Minimal. Only client state is the contact form: input values (or uncontrolled refs) and a `submitted` boolean toggling form ↔ confirmation. The accent color / texture / reveal-on toggles in the prototype are author-time theming knobs, not runtime user controls — bake the chosen accent in as a token unless the project wants a live theme switch.

## Assets
- **Fonts:** Cormorant Garamond, Source Serif 4, Work Sans — all Google Fonts. Load only the weights listed under Typography.
- **Icons/illustration:** none. Decorative elements are pure CSS/typography (dots, hairlines, numerals, quote glyph, ✦). No icon library needed.
- **Headshot:** placeholder only — the editor must supply a real portrait photo (4/5 portrait crop).
- **Paper texture:** inline SVG `feTurbulence`, no external file.

## Files
- **`HK Editing — rendered (open this).html`** — a self-contained, offline-ready bundle of the design. **Open this in any browser to see the actual page** (renders fully without any runtime). This is your visual reference. Treat it as a look/behavior/copy spec — not source to ship.
- `HK Editing.dc.html` — the original authoring file. It depends on an in-house templating runtime, so opening it raw will NOT render the design; it's included only for completeness. Use the rendered file above for reference.
