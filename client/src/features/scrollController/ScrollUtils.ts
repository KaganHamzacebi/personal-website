import type { RefObject } from 'react';

export function isReachedElement(e: Element) {
  return e.getBoundingClientRect().top + 5 <= window.innerHeight;
}

export const scrollTo = (e: RefObject<HTMLElement>) => {
  e.current?.scrollIntoView({
    behavior: 'smooth'
  });
};
