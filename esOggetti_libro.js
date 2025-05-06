const libro = {
    titolo: "Il nome della rosa",
    autore: "Umberto Eco",
    anno: 1980,
    
    descrizione: function() {
      return "Dati del libro\nTitolo:"+this.titolo+"\nAutore: "+this.autore+"\nAnno: "+this.anno;
    }
  };
  
console.log(libro.descrizione());
