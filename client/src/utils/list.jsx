import { BiBookBookmark, BiCar, BiDish, BiMobile, BiParty, BiRun, BiTable } from "react-icons/bi";
import { BsBicycle, BsBuildingsFill, BsChevronDown, BsGlobe } from "react-icons/bs";
import { BrandFacebook, BrandInstagram, BrandTelegram, BrandTiktok, BrandTwitter, BrandWhatsapp, BrandYoutube, Mail, PhoneCall } from "tabler-icons-react";

export const steps = [
	{ title: "Personal Information", description: ["Enter your personal information ", "to create an account"] },
	{ title: "Account Information", description: ["Choose a username and password", "to secure your account."] },
	{ title: "Personal Preferences", description: ["your rental preferences or personal preferences", "to personalize your experience. "] },
];

export const languages = [
	{ name: "English", value: "English" },
	{ name: "Amheric", value: "Amheric" },
	{ name: "Afan Oromo", value: "Afan Oromo" },
];
export const regions = [
	{
		name: "Addis Ababa",
		value: "Addis Ababa",
	},
	{
		name: "Afar",
		value: "Afar",
	},
	{
		name: "Amhara",
		value: "Amhara",
	},
	{
		name: "Benishangul-Gumuz",
		value: "Benishangul-Gumuz",
	},
	{
		name: "Dire Dawa",
		value: "Dire Dawa",
	},
	{
		name: "Gambela",
		value: "Gambela",
	},
	{
		name: "Harari",
		value: "Harari",
	},
	{
		name: "Oromia",
		value: "Oromia",
	},
	{
		name: "Sidama",
		value: "Sidama",
	},
	{
		name: "Somali",
		value: "Somali",
	},
	{
		name: "Southern Nations, Nationalities, and Peoples' Region",
		value: "Southern Nations, Nationalities, and Peoples' Region",
	},
	{
		name: "Tigray",
		value: "Tigray",
	},
];

export const cities = {
	"Addis Ababa": [
		{ name: "Addis Ababa", value: "Addis Ababa" },
		{ name: "Addis Ketema", value: "Addis Ketema" },
		{ name: "Akaki Kaliti", value: "Akaki Kaliti" },
		{ name: "Arada", value: "Arada" },
		{ name: "Bole", value: "Bole" },
		{ name: "Gulele", value: "Gulele" },
		{ name: "Kirkos", value: "Kirkos" },
		{ name: "Kolfe Keranio", value: "Kolfe Keranio" },
		{ name: "Lideta", value: "Lideta" },
		{ name: "Nefas Silk Lafto", value: "Nefas Silk Lafto" },
		{ name: "Yeka", value: "Yeka" },
	],
	Afar: [
		{ name: "Semera", value: "Semera" },
		{ name: "Awash", value: "Awash" },
		{ name: "Gewane", value: "Gewane" },
		{ name: "Dubti", value: "Dubti" },
		{ name: "Mile", value: "Mile" },
		{ name: "Asaita", value: "Asaita" },
		{ name: "Elidar", value: "Elidar" },
		{ name: "Chifra", value: "Chifra" },
	],
	Amhara: [
		{ name: "Bahir Dar", value: "Bahir Dar" },
		{ name: "Gondar", value: "Gondar" },
		{ name: "Debre Markos", value: "Debre Markos" },
		{ name: "Dessie", value: "Dessie" },
		{ name: "Kombolcha", value: "Kombolcha" },
		{ name: "Debre Birhan", value: "Debre Birhan" },
		{ name: "Giyorgis", value: "Giyorgis" },
		{ name: "Finote Selam", value: "Finote Selam" },
		{ name: "Debre Tabor", value: "Debre Tabor" },
		{ name: "Woldia", value: "Woldia" },
		{ name: "Debre Sina", value: "Debre Sina" },
		{ name: "Debre Berhan", value: "Debre Berhan" },
	],
	"Benishangul-Gumuz": [
		{ name: "Assosa", value: "Assosa" },
		{ name: "Menge", value: "Menge" },
		{ name: "Bambasi", value: "Bambasi" },
		{ name: "Guba", value: "Guba" },
		{ name: "Kurmuk", value: "Kurmuk" },
		{ name: "Mao-Komo special woreda", value: "Mao-Komo special woreda" },
	],
	"Dire Dawa": [{ name: "Dire Dawa", value: "Dire Dawa" }],
	Gambela: [
		{ name: "Gambela", value: "Gambela" },
		{ name: "Abobo", value: "Abobo" },
		{ name: "Dimma", value: "Dimma" },
		{ name: "Gog", value: "Gog" },
		{ name: "Itang", value: "Itang" },
		{ name: "Jikawo", value: "Jikawo" },
		{ name: "Lare", value: "Lare" },
		{ name: "Mengesh", value: "Mengesh" },
		{ name: "Nuer", value: "Nuer" },
	],
	Harari: [
		{ name: "Harar", value: "Harar" },
		{ name: "Gursum", value: "Gursum" },
	],
	Oromia: [
		{ name: "Adama", value: "Adama" },
		{ name: "Jimma", value: "Jimma" },
		{ name: "Shashamane", value: "Shashamane" },
		{ name: "Ambo", value: "Ambo" },
		{ name: "Bale Robe", value: "Bale Robe" },
		{ name: "Bishoftu", value: "Bishoftu" },
		{ name: "Burayu", value: "Burayu" },
		{ name: "Dukem", value: "Dukem" },
		{ name: "Goba", value: "Goba" },
		{ name: "Hawassa", value: "Hawassa" },
		{ name: "Nekemte", value: "Nekemte" },
		{ name: "Sebeta", value: "Sebeta" },
		{ name: "Woliso", value: "Woliso" },
		{ name: "Ziway", value: "Ziway" },
		{ name: "Asella", value: "Asella" },
		{ name: "Bako", value: "Bako" },
		{ name: "Bedele", value: "Bedele" },
		{ name: "Bekoji", value: "Bekoji" },
		{ name: "Bonga", value: "Bonga" },
	],
	Somali: [
		{ name: "Jijiga", value: "Jijiga" },
		{ name: "Gode", value: "Gode" },
		{ name: "Kebri Beyah", value: "Kebri Beyah" },
		{ name: "Shilavo", value: "Shilavo" },
		{ name: "Werder", value: "Werder" },
		{ name: "Dollo", value: "Dollo" },
		{ name: "Degehabur", value: "Degehabur" },
		{ name: "Kelafo", value: "Kelafo" },
		{ name: "Kebri Dahar", value: "Kebri Dahar" },
	],
	"Southern Nations, Nationalities, and Peoples' Region": [
		{ name: "Awasa", value: "Awasa" },
		{ name: "Arba Minch", value: "Arba Minch" },
		{ name: "Hosaena", value: "Hosaena" },
		{ name: "Jinka", value: "Jinka" },
		{ name: "Sodo", value: "Sodo" },
		{ name: "Yirga Alem", value: "Yirga Alem" },
		{ name: "Yabelo", value: "Yabelo" },
		{ name: "Wendo", value: "Wendo" },
		{ name: "Wolkite", value: "Wolkite" },
		{ name: "Waka", value: "Waka" },
		{ name: "Shakiso", value: "Shakiso" },
		{ name: "Sawla", value: "Sawla" },
		{ name: "Soddo Zuria", value: "Soddo Zuria" },
		{ name: "Silti", value: "Silti" },
		{ name: "Shone", value: "Shone" },
		{ name: "Sankura", value: "Sankura" },
		{ name: "Sodo", value: "Sodo" },
		{ name: "Soro", value: "Soro" },
		{ name: "Shebedino", value: "Shebedino" },
		{ name: "Sawla", value: "Sawla" },
	],
	Tigray: [
		{ name: "Mekelle", value: "Mekelle" },
		{ name: "Adwa", value: "Adwa" },
		{ name: "Axum", value: "Axum" },
		{ name: "Humera", value: "Humera" },
		{ name: "Shire", value: "Shire" },
		{ name: "Adigrat", value: "Adigrat" },
		{ name: "Adwa", value: "Adwa" },
		{ name: "Adigrat", value: "Adigrat" },
		{ name: "Adwa", value: "Adwa" },
		{ name: "Adigrat", value: "Adigrat" },
		{ name: "Adwa", value: "Adwa" },
		{ name: "Adigrat", value: "Adigrat" },
		{ name: "Adwa", value: "Adwa" },
		{ name: "Adigrat", value: "Adigrat" },
		{ name: "Adwa", value: "Adwa" },
		{ name: "Adigrat", value: "Adigrat" },
		{ name: "Adwa", value: "Adwa" },
		{ name: "Adigrat", value: "Adigrat" },
	],
	Sidama: [
		{ name: "Hawassa", value: "Hawassa" },
		{ name: "Yirgalem", value: "Yirgalem" },
		{ name: "Aleta Wendo", value: "Aleta Wendo" },
		{ name: "Boditi", value: "Boditi" },
	],
};

export const regionsList = ["Addis Ababa", "Afar", "Amhara", "Benishangul-Gumuz", "Dire Dawa", "Gambela", "Harari", "Oromia", "Somali", "Southern Nations, Nationalities, and Peoples' Region", "Tigray", "Sidama"];

export const citiesList = [
	"Addis Ababa",
	"Addis Ketema",
	"Akaki Kaliti",
	"Arada",
	"Bole",
	"Gulele",
	"Kirkos",
	"Kolfe Keranio",
	"Lideta",
	"Nefas Silk Lafto",
	"Yeka",
	"Addis Ababa",
	"Semera",
	"Awash",
	"Gewane",
	"Dubti",
	"Mile",
	"Asaita",
	"Elidar",
	"Chifra",
	"Bahir Dar",
	"Gondar",
	"Debre Markos",
	"Dessie",
	"Kombolcha",
	"Debre Birhan",
	"Giyorgis",
	"Finote Selam",
	"Debre Tabor",
	"Woldia",
	"Debre Sina",
	"Debre Berhan",
	"Assosa",
	"Menge",
	"Bambasi",
	"Guba",
	"Kurmuk",
	"Mao-Komo special woreda",
	"Dire Dawa",
	"Gambela",
	"Abobo",
	"Dimma",
	"Gog",
	"Itang",
	"Jikawo",
	"Lare",
	"Mengesh",
	"Nuer",
	"Harar",
	"Gursum",
	"Adama",
	"Jimma",
	"Shashamane",
	"Ambo",
	"Bale Robe",
	"Bishoftu",
	"Burayu",
	"Dukem",
	"Goba",
	"Hawassa",
	"Nekemte",
	"Sebeta",
	"Woliso",
	"Ziway",
	"Asella",
	"Bako",
	"Bedele",
	"Bekoji",
	"Bonga",
	"Jijiga",
	"Gode",
	"Kebri Beyah",
	"Shilavo",
	"Werder",
	"Dollo",
	"Degehabur",
	"Kelafo",
	"Kebri Dahar",
	"Awasa",
	"Arba Minch",
	"Hosaena",
	"Jinka",
	"Sodo",
	"Yirga Alem",
	"Yabelo",
	"Wendo",
	"Wolkite",
	"Waka",
	"Shakiso",
	"Sawla",
	"Soddo Zuria",
	"Silti",
	"Shone",
	"Sankura",
	"Sodo",
	"Soro",
	"Shebedino",
	"Sawla",
	"Mekelle",
	"Adwa",
	"Axum",
	"Humera",
	"Shire",
	"Adigrat",
	"Hawassa",
	"Yirgalem",
	"Aleta Wendo",
	"Boditi",
];

export const Price_Type = [
	{
		name: "per day",
		value: "per day",
	},
	{
		name: "per week",
		value: "per week",
	},
	{
		name: "per month",
		value: "per month",
	},
	{
		name: "per year",
		value: "per year",
	},
];
export const Lease_Length_Type = [
	{
		name: "days",
		value: "days",
	},
	{
		name: "weeks",
		value: "weeks",
	},
	{
		name: "months",
		value: "months",
	},
	{
		name: "years",
		value: "years",
	},
];
export const Contact_Type = [
	{
		name: "email",
		value: "email",
		icon: <Mail />,
	},
	{
		name: "phone",
		value: "phone",
		icon: <PhoneCall />,
	},
	{
		name: "whatsapp",
		value: "whatsapp",
		icon: <BrandWhatsapp />,
	},
	{
		name: "telegram",
		value: "telegram",
		icon: <BrandTelegram />,
	},
	{
		name: "facebook",
		value: "facebook",
		icon: <BrandFacebook />,
	},
	{
		name: "instagram",
		value: "instagram",
		icon: <BrandInstagram />,
	},
	{
		name: "twitter",
		value: "twitter",
		icon: <BrandTwitter />,
	},
	{
		name: "youtube",
		value: "youtube",
		icon: <BrandYoutube />,
	},
	{
		name: "tiktok",
		value: "tiktok",
		icon: <BrandTiktok />,
	},
];

export const Property_Type = [
	{
		name: "House",
		value: "House",
	},
	{
		name: "Room",
		value: "Room",
	},
	{
		name: "Construction Material",
		value: "Construction Material",
	},
	{
		name: "Land",
		value: "Land",
	},
	{
		name: "Apartment",
		value: "Apartment",
	},
	{
		name: "Clothing",
		value: "Clothing",
	},
	{
		name: "Electronics",
		value: "Electronics",
	},
	{
		name: "Furniture",
		value: "Furniture",
	},
	{
		name: "Kitchen Utensils",
		value: "Kitchen Utensils",
	},
	{
		name: "Sports Equipment",
		value: "Sports Equipment",
	},
	{
		name: "Motorcycle",
		value: "Motorcycle",
	},
	{
		name: "Video Games",
		value: "Video Games",
	},
	{
		name: "Party Supplies",
		value: "Party Supplies",
	},
	{
		name: "Outdoor Equipment",
		value: "Outdoor Equipment",
	},
	{
		name: "Computer",
		value: "Computer",
	},

	// materials that can be rented

	{
		name: "Books",
		value: "Books",
	},
	{
		name: "Bicycle",
		value: "Bicycle",
	},
	{
		name: "Services",
		value: "Services",
	},
	{
		name: "Sports Equipment",
		value: "Sports Equipment",
	},
	{
		name: "Vehicle",
		value: "Vehicle",
	},
	{
		name: "Other",
		value: "Other",
	},
];

// report types for rental finder system posetd by users
export const Report_Type = [
	{
		name: "Inappropriate Content",
		value: "Inappropriate Content",
	},
	{
		name: "Spam",
		value: "Spam",
	},
	{
		name: "Scam",
		value: "Scam",
	},
	{
		name: "Wrong Information",
		value: "Wrong Information",
	},
	{
		name: "Duplicate",
		value: "Duplicate",
	},

	{
		name: "Other",
		value: "Other",
	},
];

export const filter_options = [
	{
		name: "All",
		value: "",
		icon: <BsGlobe />,
	},
	{
		name: "Construction",
		value: "construction",
		icon: <BsBuildingsFill />,
	},
	{
		name: "Clothing",
		value: "clothing",
		icon: <BsBuildingsFill />,
	},
	{
		name: "Electronics",
		value: "electronics",
		icon: <BiMobile />,
	},
	{
		name: "Furniture",
		value: "furniture",
		icon: <BiTable />,
	},
	{
		name: "Kitchen Utensils",
		value: "kitchen utensils",
		icon: <BiDish />,
	},
	{
		name: "Sports Equipment",
		value: "sports equipment",
		icon: <BiRun />,
	},
	{
		name: "Vehicle",
		value: "vehicle",
		icon: <BiCar />,
	},
	{
		name: "Party Supplies",
		value: "party supplies",
		icon: <BiParty />,
	},
	{
		name: "Outdoor Equipment",
		value: "outdoor equipment",
		icon: <BsBuildingsFill />,
	},
	{
		name: "Books",
		value: "books",
		icon: <BiBookBookmark />,
	},
	{
		name: "Bicycle",
		value: "bicycle",
		icon: <BsBicycle />,
	},
	{
		name: "Other",
		value: "other",
		icon: <BsChevronDown />,
	},
];
