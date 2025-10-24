import { createSchema } from "graphql-yoga";
import sqlite3 from "sqlite3";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.resolve(__dirname, "../index.db");

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) console.error(err.message);
  console.log("Connected to SQLite:", dbPath);
});

export const schema = createSchema({
  typeDefs: `
    type Query {
      contactsList: [Contact!]!
    }
    type Mutation {
      contact(data: ContactInput!): String!
    }
    input ContactInput {
      name: String!
      email: String!
      message: String!
    }
    type Contact {
      id: Int!
      name: String!
      email: String!
      message: String!
    }
  `,
  resolvers: {
    Query: {
      contactsList: async () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log("Timeout");
            db.all("SELECT * FROM contacts", [], (err, rows) => {
              console.log("Inside query");
              if (err) reject(err);
              else resolve(rows);
            });
          }, 2000);
        });
      },
    },
    Mutation: {
      contact: async (_, { data }) => {
        return new Promise((resolve, reject) => {
          const { name, email, message } = data;
          db.run(
            `INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)`,
            [name, email, message],
            function (err) {
              if (err) reject("Error: " + err.message);
              else resolve("Success");
            }
          );
        });
      },
    },
  },
});
