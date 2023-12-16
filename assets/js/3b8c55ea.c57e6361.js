"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[217],{1085:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>c});var s=i(1527),a=i(6225);const l={sidebar_position:1,description:"How to install Yazi on various operating systems."},r="Installation",t={id:"installation",title:"Installation",description:"How to install Yazi on various operating systems.",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/docs/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/yazi-rs/yazi-rs.github.io/edit/main/docs/installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"How to install Yazi on various operating systems."},sidebar:"docsSidebar",next:{title:"Quick Start",permalink:"/docs/quick-start"}},o={},c=[{value:"Arch Linux",id:"arch-linux",level:2},{value:"macOS",id:"macos",level:2},{value:"Nix",id:"nix",level:2},{value:"NetBSD",id:"netbsd",level:2},{value:"Windows",id:"windows",level:2},{value:"AOSC OS",id:"aosc-os",level:2},{value:"Official binaries",id:"official-binaries",level:2},{value:"Cargo",id:"cargo",level:2},{value:"Build from source",id:"build-from-source",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(n.p,{children:"Prerequisites:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"file (required, for file type detection)"}),"\n",(0,s.jsxs)(n.li,{children:["nerd-fonts (",(0,s.jsx)(n.a,{href:"/docs/faq#i-dont-like-nerdfonts",children:(0,s.jsx)(n.em,{children:"optional"})}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["ffmpegthumbnailer (",(0,s.jsx)(n.em,{children:"optional"}),", for video thumbnails)"]}),"\n",(0,s.jsxs)(n.li,{children:["unar (",(0,s.jsx)(n.em,{children:"optional"}),", for archive preview)"]}),"\n",(0,s.jsxs)(n.li,{children:["jq (",(0,s.jsx)(n.em,{children:"optional"}),", for JSON preview)"]}),"\n",(0,s.jsxs)(n.li,{children:["poppler (",(0,s.jsx)(n.em,{children:"optional"}),", for PDF preview)"]}),"\n",(0,s.jsxs)(n.li,{children:["fd (",(0,s.jsx)(n.em,{children:"optional"}),", for file searching)"]}),"\n",(0,s.jsxs)(n.li,{children:["rg (",(0,s.jsx)(n.em,{children:"optional"}),", for file content searching)"]}),"\n",(0,s.jsxs)(n.li,{children:["fzf (",(0,s.jsx)(n.em,{children:"optional"}),", for quick file subtree navigation)"]}),"\n",(0,s.jsxs)(n.li,{children:["zoxide (",(0,s.jsx)(n.em,{children:"optional"}),", for historical directories navigation)"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"arch-linux",children:"Arch Linux"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo pacman -S yazi ffmpegthumbnailer unarchiver jq poppler fd ripgrep fzf zoxide\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If you want to use the latest git version, you can install it from ",(0,s.jsx)(n.a,{href:"https://aur.archlinux.org/packages/yazi-git/",children:"AUR"})," or ",(0,s.jsx)(n.a,{href:"https://github.com/archlinuxcn/repo/",children:"Arch Linux CN"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"paru -S yazi-git ffmpegthumbnailer unarchiver jq poppler fd ripgrep fzf zoxide\n"})}),"\n",(0,s.jsx)(n.h2,{id:"macos",children:"macOS"}),"\n",(0,s.jsx)(n.p,{children:"Install Yazi and its dependencies with Homebrew:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"brew update\nbrew install yazi ffmpegthumbnailer unar jq poppler fd ripgrep fzf zoxide\nbrew tap homebrew/cask-fonts && brew install --cask font-symbols-only-nerd-font\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If you prefer to use the most recent code, use ",(0,s.jsx)(n.code,{children:"--HEAD"})," flag:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"brew install yazi --HEAD\n"})}),"\n",(0,s.jsx)(n.h2,{id:"nix",children:"Nix"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"https://search.nixos.org/packages?channel=unstable&show=yazi",children:"Nix package of Yazi"})," is available. Nix users can install Yazi via:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# On NixOS:\nnix-env -iA nixos.yazi\n\n# On Non NixOS:\nnix-env -iA nixpkgs.yazi\n"})}),"\n",(0,s.jsx)(n.p,{children:"Or add the following to your configuration:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-nix",children:"# configuration.nix\nenvironment.systemPackages = with pkgs; [\n\tyazi\n];\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can also manage Yazi's configuration using the\n",(0,s.jsx)(n.a,{href:"https://nix-community.github.io/home-manager/options.html#opt-programs.yazi.enable",children:"home-manager"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"netbsd",children:"NetBSD"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pkgin install yazi\n"})}),"\n",(0,s.jsx)(n.h2,{id:"windows",children:"Windows"}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"https://github.com/sxyazi/yazi/wiki/Windows-Installation-Guide",children:"Windows Installation Guide"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"aosc-os",children:"AOSC OS"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo oma install yazi\n"})}),"\n",(0,s.jsx)(n.h2,{id:"official-binaries",children:"Official binaries"}),"\n",(0,s.jsxs)(n.p,{children:["You can download the latest official binaries from ",(0,s.jsx)(n.a,{href:"https://github.com/sxyazi/yazi/releases",children:"GitHub Releases"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"cargo",children:"Cargo"}),"\n",(0,s.jsx)(n.p,{children:"Setup the latest stable Rust toolchain:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Now you can install ",(0,s.jsx)(n.code,{children:"yazi-fm"})," from ",(0,s.jsx)(n.a,{href:"https://crates.io/crates/yazi-fm",children:"crates.io"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cargo install --locked yazi-fm\n"})}),"\n",(0,s.jsx)(n.p,{children:"Or install the latest git version:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cargo install --locked --git https://github.com/sxyazi/yazi.git\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If it fails to build, please check if ",(0,s.jsx)(n.code,{children:"make"})," and ",(0,s.jsx)(n.code,{children:"gcc"})," is installed on your system."]}),"\n",(0,s.jsx)(n.h2,{id:"build-from-source",children:"Build from source"}),"\n",(0,s.jsx)(n.p,{children:"Setup the latest stable Rust toolchain:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n"})}),"\n",(0,s.jsx)(n.p,{children:"Clone the repository and build Yazi:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/sxyazi/yazi.git\ncd yazi\ncargo build --release\n"})}),"\n",(0,s.jsx)(n.p,{children:"Then, you can run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"./target/release/yazi\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If it fails to build, please check if ",(0,s.jsx)(n.code,{children:"make"})," and ",(0,s.jsx)(n.code,{children:"gcc"})," is installed on your system."]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},6225:(e,n,i)=>{i.d(n,{Z:()=>t,a:()=>r});var s=i(959);const a={},l=s.createContext(a);function r(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);