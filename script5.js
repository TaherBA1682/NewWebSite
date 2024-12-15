
document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.getElementById("loginButton");
    const loginPopup = document.getElementById("loginPopup");
    const closePopup = document.getElementById("closePopup");
    const validateLogin = document.getElementById("validateLogin");
    const mainTitle = document.getElementById("mainTitle");
    const interactButton = document.getElementById("interactButton");
    const dynamicContent = document.getElementById("dynamicContent");
    const hoverableImages = document.querySelectorAll(".hoverable");

   
    document.getElementById('aboutUsButton').addEventListener('click', () => {
        alert('Thank you for wanting to know more about us! Stay tuned for more exciting updates.');
    });
    loginButton.addEventListener("click", () => {
        loginPopup.classList.remove("hidden");
    });

    closePopup.addEventListener("click", () => {
        loginPopup.classList.add("hidden");
    });

    validateLogin.addEventListener("click", () => {
        const username = document.getElementById("username").value.trim();
        if (username) {
            alert(`Bienvenue, ${username}!`);
            loginPopup.classList.add("hidden");
        } else {
            alert("Veuillez entrer un nom d'utilisateur.");
        }
    });

   
    interactButton.addEventListener("click", () => {
        const number = prompt("Combien de blocs voulez-vous ajouter?");
        if (isNaN(number) || number <= 0) {
            alert("Veuillez entrer un nombre valide.");
            return;
        }

        if (confirm(`Voulez-vous vraiment ajouter ${number} blocs?`)) {
            dynamicContent.innerHTML = ""; 
            for (let i = 1; i <= number; i++) {
                const newDiv = document.createElement("div");
                newDiv.textContent = `Bloc ${i}`;
                newDiv.style.backgroundColor = i % 2 === 0 ? "#2575fc" : "#ff8c00";
                newDiv.style.color = "#fff";
                newDiv.style.padding = "10px";
                newDiv.style.margin = "5px 0";
                newDiv.style.borderRadius = "5px";

                
                newDiv.addEventListener("click", () => {
                    alert(`Vous avez cliqué sur le Bloc ${i}`);
                });

                dynamicContent.appendChild(newDiv);
            }
        } else {
            alert("Ajout annulé.");
        }
    });

    
    hoverableImages.forEach((img, index) => {
        img.addEventListener("mouseover", () => {
            mainTitle.textContent = `Vous survolez l'image ${index + 1}`;
        });

        img.addEventListener("mouseout", () => {
            mainTitle.textContent = "Bienvenue sur Sport Live";
        });
    });
});
