// Import the HTTP module
const http = require('http');

// Create a server object
const server = http.createServer((req, res) => {



  // Set the response HTTP header with HTTP status and Content type
  res.setHeader('Content-Type', 'text/html');

  res.write('<html lang="en">')


  res.write('<head> <nav style="background-color: #222; padding: 15px 30px;"> <ul style="list-style: none; display: flex; justify-content: center; gap: 30px; margin: 0; padding: 0;"> <li> <a href="/" style="color: white; text-decoration: none; font-size: 16px;"> Home </a> </li> <li> <a href="/about" style="color: white; text-decoration: none; font-size: 16px;"> About </a> </li> <li> <a href="/services" style="color: white; text-decoration: none; font-size: 16px;"> Services </a> </li> <li> <a href="/contact" style="color: white; text-decoration: none; font-size: 16px;"> Contact </a> </li> <li> <a href="/blog" style="color: white; text-decoration: none; font-size: 16px;"> Blog </a> </li> </ul> </nav> </head>')
 

  if (req.url === "/") {
    res.write('<head><title>Home Page</title></head>');
    res.write('<body><h1>Welcome to the Home Page</h1></body>');
    res.write('</html>')
    return res.end();
  } else if (req.url === "/about") {
    res.write('<head><title>About Us</title></head>');
    res.write('<body><h1>About Us</h1></body>');
    res.write('</html>')
    return res.end();
  }else if (req.url === "/services") {
    res.write('<head><title>Services</title></head>');
    res.write('<body><h1>Services</h1></body>');
    res.write('</html>')
    return res.end();
  }else if (req.url === "/contact") {
    res.write('<head><title>Contact Us</title></head>');
    res.write('<body><h1>Contact</h1></body>');
    res.write('</html>')
    return res.end();
  }else if (req.url === "/blog") {
    res.write('<head><title>Blog</title></head>');
    res.write('<body><h1>Blog Us</h1></body>');
    res.write('</html>')
    return res.end();
  }

  res.write('<head><title>404 Not Found</title></head>');
    res.write('<body><h1>Page Not Found</h1></body>');
    res.write('</html>')
    return res.end();


});




// Define the port to listen on
const PORT = 3000;

// Start the server and listen on the specified port
server.listen(PORT, 'localhost', () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});