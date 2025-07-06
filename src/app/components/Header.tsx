'use client';

import React from 'react';
import { Pet } from '@/types/pet';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [pets, setPets] = useState<Pet[]>([]);
  const router = useRouter();

  useEffect(() => {
    const loadPets = async () => {
      try {
        const res = await fetch('/api/pets');
        const data = await res.json();
        setPets(data);
      } catch (error) {
        console.error('Error loading pets:', error);
      }
    };
    loadPets();
  }, []);

  const handleNewPet = () => {
    router.push('/pets/new');
  };

  return (
    <div>
      <div className="rounded-3xl p-6 bg-blue-400 flex flex-col shadow-md items-center justify-center">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          PetCare Pro
        </h1>
        <p className="text-sm mt-2">愛するペットの健康を記録しましょう</p>
        <div className="flex gap-2 flex-wrap py-2">
          {pets.map((pet) => (
            <button key={pet.id} className="px-4 py-1 rounded-full bg-white/20 backdrop-blur-md text-white">
              {pet.name}
            </button>
          ))}
          <button
            className="px-4 py-1 rounded-full bg-white/30 text-white"
            onClick={handleNewPet}
          >
            + New Pet
          </button>
        </div>
      </div>
    </div>

  );
}