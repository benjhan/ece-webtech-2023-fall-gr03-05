export const db = [
  {
    slug: 'article-1', // Slug unique pour chaque article
    title: 'Article 1',
    message: 'This is article 1. An article is a text about something.'
  },
  {
    slug: 'article-2',
    title: 'Article 2',
    message: 'This is article 2. An article is a text about something.'
  },
  {
    slug: 'article-3',
    title: 'Article 3',
    message: 'This is article 3. An article is a text about something.'
  }
]

export default function handler(req, res) {
  res.status(200).json(db)
}
