const students = [
    {name: "RAXIMOVA DIYORA", course: "FRONT-END 54-guruh bitiruvchisi", img: "img/diyora.jpg"},
    {name: "MAVLYANOV ELNUR", course: "FRONT-END 54-guruh bitiruvchisi", img: "img/elnur.jpg"},
    {name: "YARKULOV AKBARJON", course: "FRONT-END 54-guruh bitiruvchisi", img: "img/akbarjon.jpg"},
    {name: "YUSUFOV IBROHIM", course: "FRONT-END 54-guruh bitiruvchisi", img: "img/ibrohim.jpg"},
    {name: "SHAMSIYEV TIGRAN", course: "FRONT-END 54-guruh bitiruvchisi", img: "img/tigran.jpg"},
    {name: "RAXMATOV SHOXJAXON", course: "FRONT-END 54-guruh bitiruvchisi", img: "img/shoxjaxon.jpg"},
    {name: "NARZULLAYEV OG'ABEK", course: "FRONT-END 54-guruh bitiruvchisi", img: "img/ogabek.jpg"},
    {name: "LATIPOVA SITORA", course: "FRONT-END 54-guruh bitiruvchisi", img: "img/sitora.jpg"},
];

const container = document.getElementById('students');

students.forEach(student => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="${student.img}" alt="${student.name}">
        <h2>${student.name}</h2>
        <p>${student.course}</p>
        <p><a href="#">O'quvchi haqida →</a></p>
    `;
    container.appendChild(card);
});
