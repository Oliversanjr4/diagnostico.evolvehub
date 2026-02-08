
import { motion } from 'framer-motion';

const CTA = () => {
    return (
        <section className="py-20 bg-brand text-white text-center" id="contact">
            <div className="container mx-auto px-6">
                <motion.h2
                    className="text-3xl md:text-5xl font-bold mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Deja de adivinar y empieza a optimizar hoy mismo.
                </motion.h2>

                <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90">
                    Recuerda: El diagnóstico es 100% gratuito y sin compromiso. Tienes mucho que ganar y nada que perder.
                </p>

                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <a
                        href="mailto:hola@evolvehub.com?subject=Solicitud de Diagnóstico Digital Gratuito"
                        className="inline-block bg-white text-brand font-bold py-4 px-10 rounded-full shadow-2xl text-lg mb-10"
                    >
                        SOLICITAR DIAGNÓSTICO DIGITAL GRATUITO
                    </a>
                </motion.div>

                <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12 opacity-80 text-lg">
                    <span>📞 Llámanos: <strong>+34 900 XXX XXX</strong></span>
                    <span>✉️ Escríbenos: <strong>hola@evolvehub.com</strong></span>
                </div>
            </div>
        </section>
    );
};

export default CTA;
