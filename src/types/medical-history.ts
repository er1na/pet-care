export type MedicalHistory = {
    id: number;
    petId: number;
    hospitalId: number;
    date: string;
    symptoms: string;
    fee: number;
    memo?: string;
  };