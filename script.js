const telegram = "https://t.me/Cristinalopes56";

const produtos = [
  {
    nome: "Highschool Thots",
    descricao: "Chupando o pau devazagar.",
    preco: 30
  },
  {
    nome: "English Teens",
    descricao: "Gostosa até no cuzinho.",
    preco: 25
  },
  {
    nome: "Teens Blowjob",
    descricao: "Coleção de pau.",
    preco: 35
  },
  {
    nome: "Highschool Thots",
    descricao: "Fodendo o cuzinho aperdado.",
    preco: 20
  },
  {
    nome: "Monkeyapp - Reactions on BBC",
    descricao: "Dando a buceta ao negão.",
    preco: 40
  },
  {
    nome: "card.innerHTML",
    descricao: "introduzindo pepino no cuzinho.",
    preco: 20
  }
];

const catalogo = document.getElementById("catalogo");

produtos.forEach((produto) => {
  const card = document.createElement("article");

  card.className = "card";

  const mensagem = encodeURIComponent(
    `Olá! Quero comprar: ${produto.nome} — $${produto.preco}`
  );

  card.innerHTML = `
    <h3>${produto.nome}</h3>

    <p>${produto.descricao}</p>

    <div class="price">$${produto.preco}</div>

    <a
      class="btn"
      href="${telegram}?text=${mensagem}"
      target="_blank"
      rel="noopener">
      🛒 Comprar Agora
    </a>
  `;

  catalogo.appendChild(card);
});
