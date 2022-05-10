import React, { useRef, useState } from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { TouchableOpacity } from "react-native";
import { ChatTeardropText } from "phosphor-react-native";
import { theme } from "../../theme";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { Options } from "../Options";
import { feedbackTypes } from "../../utils/feedbackTypes";
import { Sucess } from "../Sucess";
import { Form } from "../Form";
import BottomSheet from "@gorhom/bottom-sheet";

export type FeedbackType = keyof typeof feedbackTypes;

function Widget() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbacksent] = useState(false);
  const bottomSheetRef = useRef<BottomSheet>(null);

  function handleOpen() {
    bottomSheetRef.current?.expand();
  }

  function handleRestartFeedback() {
    setFeedbackType(null);
    setFeedbacksent(false);
  }

  function handleFeedbackSent() {
    setFeedbacksent(true);
  }

  return (
    <>
      <TouchableOpacity onPress={handleOpen} style={styles.button}>
        <ChatTeardropText
          size={24}
          weight="bold"
          color={theme.colors.text_on_brand_color}
        ></ChatTeardropText>
      </TouchableOpacity>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1, 280]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      >
        {feedbackSent ? (
          <Sucess onSendAnotherFeedback={handleRestartFeedback} />
        ) : (
          <>
            {feedbackType ? (
              <Form
                onFeedbackCanceled={handleRestartFeedback}
                onFeedbackSent={handleFeedbackSent}
                feedbackType={feedbackType}
              />
            ) : (
              <Options onFeedbackTypeChanged={setFeedbackType} />
            )}
          </>
        )}
      </BottomSheet>
    </>
  );
}

export default gestureHandlerRootHOC(Widget);
