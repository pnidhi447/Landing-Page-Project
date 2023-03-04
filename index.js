let hero_section=[
    {
        title:"Create Engaging Landing Pages",
        info:"Build beautiful landing pages in record time with Landing Page UI kit for Figma. No code required!",
        primary_btn_text:"Get Started",
        secondary_btn_text:"How it works"
    }
]

let hero_section_title=document.getElementById('hero-section-title').textContent=`${hero_section[0].title}`;
let hero_section_info=document.getElementById('hero-section-info').textContent=`${hero_section[0].info}`;
document.getElementById('hero-section-primary-key').textContent=`${hero_section[0].primary_btn_text}`;
document.getElementById('hero-section-secondary-key').textContent=`${hero_section[0].secondary_btn_text}`;


