import mutedButNot from './letters/muted-but-not';
import attendancePresent from './letters/attendance-present';
import firstLateNight from './letters/first-late-night';
import backbenchLegends from './letters/backbench-legends';
import sharedLunchbox from './letters/shared-lunchbox';
import timeZonesDontMatter from './letters/time-zones-dont-matter';
import airportGoodbyes from './letters/airport-goodbyes';
import distanceEra from './letters/distance-era';
import theBeginning from './letters/the-beginning';
import goldenDays from './letters/golden-days';

export const profiles = [
    {
        id: "1mile",
        name: "1 Mile Away",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png", // Blue/Classic
        theme: "blue",
        tagline: "Online classes era. 8th grade. Digital closeness.",
    },
    {
        id: "0miles",
        name: "0 Miles Away",
        image: "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg", // Golden/Happy
        theme: "gold",
        tagline: "10th grade. Same classroom. Golden era.",
    },
    {
        id: "10000miles",
        name: "10000 Miles Away",
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png", // Dark/Cool
        theme: "dark",
        tagline: "Physical distance. Emotional permanence.",
    }
];

// Helper to generate gallery paths (1 to 10)
const generateGallery = (folder) => Array.from({ length: 10 }, (_, i) => `/images/${folder}/${i + 1}.jpg`);

// Custom gallery for 8th grade (Mixed extensions)
const gallery8th = [
    "/images/8th/1.jpg",
    "/images/8th/2.jpg",
    "/images/8th/3.jpg",
    "/images/8th/4.png",
    "/images/8th/5.png",
    "/images/8th/6.png",
    "/images/8th/7.png",
    "/images/8th/8.jpg",
    "/images/8th/9.jpg",
    "/images/8th/10.jpg"
];

export const films = [
    // --- 1 Mile Away Content ---
    {
        id: "muted-but-not",
        profileId: "1mile",
        title: "Muted But Not Really",
        tagline: "We were listening... just not to the teacher.",
        tags: "Comedy • School • 2020",
        year: "2020",
        maturityRating: "U/A 13+",
        duration: "1h 45m",
        heroImage: "/images/8th/main.jpg", // Placeholder
        letter: mutedButNot,
        gallery: gallery8th
    },
    {
        id: "attendance-present",
        profileId: "1mile",
        title: "Attendance: Present, Mentally Elsewhere",
        tagline: "Logging in was the easy part.",
        tags: "Drama • Reality • 2020",
        year: "2020",
        maturityRating: "U/A 7+",
        duration: "2h 10m",
        heroImage: "/images/8th/5.png",
        letter: attendancePresent,
        gallery: gallery8th
    },
    {
        id: "first-late-night",
        profileId: "1mile",
        title: "The First Call",
        tagline: "40 minutes became 4 hours which became 4 years",
        tags: "Romance • Friendship • 2020",
        year: "2020",
        maturityRating: "U/A 16+",
        duration: "3h 05m",
        heroImage: "/images/8th/3.jpg",
        letter: firstLateNight,
        gallery: gallery8th
    },

    // --- 0 Miles Away Content ---
    {
        id: "backbench-legends",
        profileId: "0miles",
        title: "I Wish I Could Hug You Again",
        tagline: "Come back, stay here.",
        tags: "Comedy • Action • 2022",
        year: "2022",
        maturityRating: "U/A 13+",
        duration: "1h 55m",
        heroImage: "/images/10th/main.jpg",
        letter: backbenchLegends,
        gallery: generateGallery("10th")
    },
    {
        id: "shared-lunchbox",
        profileId: "0miles",
        title: "Shared Lunchbox Diplomacy",
        tagline: "What's yours is mine. Especially the dessert.",
        tags: "Drama • Food • 2022",
        year: "2022",
        maturityRating: "U",
        duration: "1h 30m",
        heroImage: "/images/10th/2.jpg",
        letter: sharedLunchbox,
        gallery: generateGallery("10th")
    },

    // --- 10000 Miles Away Content ---
    {
        id: "time-zones-dont-matter",
        profileId: "10000miles",
        title: "Time Zones Don't Matter",
        tagline: "Your morning is my night, but you're still my first thought.",
        tags: "Documentary • Emotional • 2024",
        year: "2024",
        maturityRating: "U/A 13+",
        duration: "2h 45m",
        heroImage: "/images/longdistance/main.jpg",
        letter: timeZonesDontMatter,
        gallery: generateGallery("longdistance")
    },
    {
        id: "airport-goodbyes",
        profileId: "10000miles",
        title: "Airport Goodbyes",
        tagline: "The hardest hug is the last one.",
        tags: "Drama • Emotional • 2024",
        year: "2024",
        maturityRating: "U/A 16+",
        duration: "1h 40m",
        heroImage: "/images/longdistance/3.jpg",
        letter: airportGoodbyes,
        gallery: generateGallery("longdistance")
    },

    // --- Featured "Films" (Trending/Global) ---
    {
        id: "distance-era",
        title: "The Distance Era",
        tagline: "Miles apart, but closer than ever.",
        tags: "Growth • Long Calls • Reunion • 2024",
        year: "2024",
        maturityRating: "U/A 16+",
        duration: "2h 14m",
        heroImage: "/images/longdistance/main.jpg",
        letter: distanceEra,
        gallery: generateGallery("longdistance")
    },

    {
        id: "the-beginning",
        title: "The Beginning",
        tagline: "Where it all started. 8th Grade.",
        tags: "Nostalgia • School • Origins • 2020",
        year: "2020",
        maturityRating: "U/A 7+",
        duration: "1h 30m",
        heroImage: "/images/8th/main.jpg",
        letter: theBeginning,
        gallery: gallery8th
    },
    {
        id: "golden-days",
        title: "The Golden Days",
        tagline: "10th Grade. Peak Chaos.",
        tags: "Friendship • Fun • Memories • 2022",
        year: "2022",
        maturityRating: "U/A 13+",
        duration: "1h 50m",
        heroImage: "/images/10th/main.jpg",
        letter: goldenDays,
        gallery: generateGallery("10th")
    }
];

// Helper to get ALL films
export const getAllFilms = () => films;

// Helper to get films for a specific profile
export const getFilmsForProfile = (profileId) => {
    return films.filter(film => film.profileId === profileId);
};

// Helper to get Trending (Generic) films
export const getTrendingFilms = () => {
    return films.filter(film => !film.profileId);
};
