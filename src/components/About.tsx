
import { FaChartLine, FaCogs, FaNetworkWired } from 'react-icons/fa';

const About = () => {
    return (
        <section className="py-20 bg-white" id="about">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Tecnología Práctica para Empresas Reales</h2>
                    <div className="max-w-3xl mx-auto">
                        <p className="text-lg text-gray-600 mb-6">
                            En <strong>EvolveHub</strong> no vendemos humo ni herramientas complejas que nadie usa. Somos especialistas en la digitalización de <strong>Pequeñas y Medianas Empresas (PYMES)</strong> que buscan resultados tangibles.
                        </p>
                        <p className="text-lg text-gray-600">
                            Entendemos los retos del día a día: facturación desordenada, stock que no cuadra, o perder horas en tareas repetitivas. Nuestro trabajo es aplicar la tecnología justa para que tu negocio funcione mejor, sea más rentable y te dé más libertad.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-10 mt-12">
                    <div className="p-8 bg-gray-50 rounded-xl hover:shadow-xl transition text-center">
                        <div className="text-brand text-5xl mb-6 flex justify-center"><FaChartLine /></div>
                        <h3 className="text-xl font-bold mb-4">Resultados Tangibles</h3>
                        <p className="text-gray-600">Nos enfocamos en métricas reales. Si no mejora tu negocio, no nos sirve.</p>
                    </div>
                    <div className="p-8 bg-gray-50 rounded-xl hover:shadow-xl transition text-center">
                        <div className="text-brand text-5xl mb-6 flex justify-center"><FaCogs /></div>
                        <h3 className="text-xl font-bold mb-4">Optimización Real</h3>
                        <p className="text-gray-600">Eliminamos tareas manuales y errores humanos para que tu equipo sea más productivo.</p>
                    </div>
                    <div className="p-8 bg-gray-50 rounded-xl hover:shadow-xl transition text-center">
                        <div className="text-brand text-5xl mb-6 flex justify-center"><FaNetworkWired /></div>
                        <h3 className="text-xl font-bold mb-4">Digitalización Pymes</h3>
                        <p className="text-gray-600">Soluciones adaptadas al tamaño y necesidades específicas de tu empresa.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
