"use client";

import { useEffect, useId } from "react";
import { createPortal } from "react-dom";
import {
  Backdrop,
  ModalContainer,
  Header,
  Title,
  CloseButton,
  Content,
} from "./styles";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  width?: string;
  closeOnBackdrop?: boolean;
};

export function Modal({
  open,
  onClose,
  title,
  children,
  closeOnBackdrop = true,
}: ModalProps) {
  const titleId = useId();

  // Close on ESC
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  // Lock body scroll
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  return createPortal(
    <Backdrop onClick={closeOnBackdrop ? onClose : undefined}>
      <ModalContainer
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        onClick={(e) => e.stopPropagation()}
      >
        <Header>
          {title ? <Title id={titleId}>{title}</Title> : <span />}
          <CloseButton onClick={onClose} aria-label="Close modal">
            ✕
          </CloseButton>
        </Header>

        <Content>{children}</Content>
      </ModalContainer>
    </Backdrop>,
    document.body
  );
}
