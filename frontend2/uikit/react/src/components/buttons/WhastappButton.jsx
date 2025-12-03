// Fuente de boton de whatssap
// https://codepen.io/juscoder/pen/Rwqjmoa

"use client";

import { keyframes } from "@emotion/react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

// Animación del contorno (breathe)
const breathe = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5);
  }
  70% {
    box-shadow: 0 0 0 15px rgba(37, 211, 102, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
`;

// Animación del ícono (beat)
const beat = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

// Botón flotante
const WhatsappBtn = styled(Box)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #25d366;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  animation: ${breathe} 2s ease-in-out infinite;
  cursor: pointer;
`;

// Ícono SVG con animación
const WhatsappIcon = styled("svg")`
  width: 28px;
  height: 28px;
  fill: white;
  animation: ${beat} 2s ease-in-out infinite;
`;

export default function WhatsappButton() {
  return (
    <WhatsappBtn
      component="a"
      href="https://wa.me/5491123456789?text=Hola%20quiero%20hacer%20una%20consulta"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <WhatsappIcon viewBox="0 0 32 32">
        <path d="M16.004 2.003c-7.732 0-14 6.268-14 14 0 2.463.64 4.873 1.854 7.01L2 30l7.165-1.834a13.93 13.93 0 0 0 6.839 1.838h.006c7.732 0 14-6.268 14-14s-6.268-14-14-14zm0 25.5a11.45 11.45 0 0 1-5.851-1.61l-.42-.25-4.253 1.089 1.136-4.143-.274-.425a11.446 11.446 0 1 1 9.662 5.339zm6.294-8.449c-.344-.172-2.036-1.005-2.352-1.121-.316-.116-.546-.172-.775.172-.229.344-.889 1.121-1.09 1.349-.201.229-.402.258-.746.086-.344-.172-1.451-.535-2.763-1.709-1.02-.91-1.707-2.033-1.908-2.377-.201-.344-.021-.53.151-.702.155-.154.344-.402.516-.603.172-.201.229-.344.344-.573.116-.229.057-.43-.029-.603-.086-.172-.775-1.871-1.062-2.561-.279-.67-.562-.58-.775-.591l-.66-.012c-.229 0-.603.086-.918.43-.316.344-1.203 1.174-1.203 2.859 0 1.685 1.231 3.315 1.404 3.544.172.229 2.426 3.708 5.879 5.2.822.354 1.464.566 1.964.725.825.263 1.577.226 2.17.137.662-.099 2.036-.832 2.322-1.636.287-.804.287-1.493.201-1.636-.086-.143-.316-.229-.66-.402z" />
      </WhatsappIcon>
    </WhatsappBtn>
  );
}
