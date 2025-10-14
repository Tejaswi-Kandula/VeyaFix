import React, { useState } from 'react';
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import Nav from './Nav';
import Orb from './Orb';
const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-red-500" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

const faqData = [
    { question: "How long will the service take?", answer: "A standard service typically takes between 2 to 4 hours, depending on your vehicle's make and model. We will give you a more precise estimate upon inspection." },
    { question: "Do you use genuine parts?", answer: "Absolutely. We use only genuine OEM (Original Equipment Manufacturer) or OES (Original Equipment Supplier) parts to ensure the highest quality and longevity for your vehicle." },
    { question: "Is there a warranty on your repairs?", answer: "Yes, all our repairs come with a 12-month / 12,000-mile warranty on both parts and labor, giving you complete peace of mind." },
    { question: "Can I wait while my car is being serviced?", answer: "Of course. We have a comfortable customer lounge with complimentary Wi-Fi, coffee, and refreshments for you to enjoy while you wait." },
];

const processData = [
    { number: "01", title: "Book Your Service", description: "Choose your preferred date and time online or by giving us a call." },
    { number: "02", title: "Vehicle Drop-off & Inspection", description: "We perform a thorough check and confirm the scope of work with you." },
    { number: "03", title: "Expert Repair", description: "Our certified technicians get to work using state-of-the-art tools and genuine parts." },
    { number: "04", title: "Quality Check & Pickup", description: "We conduct a final quality check before handing back your keys." },
];

const brandLogos = [
    'Maruti Suzuki', 'Hyundai', 'Tata Motors', 'Mahindra', 'Honda', 'Toyota', 'Kia', 'Ford'
];

function Booking() {
    const [formData, setFormData] = useState({
        name: '', phone: '', email: '', vehicleMake: '', vehicleModelYear: '',
        serviceType: '', preferredDate: '', preferredTime: '', message: '',
    });
    const [status, setStatus] = useState('');
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const { scrollYProgress } = useScroll();
    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('sending');
        try {
            // IMPORTANT: Replace with your own Formspree endpoint URL
            const response = await fetch('https://formspree.io/f/YOUR_UNIQUE_ID', {
                method: 'POST',
                headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setStatus('success');
                setFormData({
                    name: '', phone: '', email: '', vehicleMake: '', vehicleModelYear: '',
                    serviceType: '', preferredDate: '', preferredTime: '', message: '',
                });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setStatus('error');
        }
    };
    const sectionVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 }
        }
    };
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };
    return (<>
        <div className="absolute z-999 w-full">
            <Nav />
        </div>
        <div className='w-screen h-screen fixed z-10'>
            <Orb
                hoverIntensity={0.5}
                rotateOnHover={true}
                hue={215}
                forceHoverState={false}
            />
        </div>
        <div className="bg-black text-gray-200 min-h-screen font-sans overflow-x-hidden pt-[72px]">
            <motion.div
                style={{ y: backgroundY }}
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 to-black z-0"
            />
            <div className="relative z-10 max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white">Schedule Your Service</h1>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Experience premium car care. Fill out the form below and we'll confirm your appointment.
                    </p>
                </motion.div>
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-24"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <motion.div
                        className="lg:col-span-2 bg-black/30 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-2xl"
                        variants={itemVariants}
                    >
                        <h2 className="text-3xl font-bold mb-8 text-white">Booking Details</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full bg-gray-700/50 border border-white/10 rounded-lg py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500" required />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-gray-700/50 border border-white/10 rounded-lg py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500" required />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="vehicleMake" className="block text-sm font-medium text-gray-400 mb-2">Vehicle Make & Model</label>
                                    <input type="text" id="vehicleMake" name="vehicleMake" value={formData.vehicleMake} onChange={handleChange} placeholder="e.g., Toyota Camry" className="w-full bg-gray-700/50 border border-white/10 rounded-lg py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500" required />
                                </div>
                                <div>
                                    <label htmlFor="vehicleModelYear" className="block text-sm font-medium text-gray-400 mb-2">Vehicle Year</label>
                                    <input type="text" id="vehicleModelYear" name="vehicleModelYear" value={formData.vehicleModelYear} onChange={handleChange} placeholder="e.g., 2022" className="w-full bg-gray-700/50 border border-white/10 rounded-lg py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500" required />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="serviceType" className="block text-sm font-medium text-gray-400 mb-2">Service Type</label>
                                <select id="serviceType" name="serviceType" value={formData.serviceType} onChange={handleChange} className="w-full bg-gray-700/50 border border-white/10 rounded-lg py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500" required>
                                    <option value="">Select a service...</option>
                                    <option value="General Maintenance">General Maintenance</option>
                                    <option value="Engine Diagnostics">Engine Diagnostics</option>
                                    <option value="Brake Services">Brake Services</option>
                                    <option value="Tire & Wheel Services">Tire & Wheel Services</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-400 mb-2">Preferred Date</label>
                                    <input type="date" id="preferredDate" name="preferredDate" value={formData.preferredDate} onChange={handleChange} className="w-full bg-gray-700/50 border border-white/10 rounded-lg py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500" required />
                                </div>
                                <div>
                                    <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-400 mb-2">Preferred Time</label>
                                    <select id="preferredTime" name="preferredTime" value={formData.preferredTime} onChange={handleChange} className="w-full bg-gray-700/50 border border-white/10 rounded-lg py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500" required>
                                        <option value="">Select a time slot...</option>
                                        <option value="Morning (9am - 12pm)">Morning (9am - 12pm)</option>
                                        <option value="Afternoon (1pm - 5pm)">Afternoon (1pm - 5pm)</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Additional Details</label>
                                <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} placeholder="Describe the issue or any specific requests..." className="w-full bg-gray-700/50 border border-white/10 rounded-lg py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full md:w-auto bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-105 disabled:bg-gray-500 disabled:scale-100 disabled:shadow-none" disabled={status === 'sending'}>
                                    {status === 'sending' ? 'Sending...' : 'Request Appointment'}
                                </button>
                                {status === 'success' && <p className="text-green-400 mt-4">Thank you! We've received your request and will call you shortly to confirm.</p>}
                                {status === 'error' && <p className="text-red-400 mt-4">Something went wrong. Please try again or call us directly.</p>}
                            </div>
                        </form>
                    </motion.div>

                    <motion.div className="space-y-8" variants={itemVariants}>
                        <div className="bg-gray-900/50 border border-white/10 p-8 rounded-2xl shadow-lg">
                            <h3 className="text-2xl font-bold mb-6 text-white">Why Book With Us?</h3>
                            <ul className="space-y-4 text-gray-300">
                                <li className="flex items-start gap-4"><CheckIcon /><span>Certified & Experienced Mechanics</span></li>
                                <li className="flex items-start gap-4"><CheckIcon /><span>Transparent, Upfront Pricing</span></li>
                                <li className="flex items-start gap-4"><CheckIcon /><span>Genuine OEM/OES Parts</span></li>
                                <li className="flex items-start gap-4"><CheckIcon /><span>Comfortable Customer Lounge</span></li>
                            </ul>
                        </div>
                        <div className="bg-gray-900/50 border border-white/10 p-8 rounded-2xl shadow-lg">
                            <h3 className="text-2xl font-bold mb-6 text-white">Need Help Now?</h3>
                            <p className="text-gray-400 mb-6">For immediate assistance or to speak with a mechanic directly, please give us a call.</p>
                            <a href="tel:+919876543210" className="flex items-center gap-4 text-xl font-bold text-red-500 hover:text-red-400 transition-colors">
                                <PhoneIcon />
                                <span>+91 98765 43210</span>
                            </a>
                        </div>
                    </motion.div>
                </motion.div>

                {/* --- NEW: Our Process Section --- */}
                <motion.div
                    className="mb-24"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <h2 className="text-4xl font-extrabold text-center mb-12 text-white">Our Simple Booking Process</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {processData.map((step, index) => (
                            <motion.div key={index} variants={itemVariants} className="bg-gray-900/50 border border-white/10 p-6 rounded-xl text-center">
                                <div className="text-5xl font-bold text-red-500 mb-4">{step.number}</div>
                                <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
                                <p className="text-gray-400 text-sm">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
                <motion.div
                    className="max-w-3xl mx-auto mb-24"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <h2 className="text-4xl font-extrabold text-center mb-12 text-white">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqData.map((faq, index) => (
                            <motion.div key={index} variants={itemVariants} className="bg-gray-900/50 border border-white/10 rounded-xl overflow-hidden">
                                <button
                                    className="w-full flex justify-between items-center text-left p-6"
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                >
                                    <span className="text-lg font-semibold text-white">{faq.question}</span>
                                    <motion.span
                                        className="text-2xl text-red-500"
                                        animate={{ rotate: openFaq === index ? 45 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >+</motion.span>
                                </button>
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{
                                        height: openFaq === index ? 'auto' : 0,
                                        opacity: openFaq === index ? 1 : 0
                                    }}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    className="overflow-hidden"
                                >
                                    <p className="p-6 pt-0 text-gray-400">{faq.answer}</p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* --- NEW: Brands We Service Section --- */}
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <h2 className="text-4xl font-extrabold text-center mb-12 text-white">Brands We Service</h2>
                    <div className="flex flex-wrap justify-center items-center gap-8">
                        {brandLogos.map((brand, index) => (
                            <motion.div key={index} variants={itemVariants} className="p-4 bg-gray-900/50 border border-white/10 rounded-lg">
                                <img src={`https://placehold.co/120x60/transparent/white?text=${brand.replace(' ', '+')}&font=roboto`} alt={`${brand} logo`} className="h-10 object-contain opacity-70" />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </div>
    </>
    );
}

export default Booking;

