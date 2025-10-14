import { useState } from 'react';

// A simple Nav component placeholder

function Contact() {
    // State to hold the form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    // State to manage the submission status for user feedback
    const [status, setStatus] = useState('');

    // Handles changes in the input fields
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    // Handles the form submission using Formspree
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('https://formspree.io/f/movnvpgy', { 
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                // Clear the form after successful submission
                setFormData({ name: '', email: '', message: '' });
            } else {
                // Handle server errors (e.g., validation errors from Formspree)
                setStatus('error');
            }
        } catch (error) {
            // Handle network errors
            console.error('Form submission error:', error);
            setStatus('error');
        }
    };

    return (
        <>

            <div className="bg-gray-950 text-white min-h-screen">

                <div className="py-16 px-4 max-w-7xl mx-auto">

                    <div className="text-center mb-12 animate__animated animate__fadeInDown">
                        <h1 className="text-5xl font-extrabold mb-4">Get in Touch</h1>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            We're here to help you with all your vehicle repair and maintenance needs. Contact us today to schedule an appointment or ask any questions you may have.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8">

                        <div className="w-full md:w-1/2 p-8 bg-gray-900 rounded-xl shadow-2xl animate__animated animate__fadeInLeft">
                            <h2 className="text-3xl font-bold mb-6 text-center md:text-left">Send Us a Message</h2>
                            <form className="space-y-6" onSubmit={handleSubmit} >
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-400">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-400">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600"
                                        placeholder="you@example.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-400">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600"
                                        placeholder="Tell us about your vehicle needs..."
                                        required
                                    ></textarea>
                                </div>
                                <div className="text-center md:text-left">
                                    <button
                                        type="submit"
                                        className="inline-block bg-red-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-red-700 transition-colors duration-300 transform hover:scale-105 disabled:bg-gray-500 disabled:scale-100"
                                        disabled={status === 'sending'}
                                    >
                                        {status === 'sending' ? 'Sending...' : 'Send Message'}
                                    </button>
                                </div>
                                {status === 'success' && <p className="text-green-400 mt-4">Thank you! Your message has been sent.</p>}
                                {status === 'error' && <p className="text-red-400 mt-4">Something went wrong. Please try again.</p>}
                            </form>
                        </div>

                        <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-2xl animate__animated animate__fadeInRight">
                            <div className="w-full h-96">
                                <iframe
                                    title="Google Maps Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.280148384242!2d-122.41941578468128!3d37.77492977975895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858079d2b2c8a7%3A0x6b44a4e502c46279!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1628795551221!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}
export default Contact;