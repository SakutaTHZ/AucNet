const ScrollToTopButton = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className="fixed flex items-center justify-center text-lg z-50 w-10 h-10 bottom-4 right-4 bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-200"
        >
            ↑
        </button>
    );
};

export default ScrollToTopButton;