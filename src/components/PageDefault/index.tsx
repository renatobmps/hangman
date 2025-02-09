import { useEffect, useState } from "react";
import { pageDefaultStart } from "../../adapters/pageDefaultStarts";
import Footer from "../Footer";
import Menu from "../Menu";
import { Modal } from "../Modal";
import { IProps } from "./types";
import SeoHead from "../seo_head";

export default function PageDefault(props: IProps) {
  const [openedModal, setOpenedModal] = useState(true);
  const [shouldShowModal, setShowModal] = useState(false);
  const [isPageMounted, setPageMounted] = useState<boolean>(false);

  useEffect(() => {
    pageDefaultStart(handleKeyboard, handleClick, props);
    const modal: boolean =
      typeof window !== "undefined"
        ? JSON.parse(window.localStorage.getItem("modal") as string)
        : false;

    setShowModal(modal);
    setPageMounted(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleKeyboard = (event: any) => {
    if (props.callbackKeydown) props.callbackKeydown(event);
  };

  const handleClick = (event: any) => {
    if (props.callbackClick) props.callbackClick(event);
  };

  const handleCloseModal = () => {
    window?.localStorage?.setItem("modal", "true");
    setOpenedModal(false);
  };

  useEffect(() => {
    const next = document.querySelector('#__next')

    if (next && props.userData?.name) {
      next.classList.forEach(name => {
        next.classList.remove(name)
      })

      next.classList.add(`username_${props.userData.name}`)
    }
  }, [props.userData])

  return isPageMounted && (
    <>
      {props.seoConfig && <SeoHead {...props.seoConfig} />}
      <Menu />
      <main>{props.children}</main>
      <Footer />
      {!shouldShowModal ? (
        <Modal
          message={
            "Olá! Seja bem vindo!\nPara quem não me conhece, me chamo Renato e sou o desenvolvedor deste jogo. Sou um profissional de desenvolvimento fullstack e criei este jogo para estudar e praticar o conhecimento sobre programação web.\nO jogo é bem simples, basta selecionar a letra que deseja chutar para tentar descobrir qual é a palavra escondida. Para cada palavra há uma dica e o seu progresso fica salvo no seu login, ou seja, se preferir jogar no seu aparelho celular ou PC, tanto faz, basta usar o mesmo login que sua pontuação, letras e progresso em geral será o mesmo. Um novo jogo começará logo após terminar o jogo atual. E para que saibamos se estamos indo bem e incentivar a competição, criei um ranking onde poderemos ver os 10 melhores jogadores, bem como sua pontuação atual, precisão com o acerto de palavras e precisão com o acerto de letras. Será que você consegue chegar no topo? Vamos ver!\nEspero que goste e fico a disposição no Github e WhatsApp se precisar!\nBom divertimento! :D"
          }
          isOpened={openedModal}
          closeFunction={handleCloseModal}
        />
      ) : null}
    </>
  );
}
