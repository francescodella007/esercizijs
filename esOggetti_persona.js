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