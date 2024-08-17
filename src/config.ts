import type { Site, SocialObjects } from "./types";
import type { GiscusProps } from "@giscus/react";

export const SITE: Site = {
  website: "https://grassroots-musings.github.io", // replace this with your deployed domain
  author: "reyna",
  profile: "https://gjeev.github.io/",
  desc: "Personal Blog",
  title: "Grassroots",
  ogImage: "light_small.png",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: true,
  svg: true,
  width: 150,
  height: 150,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/Gjeev",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jeevika-g/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:jeevikagopal@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
];

export const GISCUS: GiscusProps = {
  repo: "grassroots-musings/grassroots-musings.github.io",
  repoId: "R_kgDOMknjLw",
  category: "Announcements",
  categoryId: "DIC_kwDOMknjL84ChvL5",
  mapping: "title",
  reactionsEnabled: "1",
  emitMetadata: "0",
  inputPosition: "top",
  lang: "en",
  loading: "lazy",
};