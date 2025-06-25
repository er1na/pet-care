-- CreateTable
CREATE TABLE `Pet` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kinds` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `sex` VARCHAR(191) NOT NULL,
    `birthdate` DATETIME(3) NOT NULL,
    `chronicIllness` VARCHAR(191) NULL,
    `iconId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Icon` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `path` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Vaccine` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `kinds` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Hospital` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `tel` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Medicine` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `effect` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MedicalHistory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `petId` INTEGER NOT NULL,
    `hospitalId` INTEGER NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `symptoms` VARCHAR(191) NOT NULL,
    `fee` INTEGER NOT NULL,
    `memo` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VaccineHistory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `petId` INTEGER NOT NULL,
    `vaccineId` INTEGER NOT NULL,
    `hospitalId` INTEGER NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `nextDate` DATETIME(3) NOT NULL,
    `memo` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MedicineHistory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `petId` INTEGER NOT NULL,
    `hospitalId` INTEGER NOT NULL,
    `medicineId` INTEGER NOT NULL,
    `prescriptionDate` DATETIME(3) NOT NULL,
    `reminder` VARCHAR(191) NULL,
    `memo` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PetDiary` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `petId` INTEGER NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NULL,
    `date` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Pet` ADD CONSTRAINT `Pet_iconId_fkey` FOREIGN KEY (`iconId`) REFERENCES `Icon`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MedicalHistory` ADD CONSTRAINT `MedicalHistory_petId_fkey` FOREIGN KEY (`petId`) REFERENCES `Pet`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MedicalHistory` ADD CONSTRAINT `MedicalHistory_hospitalId_fkey` FOREIGN KEY (`hospitalId`) REFERENCES `Hospital`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VaccineHistory` ADD CONSTRAINT `VaccineHistory_petId_fkey` FOREIGN KEY (`petId`) REFERENCES `Pet`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VaccineHistory` ADD CONSTRAINT `VaccineHistory_vaccineId_fkey` FOREIGN KEY (`vaccineId`) REFERENCES `Vaccine`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VaccineHistory` ADD CONSTRAINT `VaccineHistory_hospitalId_fkey` FOREIGN KEY (`hospitalId`) REFERENCES `Hospital`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MedicineHistory` ADD CONSTRAINT `MedicineHistory_petId_fkey` FOREIGN KEY (`petId`) REFERENCES `Pet`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MedicineHistory` ADD CONSTRAINT `MedicineHistory_hospitalId_fkey` FOREIGN KEY (`hospitalId`) REFERENCES `Hospital`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MedicineHistory` ADD CONSTRAINT `MedicineHistory_medicineId_fkey` FOREIGN KEY (`medicineId`) REFERENCES `Medicine`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PetDiary` ADD CONSTRAINT `PetDiary_petId_fkey` FOREIGN KEY (`petId`) REFERENCES `Pet`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
