 let body = document.body;
 let header = document.createElement("header");
 let h1 = document.createElement("h1")

 header.appendChild(h1);
 h1.appendChild(document.createTextNode("Elzero"))

 header.style.cssText = "display : flex; justify-content : space-between; padding-right:1rem;padding-left:1rem;";
 h1.style.color = "green"


// ul and ui
 let ul = document.createElement("ul");
 ul.appendChild(document.createElement("li")).appendChild(document.createTextNode("Home"))
 ul.appendChild(document.createElement("li")).appendChild(document.createTextNode("Service"))
 ul.appendChild(document.createElement("li")).appendChild(document.createTextNode("About"))
 ul.appendChild(document.createElement("li")).appendChild(document.createTextNode("Contact"))

// style ul
 ul.style.display = "flex";
 ul.style.alignItems = "center";
 ul.style.justifyContent = "space-between"
 ul.style.width = "16rem";
 ul.style.listStyle = "none";
 ul.style.marginRight = "1rem"


 let main = document.createElement("main");
 main.style.display = "flex"
 main.style.alignItems = "center"
 main.style.justifyContent = "space-around"
 main.style.flexWrap = "wrap"
 main.style.backgroundColor = "#ececec"
 main.style.height = "auto"
 main.style.gap = "1rem"
 main.style.padding = "1rem"
 for(let i = 1; i <= 15; i++){
    let div = document.createElement("div");
    div.appendChild(document.createElement("h1")).appendChild(document.createTextNode(i));
    div.appendChild(document.createElement("p")).appendChild(document.createTextNode("Product"));
    div.style.width = "29%"
    div.style.display = "flex"
    div.style.alignItems = "center"
    div.style.justifyContent = "center"
    div.style.backgroundColor = "white"
    div.style.height = "10rem"
    div.style.flexDirection = "column"

    main.appendChild(div);
 }


 let foot = document.createElement("footer");
 foot.style.backgroundColor = "green";
 foot.style.color = "white"
 foot.style.display = "flex";
 foot.style.alignItems = "center"
 foot.style.justifyContent = "center"
 foot.style.height = "7rem"
 foot.appendChild(document.createTextNode("Copyright 2022"))



 
 // append in the site
 header.appendChild(ul);
 body.style.margin = "0"
 body.style.padding = "0"
 body.appendChild(header);
 body.appendChild(main);
 body.appendChild(foot);