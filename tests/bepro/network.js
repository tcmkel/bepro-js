import chai from "chai";
import { mochaAsync } from "./utils";
import { Application } from "..";
import Numbers from "../src/utils/Numbers";

const tokenAddress = "0xd3f461fef313a992fc25e681acc09c6191b08bca";

let contractAddress;

context("Network - (TO DO)", async () => {
  let networkContract;
  let app;
  let issue;

  before(async () => {
    app = new Application({ test: true, localtest: true });
  });

  it(
    "no tests done",
    mochaAsync(async () => {
      app = new Application({ test: true, localtest: true });
      expect(app).to.not.equal(null);
    })
  );
});
