let receitas = [ //JSON
  {
      "titulo": "Arroz de Couve-Flor",
      "imagem": "../img/arroz.jpeg",
      "ingredientes": ['Arroz',
      'Couve-Flor',
      'Cebola',
      'Azeite',
      'Açafrão da Terra'],
      "preparo": "Deixe a couve-flor picada, adicione os ingredientes e refogue bem, adicione sal, tampe a panela e deixe cozinhar.",
  },
  {
      "titulo": "Bolo de Café",
      "imagem": "../img/bolo.jpeg",
      "ingredientes": ['Farinha de Trigo',
      'Açúcar',
      'Café Coado',
      'Chocolate em Pó',
      'Ovos'],
      "preparo": "Bata o açúcar, as gemas e o café, adicione farinha e chocolate e mexa bem, bata as claras e junte a mistura."
  },
  {
    "titulo": "Coxinha de Brigadeiro",
    "imagem": "../img/coxinha.jpeg",
    "ingredientes": ['Leite Condensado',
    'Chocolate em Pó',
    'Manteiga',
    'Morango',
    'Chocolate Granulado'],
    "preparo": "Junte o leite condensado, chocolate em pó e manteiga, aqueça no fogo baixo, envolva os morangos e passe no granulado"
}
]


function getListaIngredientes(receita) {
  const lista = receita.ingredientes
    .map(ingrediente => `<li class='mb-1'>${ingrediente}</li>`)
    .reduce((acumulador, item) => acumulador + item, "<ul class='mb-4'>") + "</ul>"
  return lista
}


function getCard(receita) { 
  let card = `
    <div class='card rounded-3 my-4' style='width: 330px; height: 600px;'> 
      <img src='${receita.imagem}' class='card-img-top'>
      <div class='card-body'>
        <h5 class='card-title text-center fs-4 p-2 fw-bold'>${receita.titulo}</h5>
        <div class='card-text'>${getListaIngredientes(receita)}</div>
        <hr>
        <p class='card-text p-2'>${receita.preparo}</p>
      </div>
    </div>`
  return card
}


function preencheCatalogo() {
  const html = receitas
    .map(receita => getCard(receita))
    .reduce((acumulador, item) => acumulador + item, "")
  document.getElementById("pnlCatalogo").innerHTML = html
}
onload = preencheCatalogo()

