-- CreateTable
CREATE TABLE "RssFeed" (
    "id" SERIAL NOT NULL,
    "user" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "lastRead" TIMESTAMP(3),

    CONSTRAINT "RssFeed_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserInfos" (
    "id" TEXT NOT NULL,
    "backgroundUrl" TEXT,

    CONSTRAINT "UserInfos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RssFeed_user_url_key" ON "RssFeed"("user", "url");
