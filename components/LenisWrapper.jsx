'use client';

import ReactLenis from 'lenis/react';

const LenisWrapper = ({ children }) => {
    return <ReactLenis root>{children}</ReactLenis>;
};

export default LenisWrapper;