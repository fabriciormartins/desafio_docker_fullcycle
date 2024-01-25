const express = require('express')
const app = new express()
const port = 3000

const PeopleService = require('./service/peopleService');
const FakerService = require('./service/fakerService');

const peopleService = new PeopleService();
app.get('/', async (req, res) => {
  await peopleService.save(FakerService.createRadomName());

  const peoples = await peopleService.findAll();

  res.send(`<!DOCTYPE html>
    <html lang="pt-br">
      <style>
      *{
        background: black;
        color: yellow;
        text-align: center;
      }
      li {
        list-style: none;
      }
      </style>

      <!-- <script>
        setInterval(function() {
          location.reload();
        }, 5000);
      </script> -->
      <h1>Full Cycle Rocks!</h1>
  <br/>
  <h3>Pessoas cadastradas</h3>
    <ul>
    ${peoples.map(pessoa => `<li>${pessoa.name}</li>`).join('')}
    </ul>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})