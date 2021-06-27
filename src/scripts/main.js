function main() {

    const getSport = () => {
        const xhr = new XMLHttpRequest();

        xhr.onload = function() {
            const responseJson = JSON.parse(this.responseText);
            if(responseJson.error){
                showResponseMessage(responseJson.message);
            }else{
                renderAllSports(responseJson.sports);
            }
        }

        xhr.onerror = function() {
            showResponseMessage();
        }

        xhr.open("GET","https://www.thesportsdb.com/api/v1/json/1/all_sports.php");
        xhr.send();
    };


    const renderAllSports = (sports) => {
        const listSportElement = document.querySelector("#content");
        listSportElement.innerHTML = "";

        sports.forEach(sport => {
            listSportElement.innerHTML += `
                <div class="card">
                    <h2>${sport.strSport}</h2>
                    <h3>${sport.strFormat}</h3>
                    <img src="${sport.strSportThumb}">
                    <p>${sport.strSportDescription}</p>
                </div>
            `;
        });
    };

    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    };

    getSport();
}

export default main;