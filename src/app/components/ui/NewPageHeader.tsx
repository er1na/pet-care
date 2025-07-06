'use client';

import React from 'react';
import { Pet } from '@/types/pet';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface NewPageHeaderProps {
  title: string;
  subtitle: string;
}

export default function NewPageHeader({ title, subtitle }: NewPageHeaderProps) {
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

  const handleBack = () => {
    router.back();
  };

  return (
    <div>
      <div className="rounded-3xl p-10 bg-blue-400 flex flex-col shadow-md items-center justify-center relative">
        <button className="absolute left-6 top-6" onClick={handleBack}>
          <Image
            src="/chevron-left.svg"
            alt="arrow-left"
            width={24}
            height={24}
            className="filter brightness-0 invert"
          />
        </button>
        <h1 className="text-3xl font-bold flex items-center gap-2">
          {title}
        </h1>
        <p className="text-sm mt-2">{subtitle}</p>
      </div>
    </div>
  );
}