const fs = require('fs')
const csv = require('fast-csv');
const stream = fs.createReadStream('meus-recebimentos-completo-18-11-2020-1545.csv')
.pipe(csv.parse({
    headers: false,
    delimiter: ';',
    quote: '"'
}))
  .on("error", error => console.log("read finished", error))
  .on("data", data => console.log("data", data));