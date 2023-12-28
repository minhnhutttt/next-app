"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import { useState } from "react";
import Modal from 'react-modal';

export default function Movie() {
  const animateRefs = useScrollAnimation("fadeUp");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="flex items-center justify-center bg-[#0C0C0C] px-5 py-[100px] md:py-[140px]">
      <div ref={animateRefs}>
        <button type="button" onClick={openModal}>
          <img src="/images/movie.png" alt="" />
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Movie"
        className="w-full max-w-[1320px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-5"
      >
        <div>
          <button type="button" onClick={closeModal} class="ml-auto block mb-2 hover:opacity-75 duration-200">
          <svg class="md:h-12 h-8 md:w-12 w-8 text-gray-800"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />  <line x1="9" y1="9" x2="15" y2="15" />  <line x1="15" y1="9" x2="9" y2="15" /></svg>
            </button>
          <video controls autoPlay>
            <source src="/videos/sample-movie.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </Modal>
    </div>
  );
}
