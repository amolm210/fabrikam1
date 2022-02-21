var express =require("express");  //lib-----Node Module
var app=express();  // will create app object from express package

var onAboutUs=function(req, res){
    res.send("");
};
var onDefault=function(req, res){
    res.send("<h1>Fabrikam Multinational Pvt. Ltd</h1>"+
              "<hr/>"+
              "<ol>"+
                    " <li> Information Management Solutions in web</li>"+
                    " <li>Workshops</li>"+
                    " <li>Online Course</li>"+
                    " <li>Corporate Training</li>"+
             "</ol>");
};
app.get("/",onDefault);  // Request handler functions are registered
app.get("/aboutus",onAboutUs);  // Request handler functions are registered
var server=app.listen(8081);
console.log("Server is running on port 8081");
// 1. Fabrikam is a multinational company has their 24 Offices all over world. Company wanted to build and
// host Information Management Solutions in web. Company also wants to host internet public web site for
// their potential customers to know about products and services provided. They required to build and host
// intranet application for all employees to access Human Resource, Accounting and Project Management
// related information. Fabrikam has public Cloud subscription to use it as Infrastructure as a Service (I-a-a-S)
// and Platform As A Service.
// Company wanted to build and host this Information System in public