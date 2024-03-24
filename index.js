const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(express.json());
app.use(cors());

const con = mysql.createConnection({
	host: "sql6.freesqldatabase.com",
	user: "sql6693865",
	password: "ng5FFM2mx5",
	database: "sql6693865"
});

app.post("/save", (req, res) => {
	let data = [req.body.rno, req.body.name, req.body.marks]
	let sql = "insert into student values(?, ?, ?)";
	con.query(sql, data, (err, result) => {
		if (err)		res.send(err);
		else			res.send(result);
	});
});


app.listen(9000, () => { console.log("ready @ 9000") });












