
exports.up = function(knex) {
    return knex.schema
        .createTable('test_palabras', function (table) {
            table.increments('id').index();
            table.string('origin', 255).notNullable().unique();
            table.string('translation', 255).notNullable();
            table.integer('translation').defaultTo(0)

        })
        .createTable('products', function (table) {
            table.increments('id');
            table.decimal('price').notNullable();
            table.string('name', 1000).notNullable();
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTable("test_palabras")
        .dropTable("users");
};

exports.config = { transaction: false };

//
//
// -- DROP TABLE IF EXISTS public.words;
//
// CREATE TABLE IF NOT EXISTS public.words
// (
//     id integer NOT NULL DEFAULT nextval('words_id_seq'::regclass),
//     origin character varying(30) COLLATE pg_catalog."default" NOT NULL,
//     translation character varying(30) COLLATE pg_catalog."default",
//     rank integer DEFAULT 0,
//     CONSTRAINT words_pkey PRIMARY KEY (id),
//     CONSTRAINT words_origin_key UNIQUE (origin)
// )
//
// TABLESPACE pg_default;
//
// ALTER TABLE IF EXISTS public.words
// OWNER to "palabrasApp";