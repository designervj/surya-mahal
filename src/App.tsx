import React from 'react';
import { Play, CheckCircle2, Camera, Cake, Flower2, MapPin, Music, Shirt, Quote, Phone, Mail, Instagram, Facebook, Twitter, Youtube, Diamond, ArrowRight } from 'lucide-react';

const LeafDivider = () => (
  <div className="flex items-center justify-center gap-3 my-12 opacity-50">
    <div className="h-px w-16 bg-gray-500"></div>
    <svg width="32" height="16" viewBox="0 0 32 16" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-600">
      <path d="M16 16C16 16 20 8 32 8C20 8 16 0 16 0C16 0 12 8 0 8C12 8 16 16 16 16Z" fill="currentColor" opacity="0.2"/>
      <path d="M16 16C16 16 20 8 32 8C20 8 16 0 16 0C16 0 12 8 0 8C12 8 16 16 16 16Z" />
    </svg>
    <div className="h-px w-16 bg-gray-500"></div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-[#F9F8F6] text-[#1A1A1A]">
      {/* Hero Section */}
      <header className="relative h-screen min-h-[600px] flex flex-col">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80" 
            alt="Grand Hall" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Navbar */}
        <nav className="relative z-10 flex items-center justify-between px-8 py-6 text-white border-b border-white/20">
          <div className="flex items-center gap-2">
            <Diamond className="w-6 h-6 text-blue-400" fill="currentColor" />
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm tracking-widest uppercase">
            <a href="#" className="hover:text-gray-300 transition-colors">Home</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Gallery</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Contact Us</a>
            <a href="#" className="hover:text-gray-300 transition-colors">About Us</a>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-serif text-6xl md:text-8xl text-white mb-8 tracking-wider">
            GRAND<br />PEARL.
          </h1>
          <div className="flex items-center gap-6">
            <button className="px-8 py-3 border border-white text-white uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors">
              Book Now
            </button>
            <button className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
              <Play className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </header>

      {/* Rooms Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <LeafDivider />
        <h2 className="text-4xl font-serif text-center mb-12">Rooms</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80", title: "Room 01" },
            { img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80", title: "Room 02" }
          ].map((room, i) => (
            <div key={i} className="relative group overflow-hidden aspect-[16/9]">
              <img src={room.img} alt={room.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h3 className="text-2xl font-serif mb-2">{room.title}</h3>
                <p className="text-sm text-gray-300">Upto 200 seats</p>
                <p className="text-sm text-gray-300">682 m² or 7341 ft²</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Halls Section */}
      <section className="py-10 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-serif text-center mb-12">Halls</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80", title: "Hall 01" },
            { img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80", title: "Hall 02" }
          ].map((hall, i) => (
            <div key={i} className="relative group overflow-hidden aspect-[16/9]">
              <img src={hall.img} alt={hall.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h3 className="text-2xl font-serif mb-2">{hall.title}</h3>
                <p className="text-sm text-gray-300">Upto 200 seats</p>
                <p className="text-sm text-gray-300">682 m² or 7341 ft²</p>
                <p className="text-sm text-gray-300 mt-1">Catering available</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quality of Service */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">We keep in mind the<br/>quality of service</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Sed lectus ultricies id id massa tellus. Gravida ullamcorper lectus vitae tristique cursus tempor rutrum. Aenean posuere urna feugiat nunc in nulla. Non ac iaculis lobortis amet lectus ac donec.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Aenean posuere urna feugiat nunc in nulla. Non ac iaculis lobortis amet lectus ac donec.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Non ac iaculis lobortis",
                "Sed lectus ultricies",
                "Gravida ullamcorper",
                "Aenean posuere urna"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gray-800" />
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[500px]">
            <img 
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80" 
              alt="Wedding Decor 1" 
              className="absolute top-0 right-0 w-3/4 h-3/4 object-cover shadow-xl"
            />
            <img 
              src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80" 
              alt="Wedding Decor 2" 
              className="absolute bottom-0 left-0 w-3/4 h-3/4 object-cover shadow-xl border-8 border-[#F9F8F6]"
            />
          </div>
        </div>
      </section>

      {/* Our passion */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <LeafDivider />
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">Our passion is your perfect event</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-4">
            <img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80" alt="Event 1" className="w-full h-64 object-cover" />
            <img src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80" alt="Event 2" className="w-full h-96 object-cover" />
          </div>
          <div className="space-y-4">
            <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80" alt="Event 3" className="w-full h-80 object-cover" />
            <img src="https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?auto=format&fit=crop&q=80" alt="Event 4" className="w-full h-80 object-cover" />
          </div>
          <div className="space-y-4">
            <img src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80" alt="Event 5" className="w-full h-96 object-cover" />
            <img src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80" alt="Event 6" className="w-full h-64 object-cover" />
          </div>
        </div>
      </section>

      {/* Quality services */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <LeafDivider />
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-8">Quality services are key to our success</h2>
          <button className="flex items-center gap-2 bg-black text-white px-6 py-3 text-sm uppercase tracking-widest hover:bg-gray-800 transition-colors">
            View all <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80" alt="Service 1" className="w-full h-80 object-cover" />
          <img src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80" alt="Service 2" className="w-full h-80 object-cover" />
          <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80" alt="Service 3" className="w-full h-80 object-cover" />
        </div>

        {/* Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
          <div className="text-center font-serif italic text-xl">Floral Studio<br/><span className="text-xs sans-serif not-italic tracking-widest uppercase">Wedding Art</span></div>
          <div className="text-center font-serif italic text-2xl">Wedding<br/><span className="text-xs sans-serif not-italic tracking-widest uppercase">Studio</span></div>
          <div className="text-center font-serif italic text-xl">Flora Studio<br/><span className="text-xs sans-serif not-italic tracking-widest uppercase">Wedding Art</span></div>
          <div className="text-center font-serif italic text-2xl">WS<br/><span className="text-xs sans-serif not-italic tracking-widest uppercase">Wedding</span></div>
        </div>
      </section>

      {/* Our Latest Weddings */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <LeafDivider />
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">Our Latest Weddings</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80" alt="Latest 1" className="w-full h-80 object-cover" />
          <img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80" alt="Latest 2" className="w-full h-80 object-cover" />
          <img src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80" alt="Latest 3" className="w-full h-80 object-cover" />
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto bg-[#F2F0EB]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Camera, title: "Camera & Video", desc: "Gravida ullamcorper lectus vitae tristique cursus tempor rutrum." },
            { icon: Cake, title: "Wedding Cake", desc: "Consectetur arcu egestas tortor metus eleifend estacinia quis." },
            { icon: Flower2, title: "Floral Design", desc: "Sed pretium quisque tempor ultrices enim nam quisque mattis." },
            { icon: MapPin, title: "Stunning Locations", desc: "Eget netus ultricies scelerisque inunc id tempor lacinia tempor." },
            { icon: Music, title: "Music Party", desc: "Nulla diam mattis fringilla massa ac duis facilisi consequat mauris." },
            { icon: Shirt, title: "Wedding Dress", desc: "Tristique in porttitor nunc massa a sit neque lectus feugiat." }
          ].map((feature, i) => (
            <div key={i} className="bg-white p-12 text-center flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-gray-700" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif mb-4">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-full overflow-hidden border-8 border-white shadow-xl">
              <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80" alt="Testimonial" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
              <Quote className="w-8 h-8 text-gray-300" fill="currentColor" />
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-serif mb-8">What our clients say</h2>
            <p className="text-gray-600 mb-8 leading-relaxed italic">
              "Sed lectus ultricies id id massa tellus. Gravida ullamcorper lectus vitae tristique cursus tempor rutrum. Aenean posuere urna feugiat nunc in nulla. Non ac iaculis lobortis amet lectus ac donec."
            </p>
            <div className="mb-8">
              <h4 className="font-serif text-xl">Jonah Roach</h4>
              <p className="text-sm text-gray-400">Wedding 09.05.2024</p>
            </div>
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-black"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">Handling the stress so<br/>your event is a success</h2>
            <p className="text-gray-600 mb-12 leading-relaxed">
              Sed lectus ultricies id id massa tellus. Gravida ullamcorper lectus vitae tristique cursus tempor rutrum.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 mb-12">
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 mt-1 text-gray-600" />
                <div>
                  <p className="text-sm text-gray-500 mb-1">Phone</p>
                  <p className="font-serif">+322 683-5910</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 mt-1 text-gray-600" />
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <p className="font-serif">oevans@outlook.com</p>
                </div>
              </div>
            </div>
            <div className="relative h-64 sm:h-80">
              <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80" alt="Decor" className="absolute bottom-0 left-0 w-2/3 h-4/5 object-cover shadow-lg" />
              <img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80" alt="Decor" className="absolute top-0 right-0 w-1/2 h-2/3 object-cover shadow-lg border-4 border-[#F9F8F6]" />
            </div>
          </div>
          
          <div className="bg-white p-8 md:p-12 shadow-sm">
            <h3 className="text-2xl font-serif mb-4">Send Us a message</h3>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
              Sed lectus ultricies id id massa tellus. Gravida ullamcorper lectus vitae tristique cursus tempor rutrum.
            </p>
            <form className="space-y-4">
              <input type="text" placeholder="Name" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-gray-400" />
              <input type="email" placeholder="Email" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-gray-400" />
              <input type="tel" placeholder="Phone" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-gray-400" />
              <input type="text" placeholder="Subject" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-gray-400" />
              <textarea placeholder="Message" rows={4} className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-gray-400 resize-none"></textarea>
              <button type="submit" className="flex items-center gap-2 bg-black text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-gray-800 transition-colors w-full sm:w-auto justify-center">
                <Mail className="w-4 h-4" /> Send message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <LeafDivider />
        <h2 className="text-4xl font-serif text-center mb-16">Follow Us on Instagram</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80" alt="Insta 1" className="w-full aspect-square object-cover" />
          <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80" alt="Insta 2" className="w-full aspect-square object-cover" />
          <img src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80" alt="Insta 3" className="w-full aspect-square object-cover" />
          <img src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80" alt="Insta 4" className="w-full aspect-square object-cover" />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div>
            <h4 className="font-serif text-xl mb-6">Address</h4>
            <p className="text-gray-400 text-sm mb-4">Oxford Ave. Cary, NC 27511</p>
            <h4 className="font-serif text-xl mb-6 mt-8">Opening hours</h4>
            <p className="text-gray-400 text-sm">Sun-Mon: 10am - 10pm</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2 mb-6">
              <Diamond className="w-5 h-5" />
              <span className="font-serif text-2xl tracking-widest">Wedding</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
              Sed lectus ultricies id id massa tellus. Gravida ullamcorper lectus vitae tristique cursus tempor r...
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="md:text-right">
            <h4 className="font-serif text-xl mb-6">Phone</h4>
            <p className="text-gray-400 text-sm mb-4">+322 683-5910</p>
            <h4 className="font-serif text-xl mb-6 mt-8">Email</h4>
            <p className="text-gray-400 text-sm">oevans@outlook.com</p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
          © Copyright Wedding 2024. Design by Figma. guru
        </div>
      </footer>
    </div>
  );
}
