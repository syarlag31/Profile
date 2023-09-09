const lazyLoading = () => {
    const lazyImgs = document.querySelectorAll('.lazy');

    const observor = new IntersectionObserver((entries, observor) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('loading');
                img.classList.add('loaded');
                observor.unobserve(entry.target);
            }
        });
    });

    lazyImgs.forEach(img => {
        observor.observe(img);
    });
};

export default lazyLoading;