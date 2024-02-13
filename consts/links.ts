export const links = {
  baseUrl: "https://www.hyperlane.xyz",
  explorer: "https://explorer.hyperlane.xyz",
  docs: "https://docs.hyperlane.xyz",
  discord: "https://discord.gg/VK9ZUy3aTV",
  github: "https://github.com/hyperlane-xyz",
  chains: "https://docs.hyperlane.xyz/docs/resources/domains",
  jobs: "https://jobs.lever.co/Hyperlane",
  twitter: "https://twitter.com/hyperlane_xyz",
  blog: "https://medium.com/hyperlane",
  immunefi: "https://immunefi.com/bounty/hyperlane",
  brand:
    "https://www.figma.com/file/jC5NORmNDCl6WZgjIRwKX5/Hyperlane-Brand-Assets-%5BExternal%5D?type=design&node-id=0-1&t=6eez9F8gttV7L6VG-0",
  joinAcademy:
    "https://docs.google.com/forms/d/e/1FAIpQLSd_l0sAZVDOo0uv1yAaIXm9zxc5ec1gaOJ_ac0DrftWzRTl-Q/viewform",
};

export const headerLinks = [
  { title: "home", url: "/", externalLink: false },
  { title: "crew", url: "/crew", externalLink: false },
  { title: "bounty", url: "/bounty", externalLink: false },
  { title: "academy", url: "/academy", externalLink: false },
  { title: "docs", url: links.docs, externalLink: true },
  { title: "blog", url: "https://medium.com/hyperlane", externalLink: true },
  {
    title: "explorer",
    url: links.explorer,
    externalLink: true,
  },
];

export const footerLinks1 = [
  { title: "docs", url: links.docs, external: true },
  { title: "Explorer", url: links.explorer, external: true },
  { title: "Chains", url: links.chains, external: true },
];

export const footerLinks2 = [
  { title: "Crew", url: "/crew", external: false },
  // { title: 'Jobs', url: links.jobs, external: true }, hidden until there's separate jobs/crew pages
  { title: "Bounty", url: "/bounty", external: false },
  { title: "Brand", url: links.brand, external: true },
];

export const docLinks = {
  gettingStarted:
    "https://docs.hyperlane.xyz/docs/introduction/getting-started",
  whyHyperlane:
    "https://docs.hyperlane.xyz/docs/introduction/why-should-you-use-hyperlane",
  messagingApi: "https://docs.hyperlane.xyz/docs/apis-and-sdks/messaging-api",
  liquidityLayer:
    "https://docs.hyperlane.xyz/docs/apis-and-sdks/token-bridge-api",
  permissionlessInterop:
    "https://docs.hyperlane.xyz/docs/deploy/permissionless-interoperability",
  interchainAccounts: "https://docs.hyperlane.xyz/docs/apis-and-sdks/accounts",
  warpRoutes: "https://docs.hyperlane.xyz/docs/apis-and-sdks/warp-api",
  interchainQueries: "https://docs.hyperlane.xyz/docs/apis-and-sdks/query",
};
