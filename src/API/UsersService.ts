import axios from "axios";
import { IUser } from "../types/types";

export async function fetchAllUsers() {
  try {
    const response = await axios.get<IUser[]>(
      "https://jsonplaceholder.typicode.com/users"
    );

    return response;
  } catch (error) {
    alert(error);
  }
}
