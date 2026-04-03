"use client";

import { useState } from "react";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import PillNav from "@/components/PillNav";
import ContactModal from "@/components/ContactModal";
import Hero from "@/components/Hero";
import Experiences from "@/components/Experiences";
import About from "@/components/About";
import Expertises from "@/components/Expertises";
import BentoGrid from "@/components/BentoGrid";
import Brands from "@/components/Brands";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <SmoothScroll />
      <CustomCursor />
      <ContactModal isOpen={modalOpen} onClose={closeModal} />
      <PillNav onContact={openModal} />
      <Hero />
      <Experiences />
      <About />
      <Expertises />
      <BentoGrid />
      <Brands />
      <ContactCTA onContact={openModal} />
      <Footer />
    </>
  );
}
