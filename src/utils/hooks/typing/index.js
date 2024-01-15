import { useEffect, useState } from 'react';

let partialString = '';
let lastWordChecked = '';

const useIsTyping = (callback) => {
  const [typing, setTyping] = useState(false);

  let userIsTypingInterval = null;

  const setPartialString = (string) => {
    setTyping(true);
    partialString = string;
  };

  useEffect(() => {
    if (!typing) {
      return;
    }

    userIsTypingInterval = setInterval(() => {
      if (String(partialString).trim() === '') {
        lastWordChecked = '';
        callback && callback(lastWordChecked);
        setTyping(false);
        clearInterval(userIsTypingInterval);
        return;
      }

      if (!lastWordChecked || lastWordChecked !== partialString) {
        lastWordChecked = partialString;
        return;
      }

      if (lastWordChecked === partialString) {
        console.log({ partialString, lastWordChecked });

        callback && callback(lastWordChecked);
        setTyping(false);
        clearInterval(userIsTypingInterval);
      }
    }, 300);
  }, [typing]);

  return { setPartialString };
};

export default useIsTyping;
