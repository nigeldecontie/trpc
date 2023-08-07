const users = [
  { id: 1, name: "Josh" },
  { id: 2, name: "Brendan" },
  { id: 3, name: "Brittany" },
  { id: 4, name: "Kanika" },
  { id: 5, name: "Keeghan" },
  { id: 6, name: "Nigel" },
];

export const db = {
  user: {
    create: async (input: { name: string }) => {
      const newUser = {
        id: users.length + 1,
        name: input.name,
      };
      users.push(newUser);
      return newUser;
    },
    findMany: async () => {
      return users;
    },
    findById: async (id: number) => {
      return users.filter((user) => user.id === Number(id))[0];
    },
    delete: async (id: number) => {
      const userToDelete = users.filter((user) => user.id === Number(id))[0];
      users.splice(users.indexOf(userToDelete), 1);
      return userToDelete;
    },
  },
};
