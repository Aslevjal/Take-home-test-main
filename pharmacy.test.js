import { Pharmacy } from "./pharmacy";
import { Drug } from "./drug";

describe("Pharmacy", () => {

  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2).getDrugDetails()],
    );
  });

  it("should not decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("Magic Pill", 2, 30)]).updateBenefitValue()).toEqual(
      [new Drug("Magic Pill", 2, 30).getDrugDetails()],
    );
  });

  it("benefit should never be negative", () => {
    expect(new Pharmacy([new Drug("test", 2, 0)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 0).getDrugDetails()],
    );
  });

  it("benefit should never be over 50 ", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 2, 50)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 1, 50).getDrugDetails()],
    );
  });
});
