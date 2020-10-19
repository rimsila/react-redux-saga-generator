import {
  FacebookIcon,
  FacebookShareButton,
  LineIcon,
  LineShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

import { Box } from "@material-ui/core";
import * as React from "react";

export const ShareList: React.FC<{
  children?: React.ReactNode;
  title: string;
  url?: "";
}> = ({ children, title, url }) => {
  return (
    <Box display="flex" justifyContent="space-between" minWidth={230}>
      <FacebookShareButton title={title} url={url}>
        <FacebookIcon size={32} />
      </FacebookShareButton>

      <TwitterShareButton title={title} url={url}>
        <TwitterIcon size={32} />
      </TwitterShareButton>

      <TelegramShareButton title={title} url={url}>
        <TelegramIcon size={32} />
      </TelegramShareButton>

      <LineShareButton title={title} url={url}>
        <LineIcon size={32} />
      </LineShareButton>

      <WhatsappShareButton title={title} url={url}>
        <WhatsappIcon size={32} />
      </WhatsappShareButton>

      <LinkedinShareButton title={title} url={url}>
        <LinkedinIcon size={32} />
      </LinkedinShareButton>
      {children}
    </Box>
  );
};

export default ShareList;
