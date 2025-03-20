export const VALID = [
  "username",
  "username123",
  "username_123",
]

export const INVALID = [
  { text: "", expect: "" },
  { text: "user name", expect: "user_name" },
  { text: "user     name", expect: "user_name" },
  { text: "name@example.com", expect: "name@example.com" },
  { text: "USERNAME", expect: "username" },
]