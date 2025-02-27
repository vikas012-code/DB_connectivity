import db from "./db.js";
import express from "express";



import User from "./models/users.model.js";
import Product from "./models/products.model.js";

const app = express();
db();

async function dataEntry() {
  // const products = [
  //   {
  //     name: "iPhone",
  //     price: 60000,
  //     category: ["phones", "iphone", "apple"],
  //   },
  //   {
  //     name: "Macbook",
  //     price: 90000,
  //     category: ["laptops", "apple", "gadgets"],
  //   },
  //   {
  //     name: "Tablets",
  //     price: 50000,
  //     category: ["electronics", "tablet", "gadgets"],
  //   },
  // ];

  // const users = [
  //   {
  //     name: "vikas",
  //     email: "vikas@vikas.com",
  //     age: 23,
  //     password: "hellovikas",
  //   },
  //   {
  //     name: "diksha",
  //     email: "diksha@diksha.com",
  //     age: 21,
  //     password: "hellodiksha",
  //   },
  // ];

  // const result = await User.findOne({ name: "Vikas" });
  // console.log(result);

  // const output = await User.create(users);
  // console.log(output);

  //const productOutput = await Product.create(products);
  //console.log(productOutput);
}

app.get("/", (req, res) => {
  console.log("connecting.......")
  dataEntry();
  res.send({ message: "Hello!!!" });
});

app.listen(process.env.PORT, () => {
  
  console.log("server is running");
});