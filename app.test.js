const app = require("./app");
const inject = require("light-my-request");

test("echo", async () => {
  const response = await inject(app, { method: "GET", path: "/echo/qwer" });
  console.log(response);

  expect(response.payload).toEqual("qwer");
});
