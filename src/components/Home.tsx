import Nav from './Nav'
import 'animate.css';
import Footer from './Footer'
import benefits1 from '../assets/business-man-has-idea-with-gold-coin-his-hand_1150-35033(1).jpg'
import benefits2 from '../assets/3d-flat-icon-as-customer-satisfaction-symbol-with-copy-space-project-planning-concept-as-arti_980716-423776.jpg'
import benefits3 from '../assets/businessman-choosing-happy-smile-face-icon-feedback-rating-positive-customer-review-experience-satisfaction-survey-mental-health-assessment-world-mental-health-day-concept_35148-4642.jpg'
import Contact from './Contact';
import Spline from '@splinetool/react-spline';
function Home() {
    return (
        <div >
            <Nav />
            <div className="h-screen w-full flex flex-col bg-gray-950 relative overflow-hidden">
                <div className="p-10 text-white">
                    <h1 className="animate__animated animate__lightSpeedInLeft text-6xl font-extrabold mb-2">VeyaFix</h1>
                    <p className="animate__animated animate__fadeInUp text-lg">Your trusted partner for vehicle repairs and maintenance.</p>
                </div>
                <Spline className="absolute z-[999]  top-[0] w-screen overflow-hidden" scene="https://prod.spline.design/zWXhZMJLvXBnw21p/scene.splinecode" /> 
            </div>
            <div className="bg-gray-950 py-16 px-4 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-extrabold mb-12 ksa-scale-up">Our Benefits</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        <div className="p-6 rounded-xl shadow-lg bg-gray-900 overflow-hidden transform hover:scale-105 transition-transform duration-300 ksa-scale-up">
                            <div className="relative w-full aspect-[3/2]">
                                <img src={benefits1} alt="A man with a golden coin as a symbol for ideas" className="absolute w-full h-full object-cover rounded-lg" />
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-bold mb-2">Competitive Pricing</h3>
                                <p className="text-sm text-gray-400">
                                    We offer transparent and fair pricing on all of our services, ensuring you get high-quality work without breaking the bank.
                                </p>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl shadow-lg bg-gray-900 overflow-hidden transform hover:scale-105 transition-transform duration-300 ksa-scale-up">

                            <div className="relative w-full aspect-[3/2]">
                                <img src={benefits2} alt="A 3D flat icon for customer satisfaction" className="absolute w-full h-full object-cover rounded-lg" />
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-bold mb-2">Customer Satisfaction</h3>
                                <p className="text-sm text-gray-400">
                                    Your happiness is our top priority. We listen to your needs and strive to exceed your expectations with every repair.
                                </p>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl shadow-lg bg-gray-900 overflow-hidden transform hover:scale-105 transition-transform duration-300 ksa-scale-up">
                            <div className="relative w-full aspect-[3/2]">
                                <img src={benefits3} alt="A businessman choosing a happy smile face icon" className="absolute w-full h-full object-cover rounded-lg" />
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-bold mb-2">Reliable Service</h3>
                                <p className="text-sm text-gray-400">
                                    You can count on us to get the job done right the first time. Our experienced technicians use a methodical approach to ensure reliable results.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Contact />
            <Footer />
        </div>
    );
}

export default Home;