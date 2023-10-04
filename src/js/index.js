const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, index) => {
  botao.addEventListener("click", () => {
    desselecionarBotao();
    desselecionarPersonagem();

    botao.classList.add("selecionado");
    personagens[index].classList.add("selecionado");
  });

  botao.addEventListener("mouseenter", () => {
    alterarImagemBotao(botao);
  });

  botao.addEventListener("mouseleave", () => {
    restaurarImagemBotao(botao);
  });
});

function desselecionarPersonagem() {
  const personagemSelecionado = document.querySelector(".personagem.selecionado");
  if (personagemSelecionado) {
    personagemSelecionado.classList.remove("selecionado");
  }
}

function desselecionarBotao() {
  const botaoSelecionado = document.querySelector(".botao.selecionado");
  if (botaoSelecionado) {
    botaoSelecionado.classList.remove("selecionado");
  }
}

function alterarImagemBotao(botao) {
  const imagemPath = botao.getAttribute("data-imagem-hover");
  const imagemBotao = botao.querySelector("img");
  const imagemOriginal = imagemBotao.src;

  if (imagemPath) {
    imagemBotao.src = imagemPath;
  }

  botao.addEventListener("mouseleave", function () {
    if (imagemPath) {
      imagemBotao.src = imagemOriginal;
    }
  });
}

function restaurarImagemBotao(botao) {
  const imagemBotao = botao.querySelector("img");
  const imagemOriginal = imagemBotao.src;

  const imagemPath = botao.getAttribute("data-imagem");
  if (imagemPath) {
    imagemBotao.src = imagemPath;
  }

  botao.addEventListener("mouseenter", function () {
    if (imagemPath) {
      imagemBotao.src = imagemOriginal;
    }
  });
}
