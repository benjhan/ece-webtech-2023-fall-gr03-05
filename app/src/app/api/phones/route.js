const articlesData = [
    {
    id: 1,
    title: 'Iphone 14',
    content: 'so good'
    },
    {
    id: 2,
    title: 'Pixel 3',
    content: 'love it'
    },
    {
    id: 3,
    title: 'Iphone 15',
    content: 'Finally usb-c'
    },
]

export async function GET(){
    return Response.json(articlesData)
}