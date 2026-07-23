"use client";
import { motion } from 'framer-motion';
import { Play, Users } from 'lucide-react';
import { useState } from 'react';

export default function FunctionVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Replace with your actual video URL or embed code
  const videoUrl = "https://www.youtube.com/embed/-eNq4X2WiF4?si=bvNUIENCA7yQ6ST8";
  const thumbnailUrl = "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80";

  return (
    <div className="relative w-full py-20 md:py-20 lg:py-20 px-4" style={{ backgroundColor: 'var(--color-elegantLight)' }}>
      <style>{`
        @theme {
          --color-primary: #f6466c;
          --color-secondary: #f28b00;
          --color-elegantDark: #1a1a1a;
          --color-elegantLight: #faf7f4;
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-1 rounded-full mx-auto mb-6"
            style={{ backgroundColor: 'var(--color-secondary)' }}
          />
          <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full shadow-lg border mb-5"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(246, 70, 108, 0.1), rgba(242, 139, 0, 0.1))',
                  borderColor: 'var(--color-primary)'
                }}
              >
                <Users size={18} style={{ color: 'var(--color-primary)' }} />
                <span className="text-sm font-semibold" style={{ color: 'var(--color-elegantDark)' }}>
                  Performance
                </span>
              </motion.div>
          <h2 
            className="text-4xl md:text-6xl font-bold mb-4"
            style={{ color: 'var(--color-elegantDark)' }}
          >
            Watch Our Function <span className='text-primary'>Performances</span> 
          </h2>
          
          <p 
            className="text-lg md:text-xl font-base max-w-2xl mx-auto"
            style={{ color: 'var(--color-elegantDark)', opacity: 0.8 }}
          >
            Experience the magic of our choreography in action
          </p>
        </motion.div>

        {/* Video Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
          className="relative group "
        >
          

          {/* Main video container */}
          <div 
            className="relative rounded-2xl overflow-hidden shadow-2xl border-4 "
            style={{ borderColor: 'var(--color-secondary)' }}
          >
            {/* Video or Thumbnail */}
          
              <div className="relative w-full aspect-video bg-black ">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`${videoUrl}?autoplay=1`}
                  title="Function Performance Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            

             

           
          </div>

          
         
        </motion.div>

       
      </div>
    </div>
  );
}