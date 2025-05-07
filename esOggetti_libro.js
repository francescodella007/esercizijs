<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>esOggetti_calendario</title>
</head>
<body>
    <button onclick="dataScadenza()">Imposta data di scadenza</button>

    <div id="output"></div>

    <script>
        const libro = {
            titolo: "Il nome della rosa",
            autore: "Umberto Eco",
            anno: 1980,
            
            descrizione: function() {
              return "Dati del libro\nTitolo:"+this.titolo+"\nAutore: "+this.autore+"\nAnno: "+this.anno;
            }
          };
          
        console.log(libro.descrizione());
    </script>
</body>
</html>
