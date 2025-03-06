export class Drug {

    benefitDecreaseRate = 1;

    constructor(name, expiresIn, benefit) {
      this.name = name;
      this.expiresIn = expiresIn;
      this.benefit = benefit;
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