import React from "react";
import { useParallax } from "react-scroll-parallax";
import { About } from "./About";
import { Capabilities } from "./Capabilities";
import { Menu } from "./Menu";

export function Home() {
    const parallax = useParallax < HTMLDivElement > ({
        scale: [0.5, 1, 'easeInQuad'],
    });
    return (
        <div>
            <Menu />
            <About  ref={parallax.ref}/>
            <Capabilities />
        </div>
    );
};