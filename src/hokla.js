class BaseDrug {
  constructor(useBefore, efficiency) {
    this.useBefore = useBefore;
    this.efficiency = efficiency;
  }

  updateEfficiency() {
    throw new Exception("Class should implement this method");
  }
}

class OldBottleOfWine extends BaseDrug {
  constructor(props) {
    super(props);
  }

  updateEfficiency() {
    this.useBefore--;

    if (this.efficiency < 100) {
      this.efficiency += this.useBefore < 0 ? 2 : 1;
      this.efficiency = Math.min(this.efficiency, 100);
    }
  }
}

class GrannyRecipe extends BaseDrug {
  constructor(props) {
    super(props);
  }

  updateEfficiency() {
    // Do nothing
  }
}

class NormalDrug extends BaseDrug {
  constructor(props) {
    super(props);
  }

  updateEfficiency() {
    if (this.efficiency > 0) {
      this.efficiency--;
    }

    this.useBefore--;

    if (this.useBefore < 0) {
      if (this.efficiency > 0) {
        this.efficiency--;
      }
    }
  }
}

class InsulinVial extends BaseDrug {
  constructor(props) {
    super(props);
  }

  updateEfficiency() {
    if (this.efficiency > 0) {
      this.efficiency--;

      if (this.useBefore < 31) {
        if (this.efficiency > 0) {
          this.efficiency--;
        }
      }
      if (this.useBefore < 8) {
        if (this.efficiency > 0) {
          this.efficiency--;
        }
      }
    }

    this.useBefore--;

    if (this.useBefore < 0) {
      this.efficiency = 0;
    }
  }
}

class ARNVaccine extends BaseDrug {
  constructor(props) {
    super(props);
  }

  updateEfficiency() {
    if (this.efficiency > 0) {
      this.efficiency -= 2;
    }

    this.useBefore--;

    if (this.useBefore < 0) {
      if (this.efficiency > 0) {
        this.efficiency -= 2;
      }
    }
  }
}

class Inventory {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateEfficiency() {
    this.drugs.forEach(drug => drug.updateEfficiency());
  }
}

module.exports = {
  OldBottleOfWine,
  GrannyRecipe,
  NormalDrug,
  InsulinVial,
  ARNVaccine,
  Inventory
};
