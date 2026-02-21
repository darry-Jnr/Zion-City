import { Play } from 'lucide-react';

const videos = [
  {
    title: "Amara's Journey — From Loss to Purpose",
    desc: 'Watch Amara share her story of how tailoring training transformed her life and gave her children a future.',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'Testimony',
    duration: '6:42',
  },
  {
    title: "Zainab Speaks — A Catering Dream",
    desc: 'Zainab talks about her catering business, her children, and the community that never gave up on her.',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'Testimony',
    duration: '4:18',
  },
  {
    title: 'Community Graduation Day',
    desc: 'A look inside our graduation ceremony — the moment widows complete their training and step into their new futures.',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'Event',
    duration: '8:05',
  },
];

const categoryColors: Record<string, string> = {
  Testimony: 'bg-[#F9E8E0] text-[#C1694F]',
  Event: 'bg-purple-50 text-purple-600',
};

const hasVideos = videos.length > 0;

export default function VideoTestimonies() {
  if (!hasVideos) return null;

  const [featured, ...rest] = videos;

  return (
    <section className="py-20 bg-[#FAF7F2]">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="mb-12">
          <p className="font-['Nunito'] text-[12px] font-bold tracking-[2px] uppercase text-[#C1694F] mb-3">
            Watch
          </p>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className="font-['Playfair_Display'] text-[clamp(28px,4vw,42px)] font-bold text-[#2C1810] leading-tight">
              Video Testimonies
            </h2>
            <p className="font-['Nunito'] text-[15px] text-[#5C3D2E] max-w-[380px] leading-relaxed">
              Hear directly from the women whose lives have been changed.
            </p>
          </div>
          <div className="w-16 h-1 bg-[#C1694F] rounded-full mt-5" />
        </div>

        {/* Layout — featured left, list right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6">

          {/* Featured video */}
          <div className="bg-white rounded-3xl overflow-hidden border border-[#C1694F]/10 shadow-[0_4px_24px_rgba(193,105,79,0.07)] group hover:shadow-[0_12px_48px_rgba(193,105,79,0.12)] transition-all duration-300">

            {/* Embed */}
            <div className="relative w-full aspect-video bg-[#2C1810]">
              <iframe
                src={featured.embedUrl}
                title={featured.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                loading="lazy"
              />
            </div>

            {/* Info */}
            <div className="p-7">
              <div className="flex items-center gap-3 mb-4">
                <span className={`font-['Nunito'] font-bold text-[11px] px-3 py-1.5 rounded-full uppercase tracking-wider ${categoryColors[featured.category]}`}>
                  {featured.category}
                </span>
                <span className="font-['Nunito'] text-[12px] text-[#6B7280] flex items-center gap-1">
                  <Play size={11} className="fill-[#6B7280]" />
                  {featured.duration}
                </span>
              </div>
              <h3 className="font-['Playfair_Display'] text-[22px] font-bold text-[#2C1810] leading-snug mb-3">
                {featured.title}
              </h3>
              <p className="font-['Nunito'] text-[14px] text-[#5C3D2E] leading-relaxed">
                {featured.desc}
              </p>
            </div>
          </div>

          {/* Side list */}
          <div className="flex flex-col gap-4">
            {rest.map((video, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden border border-[#C1694F]/10 hover:shadow-[0_8px_32px_rgba(193,105,79,0.1)] hover:-translate-y-0.5 transition-all duration-300 group flex flex-col"
              >
                {/* Embed */}
                <div className="relative w-full aspect-video bg-[#2C1810] flex-shrink-0">
                  <iframe
                    src={video.embedUrl}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                    loading="lazy"
                  />
                </div>

                {/* Info */}
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-['Nunito'] font-bold text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider ${categoryColors[video.category]}`}>
                      {video.category}
                    </span>
                    <span className="font-['Nunito'] text-[11px] text-[#6B7280] flex items-center gap-1">
                      <Play size={10} className="fill-[#6B7280]" />
                      {video.duration}
                    </span>
                  </div>
                  <h4 className="font-['Playfair_Display'] text-[15px] font-bold text-[#2C1810] leading-snug mb-1.5">
                    {video.title}
                  </h4>
                  <p className="font-['Nunito'] text-[12px] text-[#5C3D2E] leading-relaxed line-clamp-2">
                    {video.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Bottom decorative card */}
            <div className="bg-gradient-to-br from-[#C1694F] to-[#8B3A20] rounded-2xl p-6 text-center flex-1 flex flex-col justify-center min-h-[100px]">
              <p className="font-['Playfair_Display'] text-[16px] font-bold text-white leading-snug mb-1">
                More stories coming
              </p>
              <p className="font-['Nunito'] text-[12px] text-white/70">
                New videos added every month
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}