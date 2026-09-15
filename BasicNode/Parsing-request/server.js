// const http = require('http')
import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/") {
    res.write(
      '<form action="/user" method="POST" style=" max-width: 400px; margin: 0 auto; padding: 25px; background-color: white; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); " > <h2 style="margin-top: 0; margin-bottom: 20px;">User Details</h2> <label for="name" style="display: block; margin-bottom: 6px;"> Name </label> <input type="text" id="name" name="name" required style=" width: 100%; padding: 10px; margin-bottom: 15px; box-sizing: border-box; border: 1px solid #ccc; border-radius: 5px; " > <label for="gender" style="display: block; margin-bottom: 6px;"> Gender </label> <select id="gender" name="gender" required style=" width: 100%; padding: 10px; margin-bottom: 15px; box-sizing: border-box; border: 1px solid #ccc; border-radius: 5px; background-color: white; " > <option value="">Select gender</option> <option value="male">Male</option> <option value="female">Female</option> <option value="other">Other</option> </select> <label for="dob" style="display: block; margin-bottom: 6px;"> Date of Birth </label> <input type="date" id="dob" name="dob" required style=" width: 100%; padding: 10px; margin-bottom: 20px; box-sizing: border-box; border: 1px solid #ccc; border-radius: 5px; " > <button type="submit" style=" width: 100%; padding: 11px; border: none; border-radius: 5px; background-color: #2563eb; color: white; font-size: 16px; cursor: pointer; " > Submit </button> </form>',
    );

    return res.end();
  } else if (req.url === "/user" && req.method === "POST") {
    const body = [];

    // Read the incoming request body in chunks
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    // Runs when the complete request body has been received
    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);

      const params = new URLSearchParams(fullBody);
      console.log("params is ", params);

      //Method 1: Using loop to convert URLSearchParams to an object
      // const bodyObject = {};
      // for (const [key, val] of params.entries()) {
      //   bodyObject[key] = val;
      // }

      //method 2: Using Object.fromEntries to convert URLSearchParams to an object
      const bodyObject = Object.fromEntries(params);

      console.log(bodyObject);

      //Writing into a file
      fs.writeFileSync("userdata.txt", JSON.stringify(bodyObject));

      // Redirect to the home page after processing the form submission
      res.statusCode = 303;
      res.setHeader("Location", "/");
      return res.end();
    });
  }
});

server.listen(3000, "localhost", () => {
  console.log("Server is running on http://localhost:3000");
});
