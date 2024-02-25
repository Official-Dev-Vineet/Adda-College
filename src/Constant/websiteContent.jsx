import Sitelogo from "../assets/adda-college-logo.svg";
export const logo = Sitelogo;
import { FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosSchool } from "react-icons/io";
import { IoMdHome } from "react-icons/io";
import { GoBook } from "react-icons/go";
import { GoProjectRoadmap } from "react-icons/go";
export const navLinks = [
  {
    name: "Home",
    link: "/",
    icon: <IoMdHome />,
  },
  {
    name: "College",
    link: "#college",
    icon: <IoIosSchool />,
    subLinks: [
      {
        name: "Engineering",
        LinksByDegree: [
          {
            name: "B.tech",
            link: "/college/:btech",
          },
          {
            name: "M.tech",
            link: "/college/:mtech",
          },
          {
            name: "B.Arch",
            link: "/college/:barch",
          },
          {
            name: "Diploma",
            link: "/college/:diploma",
          },
        ],
      },
      {
        name: "Medical",
        LinksByDegree: [
          {
            name: "B.pharm",
            link: "/college/:bpharm",
          },
          {
            name: "M.pharm",
            link: "/college/:mpharm",
          },
          {
            name: "BDS",
            link: "/college/:bds",
          },
          {
            name: "MD",
            link: "/college/:md",
          },
          {
            name: "BHMS",
            link: "/college/:bhms",
          },
          {
            name: "BAMS",
            link: "/college/:bams",
          },
          {
            name: "MS",
            link: "/college/:ms",
          },
        ],
      },
      {
        name: "Law",
        LinksByDegree: [
          {
            name: "LLB",
            link: "/college/:llb",
          },
          {
            name: "LLM",
            link: "/college/:llm",
          },
          {
            name: "BA+LLB",
            link: "/college/:ballb",
          },
          {
            name: "B.Com + LLB",
            link: "/college/:bcomllb",
          },
          {
            name: "BBA + LLB",
            link: "/college/:bballb",
          },
        ],
      },
      {
        name: "Management",
        LinksByDegree: [
          {
            name: "BBA",
            link: "/college/:bba",
          },
          {
            name: "MBA",
            link: "/college/:mba",
          },
          {
            name: "BBM",
            link: "/college/:bbm",
          },
          {
            name: "PGDM",
            link: "/college/:pgdm",
          },
        ],
      },
      {
        name: "Pharmacy",
        LinksByDegree: [
          {
            name: "B.Pharma",
            link: "/college/:bpharma",
          },
          {
            name: "M.Pharma",
            link: "/college/:mpharma",
          },
          {
            name: "Pharma.D.",
            link: "/college/:pharmad",
          },
        ],
      },
      {
        name: "Architecture",
        LinksByDegree: [
          {
            name: "B.Arch",
            link: "/college/:barch",
          },
          {
            name: "M.Arch",
            link: "/college/:march",
          },
          {
            name: "D.Arch",
            link: "/college/:darch",
          },
        ],
      },
      {
        name: "Commerce & Banking",
        LinksByDegree: [
          {
            name: "B.Com",
            link: "/college/:bcom",
          },
          {
            name: "M.Com",
            link: "/college/:mcom",
          },
          {
            name: "BBA",
            link: "/college/:bba",
          },
          {
            name: "MBA",
            link: "/college/:mba",
          },
          {
            name: "BBM",
            link: "/college/:bbm",
          },
        ],
      },
      {
        name: "Science",
        LinksByDegree: [
          {
            name: "B.Sc",
            link: "/college/:bsc",
          },
          {
            name: "M.Sc",
            link: "/college/:msc",
          },
          {
            name: "MS",
            link: "/college/:ms",
          },
          {
            name: "Diploma",
            link: "/college/:diploma",
          },
        ],
      },
      {
        name: "Nursing",
        LinksByDegree: [
          {
            name: "G.N.M",
            link: "/college/:gnm",
          },
          {
            name: "A.N.M",
            link: "/college/:anm",
          },
          {
            name: "B.Sc",
            link: "/college/:bsc",
          },
          {
            name: "M.Sc",
            link: "/college/:msc",
          },
        ],
      },
      {
        name: "design",
        LinksByDegree: [
          {
            name: "B.Des",
            link: "/college/:bdes",
          },
          {
            name: "M.Des",
            link: "/college/:mdes",
          },
        ],
      },
      {
        name: "Education",
        LinksByDegree: [
          {
            name: "B.Ed",
            link: "/college/:bed",
          },
          {
            name: "M.Ed",
            link: "/college/:med",
          },
          {
            name: "B.T.C",
            link: "/college/:B.T.C",
          },
        ],
      },
      {
        name: "Art",
        LinksByDegree: [
          {
            name: "BA",
            link: "/college/:ba",
          },
          {
            name: "MA",
            link: "/college/:ma",
          },
          {
            name: "PGDM",
            link: "/college/:pgdm",
          },
          {
            name: "Diploma",
            link: "/college/:diploma",
          },
        ],
      },
      {
        name: "Para medical",
        LinksByDegree: [
          {
            name: "B.M.L.T",
            link: "/college/:bmlt",
          },
          {
            name: "B.P.T",
            link: "/college/:bpt",
          },
          {
            name: "M.P.T",
            link: "/college/:mpt",
          },
          {
            name: "B.Optom.",
            link: "/college/:boptom",
          },
        ],
      },
    ],
  },
  {
    name: "Exam",
    link: "#exam",
    icon: <GoProjectRoadmap />,
    subLinks: [
      {
        name: "Engineering",
        LinksByDegree: [
          {
            name: "JEE Mains",
            link: "/exam/:jeemains",
          },
          {
            name: "NEET",
            link: "/exam/:neet",
          },
          {
            name: "JEE Advance",
            link: "/exam/:jeeadvance",
          },
          {
            name: "BITSAT",
            link: "/exam/:bitsat",
          },
          {
            name: "GATE",
            link: "/exam/:gate",
          },
          {
            name: "WBJEE",
            link: "/exam/:wbjee",
          },
        ],
      },
      {
        name: "Medical",
        LinksByDegree: [
          {
            name: "NEET UG",
            link: "/exam/:neetug",
          },
          {
            name: "NEET PG",
            link: "/exam/:neetpg",
          },
          {
            name: "JIPMER",
            link: "/exam/:jipmer",
          },
          {
            name: "AIMS UG",
            link: "/exam/:aimsug",
          },
          {
            name: "AIMS PG",
            link: "/exam/:aimsug",
          },
        ],
      },
      {
        name: "Management",
        LinksByDegree: [
          {
            name: "CAT",
            link: "/exam/:cat",
          },
          {
            name: "XAT",
            link: "/exam/:xat",
          },
          {
            name: "NMAT",
            link: "/exam/:nmat",
          },
          {
            name: "CMAT",
            link: "/exam/:cmat",
          },
          {
            name: "MAT",
            link: "/exam/:mat",
          },
          {
            name: "KIITEE",
            link: "/exam/:kiitee",
          },
        ],
      },
      {
        name: "Bank & Commerce",
        LinksByDegree: [
          {
            name: "IBPS PO",
            link: "/exam/:ibpspo",
          },
          {
            name: "SBI PO",
            link: "/exam/:sbipo",
          },
          {
            name: "DU JAT",
            link: "/exam/:dujat",
          },
          {
            name: "CUSAT CAT",
            link: "/exam/:cusatcat",
          },
          { name: "JMIEE", link: "/exam/:jmiee" },
        ],
      },
      {
        name: "Science",
        LinksByDegree: [
          {
            name: "KIITEE",
            link: "/exam/:kiitee",
          },
          {
            name: "GSAT",
            link: "/exam/:gsat",
          },
          {
            name: "JUIT",
            link: "/exam/:juit",
          },
          {
            name: "CUCET",
            link: "/exam/:cucet",
          },
        ],
      },
      {
        name: "Hotel Manage.",
        LinksByDegree: [
          {
            name: "UPSEE",
            link: "/exam/:upsee",
          },
          { name: "LPUNEST", link: "/exam/:lpunest" },
          { name: "IPU CET", link: "/exam/:ipucet" },
          { name: "SAAT", link: "/exam/:saat" },
        ],
      },
      {
        name: "IT",
        LinksByDegree: [
          {
            name: "OJEE",
            link: "/exam/:ojee",
          },
          {
            name: "UPSEE",
            link: "/exam/:upsee",
          },
          {
            name: "VITMEE",
            link: "/exam/:vitmee",
          },
          {
            name: "JNUEE",
            link: "/exam/:jnuee",
          },
        ],
      },
      {
        name: "Art",
        LinksByDegree: [
          {
            name: "TISSNET",
            link: "/exam/:tissnet",
          },
          {
            name: "JUET",
            link: "/exam/:juet",
          },
          {
            name: "MDU CEE",
            link: "/exam/:mducee",
          },
          {
            name: "BHU UET",
            link: "/exam/:bhuuet",
          },
        ],
      },
      {
        name: "Agriculture",
        LinksByDegree: [
          {
            name: "TS EAMSAT",
            link: "/exam/:tseamsat",
          },
          {
            name: "ICAR AIEEA",
            link: "/exam/:icaraieea",
          },
          {
            name: "BCECE",
            link: "/exam/:bcece",
          },
          {
            name: "SAAT",
            link: "/exam/:saat",
          },
        ],
      },
      {
        name: "Law",
        LinksByDegree: [
          {
            name: "CLAT",
            link: "/exam/:clat",
          },
          {
            name: "LSAT",
            link: "/exam/:lsat",
          },
          {
            name: "AP LAWCET",
            link: "/exam/:aplawcet",
          },
          {
            name: "AILET",
            link: "/exam/:ailet",
          },
          {
            name: "SET",
            link: "/exam/:set",
          },
        ],
      },
      {
        name: "Pharmacy",
        LinksByDegree: [
          {
            name: "VSAT",
            link: "/exam/:vsat",
          },
          {
            name: "BUAT",
            link: "/exam/:buat",
          },
          {
            name: "HPCET",
            link: "/exam/:hpcet",
          },
        ],
      },
      {
        name: "Design",
        LinksByDegree: [
          {
            name: "CEED",
            link: "/exam/:ceed",
          },
          {
            name: "AIEED",
            link: "/exam/:aieed",
          },
          {
            name: "KIITEE",
            link: "/exam/:kiitee",
          },
          {
            name: "LPUNEST",
            link: "/exam/:lpunest",
          },
        ],
      },
      {
        name: "Dental",
        LinksByDegree: [
          {
            name: "AIIMS",
            link: "/exam/:aiims",
          },
          {
            name: "JIPMER",
            link: "/exam/:jipmer",
          },
        ],
      },
      {
        name: "Education",
        LinksByDegree: [
          {
            name: "UGC NET",
            link: "/exam/:ugcnet",
          },
          {
            name: "DUET",
            link: "/exam/:duet",
          },
          {
            name: "APSET",
            link: "/exam/:apset",
          },
        ],
      },
    ],
  },
  {
    name: "Course",
    link: "#course",
    icon: <GoBook />,
    subLinks: [
      {
        name: "All",
        LinksByDegree: [
          {
            name: "BTECH",
            link: "/course/:btech",
          },
          {
            name: "MTECH",
            link: "/course/:mtech",
          },
          {
            name: "BARCH",
            link: "/course/:barch",
          },
          {
            name: "DIPLOMA",
            link: "/course/:diploma",
          },
          {
            name: "BSC Radiotherapy",
            link: "/course/:bscradiotherapy",
          },
          {
            name: "BSC Medical laboratory technology",
            link: "/course/:bscmedlaboratory",
          },
          {
            name: "MBA",
            link: "/course/:mba",
          },
          {
            name: "MCA",
            link: "/course/:mca",
          },
          {
            name: "BBA",
            link: "/course/:bba",
          },
          {
            name: "BSC",
            link: "/course/:bsc",
          },
          {
            name: "BCA",
            link: "/course/:bca",
          },
          { name: "B.Com", link: "/course/:bcom" },
          { name: "BDS", link: "/course/:bds" },
        ],
      },
    ],
  },
];
export const footerLinks = [
  {
    name: "social_media",
    links: [
      {
        name: "facebook",
        link: "https://www.facebook.com/",
        icon: <FaFacebook className="t-primary" />,
      },
      {
        name: "instagram",
        link: "https://www.instagram.com/",
        icon: <FaInstagram className="t-primary" />,
      },
      {
        name: "twitter",
        link: "https://twitter.com/",
        icon: <FaXTwitter className="t-primary" />,
      },
      {
        name: "youtube",
        link: "https://www.youtube.com/",
        icon: <FaYoutube className="t-danger" />,
      },
      {
        name: "linkedin",
        link: "https://www.linkedin.com/",
        icon: <FaLinkedin className="t-primary" />,
      },
    ],
  },
  {
    name: "About Us",
    links: [
      {
        name: "About",
        link: "/about",
      },
      {
        name: "Contact",
        link: "/contact",
      },
      {
        name: "give feedback",
        link: "/feedback",
      },
    ],
  },
  {
    name: "Support",
    links: [
      {
        name: "Help",
        link: "/help",
      },
      {
        name: "Privacy",
        link: "/privacy",
      },
      {
        name: "Terms",
        link: "/terms",
      },
      {
        name: "Sitemap",
        link: "/sitemap",
      },
      {
        name: "FAQ",
        link: "/faq",
      },
    ],
  },
  {
    name: "Featured",
    links: [
      {
        name: "Featured Colleges",
        link: "/college/:featured",
      },
      {
        name: "Featured Exams",
        link: "/exam/:featured",
      },
      {
        name: "Featured Courses",
        link: "/course/:featured",
      },
    ],
  },
];
export const contactInfo = {
  phone: "7983920962",
  alternatePhone: "8171594553",
  email: "support@adda_college.com",
  address: "Sec-12 Faridabad Haryana (121006)",
};

export const registerInput = [
  {
    id: "fullName",
    name: "fullName",
    type: "text",
    placeholder: "Full Name",
    errorMessage:
      "Full Name should be 3-16 characters and shouldn't include any special character!",
    label: "Full Name",
    pattern: "^[A-Za-z\\s]{3,30}$",
    required: true,
  },
  {
    id: "username",
    name: "username",
    type: "text",
    placeholder: "Username",
    errorMessage:
      "Username should be 3-16 characters and shouldn't include any special character!",
    label: "Username",
    pattern: "^[A-Za-z0-9]{3,16}$",
    required: true,
  },
  {
    id: "contactNumber",
    name: "contactNumber",
    type: "tel",
    placeholder: "Contact Number",
    pattern: `^(?:(?:\\+|0{0,2})91(\\s*[\\-]\\s*)?|[0]?)?[789]\\d{9}$`,
    errorMessage: "It should be a valid phone number with our country code !",
    label: "Contact Number",
    required: true,
  },
  {
    id: "email",
    name: "emailId",
    type: "email",
    placeholder: "Email",
    errorMessage: "It should be a valid email address!",
    label: "Email",
    required: true,
  },
  {
    id: "password",
    name: "password",
    type: "password",
    placeholder: "Password",
    errorMessage:
      "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
    label: "Password",
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    required: true,
  },
  {
    id: "birthday",
    name: "birthday",
    type: "date",
    placeholder: "Birthday",
    label: "Birthday",
  },
  {
    id: "address",
    name: "address",
    type: "text",
    placeholder: "Address",
    label: "Address",
    pattern: "^[A-Za-z0-9\\s]{3,50}$",
    required: true,
  },
  {
    id: "Designation",
    name: "role",
    type: "text",
    placeholder: "Dream Job",
    label: "Dream Job",
    pattern: "^[A-Za-z\\s]{3,16}$",
    required: true,
    errorMessage:
      "It should be a valid Designation without any special character !",
  },
];

export const loginInput = [
  {
    id: "email",
    name: "emailId",
    type: "email",
    placeholder: "Email",
    errorMessage: "It should be a valid email address!",
    label: "Email",
    required: true,
  },
  {
    id: "password",
    name: "password",
    type: "password",
    placeholder: "Password",
    errorMessage:
      "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
    label: "Password",
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    required: true,
  },
];
