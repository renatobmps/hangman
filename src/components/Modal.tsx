import ModalCard from "./Style/ModalCard";
import ModalContent from "./Style/ModalContent";
import ModalOkButton from "./Style/ModalOkButton";
import ModalDimmer from "./Style/ModalDimmer";

export function Modal(props: {
  message: string;
  isOpened: boolean;
  closeFunction: (stateFalse: boolean) => void;
}) {
  if (!props.isOpened) return null;
  return (
    <ModalDimmer
      className="dimmer"
      onClick={(event: any) => {
        if (event.target.classList.contains("dimmer"))
          props.closeFunction(false);
      }}
    >
      <ModalCard>
        <ModalContent>
          {props.message.split("\n").map((line: string) => {
            if (!line.length) return null;
            return <p key={`modal-content-${line}`}>{line}</p>;
          })}
        </ModalContent>
        <ModalOkButton onClick={() => props.closeFunction(false)}>
          Continuar
        </ModalOkButton>
      </ModalCard>
    </ModalDimmer>
  );
}
