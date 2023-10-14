module.exports = class Data1697259879757 {
    name = 'Data1697259879757'

    async up(db) {
        await db.query(`CREATE TABLE "transaction" ("id" character varying NOT NULL, "token" text NOT NULL, "amount" numeric NOT NULL, "from" text NOT NULL, "recipient" text NOT NULL, CONSTRAINT "PK_89eadb93a89810556e1cbcd6ab9" PRIMARY KEY ("id"))`)
    }

    async down(db) {
        await db.query(`DROP TABLE "transaction"`)
    }
}
