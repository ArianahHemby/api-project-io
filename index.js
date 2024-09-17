async function getData() {
    try {
        var response = await fetch("https://api.artic.edu/api/v1/artworks?ids=208131,240935,142595,120300,13454,151363,102512,191556,117266,137125,229629&fields=title,description,image_id");
        var data = await response.json();
        console.log(data.data);

        
        var dataProjection = document.getElementById("explore");
        var dataList = dataProjection.querySelector("ul")

        dataList.innerHTML = '';
        

        for (i = 0; i < data.data.length; i++){
            

            var piece = document.createElement("h3");
            piece.innerHTML = data.data[i].title || "No Title Avaliable";
            dataList.appendChild(piece);
            
            var img = document.createElement("img")
            var urlId = 'https://www.artic.edu/iiif/2/' + data.data[i].image_id + '/full/843,/0/default.jpg'
            img.src = urlId || "No Image Avalilabe"
            dataList.appendChild(img);

            var desc = document.createElement("p");
            desc.innerHTML = data.data[i].description || "No Description Available";
            dataList.appendChild(desc);
        }

    } catch (error) {
        console.log("Error", error);
    }
}
getData(); 
