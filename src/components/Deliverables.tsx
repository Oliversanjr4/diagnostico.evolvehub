
import { FaFileAlt, FaLightbulb, FaRoad } from 'react-icons/fa';

const Deliverables = () => {
    return (
        <section className="py-20 bg-gray-900 text-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-10 md:mb-0">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Claridad y Dirección para tu Negocio</h2>
                        <p className="text-xl text-gray-300">
                            No te damos solo un papel. Te damos un plan.
                        </p>
                    </div>

                    <div className="md:w-1/2 space-y-6">
                        <div className="flex items-center bg-gray-800 p-6 rounded-lg shadow-md transform transition hover:-translate-y-1">
                            <div className="bg-brand p-3 rounded-full mr-6">
                                <FaFileAlt className="text-2xl text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">Auditoría de Situación</h3>
                                <p className="text-gray-400">Un resumen claro de tu nivel de digitalización actual.</p>
                            </div>
                        </div>

                        <div className="flex items-center bg-gray-800 p-6 rounded-lg shadow-md transform transition hover:-translate-y-1">
                            <div className="bg-brand p-3 rounded-full mr-6">
                                <FaLightbulb className="text-2xl text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">Recomendaciones Expertas</h3>
                                <p className="text-gray-400">Consejos directos sobre qué implementar o mejorar.</p>
                            </div>
                        </div>

                        <div className="flex items-center bg-gray-800 p-6 rounded-lg shadow-md transform transition hover:-translate-y-1">
                            <div className="bg-brand p-3 rounded-full mr-6">
                                <FaRoad className="text-2xl text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">Plan de Acción</h3>
                                <p className="text-gray-400">Una propuesta de próximos pasos a tu ritmo.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Deliverables;
