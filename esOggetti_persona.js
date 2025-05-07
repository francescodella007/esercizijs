<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>esOggetti_persona</title>
</head>
<body>
    <button onclick="dataScadenza()">Imposta data di scadenza</button>

    <div id="output"></div>

    <script>
        const persona = {
            nome: "Francesco",
            cognome: "Dell'Aquila",
            annoNascita: 2007,
        
            calcolaEta: function() {
              const annoCorrente = 2025;
              return annoCorrente - this.annoNascita;
            },
            nomeCompleto: function() {
              return `${this.nome} ${this.cognome}`;
            }
          };
        console.log("Nome e cognome: ",persona.nomeCompleto(),"\nEtà: ",persona.calcolaEta());
    </script>
</body>
</html>
