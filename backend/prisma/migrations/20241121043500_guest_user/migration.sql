-- CreateTable
CREATE TABLE "Guest" (
    "id" TEXT NOT NULL,
    "isActivated" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "guest_name" TEXT NOT NULL,
    "user_id" TEXT,

    CONSTRAINT "Guest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Guest_id_key" ON "Guest"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Guest_guest_name_key" ON "Guest"("guest_name");

-- AddForeignKey
ALTER TABLE "Guest" ADD CONSTRAINT "Guest_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
