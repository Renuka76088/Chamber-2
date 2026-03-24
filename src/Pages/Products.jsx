import React, { useState, useEffect, useMemo } from 'react';
import { Search, Filter, ChevronRight, ChevronLeft, Package, Tag, ShoppingCart, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('Newest Arrivals');
  const [currentPage, setCurrentPage] = useState(1);
  const [toastMessage, setToastMessage] = useState(null);

  const ITEMS_PER_PAGE = 9;

  // Categories for the Sidebar
  const categories = [
    'All',
    'Mulberry Silk',
    'Tussar Silk',
    'Eri Silk',
    'Muga Silk',
    'Raw Silk',
    'Chiffon Silk',
    'Georgette Silk',
    'Velvet Silk',
    'Jacquard Silk'
  ];

  // Base mock database
  const baseProducts = [
    { title: "Premium Mulberry Silk Roll", category: "Mulberry Silk", price: 850, unit: "meter", moq: 50, img: "https://img.freepik.com/premium-photo/beautiful-aster-flowers-silk-background_392895-108421.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80", inStock: true },
    { title: "Golden Tussar Weave", category: "Tussar Silk", price: 1200, unit: "meter", moq: 30, img: "https://img.freepik.com/free-photo/close-up-velvet-texture_23-2149305958.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80", inStock: true },
    { title: "Peace Eri Silk Fabric", category: "Eri Silk", price: 950, unit: "meter", moq: 40, img: "https://img.freepik.com/free-photo/close-up-elegant-golden-material_23-2148495620.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80", inStock: true },
    { title: "Assam Muga Heritage", category: "Muga Silk", price: 2500, unit: "meter", moq: 20, img: "https://img.freepik.com/premium-photo/drapery-fabric-with-stripes_926199-3223496.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80", inStock: false },
    { title: "Raw Silk Dobby Texture", category: "Raw Silk", price: 650, unit: "meter", moq: 100, img: "https://img.freepik.com/premium-photo/closeup-soft-creamy-white-golden-brown-thread_204719-57416.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80", inStock: true },
    { title: "Sheer Chiffon Silk", category: "Chiffon Silk", price: 550, unit: "meter", moq: 100, img: "https://img.freepik.com/premium-photo/delicate-peach-white-fabric_861748-20080.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80", inStock: true },
    { title: "Heavy Georgette Drape", category: "Georgette Silk", price: 700, unit: "meter", moq: 50, img: "https://img.freepik.com/free-photo/organic-texture-white-fabric_23-2151932225.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80", inStock: true },
    { title: "Lush Velvet Silk Red", category: "Velvet Silk", price: 1800, unit: "meter", moq: 25, img: "https://img.freepik.com/premium-photo/velvet-velvet-silk_53876-658087.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80", inStock: true },
    { title: "Bridal Jacquard Silk", category: "Jacquard Silk", price: 2100, unit: "meter", moq: 20, img: "https://img.freepik.com/free-vector/purple-cloth-background-with-ornaments_1048-5055.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80", inStock: true },
    { title: "Classic Mulberry White", category: "Mulberry Silk", price: 800, unit: "meter", moq: 50, img: "https://img.freepik.com/premium-photo/creamy-swirls-elegance-soft-silk-texture-abstract-fabric-pattern-luxurious-textile-folds-gentle-waves-white-fine_506134-75932.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80", inStock: true },
    { title: "Tussar Silk Charcoal", category: "Tussar Silk", price: 1150, unit: "meter", moq: 30, img: "https://img.freepik.com/premium-photo/extreme-closeup-macro-photography-intricate-weave-pattern-piece-silk-fabric_1145402-3847.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80", inStock: true },
    { title: "Eri Silk Natural Dye", category: "Eri Silk", price: 980, unit: "meter", moq: 40, img: "https://img.freepik.com/premium-photo/abstract-colorful-fabric-texture-background_34836-761.jpg?ga=GA1.1.124606815.1772781809&semt=ais_hybrid&w=740&q=80", inStock: true },
  ];

  // Generate a massive database (48 items) by cloning to fake 100+ items scale
  const productsDatabase = useMemo(() => {
    let massiveDB = [];
    let idCounter = 1;
    for(let i=0; i<4; i++) {
        baseProducts.forEach(prod => {
            massiveDB.push({
                ...prod, 
                id: idCounter++,
                // slight variation in title for realism
                title: i > 0 ? `${prod.title} (Batch 0${i+1})` : prod.title,
                price: prod.price + (i * 20) // slight variation in price
            });
        });
    }
    return massiveDB;
  }, []);

  // Filter & Sort Logic
  const filteredAndSortedProducts = useMemo(() => {
    // 1. Filter
    let result = productsDatabase.filter(product => {
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    // 2. Sort
    if (sortOrder === 'Price: Low to High') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'Price: High to Low') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOrder === 'Most Popular') {
      // Fake popularity sort (e.g. ID desc)
      result.sort((a, b) => b.id - a.id);
    } else {
      // Newest (Default) - leave original order or id desc
      result.sort((a, b) => a.id - b.id);
    }

    return result;
  }, [productsDatabase, activeCategory, searchQuery, sortOrder]);

  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchQuery, sortOrder]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredAndSortedProducts.length / ITEMS_PER_PAGE);
  const currentProducts = filteredAndSortedProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE, 
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleInquiry = (product) => {
    setToastMessage(`Added 1x ${product.title} to your Inquiry List!`);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <div className="pt-24 min-h-screen bg-gray-50/30 font-sans relative">
      
      {/* SUCCESS TOAST */}
      <div className={`fixed top-32 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 transform ${toastMessage ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'}`}>
        <div className="bg-white px-6 py-4 rounded-full shadow-2xl border border-green-100 flex items-center gap-3">
          <CheckCircle className="text-green-500" size={24} />
          <span className="text-gray-900 font-bold">{toastMessage}</span>
        </div>
      </div>

      {/* 1. CATALOG HERO BANNER */}
      <div className="bg-white border-b border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-3">Wholesale Catalog</h1>
            <p className="text-gray-500 font-light text-lg">Browse our extensive inventory of premium silk textiles.</p>
          </div>
          
          <div className="w-full md:w-96 relative border border-gray-200 rounded-full focus-within:border-amber-500 focus-within:ring-2 focus-within:ring-amber-500/20 transition-all shadow-sm bg-gray-50 flex items-center">
            <Search className="absolute left-4 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search by fabric or category..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent py-3.5 pl-12 pr-6 text-gray-700 outline-none"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 text-gray-400 hover:text-amber-600 text-xs font-bold uppercase tracking-wider"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 2. MAIN CATALOG LAYOUT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-10">
        
        {/* SIDEBAR: CATEGORIES */}
        <div className="w-full lg:w-72 shrink-0">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 sticky top-32">
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-100">
              <Filter className="text-amber-600" size={20} />
              <h3 className="font-bold text-gray-900 uppercase tracking-wider text-sm">Categories</h3>
            </div>
            
            <ul className="space-y-2">
              {categories.map((cat, idx) => {
                const count = cat === 'All' ? productsDatabase.length : productsDatabase.filter(p => p.category === cat).length;
                return (
                  <li key={idx}>
                    <button 
                      onClick={() => setActiveCategory(cat)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center justify-between group ${
                        activeCategory === cat 
                          ? 'bg-amber-50 text-amber-700 font-bold' 
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 font-medium'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>{cat}</span>
                        <span className="text-[10px] font-bold bg-white text-gray-400 px-2 py-0.5 rounded-full border border-gray-100">{count}</span>
                      </div>
                      <ChevronRight 
                        size={16} 
                        className={`transition-transform ${activeCategory === cat ? 'text-amber-500 translate-x-1' : 'text-gray-300 group-hover:translate-x-1'}`} 
                      />
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 p-6 bg-gradient-to-br from-amber-500 to-amber-700 rounded-2xl text-white shadow-lg shadow-amber-500/30">
              <h4 className="font-bold text-lg mb-2">Bulk Orders</h4>
              <p className="text-sm text-amber-50 mb-6 opacity-90 leading-relaxed">Need more than 500 meters? Contact us directly for specialized factory pricing and custom dyeing options.</p>
              <button 
                onClick={() => navigate('/enquiry')}
                className="w-full py-3 bg-white text-amber-700 font-bold text-sm rounded-xl hover:bg-amber-50 transition-colors shadow-sm"
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        {/* PRODUCT GRID */}
        <div className="flex-1">
          <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-gray-500 text-sm font-medium">
            <p>Showing <span className="text-gray-900 font-bold">{filteredAndSortedProducts.length}</span> wholesale products</p>
            <div className="flex items-center gap-2">
              <span className="shrink-0">Sort by:</span>
              <select 
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="bg-white border border-gray-200 rounded-lg px-4 py-2 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 cursor-pointer text-gray-900 font-medium transition-all"
              >
                <option>Newest Arrivals</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Most Popular</option>
              </select>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-[24px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col">
                <div className="relative h-60 overflow-hidden bg-gray-100">
                  <img src={product.img} alt={product.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  
                  {/* Tags */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span className="bg-white/95 backdrop-blur-sm text-amber-700 text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">
                      {product.category}
                    </span>
                    {!product.inStock && (
                      <span className="bg-red-500/95 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">
                        Out of Stock
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-serif text-gray-900 leading-snug mb-4 group-hover:text-amber-600 transition-colors line-clamp-2" title={product.title}>
                    {product.title}
                  </h3>
                  
                  <div className="mt-auto space-y-3">
                    <div className="flex items-center justify-between text-sm border-b border-gray-50 pb-3">
                      <span className="text-gray-500 flex items-center gap-1.5"><Tag size={14}/> Wholesale Price</span>
                      <span className="font-bold text-gray-900 text-base">₹{product.price} <span className="text-gray-400 text-xs font-normal">/{product.unit}</span></span>
                    </div>
                    <div className="flex items-center justify-between text-sm pb-1">
                      <span className="text-gray-500 flex items-center gap-1.5"><Package size={14}/> Minimum Order</span>
                      <span className="font-bold text-gray-900">{product.moq} {product.unit}s</span>
                    </div>
                    
                    <button 
                      disabled={!product.inStock}
                      onClick={() => handleInquiry(product)}
                      className={`w-full mt-4 py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                        product.inStock 
                          ? 'bg-amber-50 text-amber-700 hover:bg-amber-600 hover:text-white hover:shadow-lg hover:shadow-amber-200' 
                          : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      <ShoppingCart size={16} /> Add to Inquiry
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* If No Products Found */}
          {filteredAndSortedProducts.length === 0 && (
            <div className="text-center py-24 bg-white rounded-[32px] border border-gray-100 shadow-sm mt-6">
              <Package size={56} className="mx-auto text-gray-300 mb-6" />
              <h3 className="text-2xl font-serif text-gray-900 mb-3">No fabrics found</h3>
              <p className="text-gray-500 text-lg mb-8">Try adjusting your category filters or search query.</p>
              <button 
                onClick={() => {setActiveCategory('All'); setSearchQuery('');}}
                className="px-8 py-3 bg-amber-50 text-amber-700 font-bold rounded-xl hover:bg-amber-600 hover:text-white transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* Pagination Component */}
          {totalPages > 1 && (
            <div className="mt-16 flex items-center justify-center gap-2 flex-wrap">
              <button 
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${currentPage === 1 ? 'text-gray-300 border-transparent cursor-not-allowed' : 'border border-gray-200 text-gray-700 hover:bg-amber-50 hover:text-amber-700 hover:border-amber-200'}`}
              >
                <ChevronLeft size={16} />
              </button>
              
              {[...Array(totalPages)].map((_, idx) => {
                const pageNum = idx + 1;
                // Simple logic to show current, first, last, and +/- 1 pages
                if (
                  pageNum === 1 || 
                  pageNum === totalPages || 
                  (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
                ) {
                  return (
                    <button 
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                        currentPage === pageNum 
                          ? 'border-none bg-amber-600 text-white shadow-md font-bold' 
                          : 'border border-gray-200 text-gray-600 hover:bg-amber-50 hover:text-amber-700 hover:border-amber-200 font-medium'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                } else if (
                  pageNum === currentPage - 2 || 
                  pageNum === currentPage + 2
                ) {
                  return <span key={pageNum} className="text-gray-400 px-1">...</span>;
                }
                return null;
              })}

              <button 
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${currentPage === totalPages ? 'text-gray-300 border-transparent cursor-not-allowed' : 'border border-gray-200 text-gray-700 hover:bg-amber-50 hover:text-amber-700 hover:border-amber-200'}`}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Products;
