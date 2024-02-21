export const logo = import.meta.env.BASE_URL + "";
import { FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
export const navLinks = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "College",
        link: "/college"
    }
    , {
        name: "exam",
        link: "/exam"
    },
    {
        name: "course",
        link: "/course"
    },
]
export const footerLinks = [
    {
        name: "social_media",
        links: [
            {
                name: "facebook",
                link: "https://www.facebook.com/",
                icon: <FaFacebook />
            }, {
                name: "instagram",
                link: "https://www.instagram.com/",
                icon: <FaInstagram />
            }, {
                name: "twitter",
                link: "https://twitter.com/",
                icon: <FaXTwitter />
            }, {
                name: "youtube",
                link: "https://www.youtube.com/",
                icon: <FaYoutube />
            }, {
                name: "linkedin",
                link: "https://www.linkedin.com/",
                icon: <FaLinkedin />
            }
        ]
    },
    {
        name: "About Us",
        links: [
            {
                name: "About",
                link: "/about"
            },
            {
                name: "Contact",
                link: "/contact"
            }, {
                name: "give feedback",
                link: "/feedback"
            }
        ]
    },
    {
        name: "Support",
        links: [
            {
                name: "Help",
                link: "/help"
            },
            {
                name: "Privacy",
                link: "/privacy"
            }, {
                name: "Terms",
                link: "/terms"
            }, {
                name: "Sitemap",
                link: "/sitemap"
            }, {
                name: "FAQ",
                link: "/faq"
            }
        ]
    },
    {
        name: "Featured",
        links: [
            {
                name: "Featured Colleges",
                link: "/college/:featured"
            },
            {
                name: "Featured Exams",
                link: "/exam/:featured"
            },
            {
                name: "Featured Courses",
                link: "/course/:featured"
            }
        ]
    },
]
export const contactInfo = {
    phone: "7983920962",
    alternatePhone: "8171594553",
    email: "support@adda_college.com",
    address: "Sec-12 Faridabad Haryana (121006)"
}