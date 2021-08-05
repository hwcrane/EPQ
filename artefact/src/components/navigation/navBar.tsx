import React from "react";
import "./navBar.css";

export default class NavBar extends React.Component {
    render() {
        return (
            <nav className="navBar">
                <div className="navbarItem">
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="bars"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        className="menuIcon"
                    >
                        <path
                            fill="currentColor"
                            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                        ></path>
                    </svg>
                </div>
                <div className="navbarItem">
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-icon="home"
                        role="img"
                        viewBox="0 0 576 512"
                        className="menuIcon"
                    >
                        <path
                            fill="currentColor"
                            d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
                        ></path>
                    </svg>
                </div>
                <div className="navbarItem">
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="waveform"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                        className="menuIcon"
                    >
                        <path
                            fill="currentColor"
                            d="M140 192h-24a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-96a16 16 0 0 0-16-16zm-96 32H20a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM236 96h-24a16 16 0 0 0-16 16v288a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16V112a16 16 0 0 0-16-16zm384 128h-24a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM524 64h-24a16 16 0 0 0-16 16v352a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm-96 64h-24a16 16 0 0 0-16 16v224a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16V144a16 16 0 0 0-16-16zM332 0h-24a16 16 0 0 0-16 16v480a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16V16a16 16 0 0 0-16-16z"
                        ></path>
                    </svg>
                </div>
                <div className="navbarItem">
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="search"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="menuIcon"
                    >
                        <path
                            fill="currentColor"
                            d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                        ></path>
                    </svg>
                </div>
                <div className="navbarItem">
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fad"
                        data-icon="route"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="menuIcon"
                    >
                        <g className="">
                            <path
                                fill="currentColor"
                                d="M512 416a96.15 96.15 0 0 1-96 96H138.2a690.4 690.4 0 0 0 47.3-64H416a32 32 0 0 0 0-64h-96a96 96 0 0 1 0-192h45.24A799.82 799.82 0 0 0 416 256h-96a32 32 0 0 0 0 64h96a96.15 96.15 0 0 1 96 96z"
                            ></path>
                            <path
                                fill="currentColor"
                                d="M96 256a96 96 0 0 0-96 96c0 53 96 160 96 160s96-107 96-160a96 96 0 0 0-96-96zm0 128a32 32 0 1 1 32-32 32 32 0 0 1-32 32zM416 0a96 96 0 0 0-96 96c0 53 96 160 96 160s96-107 96-160a96 96 0 0 0-96-96zm0 128a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"
                            ></path>
                        </g>
                    </svg>
                </div>
            </nav>
        );
    }
}
