"use client";

import { useState } from "react";
import { Modal } from "../modal/modal";
import {
  Actions,
  Field,
  RatingButton,
  RatingRow,
  Textarea,
  Hide,
} from "./styles";
import Icon from "../icon/icon-component";
import Button from "../button/button";
import { Text } from "../text/text";
type FeedbackModalProps = {
  showOnce?: boolean;
  storageKey?: string;
};

export function FeedbackModal({
  showOnce = true,
  storageKey = "feedback_seen",
}: FeedbackModalProps) {
  // Determine initial open state without useEffect
  //   const initialOpen = useMemo(() => {
  //     // if (!showOnce) return true;

  //     // localStorage is only available in the browser
  //     if (typeof window === "undefined") return false;

  //     const seen = window.localStorage.getItem(storageKey);
  //     return !seen;
  //   }, [showOnce, storageKey]);

  const [open, setOpen] = useState(true);
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");

  const close = () => {
    setOpen(false);
    if (showOnce && typeof window !== "undefined") {
      window.localStorage.setItem(storageKey, "1");
    }
  };

  const submit = () => {
    if (!rating) return;
    // TODO: send feedback to API
    close();
  };

  return (
    <>
      {!open && (
        <Hide onClick={() => setOpen(!open)}>
          <Text style={{ color: "#000" }}>Click here to open feedback</Text>
        </Hide>
      )}
      <Modal open={open} onClose={close} title="Quick feedback" width={"300px"}>
        <Text>Help me improve. How was your experience?</Text>

        <RatingRow>
          {[1, 2, 3, 4, 5].map((n) => (
            <>
              <div className="rating-container">
                <RatingButton
                  key={n}
                  $active={n <= rating}
                  onClick={() => setRating(n)}
                >
                  {Icon(n <= rating, "star")}
                </RatingButton>
              </div>
            </>
          ))}
        </RatingRow>

        <Field>
          <Text>What could be better? (optional)</Text>
          <Textarea
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell me what you think..."
          />
        </Field>

        <Actions>
          <Button type="button" onClick={close} style={{ fontSize: "16px" }}>
            Not now
          </Button>
          <Button
            type="button"
            disabled={!rating}
            onClick={submit}
            style={{ fontSize: "16px" }}
          >
            Send feedback
          </Button>
        </Actions>
      </Modal>
    </>
  );
}
