"use client";

import { useState } from "react";
import LoadingScreen from "./LoadingScreen";
import WelcomeModal from "./WelcomeModal";
import { motion } from "framer-motion";

export default function HomeWrapper({ children }: { children: React.ReactNode }) {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleLoadingComplete = () => {
    setLoadingComplete(true);
    // Open the modal right after loading screen fades out
    setModalOpen(true);
  };

  return (
    <>
      {!loadingComplete && <LoadingScreen onComplete={handleLoadingComplete} />}
      
      {/* Welcome Modal */}
      <WelcomeModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      {/* 
        We render the content immediately but hide it or fade it in 
        once loading is complete to ensure a smooth transition.
        Actually, rendering it immediately allows the browser to paint it underneath.
        We'll just add a subtle fade-in effect to the main content.
      */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: loadingComplete ? 1 : 0, y: loadingComplete ? 0 : 20 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </>
  );
}
