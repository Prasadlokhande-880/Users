/**
 * @fileoverview Test suite for User Management API endpoints.
 * Uses supertest for HTTP assertions.
 */

const request = require("supertest");
const app = require("../App");

describe("User Management API", () => {
  let userId; // To store a user ID for testing update/delete

  /**
   * Test: Create User
   * @description Tests the creation of a new user via POST /admin endpoint.
   * @async
   * @returns {Promise<void>}
   */
  it("should create a new user", async () => {
    const response = await request(app)
      .post("/admin")
      .send({
        name: "John Doe",
        email: "johndoe@example.com",
        password: "securepassword",
        role: "TEACHER",
      })
      .set("Content-Type", "application/json");

    expect(response.status).toBe(201); // Assuming 201 Created
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("name");
    userId = response.body.id; // Save the ID for further tests
  });

  /**
   * Test: Get All Users
   * @description Tests retrieval of all users via GET /admin endpoint.
   * @async
   * @returns {Promise<void>}
   */
  it("should retrieve all users", async () => {
    const response = await request(app).get("/admin");

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThan(0);
  });

  /**
   * Test: Get Users by Role
   * @description Tests retrieval of users by role via GET /admin/:role endpoint.
   * @async
   * @returns {Promise<void>}
   */
  it("should retrieve users by role", async () => {
    const response = await request(app).get("/admin/TEACHER");

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    response.body.forEach((user) => {
      expect(user.role).toBe("TEACHER");
    });
  });

  /**
   * Test: Update User
   * @description Tests updating an existing user via PUT /admin/:id endpoint.
   * @async
   * @returns {Promise<void>}
   */
  it("should update an existing user", async () => {
    const response = await request(app)
      .put(`/admin/${userId}`)
      .send({
        name: "John Updated",
        email: "johnupdated@example.com",
        password: "updatedpassword",
        role: "ADMIN",
      })
      .set("Content-Type", "application/json");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id", userId);
    expect(response.body).toHaveProperty("name", "John Updated");
  });

  /**
   * Test: Delete User
   * @description Tests deletion of an existing user via DELETE /admin/:id endpoint.
   * @async
   * @returns {Promise<void>}
   */
  it("should delete an existing user", async () => {
    const response = await request(app).delete(`/admin/${userId}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty(
      "message",
      "User deleted successfully"
    );
  });
});
