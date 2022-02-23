import { useEffect, useState } from "react";
import { Pet } from "./pet";
export function PetInfo() {
  const [pet, setPet] = useState<Pet>({ name: "Willy", breed: "Killer Whale" });

  // OPTIONAL
  function newPet() {
    setPet({ name: "Rony", breed: "White-Puppy" });
  }

  return (
    <div>
      <h1 className="name">{pet.name}</h1>
      <h2 className="breed">{pet.breed}</h2>

      {/* OPTIONAL */}
      <button className="newPet" onClick={newPet}>
        new pet
      </button>
    </div>
  );
}
