export class Drug {

    benefitDecreaseRate = 1;

    constructor(name, expiresIn, benefit) {
      this.name = name;
      this.expiresIn = expiresIn;
      this.benefit = benefit;
    }

    getDrugDetailsString() {
        return JSON.stringify({
            name: this.name,
            expiresIn: this.expiresIn,
            benefit: this.benefit,
        })
    }

    modifyBenefitDecreaseRate() {
        if (this.expiresIn <= 0) {
            this.benefitDecreaseRate = this.benefitDecreaseRate * 2;
        }
    }

    updateDrugBenefit() {
        this.modifyBenefitDecreaseRate()
        if (this.benefit < this.benefitDecreaseRate) {
            this.benefit = 0;
        } else {
            this.benefit -= this.benefitDecreaseRate;
        }
        this.expiresIn -= 1;
    }
  }

class HerbalTea extends Drug {
    constructor(name, expiresIn, benefit) {
        super(name, expiresIn, benefit)
    }
}

class MagicPill extends Drug {
    constructor(name, expiresIn, benefit) {
        super(name, expiresIn, benefit)
    }
}

class Fervex extends Drug {
    constructor(name, expiresIn, benefit) {
        super(name, expiresIn, benefit)
    }
}

class Dafalgan extends Drug {
    constructor(name, expiresIn, benefit) {
        super(name, expiresIn, benefit)
        this.benefitDecreaseRate = 2
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