const swap = (array, pos1, pos2) => {
  let temp = array[pos1];
  array[pos1] = array[pos2];
  array[pos2] = temp;
  return array;
};

const shuffle = (array, trocas) => {
  let i = 0;
  while (i < trocas) {
    let pos1 = Math.floor(Math.random() * array.length);
    let pos2 = Math.floor(Math.random() * array.length);
    swap(array, pos1, pos2);
    i++;
  }
  return array;
};

const bubble_sort = (array) => {
  let i = 0;
  while (i < array.length) {
    let j = 0;
    while (j < array.length - 1) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
      j++;
    }
    i++;
  }
  return array;
};

const selection_sort = (array) => {
  let i = 0;
  while (i < array.length) {
    let j = i + 1;
    let min = i;
    while (j < array.length) {
      if (array[j] < array[min]) {
        min = j;
      }
      j++;
    }
    swap(array, i, min);
    i++;
  }
  return array;
};

const quick_sort = (array, inicio, fim) => {
  if (inicio < fim) {
    let pivo = partition(array, inicio, fim);
    quick_sort(array, inicio, pivo - 1);
    quick_sort(array, pivo + 1, fim);
  }
  return array;
};

const partition = (array, inicio, fim) => {
  let pivo = array[fim];
  let i = inicio;
  let j = inicio;
  while (j < fim) {
    if (array[j] <= pivo) {
      swap(array, i, j);
      i++;
    }
    j++;
  }
  swap(array, i, fim);
  return i;
};

let array = [];

function add() {
  let valor = document.getElementById("valor").value;
  array.push(valor);
  let node = document.createElement("li");
  let textnode = document.createTextNode(valor);
  node.appendChild(textnode);
  document.getElementById("valores").appendChild(node);
}

function ordenar() {
  const lista = document.getElementById("valores");
  const selecionados = document.getElementById("selecionados");
  const array = Array.from(lista.children).map(function (item) {
    return parseInt(item.innerHTML);
  });
  const algoritmo = selecionados.options[selecionados.selectedIndex].value;

  let start = 0;
  let end = array.length - 1;

  switch (algoritmo) {
    case "bubble_sort":
      bubble_sort(array);
      break;
    case "selection":
      selection_sort(array);
      break;
    case "quick_sort":
      quick_sort(array, start, end);
      break;
  }

  let novosValores = array
    .map(function (valor) {
      return `<li>${valor}</li>`;
    })
    .reduce(function (acumulador, valor) {
      return acumulador + valor;
    }, "");
  lista.innerHTML = novosValores;
}

function misturar() {
  const lista = document.getElementById("valores");
  const array = Array.from(lista.children).map(function (item) {
    return parseInt(item.innerHTML);
  });

  shuffle(array, array.length);

  let novosValores = array
    .map(function (valor) {
      return `<li>${valor}</li>`;
    })
    .reduce(function (acumulador, valor) {
      return acumulador + valor;
    }, "");
  lista.innerHTML = novosValores;
}
