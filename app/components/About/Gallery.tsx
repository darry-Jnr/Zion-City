export default function Gallery() {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
  
          <div className="text-center mb-12">
            <p className="font-['Nunito'] text-[12px] font-bold tracking-[2px] uppercase text-[#C1694F] mb-3">
              Gallery
            </p>
            <h2 className="font-['Playfair_Display'] text-[clamp(28px,4vw,42px)] font-bold text-[#2C1810] leading-tight">
              Our Community in Action
            </h2>
          </div>
  
          {/* Mobile & Tablet — simple 2 column grid */}
          <div className="grid grid-cols-2 gap-3 lg:hidden">
            {[
              { src: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=500&fit=crop', alt: 'Woman smiling', tall: true },
              { src: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop', alt: 'Woman in training', tall: true },
              { src: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=400&h=300&fit=crop', alt: 'Community gathering', tall: false },
              { src: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=400&h=300&fit=crop', alt: 'Skills session', tall: false },
              { src: 'https://images.unsplash.com/photo-1607748851687-ba9a10438621?w=400&h=300&fit=crop', alt: 'Craft training', tall: false },
              { src: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop', alt: 'Portrait', tall: false },
            ].map((img, i) => (
              <div
                key={i}
                className={`rounded-2xl overflow-hidden group ${img.tall ? 'h-[220px]' : 'h-[160px]'}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
  
          {/* Desktop — bento grid */}
          <div className="hidden lg:grid grid-cols-4 grid-rows-3 gap-4 h-[560px]">
  
            {/* Cell 1 — tall left, spans 2 rows */}
            <div className="col-span-1 row-span-2 rounded-3xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=700&fit=crop"
                alt="Woman smiling"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
  
            {/* Cell 2 — wide top middle, spans 2 cols */}
            <div className="col-span-2 row-span-1 rounded-3xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=800&h=300&fit=crop"
                alt="Community gathering"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
  
            {/* Cell 3 — tall right, spans 2 rows */}
            <div className="col-span-1 row-span-2 rounded-3xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=700&fit=crop"
                alt="Woman in training"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
  
            {/* Cell 4 — small middle left */}
            <div className="col-span-1 row-span-1 rounded-3xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=300&h=300&fit=crop"
                alt="Skills session"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
  
            {/* Cell 5 — small middle right */}
            <div className="col-span-1 row-span-1 rounded-3xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1607748851687-ba9a10438621?w=300&h=300&fit=crop"
                alt="Craft training"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
  
            {/* Cell 6 — wide bottom, spans 3 cols */}
            <div className="col-span-3 row-span-1 rounded-3xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?w=900&h=300&fit=crop"
                alt="Women in community"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>
  
            {/* Cell 7 — bottom right */}
            <div className="col-span-1 row-span-1 rounded-3xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&fit=crop"
                alt="Portrait"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
  
          </div>
        </div>
      </section>
    );
  }