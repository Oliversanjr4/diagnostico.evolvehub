
import { FaCheckCircle } from 'react-icons/fa';

const Diagnosis = () => {
    return (
        <section className="py-20 bg-gray-100" id="diagnosis">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Tu Hoja de Ruta hacia la Eficiencia</h2>
                        <p className="text-lg text-gray-700 mb-6">
                            El <strong>Diagnóstico Digital</strong> no es una venta encubierta. Es una sesión de consultoría inicial donde analizamos el estado actual de tu negocio para entender tus problemas antes de proponer soluciones.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start">
                                <FaCheckCircle className="text-green-500 mt-1 mr-3 text-xl flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-lg text-gray-900">Sin Coste</h4>
                                    <p className="text-gray-600">Totalmente gratuito.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <FaCheckCircle className="text-green-500 mt-1 mr-3 text-xl flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-lg text-gray-900">Sin Compromiso</h4>
                                    <p className="text-gray-600">No tienes obligación de contratar nada después.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <FaCheckCircle className="text-green-500 mt-1 mr-3 text-xl flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-lg text-gray-900">Formato Ágil</h4>
                                    <p className="text-gray-600">Una breve llamada o revisión de información clave.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/2 flex justify-center">
                        {/* Placeholder for an image or graphic */}
                        <div className="w-full h-80 bg-white rounded-2xl shadow-xl flex items-center justify-center p-10 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-light to-brand opacity-10"></div>
                            <div className="text-center z-10">
                                <p className="text-6xl font-bold text-brand mb-2">0€</p>
                                <p className="text-2xl font-bold text-gray-800">Coste del Diagnóstico</p>
                                <p className="text-gray-500 mt-2">Valor real: incalculable</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Diagnosis;
