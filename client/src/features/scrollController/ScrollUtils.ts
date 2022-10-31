export function isReachedElement(e: Element) {
    return e.getBoundingClientRect().top + 5 <= window.innerHeight;
}

// @ts-ignore
export const scrollTo = (e) => {
    e.current.scrollIntoView({
        behavior: 'smooth'
    });
};
