const { sqlite_convertTimestampToUTC, sqlite_convertUTCtoUTCLocale } = require("../src/scripts/database/sqlite");
const chai = require("chai");
const expect = chai.expect;
const assert = chai.assert;
const path = require("path")

describe(`Testes unitários:`, () => {
  describe(`Função ${sqlite_convertTimestampToUTC.name}():`, () => {
    
    it(`Recebendo uma string timestamp (sqlite) válido, deve retornar uma string UTC ISO sem erros`, () => {
      let input = "2025-05-21 19:42:10";
      let result = sqlite_convertTimestampToUTC(input);

      expect(result).to.be.an("string");
      expect(result).to.eq("2025-05-21T19:42:10Z");

      console.log("\tNota: " + input, " => " + result)
    });

    it(`Recebendo um parâmetro null, deve retornar um erro`, () => {
        expect(() => {
          sqlite_convertTimestampToUTC(null)
        }).to.throw(Error);
    });

    it(`Recebendo um parâmetro undefined, deve retornar um erro`, () => {
        expect(() => {
          sqlite_convertTimestampToUTC(undefined)
        }).to.throw(Error);
    });

    it(`Recebendo uma string inválida, deve retornar um erro`, () => {
        expect(() => {
          sqlite_convertTimestampToUTC("invalid string")
        }).to.throw(Error);
    });

    it(`Recebendo um parâmetro number, deve retornar um erro`, () => {
        expect(() => {
          sqlite_convertTimestampToUTC(Date.now())
        }).to.throw(Error);
    });

    it(`Recebendo um parâmetro boolean, deve retornar um erro`, () => {
        expect(() => {
          sqlite_convertTimestampToUTC(true)
        }).to.throw(Error);
    });

    it(`Recebendo um parâmetro object, deve retornar um erro`, () => {
        expect(() => {
          sqlite_convertTimestampToUTC({ timestamp: "2025-05-21 19:42:10" })
        }).to.throw(Error);
    });

    it(`Recebendo um parâmetro array, deve retornar um erro`, () => {
        expect(() => {
          sqlite_convertTimestampToUTC([ "2025-05-21 19:42:10" ])
        }).to.throw(Error);
    });
  });
  //

  describe(`Função ${sqlite_convertUTCtoUTCLocale.name}():`, () => {
    it(`Recebendo uma string UTC válida, deve retornar um UTC Date Locale`, () => {
      let input = "2025-05-21T19:42:10Z";
      let result = sqlite_convertUTCtoUTCLocale(input)
      
      expect(result).to.eq("21/05/2025 16:42:10")
      console.log("\tNota: " + input, " => " + result)
    });

    it(`Recebendo uma string inválida, deve retornar um erro`, () => {
      expect(() => {
        sqlite_convertUTCtoUTCLocale("invalid string")
      }).to.throw(Error)
    });

    it(`Recebendo null, deve retornar um erro`, () => {
      expect(() => {
        sqlite_convertUTCtoUTCLocale(null)
      }).to.throw(Error)
    });

    it(`Recebendo undefined, deve retornar um erro`, () => {
      expect(() => {
        sqlite_convertUTCtoUTCLocale(undefined)
      }).to.throw(Error)
    });

    it(`Recebendo number, deve retornar um erro`, () => {
      expect(() => {
        sqlite_convertUTCtoUTCLocale(Date.now())
      }).to.throw(Error)
    });

    it(`Recebendo object, deve retornar um erro`, () => {
      expect(() => {
        sqlite_convertUTCtoUTCLocale({ utc: "2025-05-21T19:42:10Z" })
      }).to.throw(Error)
    });

    it(`Recebendo array, deve retornar um erro`, () => {
      expect(() => {
        sqlite_convertUTCtoUTCLocale([ "2025-05-21T19:42:10Z" ])
      }).to.throw(Error)
    });
  });
});
