export const siteNavItems = [
  { path: "/", labelKey: "home" },
  { path: "/horses", labelKey: "horses" },
  { path: "/offer", labelKey: "oferta" },
  { path: "/facilities", labelKey: "facilities" },
  { path: "/team", labelKey: "team" },
  { path: "/contact", labelKey: "contact" },
] as const;

export type SiteNavLabelKey = (typeof siteNavItems)[number]["labelKey"];

export function siteNavMessageId(labelKey: SiteNavLabelKey) {
  return `nav.${labelKey}` as const;
}
