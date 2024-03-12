import { Group, User } from "../interfaces/IGroup"

const mockUser: Array<User> = [
    {
        first_name: 'Vlad',
        last_name: 'Mickevich'
    },
    {
        first_name: 'Gregory',
        last_name: 'House'
    },
    {
        first_name: 'Sergey',
        last_name: 'Mickishenko'
    },
    {
        first_name: 'Ilya',
        last_name: 'Kalinkevich'
    },
]

export const  mockGroups: Array<Group> = [
    {
        id: 0,
        name: "history",
        closed: false,
        avatar_color: "blue",
        members_count: 5000000,
        friends: mockUser, 
    },
    {
        id: 1,
        name: "russian",
        closed: false,
        avatar_color: "red",
        members_count: 5000,
        friends: []
    },
    {
        id: 2,
        name: "football",
        closed: false,
        members_count: 5000,
        friends: []
    },
    {
        id: 3,
        name: "football",
        closed: true,
        members_count: 5000,
        friends: []
    },
    {
        id: 3,
        name: "football",
        closed: true,
        members_count: 5000,
        friends: []
    },

]