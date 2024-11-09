const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("./models/User.model");
const Quote = require("./models/Quote.model");

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/QuoteDB")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Helper function to generate random text
const generateRandomQuote = () => {
  const randomQuotes = [
    "The best way to predict the future is to create it.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "It does not matter how slowly you go as long as you do not stop.",
    "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    "It always seems impossible until it's done.",
    "You are never too old to set another goal or to dream a new dream.",
    "Don't watch the clock; do what it does. Keep going.",
    "Success is not in what you have, but who you are.",
    "The only way to do great work is to love what you do.",
  ];

  return randomQuotes[Math.floor(Math.random() * randomQuotes.length)];
};

const seedDatabase = async () => {
  try {
    await User.deleteMany({});
    await Quote.deleteMany({});

    // Create 5 users
    const users = [];
    for (let i = 0; i < 5; i++) {
      const hashedPassword = await bcrypt.hash("1234", 10);  // Hashing the password for each user
      const user = await User.create({
        email: `user${i + 1}@example.com`,
        password: hashedPassword,
        fullName: `User ${i + 1}`,
      });
      users.push(user);
    }

    // Create 3 quotes for each user
    for (let user of users) {
      for (let i = 0; i < 3; i++) {
        await Quote.create({
          text: generateRandomQuote(),
          author: user._id,
        });
      }
    }

    // Close the MongoDB connection
    mongoose.connection.close();
  } catch (err) {
    console.error("Error seeding the database:", err);
    mongoose.connection.close();
  }
};

seedDatabase();
