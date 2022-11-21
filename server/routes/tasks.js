const express = require("express");
const router = express.Router();
const axios = require("axios");
const path = require("path");

const { addToDB, readAll, readOne } = require("../db");
const { ObjectId } = require("mongodb");

router.get("/new", function (req, res) {
  // res.send("test")
  res.sendFile(path.join(__dirname, "../public", "newtask.html"));
});

router.get("/", async function (req, res) {
  try {
    const data = await readAll();
    console.log(data);
    res.json(data);
    // const response = await axios.get(
    //   "https://jsonplaceholder.typicode.com/todos"
    // );
    // res.status(response.status).json(response.data);
  } catch (err) {
    console.log(err);
  }
  // axios
  //   .get("https://jsonplaceholder.typicode.com/todos")
  //   .then((response) => {
  //     res.status(response.status).json(response.data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
});

router.get("/:taskId", async function (req, res) {
  try {
    const data = await readOne({ _id: ObjectId(req.params.taskId) });
    // const todoResponse = await axios.get(
    //   `https://jsonplaceholder.typicode.com/todos/${req.params.taskId}`
    // );
    // const userResponse = await axios.get(
    //   `https://jsonplaceholder.typicode.com/users/${todoResponse.data.userId}`
    // );
    res.render("task", { title: data.title, date: data.date });
    // res.render("task", {
    //   id: todoResponse.data.id,
    //   title: todoResponse.data.title,
    //   user: userResponse.data.name,
    // });
  } catch (err) {
    console.log(err.message);
  }
  // axios
  //   .get(`https://jsonplaceholder.typicode.com/todos/${req.params.taskId}`)
  //   .then((response) => {
  //     res.render("task", { id: response.data.id, title: response.data.title });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
});

router.get("/:taskId/users/:userId", function (req, res) {
  console.log(req.params);
  res.send(`You are viewing task with id ${req.params.taskId}`);
});

router.post("/", async function (req, res) {
  // console.log(req.body)
  try {
    await addToDB(req.body);
    res.redirect("/api/tasks");
  } catch (err) {
    console.log(err);
  }
});

// router.get("/newtask",function (req,res){
//   res.sendFile(path.join(__dirname,"../public", "newtask.html"));

// })
module.exports = router;
