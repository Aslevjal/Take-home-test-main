export class Drug {
    constructor(name, expiresIn, benefit) {
      this.name = name;
      this.expiresIn = expiresIn;
      this.benefit = benefit;
      this.benefitUpdateRate = 1;
    }

    getDrugDetails() {
        return {
            name: this.name,
            expiresIn: this.expiresIn,
            benefit: this.benefit,
        }
    }

    modifyBenefitUpdateRate() {
        if (this.expiresIn == 0) {
            this.benefitUpdateRate = this.benefitUpdateRate * 2;
        }
    }

    updateDrugBenefit() {
        if (this.benefit < this.benefitUpdateRate) {
            this.benefit = 0;
        } else {
            this.benefit -= this.benefitUpdateRate;
        }
        this.expiresIn -= 1;
        this.modifyBenefitUpdateRate()
    }
  }

class HerbalTea extends Drug {
    constructor(name, expiresIn, benefit) {
        super(name, expiresIn, benefit)
    }

    updateDrugBenefit() {
        if (this.benefit + this.benefitUpdateRate > 50) {
            this.benefit = 50;
        } else {
            this.benefit += this.benefitUpdateRate;
        }
        this.expiresIn -= 1;
        this.modifyBenefitUpdateRate()
    }
}

class MagicPill extends Drug {
    constructor(name, expiresIn, benefit) {
        super(name, expiresIn, benefit)
    }

    updateDrugBenefit() {
        this.expiresIn = this.expiresIn;
        this.benefit = this.benefit;
    }
}

class Fervex extends Drug {
    constructor(name, expiresIn, benefit) {
        super(name, expiresIn, benefit)
    }

    modifyBenefitUpdateRate() {
        if (this.expiresIn <= 10 && this.expiresIn > 5) {
            this.benefitUpdateRate = 2;
        } else if (this.expiresIn <= 5 && this.expiresIn >= 0) {
            this.benefitUpdateRate = 3;
        } else if (this.expiresIn < 0) {
            this.benefitUpdateRate = 0;
        }
    }

    updateDrugBenefit() {
        if (this.benefit + this.benefitUpdateRate > 50 && this.expiresIn > 0) {
            this.benefit = 50;
        } else if (this.expiresIn > 0) {
            this.benefit += this.benefitUpdateRate;
        } else {
            this.benefit = 0
        }
        this.expiresIn -= 1;
        this.modifyBenefitUpdateRate()
    }
}

class Dafalgan extends Drug {
    constructor(name, expiresIn, benefit) {
        super(name, expiresIn, benefit)
        this.benefitUpdateRate = 2
    }
}

export class DrugFactory {
    createDrug(name, expiresIn, benefit) {
        var expr = name.replace(/ /g, '').toUpperCase()

        switch (expr) {
            case "HERBALTEA":
                return new HerbalTea(name, expiresIn, benefit);
            case "MAGICPILL":
                return new MagicPill(name, expiresIn, benefit);
            case "FERVEX":
                return new Fervex(name, expiresIn, benefit);
            case "DAFALGAN":
                return new Dafalgan(name, expiresIn, benefit);
            default:
                return new Drug(name, expiresIn, benefit)
        }
    }
}