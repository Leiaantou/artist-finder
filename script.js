const refresh = document.getElementById("refresh");
const resultat = document.getElementById("resultat");

async function getImg() {
  try {
    const reponseJSON = await fetch(
      "https://api.unsplash.com/photos/random/?client_id=QffH8zIJgB6g2PGgYu0u64YzzVP9rZXQXe-_Ykr2M9A"
    );
    console.log(reponseJSON);
    const reponseJS = await reponseJSON.json();
    console.log(reponseJS);
    resultat.innerHTML = `   <img class="img-artist" src="${
      reponseJS.urls.regular
    }" alt="${reponseJS.description}" />
    <h1>Artiste : ${reponseJS.user.name}</h1>
    <p>Découvrez son univers : 
      ${
        reponseJS.user.bio
          ? reponseJS.user.bio
          : "Désolé, information manquante"
      }
    </p>
    <div class="btn">
      <a class="btn-insta" target="_blank"
      href="https://instagram.com/${reponseJS.user.instagram_username}">
        Je découvre sur Instagram
      </a>
    </div>
`;
  } catch (error) {
    console.log(error, "erreur");
  }
}

getImg();

refresh.addEventListener("click", getImg);
