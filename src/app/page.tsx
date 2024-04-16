const mockUrls = [
  'https://utfs.io/f/9d8ceaf4-b374-461e-a16c-f7d76c66c109-j5zu5r.jpg',
  'https://utfs.io/f/48b2cc7f-8a33-4fc2-81ed-8a6b50127622-u1hn84.jpg',
  'https://utfs.io/f/f6c21639-2a26-4576-ac76-ed792507c2af-8hg03i.jpg'
]

const mockImages = mockUrls.map((url, idx) => ({
  id: idx + 1,
  url
}))

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => 
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        )}
      </div>
    </main>
  );
}
