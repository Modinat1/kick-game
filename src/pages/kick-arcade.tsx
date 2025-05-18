import { useState } from "react";

import RuninedKingCardd from "../components/RuinedKingCardd";
import GameCard from "../components/GameCard";
import GameCardModal from "../components/GameCardModal";

import { gameItems } from "../lib/data";
import DefaultModal from "../components/DefaultModal";
import GamePreviewModal from "../components/GamePreviewModal";
import Fortnite from "../components/Fortnite";

const KickArcade = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openPreviewModal, setOpenPreviewModal] = useState(false);

  const handleStartPreview = () => {
    setOpenPreviewModal(true);
  };

  const handleShowGameModal = () => {
    setOpenPreviewModal(false);
    setOpenModal(true);
  };

  return (
    <section>
      <div
        className="lg:grid grid-cols-[70%_30%] gap-x-3 overflow-x-auto p-4 lg:p-0"
        style={{ scrollbarWidth: "none" }}
      >
        <RuninedKingCardd />
        <Fortnite />
      </div>

      <main className="p-4">
        <div className="my-5">
          <p className="text-lg font-semibold mb-5">All Games</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            <GameCard data={gameItems} onClick={handleStartPreview} />
          </div>
        </div>

        <div className="my-5">
          <p className="text-lg font-semibold mb-5">Action</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            <GameCard data={gameItems} onClick={handleStartPreview} />
          </div>
        </div>

        <div className="my-5">
          <p className="text-lg font-semibold mb-5">Puzzle</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            <GameCard data={gameItems} onClick={handleStartPreview} />
          </div>
        </div>

        <div className="my-5">
          <p className="text-lg font-semibold mb-5">Racing</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            <GameCard data={gameItems} onClick={handleStartPreview} />
          </div>
        </div>

        <div className="my-5">
          <p className="text-lg font-semibold mb-5">Adventure</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            <GameCard data={gameItems} onClick={handleStartPreview} />
          </div>
        </div>
      </main>
      <DefaultModal isOpen={openPreviewModal} hide>
        <GamePreviewModal onComplete={handleShowGameModal} />
      </DefaultModal>

      <DefaultModal isOpen={openModal}>
        <GameCardModal onClose={() => setOpenModal(false)} />
      </DefaultModal>
    </section>
  );
};

export default KickArcade;
