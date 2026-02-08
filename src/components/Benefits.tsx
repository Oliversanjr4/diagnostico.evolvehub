
import { FaSearch, FaPiggyBank, FaTools, FaSortAmountUp } from 'react-icons/fa';

const Benefits = () => {
    const benefits = [
        {
            icon: <FaSearch className="text-4xl text-brand mb-4" />,
            title: "Identificar Cuellos de Botella",
            description: "Encuentra exactamente dónde se pierde tiempo y dinero en tus procesos actuales."
        },
        {
            icon: <FaPiggyBank className="text-4xl text-brand mb-4" />,
            title: "Descubrir Oportunidades de Ahorro",
            description: "Mejora la gestión de recursos y reduce costes operativos innecesarios."
        },
        {
            icon: <FaTools className="text-4xl text-brand mb-4" />,
            title: "Evaluar tus Herramientas",
            description: "¿Usas el software adecuado? Te diremos si lo que tienes te ayuda o te estorba."
        },
        {
            icon: <FaSortAmountUp className="text-4xl text-brand mb-4" />,
            title: "Priorizar Mejoras",
            description: "Sabrás qué cambios simples tendrán el mayor impacto inmediato en tu negocio."
        }
    ];

    return (
        <section className="py-20 bg-white" id="benefits">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-16">
                    Detecta lo que no ves a simple vista
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition border border-gray-100">
                            <div className="flex justify-center">{benefit.icon}</div>
                            <h3 className="text-xl font-bold text-center mb-4 text-gray-800">{benefit.title}</h3>
                            <p className="text-gray-600 text-center">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
