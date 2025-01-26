-- CreateTable
CREATE TABLE "cart" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "PK_c524ec48751b9b5bcfbf6e59be7" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cart_item" (
    "id" SERIAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "cartId" INTEGER,
    "productId" INTEGER,

    CONSTRAINT "PK_bd94725aa84f8cf37632bcde997" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "color" (
    "id" SERIAL NOT NULL,
    "color" VARCHAR NOT NULL,
    "hex_color" VARCHAR,
    "product_id" INTEGER,

    CONSTRAINT "PK_d15e531d60a550fbf23e1832343" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "favorite" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "PK_495675cec4fb09666704e4f610f" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "favorite_item" (
    "id" SERIAL NOT NULL,
    "favoriteId" INTEGER,
    "productId" INTEGER,

    CONSTRAINT "PK_fa18c8a7e7b3aa288ebd18885d0" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "image" (
    "id" SERIAL NOT NULL,
    "src_path" VARCHAR,
    "product_id" INTEGER,

    CONSTRAINT "PK_d6db1ab4ee9ad9dbe86c64e4cc3" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product" (
    "product_id" SERIAL NOT NULL,
    "title" VARCHAR,
    "description" VARCHAR,
    "articul" VARCHAR,
    "price" INTEGER,
    "prev_price" INTEGER,
    "available" BOOLEAN,
    "previewImage" VARCHAR,
    "brand" VARCHAR,
    "country" VARCHAR,
    "category" VARCHAR,
    "material" VARCHAR,

    CONSTRAINT "PK_1de6a4421ff0c410d75af27aeee" PRIMARY KEY ("product_id")
);

-- CreateTable
CREATE TABLE "size" (
    "id" SERIAL NOT NULL,
    "size" VARCHAR NOT NULL,
    "product_id" INTEGER,

    CONSTRAINT "PK_66e3a0111d969aa0e5f73855c7a" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "spec" (
    "id" SERIAL NOT NULL,
    "year" INTEGER NOT NULL,
    "country" VARCHAR NOT NULL,
    "material" VARCHAR NOT NULL,
    "brand" VARCHAR NOT NULL,
    "category" VARCHAR NOT NULL,
    "product_id" INTEGER,

    CONSTRAINT "PK_750ab65a0e1b51a805499dbfc13" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "surname" VARCHAR,
    "showname" VARCHAR,
    "email" VARCHAR NOT NULL,
    "phone_number" VARCHAR,
    "city" VARCHAR,
    "street" VARCHAR,
    "house" INTEGER,
    "floor" INTEGER,
    "flat_number" INTEGER,
    "password" VARCHAR NOT NULL,

    CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "cart" ADD CONSTRAINT "FK_756f53ab9466eb52a52619ee019" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "cart_item" ADD CONSTRAINT "FK_29e590514f9941296f3a2440d39" FOREIGN KEY ("cartId") REFERENCES "cart"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "cart_item" ADD CONSTRAINT "FK_75db0de134fe0f9fe9e4591b7bf" FOREIGN KEY ("productId") REFERENCES "product"("product_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "color" ADD CONSTRAINT "FK_6b398fc4538169fef9c175f2ee8" FOREIGN KEY ("product_id") REFERENCES "product"("product_id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "favorite" ADD CONSTRAINT "FK_83b775fdebbe24c29b2b5831f2d" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "favorite_item" ADD CONSTRAINT "FK_886acc99303b9e5f7d7689c2b99" FOREIGN KEY ("productId") REFERENCES "product"("product_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "favorite_item" ADD CONSTRAINT "FK_bba33684c6b4e254a08116b7dac" FOREIGN KEY ("favoriteId") REFERENCES "favorite"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "image" ADD CONSTRAINT "FK_e6a9e829e17fc47fc17d695af8e" FOREIGN KEY ("product_id") REFERENCES "product"("product_id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "size" ADD CONSTRAINT "FK_1f746c932c922d5e6dfbb7a0dbb" FOREIGN KEY ("product_id") REFERENCES "product"("product_id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "spec" ADD CONSTRAINT "FK_27d8610af03eb1b5a1b0ea9aa8b" FOREIGN KEY ("product_id") REFERENCES "product"("product_id") ON DELETE SET NULL ON UPDATE NO ACTION;

