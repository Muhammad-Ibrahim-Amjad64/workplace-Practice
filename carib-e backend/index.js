const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const userRoutes = require("./routes/auth");
const productsRoutes = require("./routes/Products");
const dotenv = require("dotenv");
dotenv.config();
const { ConnectDB } = require("./db");
ConnectDB(); // Require the mongoose object from db.js
const app = express();
const PORT = process.env.PORT;
const helmet = require("helmet");
const morgan = require("morgan");
// add middleware
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("common"));
app.use(helmet());
// app.use(express.json);
// app.post("/signup", async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = new User({ email, password: hashedPassword });
//     await user.save();
//     res.status(201).json({ message: "User created successfully" });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// // Login endpoint
// app.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(401).json({ error: "Invalid credentials" });
//     }
//     const passwordMatch = await bcrypt.compare(password, user.password);
//     if (!passwordMatch) {
//       return res.status(401).json({ error: "Invalid credentials" });
//     }
//     const token = jwt.sign({ userId: user._id }, "your-secret-key");
//     res.status(200).json({ token });
//   } catch (error) {
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });
// app.get("/category", async (req, res) => {
//   try {
//     res.status();
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       error: "Internal Server Error",
//     });
//   }
// });
app.use("/api/v2/auth", userRoutes);
app.use("/api/v2", productsRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
