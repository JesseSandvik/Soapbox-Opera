import request from "supertest";
import app from "../src/app";

describe("Smoke Test", () => {
    test("Hello world!", async () => {
        const res = await request(app).get("/");

        expect(res.body).toEqual("Hello world!");
    });
});
