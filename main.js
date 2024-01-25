const team = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "barbara-ramos-graphic-designer.jpg",
  },
];

// MILESTONE 1: Stampare su console le informazioni di nome, ruolo e la stringa della foto
team.forEach((member) => {
  console.log(
    `Name: ${member.name}, Role: ${member.role}, Image: ${member.image}`
  );
});

// MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe
const teamContainer = document.getElementById("team-container");

team.forEach((member) => {
  const memberCard = document.createElement("div");
  memberCard.classList.add("member-card");

  const memberInfo = document.createElement("div");
  memberInfo.innerHTML = `<p>Name: ${member.name}</p><p>Role: ${member.role}</p><img src="${member.image}" alt="${member.name}'s photo">`;
  teamContainer.appendChild(memberInfo);

  const memberImage = document.createElement("img");
  memberImage.src = member.image;
  memberImage.alt = `${member.name}'s photo`;

  memberCard.appendChild(memberImage);
  memberCard.appendChild(memberInfo);
  teamContainer.appendChild(memberCard);
});

/*/