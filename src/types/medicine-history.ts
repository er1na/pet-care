export type MedicineHistory = {
    id: number;
    petId: number;
    hospitalId: number;
    medicineId: number;
    prescriptionDate: string;
    reminder?: string;
    memo?: string;
  };