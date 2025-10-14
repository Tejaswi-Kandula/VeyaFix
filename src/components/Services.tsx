import { useState, useEffect } from 'react';
import Nav from './Nav';
import 'animate.css';
import Orb from './Orb';
interface ServiceItem {
  videoUrl: string;
  title: string;
  description: string;
  longDescription: string;
  link: string;
}

const servicesData: ServiceItem[] = [
  {
    videoUrl: 'https://cdnl.iconscout.com/lottie/premium/thumb/a-mechanic-is-fixing-the-bonnet-of-a-car-animation-gif-download-8610541.mp4',
    title: 'Engine Diagnostics',
    description: 'Our advanced tools pinpoint problems with precision, saving you time and money on complex repairs.',
    longDescription: 'Our engine diagnostic service is a comprehensive check of your vehicle\'s onboard computer systems. We use state-of-the-art diagnostic tools to read trouble codes, analyze engine performance data, and identify hidden issues. This proactive approach helps prevent major breakdowns, improves fuel efficiency, and ensures your car runs smoothly and reliably.',
    link: 'diagnostics',
  },
  {
    videoUrl: 'https://cdnl.iconscout.com/lottie/premium/thumb/a-worker-is-filling-a-tire-with-air-animation-gif-download-8610558.mp4',
    title: 'Tire & Wheel Services',
    description: 'We handle everything from tire rotations and alignments to full replacements for a safer drive.',
    longDescription: 'Proper tire maintenance is crucial for safety and performance. Our services include professional tire rotations, wheel balancing to reduce vibration, and precise alignments to ensure even wear. We also offer a wide selection of new tires and can quickly repair punctures to get you back on the road safely.',
    link: 'tires',
  },
  {
    videoUrl: 'https://cdnl.iconscout.com/lottie/premium/thumb/young-black-woman-washing-car-animation-gif-download-9429148.mp4',
    title: 'Car Washing & Detailing',
    description: 'Restore your vehicle\'s shine with our professional washing and detailing services, inside and out.',
    longDescription: 'Give your car the care it deserves with our premium washing and detailing services. We use high-quality products to remove dirt and grime, protect your paint with a long-lasting wax finish, and meticulously clean the interior to restore that new-car feel. Our detailing ensures every part of your car, from the dashboard to the upholstery, is immaculate.',
    link: 'detailing',
  },
  {
    videoUrl: 'https://cdnl.iconscout.com/lottie/premium/thumb/a-mechanic-is-repairing-a-car-animation-gif-download-8610554.mp4',
    title: 'Brake Services',
    description: 'Ensure your safety with our thorough brake inspections, repairs, and full system replacements.',
    longDescription: 'Your vehicle\'s brakes are its most important safety system. Our expert technicians perform comprehensive brake inspections, checking pads, rotors, and fluid levels. We provide timely repairs and replacements, using only the highest-quality parts to ensure optimal stopping power and your complete safety on the road.',
    link: 'brakes',
  },
  {
    videoUrl: 'https://cdnl.iconscout.com/lottie/premium/thumb/a-mechanic-is-repairing-a-car-animation-gif-download-8610535.mp4',
    title: 'General Repairs',
    description: 'From routine maintenance to unexpected issues, our team is equipped to handle all vehicle repairs.',
    longDescription: 'Whether it\'s a strange noise, a fluid leak, or a complete breakdown, our skilled mechanics are ready to help. We diagnose and repair a wide range of vehicle issues, from minor fixes to major component overhauls, with a commitment to quality and efficiency. Trust us to get your car back on the road in top condition.',
    link: 'repairs',
  },
  {
    videoUrl: 'https://cdnl.iconscout.com/lottie/premium/thumb/a-mechanic-stands-with-a-toolbox-animation-gif-download-8610559.mp4',
    title: 'Expert Consultation',
    description: 'Our knowledgeable mechanics are here to provide expert advice and help you understand your vehicle’s needs.',
    longDescription: 'Not sure what\'s wrong with your car? Our team offers free expert consultations to help you understand your vehicle\'s needs without any pressure. We will listen to your concerns, provide a professional assessment, and outline the best course of action. Your peace of mind is our priority.',
    link: 'consultation',
  },
];
function ServiceDetail({ service }: {service: ServiceItem}) {
  return (
    <div className="bg-gray-950 min-h-screen text-white flex flex-col items-center p-8 animate__animated animate__fadeIn">
      <button
        onClick={() => window.history.back()}
        className="self-start mb-8 text-lg font-semibold text-white-300 hover:text-white-900  transition-colors duration-300  hover:scale-105"
      >
        &larr; Back to Services
      </button>

      <div className="w-full max-w-4xl rounded-xl overflow-hidden shadow-2xl">
        <video
          src={service.videoUrl}
          loop
          muted
          playsInline
          autoPlay
          className="w-full h-auto object-cover"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="w-full max-w-4xl mt-8">
        <h1 className="text-4xl font-extrabold mb-4">{service.title}</h1>
        <p className="text-lg text-gray-400 leading-relaxed">
          {service.longDescription}
        </p>
      </div>
    </div>
  );
}

function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const serviceLink = window.location.hash.slice(1);
      const service = servicesData.find(item => item.link === serviceLink);
      setSelectedService(service || null);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (selectedService) {
    return (
      <ServiceDetail
      service={selectedService}
      />
    );
  }

  return (
    <div className="bg-gray-950 min-h-screen text-white">
      <Nav />
      <div style={{ width: '100vw', height: '100vh', position: 'fixed' }}>
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={215}
          forceHoverState={false}
        />
      </div>
      <div className="max-w-7xl mx-auto py-16 px-4">
        <h1 className="text-5xl font-extrabold text-center mb-12 animate__animated animate__fadeInDown">
          Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl transition-transform duration-300 animate__animated animate__zoomIn animate__delay-1s"
              onMouseEnter={(e) => {
                const video = e.currentTarget.querySelector('video');
                if (video) video.play();
              }}
              onMouseLeave={(e) => {
                const video = e.currentTarget.querySelector('video');
                if (video) video.pause();
              }}
            >
              <div className="relative w-full aspect-video">
                <video
                  src={service.videoUrl}
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <a
                  href={`#${service.link}`}
                  onClick={() => {
                    setSelectedService(service);
                  }}
                  className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded-full  transition-colors duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;