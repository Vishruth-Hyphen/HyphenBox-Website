import React, { useState } from "react";
import HeroContent from "./hero/HeroContent";
import DemoInterface from "./hero/DemoInterface";
import TrustedCompanies from "./hero/TrustedCompanies";
import { supabase } from "../lib/supabase";

const Hero: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const calendarUrl = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3Mf8BsXtRdb-QFwzpMqqDUjANUxIrzeKr6uwrfY4p8L2-_LWRf_u2SonX1AqXkv6r6KRQpWqM8";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Insert email into Supabase
      const { error: supabaseError } = await supabase
        .from('landing_page_visitors')
        .insert([
          { 
            email: email,
            created_at: new Date().toISOString()
          }
        ]);

      if (supabaseError) {
        console.error('Supabase error details:', supabaseError);
        
        if (supabaseError.code === '42501' || supabaseError.message.includes('permission denied')) {
          throw new Error('Permission denied. Please contact support.');
        }
        
        throw supabaseError;
      }

      // Clear form and redirect directly to calendar URL instead of thank-you page
      setEmail('');
      window.location.href = calendarUrl;
      
    } catch (err: any) {
      console.error('Error storing email:', err);
      setError(err.message || 'Failed to submit email. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <HeroContent />
            <DemoInterface />
          </div>
          
          {/* Email Collection Form */}
          <div className="max-w-md mx-auto mt-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your company email"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 transition-colors"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  unusual-conversion-id="get-early-access-button"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Get Early Access'}
                </button>
              </div>
              {error && (
                <p className="text-red-500 text-sm mt-1">{error}</p>
              )}
            </form>
          </div>
        </div>
        
        {/* CSS animations */}
        <style>
          {`
            .cursor-click {
              transform: scale(0.8) !important;
              transition: transform 0.1s ease-in-out !important;
            }
            
            @keyframes pulse-soft {
              0% { opacity: 0.6; }
              50% { opacity: 1; }
              100% { opacity: 0.6; }
            }
            
            .animate-pulse-soft {
              animation: pulse-soft 2s infinite ease-in-out;
            }
          `}
        </style>
      </section>

      {/* Hyphenbox Logo section - Moved from Features to here */}
      <TrustedCompanies />
    </>
  );
};

export default Hero;
