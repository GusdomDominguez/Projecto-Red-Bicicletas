var Bicicleta = require("../../../models/bicicleta");
var request = require("request");
var server = require("../../../bin/www");

describe("Bicicleta API", () => {
  describe("GET Bicicletas", () => {
    it("Status 200", () => {
      expect(Bicicleta.allBicis.length).toBe(0);

      var a = new Bicicleta(1, "rojo", "urbana", [-32.974189, -68.70766]);
      Bicicleta.add(a);

      request.get(
        "http://localhost:3000/api/bicicletas",
        (eror, response, body) => {
          expect(response.statusCode).toBe(200);
        }
      );
    });
  });

  describe("POST Bicicletas /create", () => {
    it("Status 200", (done) => {
      var headers = { "content-type": "application/json" };
      var aBici =
        '{ "id": 10, "color": "rojo", "modelo": "urbana", "lat": -34, "long": -54 }';

      request.post(
        {
          headers: headers,
          url: "http://localhost:3000/api/bicicletas/create",
          body: aBici,
        },
        (error, response, body) => {
          expect(response.statusCode).toBe(200);
          expect(Bicicleta.findById(10).color).toBe("rojo");
          done();
        }
      );
    });
  });

  describe("DELETE Bicicletas /create", () => {
    it("Status 204", (done) => {
      var headers = { "content-type": "application/json" };
      var aBici =
        '{ "id": 10, "color": "rojo", "modelo": "urbana", "lat": -34, "long": -54 }';

      request.post(
        {
          headers: headers,
          url: "http://localhost:3000/api/bicicletas/create",
          body: aBici,
        },
        (error, response, body) => {
          expect(response.statusCode).toBe(200);
          expect(Bicicleta.findById(10).color).toBe("rojo");
        }
      );
      request.delete(
        {
          headers: headers,
          url: "http://localhost:3000/api/bicicletas/delete",
          body: '{"id": 10}',
        },
        (error, response, body) => {
          expect(response.statusCode).toBe(204);
          done();
        }
      );
    });
  });
});
