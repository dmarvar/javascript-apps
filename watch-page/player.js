$(document).ready(function() {
  let mainDiv = document.createElement("div");
  function createPlaylistCard(obj) {
    if (obj.id > 6) {
      return mainDiv;
    }
    mainDiv.id = "card" + obj.id;
    mainDiv.className = "playlist-card";
    mainDiv.addEventListener("click", function() {
      fetchById(obj.id);
    });

    let thumbnail = document.createElement("img");
    thumbnail.src = obj.thumbnail;
    thumbnail.className = "thumbnail";

    let title = document.createElement("h3");
    title.className = "video-card-title";
    title.innerHTML = obj.title;

    mainDiv.appendChild(thumbnail);
    mainDiv.appendChild(title);

    return mainDiv;
  }
  function createVideoPlayer(obj) {
    $("html, body").animate({ scrollTop: 0 }, "fast");
    let video = document.getElementById("video-player");
    let count = document.getElementById("views-count");
    let title = document.getElementById("video-title");
    let description = document.getElementById("video-description");
    video.src = `https://player.vimeo.com/video/${obj.vimeoId}`;
    count.innerText = obj.views;
    title.innerText = obj.title;
    description.innerText = obj.description;
  }
  function fetchById(id) {
    //   Getting wrapper
    fetch(`http://5d76bf96515d1a0014085cf9.mockapi.io/video/${id}`, {
      method: "GET"
    })
      .then(response => response.json())
      .then(obj => createVideoPlayer(obj))
      .catch(error => console.error("error:", error));
  }

  // Get parent tag
  let wrapper = document.getElementById("playlist-wrapper");
  // Fetch server looking for cards
  fetch("https://5d76bf96515d1a0014085cf9.mockapi.io/playlist", {
    method: "GET"
  })
    .then(response => response.json())
    .then(json => json.map(obj => wrapper.appendChild(createPlaylistCard(obj))))
    .catch(error => console.error("error:", error));
  // Inicializamos el primer objeto
  fetchById(1);
});
