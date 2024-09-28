const mongoose = require("mongoose");
const ProductModel = require("./models/Product.model");

mongoose
  .connect("mongodb://127.0.0.1:27017/E-Com-DB")
  .then(() => console.log("DB connected!"))
  .catch((err) => console.log(err));

async function seedDB() {
  const products = [
    {
      title: "Drone",
      image:
        "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      price: 20000,
      description:
        "Ziria Foldable Toy Drone with HQ WiFi Camera Remote Control for Kids Quadcopter with Gesture Selfie, Flips Bounce Mode,",
    },
    {
      title: "Iphone",
      image:
        "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 80000,
      description:
        "Ziria Foldable Toy Drone with HQ WiFi Camera Remote Control for Kids Quadcopter with Gesture Selfie, Flips Bounce Mode,",
    },
    {
      title: "Macbook",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      price: 120000,
      description:
        "Ziria Foldable Toy Drone with HQ WiFi Camera Remote Control for Kids Quadcopter with Gesture Selfie, Flips Bounce Mode,",
    },
    {
      title: "Markers",
      image:
        "https://images.unsplash.com/photo-1580569214296-5cf2bffc5ccd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFya2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      price: 800,
      description:
        "Ziria Foldable Toy Drone with HQ WiFi Camera Remote Control for Kids Quadcopter with Gesture Selfie, Flips Bounce Mode,",
    },
    {
      title: "Nike Shoes",
      image:
        "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmlrZSUyMHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      price: 6000,
      description:
        "Ziria Foldable Toy Drone with HQ WiFi Camera Remote Control for Kids Quadcopter with Gesture Selfie, Flips Bounce Mode,",
    },
    {
      title: "Watch",
      image:
        "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2F0Y2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      price: 3200,
      description:
        "Ziria Foldable Toy Drone with HQ WiFi Camera Remote Control for Kids Quadcopter with Gesture Selfie, Flips Bounce Mode,",
    },
    {
      title: "Headphones",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      price: 4500,
      description:
        "Ziria Foldable Toy Drone with HQ WiFi Camera Remote Control for Kids Quadcopter with Gesture Selfie, Flips Bounce Mode,",
    },
    {
      title: "Book",
      image:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      price: 1500,
      description:
        "Ziria Foldable Toy Drone with HQ WiFi Camera Remote Control for Kids Quadcopter with Gesture Selfie, Flips Bounce Mode,",
    },
    {
      title: "Sony Controller",
      image:
        "https://images.unsplash.com/photo-1526509867162-5b0c0d1b4b33?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 8500,
      description:
        "Ziria Foldable Toy Drone with HQ WiFi Camera Remote Control for Kids Quadcopter with Gesture Selfie, Flips Bounce Mode,",
    },
    {
      title: "PS5",
      image:
        "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UFM1fGVufDB8fDB8fHww",
      price: 55000,
      description:
        "Ziria Foldable Toy Drone with HQ WiFi Camera Remote Control for Kids Quadcopter with Gesture Selfie, Flips Bounce Mode,",
    },
  ];
  await ProductModel.deleteMany();
  await ProductModel.create(products);

  console.log('DB seeded!')
}

seedDB();
