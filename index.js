async function getData() {
    try {
        var response = await fetch("https://api.artic.edu/api/v1/artworks");
        var data = await response.json();
        console.log(data.data);


        var dataProjection = document.getElementById("main");
        var dataList = dataProjection.querySelector("ul")

        for (i = 0; i < data.data.length; i++){
            var piece = document.createElement("li");
            piece.innerText = data.data[i].title;
            dataList.appendChild(piece);


            var desc = document.createElement("p");
            desc.innerText = data.data[i].description || "No Description Available";
            dataList.appendChild(desc);
        }

    } catch (error) {
        console.log("Error", error);
    }
}
getData();