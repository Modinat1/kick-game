import { useState } from "react";

// import RuinedKingCardd from "../components/RuinedKingCardd";
import GameCardd from "../components/GameCardd";
import GameCard from "../components/GameCard";
import GameCardModal from "../components/GameCardModal";

import { gameItems } from "../lib/data";
import DefaultModal from "../components/DefaultModal";
import GamePreviewModal from "../components/GamePreviewModal";

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
      {/* <RuinedKingCardd /> */}
      <GameCardd />

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
