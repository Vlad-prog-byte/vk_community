import { GetGroupsResponse } from "../interfaces/IGroup";

// interface GetGroupsResponse {
//     result: 1 | 0,
//     data?: Group[]
//   }

export async function getGroups(): Promise<GetGroupsResponse> {
    const url = 'http://vk/api/group';
    const response = await fetch(url);
    const data = await response.json();
    return data;
}