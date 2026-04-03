"use client";

import { useState } from "react";
import CustomCursor from "@/components/CustomCursor";
import ContactModal from "@/components/ContactModal";
import Navigation from "@/components/Navigation";
import FloatingButton from "@/components/FloatingButton";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import Expertises from "@/components/Expertises";
import Work from "@/components/Work";
import Brands from "@/components/Brands";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <CustomCursor />
      <ContactModal isOpen={modalOpen} onClose={closeModal} />
      <Navigation onContact={openModal} />
      <FloatingButton onContact={openModal} />
      <Hero />
      <Statement />
      <Expertises />
      <Work />
      <Brands />
      <FinalCTA onContact={openModal} />
      <Footer />
      <ScrollReveal />
    </>
  );
}
