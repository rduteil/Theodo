const { Inventory, NormalDrug, OldBottleOfWine, GrannyRecipe, InsulinVial, ARNVaccine } = require("../src/hokla");

describe("Hokla", function () {
  it("should foo", function () {
    const drugs = [
      new NormalDrug(10, 20),
      new OldBottleOfWine(2, 0),
      new NormalDrug(5, 7),
      new GrannyRecipe(0, 150),
      new GrannyRecipe(-1, 80),
      new InsulinVial(15, 20),
      new InsulinVial(10, 49),
      new InsulinVial(5, 49),
      // this ARN Vaccine Drug does not work properly yet
      new ARNVaccine(3, 6)
    ];

    const hoklaAPHP = new Inventory(drugs);
    const updatedDrugs = hoklaAPHP.updateEfficiency();
    expect(updatedDrugs[0].efficiency).toBe(19);
  });
});
