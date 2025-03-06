import { DrugFactory } from "./drug";

export class Pharmacy {

  constructor(drugsList = []) {
    this.drugs = [];
    this.drugFactory = new DrugFactory();

    drugsList.forEach((drug) => {
      this.drugs.push(this.drugFactory.createDrug(drug.name, drug.expiresIn, drug.benefit))
    });
  }

  updateBenefitValue() {
    let result = [];

    for (var i = 0; i < this.drugs.length; i++) {
      this.drugs[i].updateDrugBenefit();
      result.push(this.drugs[i].getDrugDetails())
    }

    return result;
  }
    
}
