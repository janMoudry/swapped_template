import { useContext } from "react";
import { ModalContext, ModalProvider } from "./ModalProvider";

export { ModalProvider };

export const useModalProvider = () => useContext(ModalContext);
