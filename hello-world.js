// task 1
// console.log("hello world");

// task 2
// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.write("<h1>Hello Node</h1>");
//     res.end();
//   }
// });
// server.listen(3000);

// task 3
// const fs = require("fs");
// fs.writeFile("welcome.txt", "Hello Node", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File created successfully");
//   }
// });

// fs.readFile("welcome.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data.toString());
//   }
// });

// task 4
// const generator = require("generate-password");

// const password = generator.generate({
//   length: 10,
//   numbers: true,
// });
// console.log(password);

// task 5
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "laamouri.marwa@gmail.com",
    pass: "password",
  },
});

const mailOptions = {
  from: "laamouri.marwa@gmail.com",
  to: "myfriend@yahoo.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
