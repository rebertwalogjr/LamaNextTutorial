const blogs = [
  {
    id: 1,
    image : "img1.jpg",
    title: "sunt aut facere repellat provident occaecati",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    userId: 1,
    publishedDate: "01/12/2024"
  },
  {
    id: 2,
    image : "img2.jpg",
    title: "qui est esse",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    userId: 2,
    publishedDate: "01/25/2024"
  },
  {
    id: 3,
    image : "img3.jpg",
    title: "dolorem eum magni eos aperiam quia",
    body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
    userId: 3,
    publishedDate: "02/28/2024"
  },
  {
    id: 4,
    image : "img4.jpg",
    title: "et ea vero quia laudantium autem",
    body: "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi",
    userId: 4,
    publishedDate: "03/21/2024"
  }
]

export const getBlogs = async () => {
  return blogs;
}

export const getBlog = async (id : number) => {
  return blogs.find((blogs) => blogs.id === id) || null
}
