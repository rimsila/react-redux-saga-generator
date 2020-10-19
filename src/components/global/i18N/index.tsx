import {
  useTranslation,
  Namespace,
  UseTranslationOptions,
} from "react-i18next";

import { Box, BoxProps } from "@material-ui/core";
import * as React from "react";

type textTransformType = "uppercase" | "capitalize" | "inherit";

interface IProps {
  i18nKey: string;
  Namespace?: Namespace;
  options?: UseTranslationOptions;
  textTransform?: textTransformType;
  BoxProps?: BoxProps;
}

const nameSpace = [
  /* new-locales-import-goes-here */
];

const I18N: React.FC<IProps> = ({
  i18nKey,
  Namespace = nameSpace,
  options,
  textTransform = "inherit",
  ...BoxProps
}) => {
  const { t } = useTranslation(Namespace, options);

  return (
    <>
      <Box
        component="span"
        {...BoxProps}
        style={{
          textTransform,
        }}
      >
        {t(i18nKey)}
      </Box>
    </>
  );
};
export default React.memo(I18N);
