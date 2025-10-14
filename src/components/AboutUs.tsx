import { motion, type Variants } from 'framer-motion';
import Orb from './Orb';
import Nav from './Nav';
const teamMembers = [
    { name: "John Doe", role: "Master Technician", img: "https://placehold.co/500x500/1f2937/d1d5db?text=John+D." },
    { name: "Jane Smith", role: "Service Advisor", img: "https://placehold.co/500x500/1f2937/d1d5db?text=Jane+S." },
    { name: "Mike Richards", role: "Brake & Suspension Specialist", img: "https://placehold.co/500x500/1f2937/d1d5db?text=Mike+R." },
];

const journeyMilestones = [
    { year: "2010", title: "The Beginning", description: "VeyaFix was born in a small, two-bay garage with a mission to provide honest and reliable auto repair.", img: "https://placehold.co/800x600/111827/9ca3af?text=Garage" },
    { year: "2015", title: "Expansion & Growth", description: "Thanks to our loyal customers, we expanded to a larger facility and hired our first team of certified mechanics.", img: "https://placehold.co/800x600/111827/9ca3af?text=Team" },
    { year: "2022", title: "State-of-the-Art", description: "We invested in the latest diagnostic and repair technology, solidifying our position as a leading service center.", img: "https://placehold.co/800x600/111827/9ca3af?text=Technology" },
];

// --- SVG Icons for "Why Choose Us" Section ---
const ValueIcon = ({ icon }: { icon: 'quality' | 'honesty' | 'expertise' }) => {
    const icons = {
        quality: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
        honesty: <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />,
        expertise: <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    };
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {icons[icon]}
        </svg>
    );
};

function AboutUs() {

    const sectionVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i: number = 1) => ({
            opacity: 1, y: 0,
            transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2, delay: i * 0.1 }
        })
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <div className="bg-black text-gray-200 font-sans overflow-x-hidden">
            <Nav />
            <div className="relative h-screen flex items-center justify-center text-center overflow-hidden">
                <div style={{ width: '100vw', height: '100vh', position: 'fixed' }}>
                    <Orb
                        hoverIntensity={0.5}
                        rotateOnHover={true}
                        hue={215}
                        forceHoverState={false}
                    />
                </div>
                <div className="absolute top-0 left-0 w-full h-full z-10"></div>
                <motion.div
                    className="relative z-20 px-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight">
                        About VeyaFix
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                        A Legacy of Trust, A Future of Innovation.
                    </p>
                </motion.div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">

                <motion.div
                    className="mb-28"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <h2 className="text-4xl font-extrabold text-white text-center mb-16">Our Journey</h2>
                    <div className="relative">
                        <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-700"></div>
                        {journeyMilestones.map((item, index) => (
                            <motion.div key={index} className="relative mb-16 flex items-center"
                                variants={itemVariants}
                            >
                                <div className={`flex w-full items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                                        <div className={`bg-gray-800 p-6 rounded-2xl shadow-lg border border-white/10 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                                            <p className="text-2xl font-bold text-red-500 mb-2">{item.year}</p>
                                            <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                                            <p className="text-gray-400">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full border-4 border-gray-900"></div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
                <motion.div
                    className="text-center mb-28"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <h2 className="text-4xl font-extrabold text-white mb-4">Why VeyaFix Stands Out</h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">We're not just mechanics; we're your partners in automotive care.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div variants={itemVariants} className="bg-gray-900 p-8 rounded-2xl border border-white/10">
                            <ValueIcon icon="quality" />
                            <h3 className="text-2xl font-bold text-white">Unmatched Quality</h3>
                        </motion.div>
                        <motion.div variants={itemVariants} className="bg-gray-900 p-8 rounded-2xl border border-white/10">
                            <ValueIcon icon="honesty" />
                            <h3 className="text-2xl font-bold text-white">Radical Honesty</h3>
                        </motion.div>
                        <motion.div variants={itemVariants} className="bg-gray-900 p-8 rounded-2xl border border-white/10">
                            <ValueIcon icon="expertise" />
                            <h3 className="text-2xl font-bold text-white">Proven Expertise</h3>
                        </motion.div>
                    </div>
                </motion.div>
                <motion.div
                    className="text-center"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <h2 className="text-4xl font-extrabold text-white mb-12">Meet Our Expert Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <motion.div key={index} variants={itemVariants} className="group relative rounded-2xl overflow-hidden">
                                <img src={member.img} alt={member.name} className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                                    <p className="text-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{member.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </div>
    );
}

export default AboutUs;

