const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../Models/User")
require('dotenv').config()

const router = express.Router()
const SECRET_KEY = process.env.JWT_SECRET

router.post("/register", async (req, res) => {
  try {
    const { name, email, password, role } = req.body

    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: "All fields are required" })
    }
    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters" })
    }

    let user = await User.findOne({ email })
    if (user) return res.status(400).json({ message: "User already exists" })

    const hashedPassword = await bcrypt.hash(password, 10)

    user = new User({ name, email, password: hashedPassword, role })
    await user.save()

    const token = jwt.sign({ userId: user._id, role: user.role }, SECRET_KEY, { expiresIn: "1h" })

    res.status(201).json({ message: "User registered successfully", token })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" })
    }

    const user = await User.findOne({ email })
    if (!user) return res.status(401).json({ message: "Invalid email or password" })

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) return res.status(401).json({ message: "Invalid email or password" })

    const token = jwt.sign({ userId: user._id, role: user.role }, SECRET_KEY, { expiresIn: "1h" })

    res.json({ message: "Login successful", token })
  } catch (err) {
    res.status(500).json({ error: "Something went wrong while logging in" })
  }
})

module.exports = router