import { MdFlight } from "react-icons/md";
import { FaHotel, FaBus, FaUmbrellaBeach } from "react-icons/fa";
import { PiPathBold, PiMountainsBold } from "react-icons/pi";
import { FaBowlFood, FaTrainSubway } from "react-icons/fa6";
import { RiGalleryFill } from "react-icons/ri";

export const navItems = [
  "Train",
  "Food",
  "Rooms",
  "Other Services",
  "Contact Us",
  "More",
];

export const trainStations = [
  { shortcut: "NDLS", fullName: "New Delhi Railway Station" },
  { shortcut: "CNB", fullName: "Kanpur Central" },
  { shortcut: "LKO", fullName: "Lucknow Charbagh" },
  { shortcut: "BCT", fullName: "Mumbai Central" },
  { shortcut: "HWH", fullName: "Howrah Junction" },
  { shortcut: "MAS", fullName: "Chennai Central" },
  { shortcut: "SBC", fullName: "Bangalore City Junction" },
  { shortcut: "BZA", fullName: "Vijayawada Junction" },
  { shortcut: "ADI", fullName: "Ahmedabad Junction" },
  { shortcut: "PUNE", fullName: "Pune Junction" },
  { shortcut: "GZB", fullName: "Ghaziabad" },
  { shortcut: "ND", fullName: "Nanded" },
  { shortcut: "ALD", fullName: "Allahabad Junction" },
  { shortcut: "VSKP", fullName: "Visakhapatnam Junction" },
  { shortcut: "CSTM", fullName: "Chhatrapati Shivaji Maharaj Terminus" },
  { shortcut: "SDAH", fullName: "Sealdah" },
  { shortcut: "BPL", fullName: "Bhopal Junction" },
  { shortcut: "JAT", fullName: "Jammu Tawi" },
  { shortcut: "BBS", fullName: "Bhubaneswar" },
  { shortcut: "RJPB", fullName: "Rajendra Nagar Bihar" },
];

export const Quota = [
  "General",
  "ladies",
  "LOWER BERTH/SR.CITIZEN",
  "PERSON WITH DISABILITY",
  "duty pass",
  "tatkal",
  "premium tatkal",
];

export const Class = [
  "All Classes",
  "Anubhuti Class (EA)",
  "AC First Class (1A)",
  "Vistadome AC (EV)",
  "AC 2 Tier",
  "Sleeper (SL)",
  "Second Sitting (2S)",
];

export const serviceTitles = [
  "Flight",
  "Hotels",
  "Rail Drishti",
  "E-Carting",
  "Bus",
  "Holiday Packs",
  "Tourists Train",
  "Hill Railways",
  "Gallery",
];
export const serviceIcons = [
  MdFlight,
  FaHotel,
  PiPathBold,
  FaBowlFood,
  FaBus,
  FaUmbrellaBeach,
  FaTrainSubway,
  PiMountainsBold,
  RiGalleryFill,
];

export const cardDetails = [
  {
    imgSrc: "/maharaja.jpg",
    title: "Maharaja's Express",
    desc: "Redefining Royalty, Luxury and Comfort, Maharajas' express takes you",
  },
  {
    imgSrc: "/interntional.jpg",
    title: "International Packages",
    desc: "Best deals in International Holiday packages, handpicked by IRCTC",
  },
  {
    imgSrc: "/domestic.jpeg",
    title: "Domestic Air Packages",
    desc: "Be it the spiritual devotee seeking blessings of Tirupati, Mata Vaishno Devi",
  },
  {
    imgSrc: "/Bharat_Gaurav.jpg",
    title: "Bharat Gaurav Tourist Train",
    desc: "IRCTC operates Bharat Gaurav Tourist Train having AC III-Tier accommodation",
  },
  {
    imgSrc: "/Hill-Tours.png",
    title: "Rail Tour Packages",
    desc: "IRCTC offers Exclusive Rail tour packages with confirmed train tickets, sight-seeing ",
  },
];

export const footer = [
  "IRCTC Trains",
  "General Information",
  "Important Information",
  "Agents",
  "Enquiries",
];
