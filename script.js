let collage = [
    ["images/butterfly-1.png", "images/butterfly-2.png", "images/butterfly-3.png"],
    ["images/butterfly-4.png", "images/butterfly-5.png", "images/butterfly-6.png"], 
    ["images/butterfly-7.png", "images/butterfly-8.png", "images/butterfly-9.png"],
];

let display = document.getElementById("display")
let html = "<table border = 1>";

for (let i = 0; i < collage.length; i ++) {

    html += "<tr>";

    for (let j = 0; j < collage[i].length; j++) {

        html += `<td> <img src="${collage[i][j]}" alt="Butterfly"> </td>`;

    }

    html += "</tr>";
}

html += "</table>";
display.innerHTML = html;