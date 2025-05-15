import { Mail, Facebook, Linkedin, Instagram, Github, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 text-xl md:text-lg"   style={{ fontFamily: "Winky Sans, sans-serif" }}>
      <div className="max-w-8xl mx-auto px-[10%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* A propos de nous */}
        <div>
        
          <h3 className="md:text-xl text-lg font-semibold mb-4 relative w-fit cursor-pointer">
            À propos de nous
            <span className="absolute left-0 bottom-0 w-1/2 h-1 rounded-md bg-blue-500"></span>
          </h3>
          <h2 className="text-3xl font-bold text-blue-500 mb-2">MentisCare</h2>
          <p className="text-gray-400 text-lg">
            Une plateforme numérique dédiée au bien-être mental, offrant un suivi et un accompagnement personnalisé.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-blue-500">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500">
              <Mail size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500">
              <Github size={20} />
            </a>
          </div>
        </div>

        {/* Liens rapides */}
        <div>
          <h3 className="md:text-xl text-lg font-semibold mb-4 relative w-fit cursor-pointer">
            Liens rapides
            <span className="absolute left-0 bottom-0 w-1/2 h-1 rounded-md bg-blue-500"></span>
          </h3>
          <ul className="text-gray-400 text-lg">
            <li className="mb-2"><a href="/" className="hover:text-blue-300">Accueil</a></li>
            <li className="mb-2"><a href="/fonctionnalites" className="hover:text-blue-500">Fonctionnalités</a></li>
            <li className="mb-2"><a href="/contact" className="hover:text-blue-500">Contact</a></li>
            <li className="mb-2"><a href="/realisations" className="hover:text-blue-500">Réalisations</a></li>
            <li><a href="/about" className="hover:text-blue-500">À propos</a></li>
          </ul>
        </div>

        {/* Nos services */}
        <div>
          <h3 className="md:text-xl text-lg font-semibold mb-4 relative w-fit cursor-pointer">
            Nos services
            <span className="absolute left-0 bottom-0 w-1/2 h-1 rounded-md bg-blue-500"></span>
          </h3>
          <ul className="text-gray-400 text-lg">
            <li className="mb-2"><a href="/services#consultation" className="hover:text-blue-500">Consultations en ligne</a></li>
            <li className="mb-2"><a href="/services#suivi" className="hover:text-blue-500">Suivi personnalisé</a></li>
            <li className="mb-2"><a href="/services#communauté" className="hover:text-blue-500">Espace d'échange</a></li>
            <li><a href="/services#orientation" className="hover:text-blue-500">Orientation vers des spécialistes</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="md:text-xl text-lg font-semibold mb-4 relative w-fit cursor-pointer">
            Newsletter
            <span className="absolute left-0 bottom-0 w-1/2 h-1 rounded-md bg-blue-500"></span>
          </h3>
          <p className="text-gray-400 text-lg mb-4">
            Inscrivez-vous pour recevoir des conseils et actualités sur la santé mentale.
          </p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Votre email" 
              className="w-full p-2 text-black rounded-l-md focus:outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-4 rounded-r-md">
              <Send size={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Bas du footer */}
      <div className="text-center mt-12">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} MentisCare. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
