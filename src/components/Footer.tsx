

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="bg-gray-900 text-gray-500 py-8 border-t border-gray-800">
            <div className="container mx-auto px-6 text-center">
                <p>&copy; {year} EvolveHub. Todos los derechos reservados.</p>
                <div className="mt-4 flex justify-center space-x-6">
                    <a href="#" className="hover:text-white transition">Política de Privacidad</a>
                    <a href="#" className="hover:text-white transition">Aviso Legal</a>
                    <a href="#" className="hover:text-white transition">Cookies</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
