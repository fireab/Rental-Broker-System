/*
  Warnings:

  - You are about to drop the column `catagory` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `city` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `state` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `street` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `posts` table. All the data in the column will be lost.
  - Added the required column `propertyCity` to the `Posts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `propertyDescription` to the `Posts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `propertyRegion` to the `Posts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `propertyTitle` to the `Posts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `propertyType` to the `Posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `posts` DROP COLUMN `catagory`,
    DROP COLUMN `city`,
    DROP COLUMN `description`,
    DROP COLUMN `state`,
    DROP COLUMN `street`,
    DROP COLUMN `title`,
    ADD COLUMN `maxLeaseLengthType` VARCHAR(191) NULL,
    ADD COLUMN `maxLeaseLengthValue` INTEGER NULL,
    ADD COLUMN `minLeaseLengthType` VARCHAR(191) NULL,
    ADD COLUMN `minLeaseLengthValue` INTEGER NULL,
    ADD COLUMN `propertyCity` VARCHAR(191) NOT NULL,
    ADD COLUMN `propertyDescription` VARCHAR(191) NOT NULL,
    ADD COLUMN `propertyLeaseTerm` VARCHAR(191) NULL,
    ADD COLUMN `propertyQuantity` INTEGER NULL,
    ADD COLUMN `propertyRegion` VARCHAR(191) NOT NULL,
    ADD COLUMN `propertyStreet` VARCHAR(191) NULL,
    ADD COLUMN `propertyTitle` VARCHAR(255) NOT NULL,
    ADD COLUMN `propertyType` VARCHAR(191) NOT NULL,
    MODIFY `postExpiration` DATETIME(3) NULL;

-- CreateTable
CREATE TABLE `propertyContacts` (
    `id` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NULL,
    `value` VARCHAR(191) NULL,
    `postsId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `propertyPrices` (
    `id` VARCHAR(191) NOT NULL,
    `price` DECIMAL(65, 30) NOT NULL,
    `priceType` VARCHAR(191) NOT NULL,
    `postsId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `propertyContacts` ADD CONSTRAINT `propertyContacts_postsId_fkey` FOREIGN KEY (`postsId`) REFERENCES `Posts`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `propertyPrices` ADD CONSTRAINT `propertyPrices_postsId_fkey` FOREIGN KEY (`postsId`) REFERENCES `Posts`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
