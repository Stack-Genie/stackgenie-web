'use client';
import Image from 'next/image';

const partners = [
  { name: 'Asterisk', icon: '/icons/chatgpt.png' },
  { name: 'New Duet', icon: '/icons/buffer.png' },
  { name: 'Nectar', icon: '/icons/hubspot.png' },
  { name: 'Recycle', icon: '/icons/similarweb.png' },
  { name: 'Oasis', icon: '/icons/google-cloud.png' },
  { name: 'Cloudform', icon: '/icons/aws.png' },
  { name: 'Ohealth', icon: '/icons/twilio.png' },
  { name: 'Veterinary', icon: '/icons/stripe.png' },
  { name: 'Fast Aid', icon: '/icons/rapid.avif' },
  { name: 'Mainpoint', icon: '/icons/meta.png' }
];

export default function TrustedPartnersSection() {
  return (
    <section className="py-20 px-4 sm:px-12  text-white text-center">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-10">
  Powering <span className="text-purple-300">Innovation</span> with <span className="text-gray-400">Trusted APIs</span>
</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex items-center justify-center border border-white/10 rounded-lg p-4 bg-[#121212] hover:bg-white/5 transition"
          >
            <Image src={partner.icon} alt={partner.name} width={80} height={30} />
          </div>
        ))}
      </div>
    </section>
  );
}
