import Link from 'next/link'

export function Posts() {
  const posts = [
    {
      title: "Some Printing of Money Is Part of a Functioning Economy",
      excerpt: "Why money printing (beyond the initial offering) is always bad.",
      date: "August 31, 2024",
      views: 79
    },
    {
      title: "Reproducibility Is Powerful",
      excerpt: "How reproducibility enables high iteration velocity, a key metric for any activity—not just in software.",
      date: "August 20, 2024",
      views: 168
    }
  ]

  return (
    <div className='py-16'>
      <h2 className="text-2xl font-bold mb-8 text-center">Posts</h2>
      <div className="space-y-4">
        {posts.map((post, index) => (
          <div key={index} className="bg-zinc-900 p-4 rounded-lg">
            <h3 className="text-xl font-bold mb-2">{post.title}</h3>
            <p className="text-gray-400 mb-2">{post.excerpt}</p>
            <p className="text-sm text-gray-500">{post.date} · {post.views} views</p>
          </div>
        ))}
      </div>
    </div>
  )
}