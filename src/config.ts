import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://yipianye.github.io/", // replace this with your deployed domain
  author: "Sat Naing",
  desc: "您的网站描述。对于搜索引擎优化和社交媒体共享很有用.",
  title: "yipianye",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true, //启用或禁用light & dark mode网站。如果禁用，将使用原色方案。默认情况下启用此选项
  postPerPage: 6, // 您可以指定每个帖子页面中显示的帖子数量。 （例如：如果您将 SITE.postPerPage 设置为 3，则每页将仅显示 3 个帖子）
  scheduledPostMargin: 15 * 60 * 1000, // 在生产模式下，有未来的帖子pubDatetime将不可见。但是，如果帖子pubDatetime在接下来的 15 分钟内发布，它将可见。scheduledPostMargin如果您不喜欢默认的 15 分钟余量，您可以进行设置。
};

export const LOCALE = {
  lang: "UTF-8", // html lang code. Set this empty and default will be "en"
  langTag: ["zh-CN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/username",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://Facebook.com/username",
    linkTitle: `${SITE.title} on Facebook`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://Instagram.com/username",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://LinkedIn.com/username",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:helloworkdev@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "Twitter",
    href: "https://Twitter.com/username",
    linkTitle: `${SITE.title} on Twitter`,
    active: false,
  },
  {
    name: "Twitch",
    href: "https://Twitch.com/username",
    linkTitle: `${SITE.title} on Twitch`,
    active: false,
  },
  {
    name: "YouTube",
    href: "https://YouTube.com/username",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
  {
    name: "WhatsApp",
    href: "https://WhatsApp.com/username",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: false,
  },
  {
    name: "Snapchat",
    href: "https://Snapchat.com/username",
    linkTitle: `${SITE.title} on Snapchat`,
    active: false,
  },
  {
    name: "Pinterest",
    href: "https://Pinterest.com/username",
    linkTitle: `${SITE.title} on Pinterest`,
    active: false,
  },
  {
    name: "TikTok",
    href: "https://TikTok.com/username",
    linkTitle: `${SITE.title} on TikTok`,
    active: false,
  },
  {
    name: "CodePen",
    href: "https://CodePen.com/username",
    linkTitle: `${SITE.title} on CodePen`,
    active: false,
  },
  {
    name: "Discord",
    href: "https://Discord.com/username",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
  {
    name: "GitLab",
    href: "https://GitLab.com/username",
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "https://Reddit.com/username",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
  {
    name: "Skype",
    href: "https://Skype.com/username",
    linkTitle: `${SITE.title} on Skype`,
    active: false,
  },
  {
    name: "Steam",
    href: "https://Steam.com/username",
    linkTitle: `${SITE.title} on Steam`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://Telegram.com/username",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "https://Mastodon.com/username",
    linkTitle: `${SITE.title} on Mastodon`,
    active: false,
  },
];
