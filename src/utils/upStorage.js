// upStorage.js - Utilitaire pour gérer les Unités Pédagogiques dans localStorage

const UP_KEY = "esatic_ups";

// UPs par défaut au démarrage
const defaultUPs = [
  { id: 1, nom: "UP Informatique" },
  { id: 2, nom: "UP Mathématiques" },
  { id: 3, nom: "UP Réseaux" },
  { id: 4, nom: "UP Génie Logiciel" },
  { id: 5, nom: "UP Intelligence Artificielle" },
  { id: 6, nom: "UP Systèmes Embarqués" },
];

// Récupérer toutes les UPs
export function getUPs() {
  try {
    const data = localStorage.getItem(UP_KEY);
    if (!data) {
      // Initialiser avec les UPs par défaut
      localStorage.setItem(UP_KEY, JSON.stringify(defaultUPs));
      return defaultUPs;
    }
    return JSON.parse(data);
  } catch {
    return defaultUPs;
  }
}

// Ajouter une nouvelle UP
export function addUP(nom) {
  const ups = getUPs();
  const newUP = {
    id: Date.now(),
    nom: nom.trim(),
  };
  const updated = [...ups, newUP];
  localStorage.setItem(UP_KEY, JSON.stringify(updated));
  return updated;
}

// Supprimer une UP par id
export function deleteUP(id) {
  const ups = getUPs();
  const updated = ups.filter((up) => up.id !== id);
  localStorage.setItem(UP_KEY, JSON.stringify(updated));
  return updated;
}