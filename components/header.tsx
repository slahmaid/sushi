"use client";

import MultiLevelDrawerMenu from "@/components/menu/multi-level-drawer-menu";

const primaries = [
  { id: "menu", label: "Carte" },
  { id: "gallery", label: "Galerie" },
  { id: "sets", label: "Formules" },
  { id: "about", label: "À propos" },
];

const sublists = {
  menu: ["Nigiri", "Sashimi", "Makis", "Omakase"],
  gallery: ["Comptoir", "Cuisine", "Dressage", "Soir"],
  sets: ["Déjeuner", "Dîner", "Omakase"],
  about: ["Notre histoire", "Chefs", "Réservations", "Contact"],
};

export function Header() {
  return (
    <MultiLevelDrawerMenu
      className="mldm_as_header"
      showPage={false}
      logo="SUSHI."
      panelBg="#ececec"
      primaries={primaries}
      sublists={sublists}
      secondaryLinks={[
        { label: "Notre histoire", href: "#about" },
        { label: "Réservations", href: "#about" },
      ]}
      cards={[
        { src: "/images/mono-1.webp", alt: "Nigiri sur la planche", label: "Galerie" },
        { src: "/images/hero-mono.webp", alt: "Service omakase", label: "Omakase" },
      ]}
    />
  );
}
