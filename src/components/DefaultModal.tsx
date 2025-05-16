import type { ReactNode } from "react";
// import { IoClose } from "react-icons/io5";

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  title?: string;
  children: ReactNode;
  hide?: boolean;
}

// const DefaultModal = ({ isOpen, children, onClose, hide }: ModalProps) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-5">
//       <div
//         className="relative w-full max-h-[95%] overflow-y-auto flex justify-center items-center"
//         style={{ scrollbarWidth: "none" }}
//       >
//         {!hide && (
//           <div className="bg-[#ffffff] p-3 rounded-lg">
//             <IoClose
//               className="cursor-pointer"
//               onClick={onClose}
//               size={30}
//               color="#000"
//             />
//           </div>
//         )}
//         {children}
//       </div>
//     </div>
//   );
// };

// export default DefaultModal;

const DefaultModal = ({ isOpen, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-5"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
    >
      <div
        className="relative w-full max-h-[95%] overflow-y-auto flex justify-center items-center"
        style={{ scrollbarWidth: "none" }}
      >
        {children}
      </div>
    </div>
  );
};

export default DefaultModal;
