
const api = fetch("https://api.tvmaze.com/shows/82/episodes")
  .then((res) => {
    return res.json();
  })
  .then((films) => {
    for (let film of films) {
      let episode = film.number;
      let episodeString = `0${episode}`;
      if (episode > 10) {
        episodeString = `${episode}`;
      }
      let title = `${film.name} - S0${film.season}E${episodeString}`;
      let url = film.image.medium;
      let summary = film.summary;
      makecard(url, title, summary);
    }
  });
  function makeContent() {
    const content = document.createElement("div");
    content.id = "content";
    document.body.appendChild(content);
  }

function makecard(url , title , summary)
{
  const container = document.createElement("div");
  container.classList.add("cardContainer");
  content.appendChild(container);

  const soloCard = document.createElement("div");
  soloCard.classList.add("sCard");
  container.appendChild(soloCard);

  const cardImgDiv = document.createElement("div");
  cardImgDiv.classList.add("CID");
  soloCard.appendChild(cardImgDiv);

  const theImg = document.createElement("img");
  theImg.src = url;
  cardImgDiv.appendChild(theImg);

  const eTitleDiv = document.createElement("div");
  eTitleDiv.classList.add("ETD");
  soloCard.appendChild(eTitleDiv);

  const eTitle = document.createElement("p")
  eTitle.classList.add("et");
  eTitle.innerHTML = `${title}`;
  eTitleDiv.appendChild(eTitle);

  const ssummary = document.createElement("div");
  const summaryContent = document.createElement("p");
  summaryContent.innerHTML= `${summary}`;
  ssummary.appendChild(summaryContent);
  soloCard.appendChild(ssummary);
}
  makeContent();