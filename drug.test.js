import { Drug, DrugFactory } from "./drug";

describe("Drug", () => {

  it("Check that the drug factory is workin correctly", () => {
    const drugFactory = new DrugFactory()
    
    expect(drugFactory.createDrug("test", 1, 2).getDrugDetails()).toEqual(
        new Drug("test", 1, 2).getDrugDetails(),
    );
    expect(drugFactory.createDrug("Magic Pill", 1, 2).getDrugDetails()).toEqual(
        new Drug("Magic Pill", 1, 2).getDrugDetails(),
    );
    expect(drugFactory.createDrug("Magicpill", 1, 2).getDrugDetails()).toEqual(
        new Drug("Magicpill", 1, 2).getDrugDetails(),
    );
    expect(drugFactory.createDrug("herBal      Tea", 1, 2).getDrugDetails()).toEqual(
        new Drug("herBal      Tea", 1, 2).getDrugDetails(),
    );
    expect(drugFactory.createDrug("DaFalGAN", 1, 2).getDrugDetails()).toEqual(
        new Drug("DaFalGAN", 1, 2).getDrugDetails(),
    );

  });
});