async function getData() {
    try {
        var response = await fetch("https://api.artic.edu/api/v1/artworks?ids=208131,240935,142595,120300,13454,151363,102512,191556,117266,137125,229629&fields=title,description,image_id");
        var data = await response.json(); //collect titles, desc, and images then check to see if successfull in console
        console.log(data.data);
        
        var dataProjection = document.getElementById("explore");
        var dataList = dataProjection.querySelector("ul")

        dataList.innerHTML = ''; //This will be what everything connects to in order to be displayed in explore section
        

        for (i = 0; i < data.data.length; i++){
            
            //setting up each title
            var piece = document.createElement("h3");
            piece.innerHTML = data.data[i].title || "No Title Avaliable"; //iterate through each title and see if it is present
            dataList.appendChild(piece);
            
            var img = document.createElement("img")
            var urlId = 'https://www.artic.edu/iiif/2/' + data.data[i].image_id + '/full/843,/0/default.jpg' //attach url id to image
            img.src = urlId || "No Image Avalilabe" //iterating through each image
            dataList.appendChild(img);

            var desc = document.createElement("p");
            desc.innerHTML = data.data[i].description || "No Description Available"; //iterating through each desc
            dataList.appendChild(desc);
        }

    } catch (error) {
        console.log("Error", error); //catching errors
    }
}
getData(); //call function


//get articles

async function getArticles() {
    try {
        var responseArt = await fetch("https://api.artic.edu/api/v1/articles?limit=11");
        var dataArt = await responseArt.json(); //collect titles, desc, and images then check to see if successfull in console
        console.log(dataArt.data);
        
        var artProjection = document.getElementById("articles");
        var artList = artProjection.querySelector("ul")

        artList.innerHTML = ''; //This will be what everything connects to in order to be displayed in explore section
        

        for (i = 0; i < dataArt.data.length; i++){
            
            //setting up each title
            var piece = document.createElement("h3");
            piece.innerHTML = dataArt.data[i].title || "No Title Avaliable"; //iterate through each title and see if it is present
            artList.appendChild(piece);
            

            var desc = document.createElement("p");
            desc.innerHTML = dataArt.data[i].copy || "No Description Available"; //iterating through each desc
            artList.appendChild(desc);
        } 

    } catch (error) {
        console.log("Error", error); //catching errors
    }
}
getArticles(); //call function


