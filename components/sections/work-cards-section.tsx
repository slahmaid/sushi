"use client";

import { useState } from "react";
import "./work-cards-section.css";

const cards = [
  {
    image: "/images/mono-1.webp",
    alt: "Nigiri sur riz",
    pin: "Neuf",
    title: "Nigiri",
    summary: "Riz assaisonné, une tranche de poisson, rien de plus.",
    initials: "8",
    author: "Comptoir",
    meta: "$28",
    more: "Huit pièces coupées à la commande, servies dans l’ordre où elles quittent la planche.",
  },
  {
    image: "/images/mono-2.webp",
    alt: "Sélection de sashimi",
    title: "Sashimi",
    summary: "La sélection du chef, tranchée pour la table.",
    initials: "6",
    author: "Chef",
    meta: "$36",
    more: "Poisson du jour, une coupe précise, et le goût du produit sans rien autour.",
  },
  {
    image: "/images/mono-3.webp",
    alt: "Makis",
    title: "Makis",
    summary: "Algue, riz et poisson, roulés court pour le déjeuner.",
    initials: "SU",
    author: "Planche",
    meta: "Déjeuner",
    more: "Une formule simple, servie froide, avec le même riz cuit le matin.",
  },
  {
    image: "/images/mono-4.webp",
    alt: "Service omakase",
    title: "Omakase",
    summary: "Douze services au comptoir, dans l’ordre du chef.",
    initials: "12",
    author: "Chef",
    meta: "$85",
    more: "La soirée entière tient sur la planche : peu d’ingrédients, un assaisonnement exact.",
  },
];

function CardMore({ text }: { text: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`cutout_card_details${open ? " is_open" : ""}`}>
      <button
        type="button"
        className="cutout_card_summary"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span>Lire la suite</span>
        <span aria-hidden="true">+</span>
      </button>
      <div className="cutout_card_details_clip">
        <div>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export function WorkCardsSection() {
  return (
    <section className="work_section" id="gallery" aria-labelledby="work_heading">
      <div className="work_section_inner">
        <header className="work_section_header">
          <p className="work_section_kicker">SUSHI. / LA CARTE</p>
          <div className="work_section_intro">
            <h2 id="work_heading">Quatre services.</h2>
            <p>Nigiri, sashimi, makis et un court omakase.</p>
          </div>
        </header>

        <div className="work_grid">
          {cards.map((card) => (
            <article className="cutout_card" key={card.title}>
              <div className="cutout_card_media">
                <img src={card.image} alt={card.alt} loading="lazy" />
                {card.pin ? <span className="cutout_card_pin">{card.pin}</span> : null}
              </div>
              <div className="cutout_card_content">
                <h3>{card.title}</h3>
                <p>{card.summary}</p>
                <div className="cutout_card_footer">
                  <div className="cutout_card_author">
                    <span className="cutout_card_avatar">{card.initials}</span>
                    <span>{card.author}</span>
                  </div>
                  <span className="cutout_card_meta">{card.meta}</span>
                </div>
                <CardMore text={card.more} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
