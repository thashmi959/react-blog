const express = require("express");

const app = express();
const mongoose = require("mongoose");

mongoose
	.connect(
		"mongodb+srv://thashmi959:Htarique@123@cluster0-i4plb.mongodb.net/react-blog?retryWrites=true&w=majority",
		{ useNewUrlParser: true, useUnifiedTopology: true }
	)
	.then(() => console.log("MongoDb Connected..."))
	.catch(err => console.log(err));

app.get("/", (req, res) => {
	res.send("Hello from Express...");
});

app.listen(5000);
