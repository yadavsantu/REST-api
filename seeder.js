const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Attraction = require("./models/attraction");
const connectDB=require("./db/connect");

dotenv.config();

const attractions = [
  {
    name: "Janaki Mandir",
    location: "Janakpur",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/45/Janki_Mandir.JPG",
    description: "A grand Hindu temple in Janakpur dedicated to Goddess Sita, built in a stunning Hindu-Rajput style. Known as 'Nau Lakha Mandir'.",
    rating: 4.9,
    bestSeason: "October to March",
    activities: ["Pilgrimage", "Sightseeing", "Photography", "Cultural Tours"]
  },
  {
    name: "Pashupatinath Temple",
    location: "Kathmandu",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Pashupatinath_Temple_2018.jpg",
    description: "A UNESCO World Heritage site and one of the holiest Hindu temples dedicated to Lord Shiva.",
    rating: 4.8,
    bestSeason: "October to March",
    activities: ["Pilgrimage", "Photography", "Cultural Tours"]
  },
  {
    name: "Lumbini",
    location: "Rupandehi",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Maya_Devi_Temple_Lumbini_Nepal.jpg",
    description: "Birthplace of Lord Buddha and a UNESCO World Heritage Site, visited by Buddhists from all around the world.",
    rating: 4.7,
    bestSeason: "October to February",
    activities: ["Pilgrimage", "Sightseeing", "Cultural Tours"]
  },
  {
    name: "Pokhara",
    location: "Gandaki Province",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/65/Pokhara_Phewa_Lake.jpg",
    description: "A scenic city famous for Phewa Lake, Annapurna views, and adventure sports like paragliding.",
    rating: 4.9,
    bestSeason: "September to May",
    activities: ["Boating", "Trekking", "Paragliding", "Sightseeing"]
  },
  {
    name: "Chitwan National Park",
    location: "Chitwan",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/67/Chitwan_rhino.jpg",
    description: "A UNESCO World Heritage site famous for its wildlife, including one-horned rhinos and Bengal tigers.",
    rating: 4.6,
    bestSeason: "October to March",
    activities: ["Jungle Safari", "Bird Watching", "Wildlife Photography"]
  },
  {
    name: "Sagarmatha National Park (Everest Base Camp)",
    location: "Solukhumbu",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/12/Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg",
    description: "Home to Mount Everest, the highest peak in the world, attracting trekkers and climbers worldwide.",
    rating: 5.0,
    bestSeason: "April to May, October to November",
    activities: ["Trekking", "Mountaineering", "Photography"]
  },
  {
    name: "Bhaktapur Durbar Square",
    location: "Bhaktapur",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Bhaktapur_Durbar_Square_%28edit%29.jpg",
    description: "A historic palace square filled with temples, statues, and traditional Newari architecture.",
    rating: 4.7,
    bestSeason: "October to April",
    activities: ["Sightseeing", "Photography", "Cultural Tours"]
  },
  {
    name: "Bandipur",
    location: "Tanahun",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/28/Bandipur%2C_Nepal.jpg",
    description: "A charming hilltop town with preserved cultural heritage and panoramic views of the Himalayas.",
    rating: 4.5,
    bestSeason: "October to April",
    activities: ["Hiking", "Sightseeing", "Photography"]
  },
  {
    name: "Rara Lake",
    location: "Mugu",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Rara_lake_2019.jpg",
    description: "The largest lake in Nepal, located in a remote area surrounded by mountains and pine forests.",
    rating: 4.8,
    bestSeason: "September to October, April to May",
    activities: ["Boating", "Trekking", "Camping", "Photography"]
  },
  {
    name: "Gosaikunda Lake",
    location: "Rasuwa",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/81/Gosaikunda.jpg",
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