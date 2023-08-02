const typeDefs = `
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    books: [Book]
  }

  type Book {
    _id: ID
    authors: [Author]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    books(username: String): [Book]
    book(bookId: ID!): Book
    me: User
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBook(description: String!, bookId: String!, title: String!): Book
    removeBook(bookId: ID!): Book
  }
`;

module.exports = typeDefs;
