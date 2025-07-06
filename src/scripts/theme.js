const cardTheme = "src/page/components/cardtheme.html";

$(document).ready(function () {
  loadThemes();
});

function loadThemes() {
  $.getJSON("src/json/themes.json", (item) => {
    if (!item || item.length === 0) {
      console.error("Tema não encontrado");
      return;
    }
    item.forEach((element) => {
      const card = $('<div class="card-theme"></div>');
      $("#cards-theme").append(card);

      // card.load(cardTheme, function () {
      //   addCardContent(element, card);
      // });
      $.get("src/page/components/cardtheme.html", function (html) {
        card.append(html);
        addCardContent(element, card);
      });
    });
  }).fail(function () {
    console.error("Erro ao carregar os Temas!");
  });
}

function addCardContent(item, card) {
  card.find("img").attr("src", item.img);
  card.find("label").text(item.title);
}
