export function initDB(err, client, release) {
    if (err) return reply.send(err);
    client.query(
        'CREATE TABLE IF NOT EXISTS "words" ("id" SERIAL PRIMARY KEY,"origin" varchar(30),"translate" varchar(30),"rank" integer);',
        function onResult(err, result) {
            release();
            reply.send(err || result);
        }
    );
}

export function addWord(err, client, release) {
    if (err) return reply.send(err);
    client.query(
        'CREATE TABLE IF NOT EXISTS "words" ("id" SERIAL PRIMARY KEY,"origin" varchar(30),"translate" varchar(30),"rank" integer);',
        function onResult(err, result) {
            release();
            reply.send(err || result);
        }
    );
}