const containerEl = document.querySelector(`.my-container`)

const userList = [
    {
        fullname: "Wayne Barnett",
        role: "Founder & CEO",
        photo: "wayne-barnett-founder-ceo.jpg"
    },
    {
        fullname: "Angela Caroll",
        role: "Chief Editor",
        photo: "angela-caroll-chief-editor.jpg"
    },
    {
        fullname: "Walter Gordon",
        role: "Office Manager",
        photo: "walter-gordon-office-manager.jpg"
    },
    {
        fullname: "Angela Lopez",
        role: "Social Media Manager",
        photo: "angela-lopez-social-media-manager.jpg",
    },
    {
        fullname: "Scott Estrada",
        role: "Developer",
        photo: "scott-estrada-developer.jpg",
    },
    {
        fullname: "Barbara Ramos",
        role: "Graphic Designer",
        photo: "barbara-ramos-graphic-designer.jpg",
    }
];

console.log(userList);
for (let i = 0; i < userList.length; i++) {
    const user = userList[i];
    const divEl = document.createElement('div');
    const fullnameEl = document.createElement(`ul`);
    const roleEl = document.createElement(`li`);
    const photoEl = document.createElement(`li`);
    fullnameEl.classList.add(`fs-3`);
    roleEl.classList.add(`fs-5`);
    photoEl.classList.add(`fs-5`);
    fullnameEl.innerHTML = user.fullname;
    roleEl.innerHTML = user.role;
    photoEl.innerHTML = user.photo;
    containerEl.append(divEl);
    divEl.append(fullnameEl);
    fullnameEl.append(roleEl ,photoEl);
    console.log(userList[i]);
}



