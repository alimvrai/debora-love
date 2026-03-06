"use client";

import { useEffect, useState } from "react";

export default function Home() {

  const text = "Débora ❤️ Alim";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {

    let i = 0;

    const typing = setInterval(() => {
      setDisplayText(text.slice(0, i + 1));
      i++;

      if (i === text.length) {
        clearInterval(typing);
      }

    }, 120);

    const hearts = setInterval(() => {

      const heart = document.createElement("div");

      heart.innerHTML = "❤️";

      heart.style.position = "fixed";
      heart.style.top = "-20px";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.fontSize = "22px";
      heart.style.animation = "fall 4s linear";

      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 4000);

    }, 400);

    return () => clearInterval(hearts);

  }, []);

  return (

    <main style={{
      height:"100vh",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      textAlign:"center",
      fontFamily:"sans-serif",
      backgroundImage:"url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
      backgroundSize:"cover",
      backgroundPosition:"center"
    }}>

      <style>{`

      @keyframes fall {
        to {
          transform: translateY(110vh);
        }
      }

      .card{
        background:rgba(0,0,0,0.5);
        padding:40px;
        border-radius:20px;
        color:white;
        max-width:400px;
      }

      .names{
        font-size:36px;
        font-weight:bold;
        min-height:50px;
      }

      button{
        margin-top:20px;
        padding:12px 25px;
        border:none;
        border-radius:20px;
        font-size:16px;
        cursor:pointer;
        background:white;
        color:#ff4fa3;
      }

      `}</style>

      <div className="card">

        <div className="names">
          {displayText}
        </div>

        <p style={{marginTop:"20px"}}>
          Depuis notre rencontre à la plage 🌊
        </p>

        <p>
          je pense souvent à toi.
        </p>

        <p>
          Ton sourire m’a marqué et j’aimerais vraiment apprendre à te connaître davantage.
        </p>

        <button
          onClick={() =>
            alert("Débora, cette petite page est juste pour te dire que je t’apprécie beaucoup ❤️")
          }
        >
          Clique ici 💌
        </button>

      </div>

    </main>
  );
}
