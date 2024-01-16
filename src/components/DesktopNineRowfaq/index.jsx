import React from "react";

import { Button, Text } from "components";

const DesktopNineRowfaq = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-10 items-start justify-start w-auto">
          <Text
            className="text-gray-800 text-lg w-auto"
            size="txtInterRegular18"
          >
            {props?.home}
          </Text>
          <Text
            className="text-gray-800 text-lg w-auto"
            size="txtInterRegular18"
          >
            {props?.flashcard}
          </Text>
          <Text
            className="text-gray-800 text-lg w-auto"
            size="txtInterRegular18"
          >
            {props?.contact}
          </Text>
        </div>
        <Text className="text-gray-800 text-lg w-auto" size="txtInterRegular18">
          {props?.faq}
        </Text>
        <Button
          className="!text-white-A700 cursor-pointer font-inter font-medium leading-[normal] min-w-[128px] text-center text-lg"
          shape="round"
          size="xs"
          variant="gradient"
          color="indigo_900_blue_800"
        >
          {props?.login}
        </Button>
      </div>
    </>
  );
};

DesktopNineRowfaq.defaultProps = {
  home: "Home",
  flashcard: "Flashcard",
  contact: "Contact",
  faq: "FAQ",
  login: "Login",
};

export default DesktopNineRowfaq;
