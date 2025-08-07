const url = "https://pokeapi.co/api/v2/pokemon?limit=20";
async function fetchDati(url) {
  try {
    const result = await fetch(url);
    const data = await result.json();
    return data.results;
  } catch (error) {
    console.error(error);
  }
}
// fetchDati(url).then((x) => console.log(x));

async function renderCard() {
  try {
    const cards = await fetchDati(url);
    cards.forEach((card) => {
      const div = document.createElement("div");
      const h6 = document.createElement("h6");
      const button = document.createElement("button");
      h6.innerText = card.name;
      button.innerText = "Info";
      button.addEventListener("click", async () => {
        try {
          const result = await fetch(card.url);
          const data = await result.json();
          const src = data.sprites.front_default;
          const img = document.createElement("img");
          const popup = document.createElement("div");
          const buttonX = document.createElement("button");
          buttonX.innerText = "X";
          buttonX.addEventListener("click", () => {
            document.body.removeChild(popup);
          });
          popup.classList.add("popup");
          img.src = src;
          popup.appendChild(img);
          popup.appendChild(buttonX);
          document.body.appendChild(popup);
        } catch (error) {
          console.error;
        }
      });
      div.appendChild(h6);
      div.appendChild(button);
      document.body.appendChild(div);
    });
  } catch (error) {
    console.log(error);
  }
}
renderCard();
