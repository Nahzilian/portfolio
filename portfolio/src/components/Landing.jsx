import React, { useState } from 'react';
import Card from './Card';
import Modal from './Modal';

import Bg1 from '../assets/pictures/code.jpg';
import Bg2 from '../assets/pictures/plane-wing.jpg';
import Bg3 from '../assets/pictures/spa.jpg';
import Bg4 from '../assets/pictures/search.jpg';
import Bg5 from '../assets/pictures/movie.jpg';
import Bg6 from '../assets/pictures/working.jpg';


export default function Landing() {
    const bgObj = [
        { bg: Bg1 },
        { bg: Bg2 },
        { bg: Bg3 },
        { bg: Bg4 },
        { bg: Bg5 },
        { bg: Bg6 },
    ]
    const [progressPercentage, setProgressPercentage] = useState(null);
    const [displayMode, setDisplayMode] = useState('none');
    const [currentModalId, setCurrentModalId] = useState(null);
    const [modalBackground, setModalBackground] = useState(Bg1);
    const style = {
        display: displayMode,
    }

    const modalStyle = {
        backgroundImage: `url(${modalBackground})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }

    const handleClickCard = (card) => {
        setModalBackground(bgObj[card-1].bg);
        setCurrentModalId(card);
        setDisplayMode('block');
    }

    const closeModal = () => {
        setDisplayMode('none');
    }

    const progressMainStyle = {
        position: 'absolute',
        width: "15px",
        height: "25px",
        top: progressPercentage,
        transform: "translate(-50%,-50%)",
    };

    window.onscroll = () => {
        progress();
    }
    const progress = () => {
        const scrollTotal = document.documentElement.scrollTop;
        const heightWin = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scroll = `${scrollTotal / heightWin * 100}%`;
        setProgressPercentage(scroll);
    }

    return (
        <div className="main">
            <Modal style={style} closeModal={closeModal} modalStyle = {modalStyle} id={currentModalId} />
            <div id="top" />
            <div id="navbar-wrapper">
                <div className="nav-list">
                    <a href="#top" className="nav-items">Home</a>
                    <a href="#experience-wrapper" className="nav-items">Experience</a>
                    <a href="#education-wrapper" className="nav-items">Education</a>
                    <a href="#contact-wrapper" className="nav-items">Contact</a>
                </div>
            </div>
            <div className="progress-bar">
                <div className="indicator" style={progressMainStyle} />
                <div className="scroll-typography">SCROLL</div>
            </div>
            <div className="main-content">
                <div id="introduction-wrapper">
                    <div id="introduction">
                        <p className="underline upper-subtitle">Hi, my name is Doug and I am a </p>
                        <div className="svg-display">
                            <div className="svg-blocks">
                                <svg width="820" height="115" viewBox="0 0 820 115" fill="none" xmlns="http://www.w3.org/2000/svg" id="logo">
                                    <path d="M36.248 7.016C47.192 7.016 56.648 9.08 64.616 13.208C72.68 17.24 78.824 23.048 83.048 30.632C87.368 38.216 89.528 47.144 89.528 57.416C89.528 67.688 87.368 76.616 83.048 84.2C78.824 91.688 72.68 97.448 64.616 101.48C56.648 105.416 47.192 107.384 36.248 107.384H5V7.016H36.248ZM36.248 96.584C49.208 96.584 59.096 93.176 65.912 86.36C72.728 79.448 76.136 69.8 76.136 57.416C76.136 44.936 72.68 35.192 65.768 28.184C58.952 21.176 49.112 17.672 36.248 17.672H18.104V96.584H36.248Z" stroke="white" strokeWidth="5" mask="url(#path-1-outside-1)" />
                                    <path d="M119.917 17.672V51.224H156.493V62.024H119.917V96.584H160.812V107.384H106.812V6.872H160.812V17.672H119.917Z" stroke="white" strokeWidth="5" mask="url(#path-1-outside-1)" />
                                    <path d="M212.465 108.392C205.841 108.392 199.889 107.24 194.609 104.936C189.425 102.536 185.345 99.272 182.369 95.144C179.393 90.92 177.857 86.072 177.761 80.6H191.729C192.209 85.304 194.129 89.288 197.489 92.552C200.945 95.72 205.937 97.304 212.465 97.304C218.705 97.304 223.601 95.768 227.153 92.696C230.801 89.528 232.625 85.496 232.625 80.6C232.625 76.76 231.569 73.64 229.457 71.24C227.345 68.84 224.705 67.016 221.537 65.768C218.369 64.52 214.097 63.176 208.721 61.736C202.097 60.008 196.769 58.28 192.737 56.552C188.801 54.824 185.393 52.136 182.513 48.488C179.729 44.744 178.337 39.752 178.337 33.512C178.337 28.04 179.729 23.192 182.513 18.968C185.297 14.744 189.185 11.48 194.177 9.17599C199.265 6.872 205.073 5.72 211.601 5.72C221.009 5.72 228.689 8.072 234.641 12.776C240.689 17.48 244.097 23.72 244.865 31.496H230.465C229.985 27.656 227.969 24.296 224.417 21.416C220.865 18.44 216.161 16.952 210.305 16.952C204.833 16.952 200.369 18.392 196.913 21.272C193.457 24.056 191.729 27.992 191.729 33.08C191.729 36.728 192.737 39.704 194.753 42.008C196.865 44.312 199.409 46.088 202.385 47.336C205.457 48.488 209.729 49.832 215.201 51.368C221.825 53.192 227.153 55.016 231.185 56.84C235.217 58.568 238.673 61.304 241.553 65.048C244.433 68.696 245.873 73.688 245.873 80.024C245.873 84.92 244.577 89.528 241.985 93.848C239.393 98.168 235.553 101.672 230.465 104.36C225.377 107.048 219.377 108.392 212.465 108.392Z" stroke="white" strokeWidth="5" mask="url(#path-1-outside-1)" />
                                    <path d="M278.26 7.016V107.384H265.156V7.016H278.26Z" stroke="white" strokeWidth="5" mask="url(#path-1-outside-1)" />
                                    <path d="M376.626 36.104C373.842 30.248 369.81 25.736 364.53 22.568C359.25 19.304 353.106 17.672 346.098 17.672C339.09 17.672 332.754 19.304 327.09 22.568C321.522 25.736 317.106 30.344 313.842 36.392C310.674 42.344 309.09 49.256 309.09 57.128C309.09 65 310.674 71.912 313.842 77.864C317.106 83.816 321.522 88.424 327.09 91.688C332.754 94.856 339.09 96.44 346.098 96.44C355.89 96.44 363.954 93.512 370.29 87.656C376.626 81.8 380.322 73.88 381.378 63.896H341.346V53.24H395.346V63.32C394.578 71.576 391.986 79.16 387.57 86.072C383.154 92.888 377.346 98.312 370.146 102.344C362.946 106.28 354.93 108.248 346.098 108.248C336.786 108.248 328.29 106.088 320.61 101.768C312.93 97.352 306.834 91.256 302.322 83.48C297.906 75.704 295.698 66.92 295.698 57.128C295.698 47.336 297.906 38.552 302.322 30.776C306.834 22.904 312.93 16.808 320.61 12.488C328.29 8.072 336.786 5.864 346.098 5.864C356.754 5.864 366.162 8.504 374.322 13.784C382.578 19.064 388.578 26.504 392.322 36.104H376.626Z" stroke="white" strokeWidth="5" mask="url(#path-1-outside-1)" />
                                    <path d="M491.584 107.384H478.48L425.776 27.464V107.384H412.672V6.872H425.776L478.48 86.648V6.872H491.584V107.384Z" stroke="white" strokeWidth="5" mask="url(#path-1-outside-1)" />
                                    <path d="M527.026 17.672V51.224H563.602V62.024H527.026V96.584H567.922V107.384H513.922V6.872H567.922V17.672H527.026Z" stroke="white" strokeWidth="5" mask="url(#path-1-outside-1)" />
                                    <path d="M640.598 107.384L616.694 66.344H600.854V107.384H587.75V7.016H620.15C627.734 7.016 634.118 8.312 639.302 10.904C644.582 13.496 648.518 17 651.11 21.416C653.702 25.832 654.998 30.872 654.998 36.536C654.998 43.448 652.982 49.544 648.95 54.824C645.014 60.104 639.062 63.608 631.094 65.336L656.294 107.384H640.598ZM600.854 55.832H620.15C627.254 55.832 632.582 54.104 636.134 50.648C639.686 47.096 641.462 42.392 641.462 36.536C641.462 30.584 639.686 25.976 636.134 22.712C632.678 19.448 627.35 17.816 620.15 17.816H600.854V55.832Z" stroke="white" strokeWidth="5" mask="url(#path-1-outside-1)" />
                                    <path d="M790.79 107.384L777.686 94.136C772.79 99.224 767.558 103.016 761.99 105.512C756.422 107.912 750.134 109.112 743.126 109.112C736.214 109.112 730.07 107.864 724.694 105.368C719.414 102.872 715.286 99.32 712.31 94.712C709.43 90.104 707.99 84.728 707.99 78.584C707.99 71.576 709.958 65.432 713.894 60.152C717.926 54.776 723.83 50.552 731.606 47.48C728.534 43.832 726.326 40.472 724.982 37.4C723.638 34.328 722.966 30.968 722.966 27.32C722.966 23.096 724.022 19.304 726.134 15.944C728.342 12.488 731.462 9.8 735.494 7.88C739.526 5.96 744.182 5 749.462 5C754.646 5 759.158 6.008 762.998 8.02399C766.838 10.04 769.718 12.872 771.638 16.52C773.558 20.072 774.422 24.056 774.23 28.472H761.126C761.222 24.536 760.118 21.464 757.814 19.256C755.51 16.952 752.534 15.8 748.886 15.8C745.046 15.8 741.926 16.904 739.526 19.112C737.222 21.224 736.07 23.96 736.07 27.32C736.07 30.2 736.838 32.984 738.374 35.672C740.006 38.36 742.694 41.672 746.438 45.608L776.39 75.704L778.982 71.672L788.774 55.256H802.886L791.078 75.704C789.446 78.584 787.526 81.608 785.318 84.776L807.926 107.384H790.79ZM743.126 97.88C748.31 97.88 752.966 96.872 757.094 94.856C761.318 92.84 765.302 89.72 769.046 85.496L739.526 55.832C727.238 60.536 721.094 67.976 721.094 78.152C721.094 83.816 723.11 88.52 727.142 92.264C731.27 96.008 736.598 97.88 743.126 97.88Z" stroke="white" strokeWidth="5" mask="url(#path-1-outside-1)" />
                                </svg>
                            </div>
                            <div className="svg-blocks">
                                <div className="glitch-effect">Developer</div>
                                <div className="glitch-effect">Developer</div>
                                <div className="glitch-effect">Developer</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="experience-wrapper">
                    <div id="experience">
                        <div className="upper-center-text-wrapper">
                            <div className="main-title underline">Experience</div>
                            <div className="upper-subtitle">
                                What I do ...
                            </div>
                        </div>
                        <div className="exp-content">
                            <div className="exp-col" onClick={() => handleClickCard(1)}>
                                <Card title={"HD Telecom Inc."} type={"short-display"} />
                            </div>
                            <div className="exp-col" onClick={() => handleClickCard(2)}>
                                {/* <Working1 /> */}
                                <Card title={"Plan de Vol International"} type={"short-display"} />
                            </div>
                            <div className="exp-col" onClick={() => handleClickCard(3)}>
                                <Card title={"Binh's nail & spa"} type={"short-display"} />
                            </div>
                            <div className="exp-col" onClick={() => handleClickCard(4)}>
                                <Card title={"Searina - Search engine"} type={"short-display"} />
                            </div>
                            <div className="exp-col" onClick={() => handleClickCard(5)}>
                                <Card title={"The Shoppies movie nomination"} type={"short-display"} />
                            </div>
                            <div className="exp-col" onClick={() => handleClickCard(6)}>
                                <Card title={"Duc Quan Company"} type={"short-display"} />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="education-wrapper">
                    <div id="education">
                        Education
                    </div>
                </div>
                <div id="contact-wrapper">
                    <div id="contact">
                        Contact
                    </div>
                </div>
            </div>
        </div>
    )
}