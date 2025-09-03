import { motion } from "framer-motion";
import { ShieldCheck, Search, Settings, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <section className="bg-white py-20 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight"
          >
            AML Vendor Solutions
          </motion.h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            Vendor‑neutral advisory for ID verification, sanctions screening, and transaction monitoring.
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
          >
            Get Started
          </a>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: "Vendor Evaluation",
                desc: "Shortlisted tools matched to your risk profile, use cases, and budget."
              },
              {
                icon: Settings,
                title: "Implementation",
                desc: "Seamless integration, rule calibration, QA/UAT, and go‑live support."
              },
              {
                icon: ShieldCheck,
                title: "Optimization",
                desc: "Ongoing tuning, KPI dashboards, and periodic model/threshold reviews."
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow hover:shadow-md transition"
              >
                <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-gray-700 mb-6">
              7+ years of AML experience, vendor‑neutral advice, and hands‑on integrations that scale.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Users className="text-blue-600" /><span>Expert Advisory</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="text-blue-600" /><span>Regulatory Confidence</span>
              </li>
              <li className="flex items-center gap-2">
                <Settings className="text-blue-600" /><span>Seamless Delivery</span>
              </li>
            </ul>
          </div>
          <img
            src="https://images.unsplash.com/photo-1556741533-f6acd647c8f8"
            alt="Compliance team at work"
            className="rounded-2xl shadow-md"
          />
        </div>
      </section>

      <section id="contact" className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Let’s Talk Compliance</h2>
          <p className="text-gray-700 mb-6">
            Email us your use case and current tooling. We’ll recommend the right stack and rollout plan.
          </p>
          <a
            href="mailto:info@amlvendorsolutions.com"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
