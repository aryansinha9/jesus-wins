"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Mail, Globe, Sparkles, ChevronDown } from 'lucide-react';
import { Button } from '../components/ui/button';
import CustomCross from '../components/icons/CustomCross';

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-amber-50">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 3 }}
            className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-yellow-200 to-transparent rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 3, delay: 1 }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-blue-200 to-transparent rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-6"
          >
            <CustomCross className="w-12 h-12 text-amber-400 mx-auto mb-4" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="text-8xl md:text-9xl lg:text-[12rem] font-light tracking-wide text-slate-800 leading-none"
          >
            JESUS
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '100%' }}
            transition={{ duration: 1, delay: 1.5 }}
            className="h-1 bg-gradient-to-r from-transparent via-slate-800 to-transparent mx-auto mb-4"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="text-6xl md:text-7xl lg:text-8xl font-light text-rose-500 mb-8"
          >
            wins.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.5 }}
            className="space-y-2 text-slate-600"
          >
            <p className="text-lg">www.jesus-wins.com</p>
            <p className="text-lg">contact@jesus-wins.com</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
            className="mt-16"
          >
            <button 
              onClick={() => scrollToSection('mission')}
              className="animate-bounce text-slate-500 hover:text-slate-700 transition-colors"
            >
              <ChevronDown className="w-8 h-8" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Heart className="w-16 h-16 text-rose-400 mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-8 leading-relaxed">
              A Mission of <span className="text-amber-500">Love</span> & <span className="text-blue-500">Faith</span>
            </h2>
            <div className="space-y-6 text-xl text-slate-600 leading-relaxed">
              <p>
                This campaign, Jesus wins, is apolitical and non-opinionated. We aim to 
                achieve funding that will eventually supply signage to Australia and 
                prayerfully to the rest of the world.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-blue-50 to-amber-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Globe className="w-16 h-16 text-blue-400 mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-8">
              Our <span className="text-blue-500">Vision</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-white/20"
          >
            <div className="text-center space-y-8">
              <p className="text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
                Future projects will include advertisements in newspapers/magazines, 
                hats/t-shirts, google advertising/social media advertising, signage on 
                buses and billboards. Wherever the holy spirit leads.
              </p>
              
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-amber-500 bg-clip-text text-transparent">
                <Mail className="w-6 h-6 text-blue-500" />
                <p className="text-lg font-medium">
                  Please send an email to contact@jesus-wins.com if you can help in these industries.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-amber-50 to-rose-50 rounded-3xl p-16 shadow-2xl border border-amber-100">
              <Sparkles className="w-16 h-16 text-amber-400 mx-auto mb-8 animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-8">
                Join Our <span className="text-amber-500">Mission</span>
              </h2>
              
              <p className="text-xl text-slate-600 mb-12 leading-relaxed">
                Please give via GiveSendGo if the holy spirit prompts you to give.
              </p>

              <div className="space-y-8">
                <div className="inline-flex items-center gap-4 text-2xl font-light text-slate-800">
                  <span className="text-slate-800">Jesus</span>
                  <span className="text-rose-500 font-medium">wins.</span>
                  <span className="text-slate-500">Amen</span>
                </div>

                {/* GiveSendGo Logo Area */}
                <div className="py-12">
                  <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-slate-800 mb-2">
                        Give<span className="text-rose-500">Send</span>Go
                      </div>
                      <div className="text-sm text-slate-500 font-medium">
                        #1 Free Christian Crowdfunding Site
                      </div>
                    </div>
                  </div>
                </div>

                <a href="https://www.givesendgo.com/jesuswin" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white text-lg px-12 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    Support This Mission
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-50 to-blue-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <Mail className="w-12 h-12 text-blue-400 mx-auto mb-6" />
          <h3 className="text-3xl font-light text-slate-800 mb-4">Get in Touch</h3>
          <a
            href="mailto:contact@jesus-wins.com"
            className="text-2xl text-blue-600 hover:text-blue-700 transition-colors duration-300 font-bold"
          >
            contact@jesus-wins.com
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-slate-600 mb-4">
              Spreading His love, one sign at a time
            </p>
            <div className="flex justify-center items-center gap-2 text-slate-400">
              <Heart className="w-4 h-4" />
              <span className="text-sm">Made with love for His glory</span>
              <Heart className="w-4 h-4" />
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}