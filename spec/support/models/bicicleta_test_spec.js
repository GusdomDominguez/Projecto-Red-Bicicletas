var Bicicleta = require("../../../models/bicicleta");

beforeEach(() => {
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