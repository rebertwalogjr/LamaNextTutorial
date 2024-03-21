const users = [
  {
    id: 1,
    name: "John Doe",
    avatar: "img2.jpg"
  },
  {
    id: 2,
    name: "Popoeyes Jollibee",
    avatar: "img3.jpg"
  },
  {
    id: 3,
    name: "Donald McDonalds",
    avatar: "img4.jpg"
  },
  {
    id: 4,
    name: "Karen Wendys",
    avatar: "img1.jpg"
  }
]

export const getUser = async (id : number) => {
  return users.find((user) => user.id === id) || null
}