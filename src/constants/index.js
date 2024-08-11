import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigImg1,  bigImg3, customer1, customer2, productIMG1, productIMG2, productIMG3, productIMG4, thumbnailImg1, thumbnailImg2, thumbnailImg3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "Über uns" },
    { href: "#products", label: "Roster" },
    { href: "#contact-us", label: "Kontakt" },
];

export const smallImg = [
    {
        thumbnail: thumbnailImg1,
        bigImg: bigImg1,
    },
    //{
     //   thumbnail: thumbnailImg2,
   //     bigImg: bigImg2,
   // },
    {
        thumbnail: thumbnailImg3,
        bigImg: bigImg3,
    },

];

export const statistics = [
    { value: '2.5k+', label: 'M+ Experience' },
    { value: 'ATDH', label: '9/9 HC' },
    { value: '10+', label: 'Members' }
];

export const products = [
    {
        imgURL: productIMG1,
        name: "Dr.Sheya",
        rank: "Guildmaster",
    },
    {
        imgURL: productIMG2,
        name: "Veroxz",
        rank: "Officer",
    },
    {
        imgURL: productIMG3,
        name: "Nararas",
        rank: "Member",
    },
    {
        imgURL: productIMG4,
        name: "Twinblader",
        rank: "Member",
    },
    {
        imgURL: productIMG3,
        name: "Pastel",
        rank: "Social",
    },

];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Find Guild at :",
        links: [
            { name: "Raider.io", link: "https://raider.io/guilds/eu/blackmoore/Therapy%20Enraged" },
            { name: "WoW-Progress", link: "https://www.wowprogress.com/guild/eu/blackmoore/why+s%C3%B4+seri%C3%B4us" },
            { name: "WoW-Armory", link: "/" },
        ],
    },
    {
        title: "Streams of our Members",
        links: [
            { name: "Dr.Sheya  @Twitch", link: "https://www.twitch.tv/docsheya" },
            { name: "Veroxz  @Twitch", link: "https://www.twitch.tv/veroxz_x3" },
            { name: "Twinblader  @Twitch", link: "https://www.twitch.tv/tbdarky" },

        ],
    },
    {
        title: "Others",
        links: [
            { name: "a.lueders.dev@gmail.com", link: "mailto:a.lueders.dev@gmail.com" },
            { name: "GitHub", link: "https://github.com/DrSheya" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];