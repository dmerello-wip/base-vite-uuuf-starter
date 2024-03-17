const observerCallBack = (entry, element) => {
    const elements = element.querySelectorAll('[data-animate]');
    console.log(entry);
    elements.forEach(el => {
        el.dataset.animate = entry.isIntersecting ? 'in' : 'out';
    });
};

export const initObserver = (element, options = {}) => {
    const observer = new IntersectionObserver(entries => {
        entries.map(entry => observerCallBack(entry, element));
    }, options);
    observer.observe(element);
};
