/*
  Warnings:

  - Added the required column `reportType` to the `Report` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `postimages` ADD COLUMN `requestId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `posts` ADD COLUMN `isBanned` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `rate` INTEGER NOT NULL DEFAULT 0,
    MODIFY `propertyDescription` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `propertycontacts` ADD COLUMN `requestId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `propertyprices` ADD COLUMN `requestId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `report` ADD COLUMN `reportType` VARCHAR(191) NOT NULL,
    ADD COLUMN `requestId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `savedposts` ADD COLUMN `requestId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `isBanned` BOOLEAN NOT NULL DEFAULT true;

-- CreateTable
CREATE TABLE `Request` (
    `id` VARCHAR(191) NOT NULL,
    `RequestTitle` VARCHAR(255) NOT NULL,
    `RequestDescription` TEXT NOT NULL,
    `RequestType` VARCHAR(191) NULL,
    `postType` VARCHAR(191) NOT NULL DEFAULT 'requst',
    `RequestRegion` VARCHAR(191) NULL,
    `RequestCity` VARCHAR(191) NULL,
    `propertyStreet` VARCHAR(191) NULL,
    `maxLeaseLengthValue` INTEGER NULL,
    `maxLeaseLengthType` VARCHAR(191) NULL,
    `minLeaseLengthValue` INTEGER NULL,
    `minLeaseLengthType` VARCHAR(191) NULL,
    `authorId` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `isBanned` BOOLEAN NOT NULL DEFAULT false,
    `updatedAt` DATETIME(3) NOT NULL,
    `postExpiration` DATETIME(3) NULL,
    `propertyQuantity` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `customerCare` (
    `id` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL DEFAULT 'customercare',
    `password` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `image` VARCHAR(255) NULL,
    `phoneNumber` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `customerCare_username_key`(`username`),
    UNIQUE INDEX `customerCare_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `SavedPosts` ADD CONSTRAINT `SavedPosts_requestId_fkey` FOREIGN KEY (`requestId`) REFERENCES `Request`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Request` ADD CONSTRAINT `Request_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `Users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Report` ADD CONSTRAINT `Report_requestId_fkey` FOREIGN KEY (`requestId`) REFERENCES `Request`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `propertyContacts` ADD CONSTRAINT `propertyContacts_requestId_fkey` FOREIGN KEY (`requestId`) REFERENCES `Request`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `propertyPrices` ADD CONSTRAINT `propertyPrices_requestId_fkey` FOREIGN KEY (`requestId`) REFERENCES `Request`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PostImages` ADD CONSTRAINT `PostImages_requestId_fkey` FOREIGN KEY (`requestId`) REFERENCES `Request`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
