"use strict";
var mongoose = require("mongoose");
var car = mongoose.model("car");

//GET ALL
exports.listar_carros = function (req, res) {
  car.find({}, function (err, cars) {
    if (err) {
      res.send(err);
    }
    res.json(cars);
  });
};

//GET ID
exports.listar_carro_id = function (req, res) {
  car.find({ _id: req.params.carId }, function (err, car) {
    if (err) {
      res.send(err);
    }
    res.json(car[0]);
  });
};

//POST
exports.adicionar_carro = function (req, res) {
  console.log(req.body);
  var newCar = new car(req.body);
  console.log(newCar);
  newCar.save((err, car) => {
    if (err) res.send(err);
    res.json(car);
  });
};

//PUT
exports.atualizar_carro = function (req, res) {
  car.findOneAndUpdate(
    { _id: req.params.carId },
    req.body,
    { new: true },
    function (err, car) {
      if (err) {
        res.send(err);
      }
      res.json(car);
    }
  );
};

//DELETE
exports.deletar_carro = function (req, res) {
  car.remove({ _id: req.params.carId }, function (err, car) {
    if (err) {
      res.send(err);
    }
    res.json({ Mensagem: "Item deletado" });
  });
};
