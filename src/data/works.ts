interface WorkListItem {
  title: string;
  description: string;
  blurb: string;
  year: string;
  category: string;
  url: string;
  new: boolean;
  wip: boolean;
}

export const works: WorkListItem[] = [
  {
    title: "Conscious",
    description: "ethical and sustainable online shopping tool",
    blurb: "native ios are.na app",
    year: "2024–",
    category: "uiux",
    url: "/works/conscious",
    new: true,
    wip: true,
  },
  {
    title: "Curology",
    description: "redesign of Curology website",
    blurb: "figma plugin",
    year: "2023–",
    category: "uiux",
    url: "/works/curology",
    new: false,
    wip: true,
  },
  {
    title: "CONTENT",
    description: "bookmarking, capture-anything site",
    blurb: "bookmarking site",
    year: "2022–23",
    category: "code design",
    url: "/works/content",
    new: false,
    wip: false,
  },
  {
    title: "d.selfhood",
    description: "publication on digital selhood",
    blurb: "publication",
    year: "2022",
    category: "print",
    url: "/works/dselfhood",
    new: false,
    wip: false,
  },
  {
    title: "Future Record",
    description: "microsite on artefact preservation",
    blurb: "microsite",
    year: "2022",
    category: "web uiux 3d",
    url: "/works/future-record",
    new: false,
    wip: false,
  },
  {
    title: "DEUX",
    description: "challenging traditional reading experiences",
    blurb: "microsite",
    year: "2022",
    category: "web uiux",
    url: "/works/deux",
    new: false,
    wip: false,
  },
  {
    title: "In Your Hands",
    description: "mental health manifesto",
    blurb: "print",
    year: "2022",
    category: "print",
    url: "/works/inyourhands",
    new: false,
    wip: false,
  },
  {
    title: "Incubator",
    description: "branding for contemporary museum",
    blurb: "incubator branding",
    year: "2021",
    category: "branding print",
    url: "/works/incubator",
    new: false,
    wip: false,
  },
  {
    title: "DiSoRiEnT",
    description: "AR poster",
    blurb: "AR poster",
    year: "2021",
    category: "branding misc 3d",
    url: "/works/disorient",
    new: false,
    wip: false,
  },
  {
    title: "Smiley Cakes",
    description: "branding for hybrid bakery",
    blurb: "branding bakery",
    year: "2021",
    category: "branding print",
    url: "/works/smiley-cakes",
    new: false,
    wip: false,
  },
  {
    title: "Frost",
    description: "3D immersive environment",
    blurb: "unity",
    year: "2022",
    category: "3d",
    url: "/works/frost",
    new: false,
    wip: false,
  },
  {
    title: "misc.",
    description: "miscellaneous design / art pieces",
    blurb: "misc. design / art",
    year: "2020–",
    category: "misc",
    url: "/works/misc",
    new: false,
    wip: false,
  },
];
