# JK Warszawa — Color Palette

Design token reference for the JK Equestrian UI. Primitives live in [`src/app/globals.css`](src/app/globals.css) as Tailwind v4 `@theme` variables.

---

## Primitive tokens

| Token | Hex | Usage |
| --- | --- | --- |
| `blue-dark` | `#03396c` | Primary brand, dark sections, footer, nav (scrolled) |
| `blue-mid` | `#04508f` | Gradient mid-tone, avatar fills |
| `blue-soft` | `#1a6aab` | Lighter blue accent (outdoor arena imagery) |
| `blue-deep` | `#0a3d6e` | Hero gradient end, outdoor arena gradient start |
| `blue-bright` | `#0d5fa8` | Stables gradient end |
| `cream` | `#F5EFE0` | Primary text on dark backgrounds |
| `cream-dark` | `#E8DFCA` | Alternate section background, dividers, borders |
| `offwhite` | `#FAFAF5` | Page background, light content sections |
| `surface-card` | `#FFFFFF` | Elevated cards on offwhite sections |
| `gold` | `#C9A84C` | Primary accent, eyebrows, CTA fills |
| `gold-light` | `#E2C97A` | Hover and active accent states |
| `text-dark` | `#0e1e2e` | Headings and primary text on light backgrounds |
| `text-mid` | `#3a4a5a` | Body copy on light backgrounds |
| `text-muted` | `#6a7a8a` | Labels and secondary copy on light backgrounds |

Tailwind usage: `bg-blue-dark`, `text-gold`, `border-cream-dark`, etc.

---

## Semantic roles

Use primitives via these semantic mappings — no separate CSS tokens, documented for consistency.

### Surfaces

| Role | Token | Example |
| --- | --- | --- |
| Page background | `offwhite` | `body`, light sections |
| Section alternate | `cream-dark` | Secondary content blocks |
| Dark section | `blue-dark` | Hero, quote, values, footer |
| Elevated card | `surface-card` | Horse cards on offwhite |

### Text

| Role | Token | Context |
| --- | --- | --- |
| On dark — primary | `cream` | Headings in hero, footer |
| On dark — body | `cream/55` | Paragraphs on blue-dark |
| On dark — muted | `cream/40` – `cream/30` | Labels, copyright |
| On light — primary | `text-dark` | Headings, links |
| On light — body | `text-mid` | Paragraphs |
| On light — label | `text-muted` | Form labels, metadata |
| Emphasis (any) | `gold` | `<em>` in headings, eyebrows |
| Active / hover accent | `gold-light` | Nav active link |

### Accents and borders

| Role | Token |
| --- | --- |
| Primary accent | `gold` |
| Hover accent | `gold-light` |
| Subtle border | `gold/15` |
| Interactive border | `gold/30` |
| Section divider | `gold/10` |

---

## Section rhythm

Inner pages follow a consistent background sequence:

1. **Hero** — `bg-blue-dark` + gold radial glow (`.hero-glow`)
2. **Primary content** — `bg-offwhite`
3. **Secondary content** — `bg-cream-dark`
4. **Dark feature** — `bg-blue-dark` (quote, values, dark CTA)
5. **Light CTA** — `bg-offwhite` or `bg-cream-dark`

Home adds a stats bar: `bg-blue-dark border-t border-gold/10`.

---

## Gradient presets

CSS classes in `globals.css`:

| Class | Effect |
| --- | --- |
| `bg-gradient-hero` | `blue-dark → blue-mid → blue-deep` (home hero background) |
| `bg-gradient-card` | `blue-dark → blue-mid` (placeholder imagery, avatars) |
| `hero-glow` | Radial gold glow overlay; set position via CSS vars |
| `hero-glow-home` | Home-specific circle glow at 30% 60% |

### Hero glow positioning

Default `.hero-glow` uses `ellipse at 50% 40%`. Override per page:

```html
<div
  class="hero-glow absolute inset-0 opacity-10"
  style="--hero-glow-x: 70%; --hero-glow-y: 50%"
/>
```

Supported variables: `--hero-glow-x`, `--hero-glow-y`, `--hero-glow-shape` (`ellipse` or `circle`).

---

## Button and link recipes

Copy-paste Tailwind class strings used across pages.

### Primary CTA

```
text-blue-dark bg-gold hover:bg-gold-light px-10 py-4 rounded-[2px] transition-colors duration-200
```

### Secondary — light background

```
text-text-dark border border-text-dark/20 hover:border-gold hover:text-gold px-10 py-4 rounded-[2px] transition-colors duration-200
```

### Secondary — dark background

```
text-cream border border-cream/30 hover:border-cream/60 px-10 py-4 rounded-[2px] transition-colors duration-200
```

### Text link (underline)

```
border-b border-blue-dark/30 hover:border-gold hover:text-gold transition-colors duration-200
```

---

## Standard opacity scale

Prefer these opacity modifiers — avoid inventing new values.

| Token | Allowed opacities |
| --- | --- |
| `gold` | `/10` `/15` `/20` `/30` `/40` `/90` |
| `cream` | `/15` `/30` `/35` `/40` `/45` `/50` `/55` `/60` `/80` `/85` |
| `blue-dark` | `/80` `/97` `/98` |
| `text-dark` | `/20` `/30` |

---

## Do / don't

**Do**

- Use theme tokens: `bg-blue-deep`, `text-gold`, `bg-surface-card`
- Use `.hero-glow` with CSS vars for page-specific glow positions
- Use `.bg-gradient-hero` and `.bg-gradient-card` for repeated gradients
- Use opacity modifiers from the standard scale above

**Don't**

- Hardcode brand hex values (`#03396c`, `#C9A84C`, etc.) in components
- Use plain `white` or `#FFFFFF` — use `surface-card`
- Use plain `bg-white` for elevated cards
- Add new opacity steps without updating this document
