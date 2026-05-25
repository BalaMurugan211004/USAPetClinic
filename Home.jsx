export default function PetVetClinicWebsite() {
  const pets = [
    {
      name: 'Golden Retriever',
      image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name: 'Cute Cat',
      image: 'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name: 'Parrot',
      image: 'https://images.unsplash.com/photo-1522858547137-f1dcec554f55?q=80&w=1200&auto=format&fit=crop'
    }
  ];

  const medicines = [
    {
      title: 'Pet Antibiotics',
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'Vitamin Supplements',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'Pet Vaccination Kit',
      image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?q=80&w=1200&auto=format&fit=crop'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/10 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-3xl font-black tracking-wide text-cyan-300">
            PawCare Vet Clinic
          </h1>

          <div className="hidden md:flex gap-8 text-sm font-semibold">
            <a href="#home" className="hover:text-cyan-300 transition-all">Home</a>
            <a href="#services" className="hover:text-cyan-300 transition-all">Services</a>
            <a href="#pets" className="hover:text-cyan-300 transition-all">Pets</a>
            <a href="#medicine" className="hover:text-cyan-300 transition-all">Medicine</a>
            <a href="#contact" className="hover:text-cyan-300 transition-all">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-6"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>

        <div className="relative z-10 max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Advanced <span className="text-cyan-300">Pet Care</span> & Medicine
            </h2>

            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              24/7 veterinary care with modern treatment, pet vaccination,
              surgery support, wellness checkups, and premium pet medicine.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="px-8 py-4 bg-cyan-400 text-black rounded-2xl font-bold hover:scale-105 transition-transform shadow-2xl">
                Book Appointment
              </button>

              <button className="px-8 py-4 border border-cyan-300 rounded-2xl hover:bg-cyan-300 hover:text-black transition-all">
                Emergency Support
              </button>
            </div>
          </div>

          {/* 3D Card */}
          <div className="relative group perspective-[1200px]">
            <div className="bg-white/10 border border-white/10 backdrop-blur-2xl rounded-[40px] p-6 shadow-[0_20px_80px_rgba(0,255,255,0.2)] transform transition-all duration-700 group-hover:rotate-y-12 group-hover:-rotate-x-6 hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop"
                alt="Pet"
                className="rounded-3xl w-full h-[500px] object-cover"
              />

              <div className="mt-6">
                <h3 className="text-3xl font-bold text-cyan-300">
                  Trusted Veterinary Experts
                </h3>
                <p className="mt-3 text-slate-300 leading-relaxed">
                  Caring for dogs, cats, birds, rabbits, and exotic pets with
                  modern medical technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-cyan-300">Our Services</h2>
          <p className="mt-4 text-slate-300 text-lg">
            Full healthcare solutions for your pets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            'Vaccination',
            'Pet Surgery',
            'Emergency Care',
            'Nutrition & Wellness'
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white/10 border border-white/10 rounded-3xl p-8 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(0,255,255,0.2)] transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-cyan-300 text-black flex items-center justify-center text-2xl font-black mb-6">
                {index + 1}
              </div>

              <h3 className="text-2xl font-bold">{service}</h3>

              <p className="mt-4 text-slate-300 leading-relaxed">
                Professional treatment and dedicated veterinary assistance for every pet.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pet Gallery */}
      <section id="pets" className="py-24 px-6 bg-white/5 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-cyan-300">Happy Pets</h2>
            <p className="mt-4 text-slate-300 text-lg">
              Trusted care for every animal companion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {pets.map((pet, index) => (
              <div
                key={index}
                className="group bg-white/10 rounded-[30px] overflow-hidden border border-white/10 hover:scale-105 transition-all duration-700"
              >
                <div className="overflow-hidden">
                  <img
                    src={pet.image}
                    alt={pet.name}
                    className="w-full h-[350px] object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-cyan-300">
                    {pet.name}
                  </h3>
                  <p className="mt-3 text-slate-300">
                    Healthy, active, and receiving premium veterinary treatment.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medicine Section */}
      <section id="medicine" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-cyan-300">
            Pet Medicines
          </h2>
          <p className="mt-4 text-slate-300 text-lg">
            Trusted medicines and healthcare products for pets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {medicines.map((medicine, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-cyan-400/10 to-indigo-500/10 border border-cyan-300/20 rounded-[30px] overflow-hidden hover:rotate-1 hover:scale-105 transition-all duration-500"
            >
              <img
                src={medicine.image}
                alt={medicine.title}
                className="w-full h-[300px] object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold text-cyan-300">
                  {medicine.title}
                </h3>

                <p className="mt-3 text-slate-300 leading-relaxed">
                  Safe and approved veterinary medicines used for treatment and wellness.
                </p>

                <button className="mt-6 px-6 py-3 rounded-2xl bg-cyan-300 text-black font-bold hover:scale-105 transition-transform">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-24 px-6 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10"
      >
        <div className="max-w-5xl mx-auto text-center bg-white/10 border border-white/10 rounded-[40px] p-12 backdrop-blur-2xl">
          <h2 className="text-5xl font-bold text-cyan-300">
            Contact PawCare Clinic
          </h2>

          <p className="mt-6 text-lg text-slate-300">
            Book appointments, emergency support, or wellness consultations.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div>
              <h3 className="text-2xl font-bold">Phone</h3>
              <p className="mt-3 text-slate-300">+91 98765 43210</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">Email</h3>
              <p className="mt-3 text-slate-300">pawcareclinic@gmail.com</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">Location</h3>
              <p className="mt-3 text-slate-300">Puducherry, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-white/10 text-slate-400">
        © 2026 PawCare Vet Clinic. All rights reserved.
      </footer>
    </div>
  );
}
