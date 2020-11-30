var mongoose = require("mongoose");
var Bicicleta = require("../../../models/bicicleta");

describe("Testing Bicicletas", function () {
  beforeEach(function (done) {
    var mongoDB = "mongodb://localhost/testdb";
    mongoose.connect(mongoDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    mongoose.set("useCreateIndex", true);
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "conection error"));
    db.once("open", function () {
      console.log("We are connected to test database.");
      done();
    });
  });

  afterEach(function (done) {
    Bicicleta.deleteMany({}, function (err, success) {
      if (err) console.log(err);
      done();
    });
  });

  describe("Bicicleta.createInstance", () => {
    it("crea una instancia de Bicicleta", () => {
      var bici = Bicicleta.createInstance(1, "verde", "urbana", [
        -32.974189,
        -68.70766,
      ]);

      expect(bici.code).toBe(1);
      expect(bici.color).toBe("verde");
      expect(bici.modelo).toBe("urbana");
      expect(bici.ubicacion[0]).toEqual(-32.974189);
      expect(bici.ubicacion[1]).toEqual(-68.70766);
    });
  });

  describe("Bicicleta.allBicis", () => {
    it("comienza vacia", (done) => {
      Bicicleta.allBicis(function (err, bicis) {
        if (err) {
          console.log(err);
        } else {
          expect(bicis.length).toBe(0);
          done();
        }
      });
    });
  });
});

/* beforeEach(() => {
  Bicicleta.allBicis = [];
});

describe("Bicicleta.allBicis", () => {
  it("comienza vacio", () => {
    expect(Bicicleta.allBicis.length).toBe(0);
  });
});

describe("Bicicleta.add", () => {
  it("agregamos una", () => {
    expect(Bicicleta.allBicis.length).toBe(0);

    var a = new Bicicleta(1, "rojo", "urbana", [-32.974189, -68.70766]);
    Bicicleta.add(a);

    expect(Bicicleta.allBicis.length).toBe(1);
    expect(Bicicleta.allBicis[0]).toBe(a);
  });
});

describe("Bicicleta.findById", () => {
  it("debe devolver la bici con id 1", () => {
    expect(Bicicleta.allBicis.length).toBe(0);

    var aBici = new Bicicleta(1, "rojo", "urbana", [-32.974189, -68.70766]);
    var aBici2 = new Bicicleta(2, "verde", "montaña", [-32.976189, -68.50766]);
    Bicicleta.add(aBici);
    Bicicleta.add(aBici2);

    var targetBici = Bicicleta.findById(1);
    expect(targetBici.id).toBe(1);
    expect(targetBici.color).toBe(aBici.color);
    expect(targetBici.modelo).toBe(aBici.modelo);
  });
});

describe("Bicicleta.remove", () => {
  it("removemos una", () => {
    expect(Bicicleta.allBicis.length).toBe(0);

    var a = new Bicicleta(1, "rojo", "urbana", [-32.974189, -68.70766]);
    Bicicleta.add(a);

    expect(Bicicleta.allBicis.length).toBe(1);
    expect(Bicicleta.allBicis[0]).toBe(a);

    Bicicleta.removeById(1);

    expect(Bicicleta.allBicis.length).toBe(0);
  });
});
 */
