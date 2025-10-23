import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Mail, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { Input } from './ui/input';
import { projectId, publicAnonKey } from '../utils/supabase/info';

export function WaitlistSection() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [count, setCount] = useState(0);

  // Fetch current waitlist count on mount
  useEffect(() => {
    fetchCount();
  }, []);

  const fetchCount = async () => {
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-4845c56b/waitlist/count`,
        {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setCount(data.count || 0);
      }
    } catch (err) {
      console.error('Error fetching count:', err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-4845c56b/waitlist`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({ name, email }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Failed to join waitlist');
        setLoading(false);
        return;
      }

      setCount(data.count || count + 1);
      setSubmitted(true);
    } catch (err) {
      console.error('Error submitting to waitlist:', err);
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const perks = [
    'Early access to beta',
    'Founding member pricing',
    'Priority support',
    'Shape the product roadmap',
  ];

  return (
    <section id="waitlist" className="py-32 px-6 bg-[#f5f5f5] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -right-32 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #699669 0%, transparent 70%)' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-[#272727] mb-4"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            }}
          >
            Join the Waitlist
          </h2>
          <p className="text-[#272727]/70 max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
            Be among the first to make your time visible
          </p>
        </motion.div>

        {!submitted ? (
          <motion.div
            className="bg-white rounded-3xl p-12 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 mb-8">
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-2xl p-4 flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <p className="text-red-700 text-sm">{error}</p>
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-[#272727] mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-6 py-4 bg-[#f5f5f5] border-none rounded-2xl focus:ring-2 focus:ring-[#699669] transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#272727] mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-6 py-4 bg-[#f5f5f5] border-none rounded-2xl focus:ring-2 focus:ring-[#699669] transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full group relative px-8 py-4 bg-[#699669] text-white rounded-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#699669]/30 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {loading ? (
                    'Joining...'
                  ) : (
                    <>
                      Join Waitlist
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </span>
                <motion.div
                  className="absolute inset-0 bg-[#557a55]"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </button>
            </form>

            {/* Perks */}
            <div className="grid md:grid-cols-2 gap-4">
              {perks.map((perk, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className="w-5 h-5 bg-[#699669] rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-[#272727]/70">{perk}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            className="bg-white rounded-3xl p-12 shadow-xl text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="w-20 h-20 bg-[#699669]/10 rounded-full flex items-center justify-center mx-auto mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            >
              <CheckCircle2 className="w-10 h-10 text-[#699669]" />
            </motion.div>
            
            <h3 className="text-[#272727] mb-4" style={{ fontSize: '2rem' }}>
              You're on the list!
            </h3>
            <p className="text-[#272727]/70 mb-8 max-w-md mx-auto">
              Thanks for joining, {name}! We'll send you early access details soon.
            </p>
            
            <div className="flex items-center justify-center gap-2 text-[#699669]">
              <Mail className="w-5 h-5" />
              <span className="text-sm">Check your email for confirmation</span>
            </div>
          </motion.div>
        )}

        {/* Stats */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-[#272727]/50 text-sm">
            {count > 0 ? (
              <>
                Join <span className="text-[#699669]">{count.toLocaleString()}</span> {count === 1 ? 'other' : 'others'} on the waitlist
              </>
            ) : (
              'Be the first to join the waitlist'
            )}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
