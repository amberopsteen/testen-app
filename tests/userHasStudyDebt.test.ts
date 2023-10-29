import { userHasStudyDebt } from "../src/userHasStudyDebt";
import { getUserInput } from "../src/getUserInput";

jest.mock("../src/getUserInput", () => ({
  getUserInput: jest.fn(),
}));

describe("userHasStudyDebt", () => {
  beforeEach(() => {
    (getUserInput as jest.Mock).mockClear();
  });

  it("should return true if there is a study debt", async () => {
    (getUserInput as jest.Mock).mockResolvedValueOnce("ja");

    const hasStudyDebt = await userHasStudyDebt();

    expect(hasStudyDebt).toBe(true);
    expect(getUserInput).toHaveBeenCalledWith(
      "Is er een studieschuld aanwezig? "
    );
  });

  it("should return false if there is no study debt", async () => {
    (getUserInput as jest.Mock).mockResolvedValueOnce("nee");

    const hasStudyDebt = await userHasStudyDebt();

    expect(hasStudyDebt).toBe(false);
    expect(getUserInput).toHaveBeenCalledWith(
      "Is er een studieschuld aanwezig? "
    );
  });

  it("should be case-insensitive", async () => {
    (getUserInput as jest.Mock).mockResolvedValueOnce("Ja");

    const hasStudyDebt = await userHasStudyDebt();

    expect(hasStudyDebt).toBe(true);
    expect(getUserInput).toHaveBeenCalledWith(
      "Is er een studieschuld aanwezig? "
    );
  });
});
