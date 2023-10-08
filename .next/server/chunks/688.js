"use strict";
exports.id = 688;
exports.ids = [688];
exports.modules = {

/***/ 8129:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/profile.c5528d58.png","height":1288,"width":1050,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAARVBMVEX///+ChJBqUk1dWmVSVWWAa2Sok4pDSFZNTVmnhnege2zw7+7IvLe7vML19fX49/dhRzuknJnOxcG0npOsrbbMv7vk3tva2KWEAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAOUlEQVQImRXIxxHAIBAAsQUuAs6h/1I91lMwpp0AM7utwJNpG/Bmv/4fWg/gLrprWQhpNVyIJu4eHzOtAYuPGzP/AAAAAElFTkSuQmCC","blurWidth":7,"blurHeight":8});

/***/ }),

/***/ 3193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ Footer),
/* harmony export */   "r": () => (/* binding */ Contact)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



const Contact = ({ title , description , buttons  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        id: "contact",
        className: "bg-white py-5 px-5",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "text-primary fw-bold",
                    children: title
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "px-sm-5",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: description
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "",
                            children: buttons.map((value, index)=>value.isPrimary ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: value.link,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "btn btn-primary my-1 mx-3",
                                        children: value.title
                                    })
                                }, index) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: value.link,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "btn btn-outline-primary my-1 mx-3",
                                        children: value.title
                                    })
                                }, index))
                        })
                    ]
                })
            ]
        })
    });
};
const Footer = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        className: "bg-secondary text-center py-2 px-5",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container text-muted",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("small", {
                children: [
                    "\xa9 2021 ",
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "https://github.com/hashirshoaeb",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            children: "hashirshoaeb"
                        })
                    }),
                    ". Open sourced with love under ",
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "https://github.com/hashirshoaeb/portfolio/blob/main/LICENSE",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            children: "MIT"
                        })
                    }),
                    " ",
                    " License"
                ]
            })
        })
    });
};


/***/ }),

/***/ 7673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);


const Header = ({ seo  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: seo.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "description",
                content: seo.description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:title",
                content: seo.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:description",
                content: seo.description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:image",
                content: seo.image
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:type",
                content: "website"
            })
        ]
    });
};


/***/ }),

/***/ 9312:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ navigation),
/* harmony export */   "HJ": () => (/* binding */ SEO),
/* harmony export */   "Ok": () => (/* binding */ links),
/* harmony export */   "PX": () => (/* binding */ contact),
/* harmony export */   "ZT": () => (/* binding */ work),
/* harmony export */   "jZ": () => (/* binding */ about),
/* harmony export */   "mf": () => (/* binding */ intro),
/* harmony export */   "q": () => (/* binding */ projects)
/* harmony export */ });
/* harmony import */ var _profile_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8129);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(303);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4563);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__]);
([_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const navigation = {
    name: "Fanseu Kamhoua Barakeel",
    links: [
        {
            title: "About",
            link: "#about"
        },
        {
            title: "Projects",
            link: "#projects"
        },
        {
            title: "Contact",
            link: "#contact"
        },
        {
            title: "Links",
            link: "/links"
        }, 
    ]
};
const intro = {
    title: "Hey, I'm Fanseu Kamhoua Barakeel",
    description: "A Computer Science and Engineering PhD student at HKUST.",
    image: _profile_png__WEBPACK_IMPORTED_MODULE_0__/* ["default"].src */ .Z.src,
    buttons: [
        {
            title: "Contact",
            link: "bfk@connect.ust.hk",
            isPrimary: false
        },
        {
            title: "Github",
            link: "https://github.com/BarakeelFanseuKamhoua",
            isPrimary: false
        },
        {
            title: "DBLP",
            link: "https://dblp.org/pid/267/1642.html",
            isPrimary: false
        },
        {
            title: "LinkedIn",
            link: "https://hk.linkedin.com/in/barakeel-fanseu-kamhoua-812707172",
            isPrimary: false
        }, 
    ]
};
const about = {
    title: "Who I am",
    description: [
        "I am a Christian Cameroonian. I am a curent Computer Science and Engineering (CSE) student at the Hong Kong University of Science and Technology (HKUST) under Professor Huamin QU, starting August 2023. I hold a Master of Science in Industrial Engineering from HKUST, and a Batchelor of Technology in this same discipline from Nelson Mandela University (NMU).",
        "I have three years of research experience as a Research Assistant from the Chinese University of Hong Kong (CUHK) under professor James CHENG. I equally have industrial experience as a Software Engingeer specializing in R&D for algorithm developement and deployment in image processing for real-time embedded systems at Meridian Innovation (at HKSTP).",
        "When I’m not programming, reading papers, or trying to find a new idea, I love hanging out with peers, family, and freinds from church.", 
    ]
};
const work = {
    title: "What I do",
    cards: [
        {
            title: "CSE PhD Student",
            description: "I am pursuing a PhD in CSE, with focus in Data Visualization, Pattern Discovery, Artificial Inteligence, and Machine Learning.",
            icons: null
        }
    ]
};
const projects = {
    title: "Projects",
    cards: [
        {
            title: "Hypergraph Convolution Based Attributed Hypergraph Clustering ",
            description: "1st Author. Published at CIKM 2021",
            icons: [
                {
                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faGoogle,
                    link: "https://dl.acm.org/doi/10.1145/3459637.3482437"
                },
                {
                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faGithub,
                    link: "https://github.com/BarakeelFanseuKamhoua/GRAC_CIKM"
                }, 
            ]
        },
        {
            title: "GRACE: A General Graph Convolution Framework for Attributed Graph Clustering",
            description: "1st Author. Published at TKDD 2023",
            icons: [
                {
                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faGoogle,
                    link: "https://dl.acm.org/doi/10.1145/3544977"
                },
                {
                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faGithub,
                    link: "https://github.com/BarakeelFanseuKamhoua/GRACE"
                }, 
            ]
        },
        {
            title: "Exact Shape Correspondence via 2D graph convolution",
            description: "1st Author. Published at NEURIPS 2022",
            icons: [
                {
                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faGoogle,
                    link: "https://proceedings.neurips.cc//paper_files/paper/2022/hash/72d9a23e3895b5670e650c2e742065c9-Abstract-Conference.html"
                },
                {
                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faGithub,
                    link: "https://github.com/BarakeelFanseuKamhoua/2D-GEM"
                }, 
            ]
        },
        {
            title: "Improving Graph Representation Learning by Contrastive Regularization",
            description: "One of the Authors. On arxiv",
            icons: [
                {
                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faGoogle,
                    link: "https://arxiv.org/abs/2101.11525"
                },
                {
                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faGithub,
                    link: ""
                }, 
            ]
        },
        {
            title: "Understanding Graph Neural Networks from Graph Signal Denoising Perspectives",
            description: "One of the Authors. On arxiv",
            icons: [
                {
                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faGoogle,
                    link: "https://arxiv.org/abs/2006.04386"
                },
                {
                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faGithub,
                    link: "https://github.com/guoji-fu/GSDN"
                }, 
            ]
        }, 
    ]
};
const contact = {
    title: "Get in touch",
    description: "Coffee Chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at bfk@connect.ust.hk.",
    buttons: [
        {
            title: "Email Me",
            link: "mailto:bfk@connect.ust.hk",
            isPrimary: true
        },
        {
            title: "Schedule Meeting",
            link: "mailto:bfk@connect.ust.hk",
            isPrimary: false
        }, 
    ]
};
// SEARCH ENGINE 
const SEO = {
    // 50 - 60 char  
    title: "Barakeel Fanseu Kamhoua | Computer Science and Engineering ",
    description: "PhD student HKUST. Focus on  Data Visualization, Pattern Discovery, Artificial Inteligence, Machine Learning",
    image: _profile_png__WEBPACK_IMPORTED_MODULE_0__/* ["default"].src */ .Z.src
};
const links = {
    image: _profile_png__WEBPACK_IMPORTED_MODULE_0__/* ["default"].src */ .Z.src,
    title: "@BarakeelFanseuKamhoua",
    description: "Computer Science and Engineering",
    cards: [
        {
            title: "My Website",
            link: "https://BarakeelFanseuKamhoua.github.io./"
        },
        {
            title: "My DBLP",
            link: "https://dblp.org/pid/267/1642.html"
        },
        {
            title: "My GitHub",
            link: "https://github.com/BarakeelFanseuKamhoua"
        },
        {
            title: "My LinkedIn",
            link: "https://hk.linkedin.com/in/barakeel-fanseu-kamhoua-812707172"
        }, 
    ]
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;