"use strict";
module.exports = function (app) {
  var carController = require("../controllers/carController");

  app
    .route("/car")
    .get(carController.listar_carros)
    .post(carController.adicionar_carro);
  app
    .route("/car/:carId")
    .get(carController.listar_carro_id)
    .put(carController.atualizar_carro)
    .delete(carController.deletar_carro);
};
