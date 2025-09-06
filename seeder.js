const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Attraction = require("./models/attraction");
const connectDB=require("./db/connect");

dotenv.config();

const attractions = [
  {
    name: "Janaki Mandir",
    location: "Janakpur",
    image: "/images/janakimandir.jpg",
    description: "A grand Hindu temple in Janakpur dedicated to Goddess Sita, built in a stunning Hindu-Rajput style. Known as 'Nau Lakha Mandir'.",
    rating: 4.9,
    bestSeason: "October to March",
    activities: ["Pilgrimage", "Sightseeing", "Photography", "Cultural Tours"]
  },
  {
    name: "Pashupatinath Temple",
    location: "Kathmandu",
    image: "/images/Pashupatnath-Temple.jpeg",
    description: "A UNESCO World Heritage site and one of the holiest Hindu temples dedicated to Lord Shiva.",
    rating: 4.8,
    bestSeason: "October to March",
    activities: ["Pilgrimage", "Photography", "Cultural Tours"]
  },
  
  {
    name: "Pokhara",
    location: "Gandaki Province",
    image: "/images/pokhara.jpg",
    description: "A scenic city famous for Phewa Lake, Annapurna views, and adventure sports like paragliding.",
    rating: 4.9,
    bestSeason: "September to May",
    activities: ["Boating", "Trekking", "Paragliding", "Sightseeing"]
  },
  {
    name: "Chitwan National Park",
    location: "Chitwan",
    image: "/images/chitwan-national-park.jpg",
    description: "A UNESCO World Heritage site famous for its wildlife, including one-horned rhinos and Bengal tigers.",
    rating: 4.6,
    bestSeason: "October to March",
    activities: ["Jungle Safari", "Bird Watching", "Wildlife Photography"]
  },
  
 
  {
    name: "Bandipur",
    location: "Tanahun",
    image: "/images/bandipur-village.jpg",
    description: "A charming hilltop town with preserved cultural heritage and panoramic views of the Himalayas.",
    rating: 4.5,
    bestSeason: "October to April",
    activities: ["Hiking", "Sightseeing", "Photography"]
  },
  {
    name: "Rara Lake",
    location: "Mugu",
    image: "/images/Rara_lake,_Mugu.jpg",
    description: "The largest lake in Nepal, located in a remote area surrounded by mountains and pine forests.",
    rating: 4.8,
    bestSeason: "September to October, April to May",
    activities: ["Boating", "Trekking", "Camping", "Photography"]
  },
  {
    name: "Gosaikunda Lake",
    location: "Rasuwa",
    image: "/images/gosaikunda-lake.jpeg",
    description: "A sacred alpine lake for both Hindus and Buddhists, popular for high-altitude trekking.",
    rating: 4.6,
    bestSeason: "October to November, March to May",
    activities: ["Trekking", "Pilgrimage", "Photography"]
  }
];

const importData = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    await Attraction.deleteMany();
    await Attraction.insertMany(attractions);
    console.log("✅ Tourist attractions imported!");
    process.exit();
  } catch (err) {
    console.error("❌ Error importing data:", err);
    process.exit(1);
  }
};

importData();