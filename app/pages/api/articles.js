export const db = [{
  slug: 'an-article',
  title: 'Article 1',
  message: 'This is an article. An article is a text about something.'
}, {
  slug: 'an-article',
  title: 'Article 2',
  message: 'This is an article. An article is a text about something.'
}, {
  slug: 'an-article',
  title: 'Article 3',
  message: 'This is an article. An article is a text about something.'
}]

export default function handler(req, res) {
  res.status(200).json(db)
}
