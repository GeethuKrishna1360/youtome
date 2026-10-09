import React from 'react';
import { Heart, Quote, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export const SuccessStories: React.FC = () => {
  const stories = [
    {
      names: 'Priya & Rahul Nair',
      location: 'Kochi & Bengaluru',
      date: 'Married January 2024',
      quote: 'We connected on U2ME when our parents found complete alignment in our family values and Nakshatra. Within 6 months of meaningful conversations, we knew we had found our lifelong home in each other.',
      photo: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=80',
      tag: 'Architect & Cardiologist'
    },
    {
      names: 'Siddharth & Pooja Rao',
      location: 'Mumbai & New York',
      date: 'Married November 2023',
      quote: 'Navigating long-distance matrimonial search was overwhelming until we used U2ME. The verified credentials gave our families immense confidence, and our initial chat turned into a forever bond.',
      photo: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80',
      tag: 'Quant Analyst & UX Director'
    },
    {
      names: 'Aditya & Neha Sharma',
      location: 'Chandigarh & Delhi',
      date: 'Married February 2024',
      quote: 'No awkward matchmaking tropes—just authentic people who value equal partnership and shared dreams. U2ME transformed how our families approached this beautiful milestone.',
      photo: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80',
      tag: 'Tech Founder & Civil Officer'
    }
  ];

  return (
    <section id="stories" className="py-16 sm:py-20 bg-[#F8FAF8] border-t border-emerald-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto space-y-2.5">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100/80 border border-emerald-200 text-[#047857] text-xs font-bold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 fill-[#059669] text-[#059669]" />
            <span>Real Couples • Real Happiness</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#064E3B] tracking-tight">
            Happy Couples, Beautiful Beginnings
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Thousands of couples have found their life partners through U2ME's genuine, safe, and family-first platform.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, idx) => (
            <article
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col text-left group"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                <img
                  src={story.photo}
                  alt={story.names}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-serif text-xl font-bold tracking-tight">
                    {story.names}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-slate-300 mt-0.5">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-emerald-400" />
                      {story.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-emerald-400" />
                      {story.date}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="relative">
                  <Quote className="w-7 h-7 text-emerald-200 mb-1" />
                  <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                    "{story.quote}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-800">{story.tag}</span>
                  <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Verified Union
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
