import React from 'react';

const Blog = () => {
  const posts = [
    { title: "The Journey of Mulberry Silk: From Cocoon to Couture", category: "History & Process", desc: "Explore the fascinating metamorphosis and the intricate process that turns a brilliant cocoon into the world's finest fabric.", img: "https://img.freepik.com/premium-photo/creamy-soft-satin-fabric-texture_713660-15123.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80" },
    { title: "Sustainable Silk: The Rise of Ethical Production", category: "Sustainability", desc: "How modern silk farming is embracing eco-friendly practices to protect biodiversity while maintaining unparalleled quality.", img: "https://img.freepik.com/free-photo/colorful-knitted-fabric-background_58702-1784.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80" },
    { title: "Trending Silk Fashion for Summer 2026", category: "Fashion & Trends", desc: "Discover how top designers are incorporating breathable, lightweight silk weaves into their upcoming summer collections.", img: "https://img.freepik.com/premium-photo/beautiful-abstract-silk-concept-with-copy-space_926199-2710957.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80" }
  ];

  return (
    <div className="pt-24 min-h-screen bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">The Silk Journal</h1>
          <p className="text-gray-600 font-light text-lg">
            Insights, stories, and news from the intertwined worlds of textile craftsmanship, 
            fashion heritage, and sustainable innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
              <div className="h-64 overflow-hidden border-b border-gray-100">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-8 flex-1 flex flex-col bg-white">
                <span className="text-xs font-bold text-amber-600 mb-3 uppercase tracking-wider">{post.category}</span>
                <h3 className="text-2xl font-serif text-gray-900 mb-3 leading-snug group-hover:text-amber-600 transition-colors">{post.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed mb-6 flex-1">{post.desc}</p>
                <button className="text-amber-600 font-bold tracking-wide uppercase text-sm hover:text-amber-700 transition-colors self-start border-b-2 border-transparent hover:border-amber-600 pb-1">
                  Read Article
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
