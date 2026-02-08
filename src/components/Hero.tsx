
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative bg-gray-900 text-white py-20 lg:py-32 overflow-hidden">
            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.h1
                    className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    ¿Tu empresa crece, pero sientes que <span className="text-brand">pierdes el control</span>?
                </motion.h1>

                <motion.p
                    className="text-xl md:text-2xl mb-10 text-gray-300 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Descubre exactamente qué frena tu negocio con un <strong>Diagnóstico Digital Gratuito</strong>. Sin coste. Sin compromiso. Solo claridad.
                </motion.p>

                <motion.p
                    className="text-md text-gray-400 mb-8 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    Ayudamos a PYMES tradicionales a recuperar el control, optimizar procesos y aumentar la rentabilidad con tecnología real, sin complicaciones.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                >
                    <a
                        href="#contact"
                        className="inline-block bg-brand hover:bg-brand-dark text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition hover:scale-105"
                    >
                        SOLICITAR DIAGNÓSTICO GRATUITO
                    </a>
                </motion.div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 z-0">
                <div className="absolute -top-20 -left-20 w-96 h-96 bg-brand rounded-full blur-3xl"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-purple-600 rounded-full blur-3xl"></div>
            </div>
        </section>
    );
};

export default Hero;
