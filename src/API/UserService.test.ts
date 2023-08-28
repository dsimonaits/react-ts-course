import axios, { AxiosError, AxiosResponse } from "axios";
import MockAdapter from "axios-mock-adapter";
import { fetchAllUsers, fetchUser } from "./UsersService";
import { IUser } from "../types/types";
import users from "./mockUserData";

const mockAxios = new MockAdapter(axios);

const usersData = users;

describe("fetchUser and fetchAllUsers functions", () => {
  beforeEach(() => {
    mockAxios.reset();
  });

  it("fetchUser should make a GET request and return data", async () => {
    const userId = 1;
    const userData = { id: userId, name: "John Doe" };

    mockAxios
      .onGet(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .reply(200, userData);

    const response: AxiosResponse<IUser> | undefined = await fetchUser(userId);

    if (response) {
      expect(response.status).toBe(200);
      expect(response.data).toEqual(userData);
    } else {
      fail("Response is undefined");
    }
  });

  it("fetchAllUsers should make a GET request and return data", async () => {
    mockAxios
      .onGet("https://jsonplaceholder.typicode.com/users")
      .reply(200, usersData);

    const response: AxiosResponse<IUser[]> | undefined = await fetchAllUsers();

    if (response) {
      expect(response.status).toBe(200);
      expect(response.data).toEqual(usersData);
    } else {
      fail("Response is undefined");
    }
  });
});
