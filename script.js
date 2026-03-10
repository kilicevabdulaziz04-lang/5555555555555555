const students = [
    {name: "RAXIMOVA DIYORA", course: "FRONT-END 54-guruh bitiruvchisi", img: "https://via.placeholder.com/300x250?text=Raximova"},
    {name: "MAVLYANOV ELNUR", course: "FRONT-END 54-guruh bitiruvchisi", img: "https://via.placeholder.com/300x250?text=Mavlyanov"},
    {name: "YARKULOV AKBARJON", course: "FRONT-END 54-guruh bitiruvchisi", img: "https://via.placeholder.com/300x250?text=Yarkulov"},
    {name: "YUSUFOV IBROHIM", course: "FRONT-END 54-guruh bitiruvchisi", img: "https://via.placeholder.com/300x250?text=Yusufov"},
    {name: "SHAMSIYEV TIGRAN", course: "FRONT-END 54-guruh bitiruvchisi", img: "https://via.placeholder.com/300x250?text=Shamsiev"},
    {name: "RAXMATOV SHOXJAXON", course: "FRONT-END 54-guruh bitiruvchisi", img: "https://via.placeholder.com/300x250?text=Raxmatov"},
    {name: "NARZULLAYEV OG'ABEK", course: "FRONT-END 54-guruh bitiruvchisi", img: "https://via.placeholder.com/300x250?text=Narzullayev"},
    {name: "LATIPOVA SITORA", course: "FRONT-END 54-guruh bitiruvchisi", img: "https://via.placeholder.com/300x250?text=Latipova"},
];

const container = document.getElementById('students');

students.forEach(student => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="${student.img}" alt="${student.name}">
        <h2>${student.name}</h2>
        <p>${student.course}</p>
        <p><a href="#">O'quvchi haqida -></a></p>
    `;
    container.appendChild(card);
});