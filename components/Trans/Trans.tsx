import { FC, Fragment } from 'react';

const tagsRegex = /(<\d+>[^<>]*<\/\d+>)/;
const openCloseTagRegex = /<(\d+)>([^<>]*)<\/(\d+)>/;

type TransType = {
  text: string;
  tags?: Record<string, (str: string) => JSX.Element>;
};

export const Trans: FC<TransType> = props => {
  return <>{interpolateTags(props)}</>;
};

const interpolateTags = (data: TransType) => {
  const { text, tags } = data;
  if (!tags) {
    return text;
  }

  const tokens = text.split(tagsRegex);

  return tokens.map(token => {
    const matchResult = openCloseTagRegex.exec(token);

    if (!matchResult) {
      return token;
    }

    const [, openTag, content, closeTag] = matchResult;

    if (!openTag || !closeTag || openTag !== closeTag) {
      return token;
    }

    return <Fragment key={content}>{tags[openTag]?.(content ?? '')}</Fragment>;
  });
};
