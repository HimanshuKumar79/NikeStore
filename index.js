let images = [
    {
        id: 1,
        name: "Air Jordan 1 Mid SE",
        imglink: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a5b25746-8542-44ef-afcc-39a77628fd9a/air-jordan-1-mid-se-shoes-pZbfP8.png",
        price: "$215",
        desc: "Get that Jordan energy on your feet this festive season. Rich grain leather with bright details make this pair shine like festive lights."
    },
    {
        id: 2,
        name: "Nike Terminator High",
        imglink: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/01bd1598-c5ec-4e43-978f-42370cbbedd3/terminator-high-shoes-JGFfv4.png",
        price: "$225",
        desc: "Untouched, unaltered and straight from the vault—you get the picture. The Terminator High lets you step back to the era of hook shots, knee pads and calf-high socks. Returning to the '85 original (the 1st signature school shoe by Nike), the throwback look goes a little wild with snakeskin-print overlays. And let's not forget the retro branding—delivering a big varsity finish. It's game time!"
    },
    {
        id: 3,
        name: "Nike Air Zoom Alphafly NEXT",
        imglink: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/48218cfd-b69e-4f63-9f24-7dc0ce1b6f60/air-zoom-alphafly-next-2-road-racing-shoes-MRSlSl.png",
        price: "$399",
        desc: "Once you take a few strides in the Nike Air Zoom Alphafly NEXT% 2, you'll never look at your favourite pair of old racing shoes the same way again. These rocket ships are made to help shave precious time off your personal records without surrendering the foundation you need to go the full distance. A thick, lightweight support system marries the 2 worlds of comfort and speed in holy running matrimony. Enjoy the greatest energy return of all our racing shoes while you chase your personal bests and leave the competition in the dust."
    },
    {
        id: 4,
        name: "Nike Vaporfly NEXT",
        imglink: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8e454021-19eb-4a64-8dd8-48c28b1c6643/vaporfly-next-2-road-racing-shoes-D4ntS0.png",
        price: "$299",
        desc: "Continue the next evolution of speed with a racing shoe made to help you chase new goals and records. It helps improve comfort and breathability with a redesigned upper. From a 10K to a marathon, this model, like the previous version, has the responsive cushioning and secure support to push you towards your personal best."
    },
    {
        id: 5,
        name: "Nike Dunk Low",
        imglink: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/978c5f60-47c6-476d-9900-317ce94f203b/dunk-low-shoes-w37m3B.png",
        price: "$189",
        desc: "Created for the hardwood but taken to the streets, this '80s b-ball icon returns with classic details and throwback hoops flair. Supple suede overlays help the Nike Dunk channel vintage style while boldly patterned Swoosh logos add a wild touch. Plus, the padded, low-cut collar lets you take your game anywhere in comfort."
    },
    {
        id: 6,
        name: "Nike Dunk Low Retro Premium",
        imglink: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ac228f73-6167-432b-b4bb-2a7c6a63bd57/dunk-low-retro-shoes-9L8Z5s.png",
        price: "$189",
        desc: "Created for the hardwood but taken to the streets, the '80s b-ball icon returns with classic details and throwback hoops flair. Channelling vintage style, the cracked-leather accents and soft suede in the upper bring good vibes and all-day comfort, wear after wear."
    },
    {
        id: 7,
        name: "Nike Air Force 1 '07 LV8",
        imglink: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/dd274983-d36a-4c90-b376-f3247dbd059d/air-force-1-07-lv8-shoes-BbKr8Q.png",
        price: "$189",
        desc: "Your favourite b-ball look goes artisan. Inspired by hand-crafted spirits, the elegant labelling and premium leather certify your shoes 100% Swoosh. Lace up and enjoy the finer things in life like retro hoops style and connoisseur details."
    },
    {
        id: 8,
        name: "Nike Air Force 1 Low Retro",
        imglink: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9ffce789-29ca-4a55-bae5-05dc4c92ecf7/air-force-1-low-retro-shoes-j9C2WJ.png",
        price: "$225",
        desc: "Say I do (again) to the shoes you want to wear for the rest of your life. Returning to the original materials and keeping everything you love best—classic leather construction and the perfect amount of hoops style—the Nike Air Force 1 Low Retro celebrates the icon of everyday fashion. Now with a sneaker cleaning brush to keep your look crisp."
    },
    {
        id: 9,
        name: "Nike Dunk Low Retro Premium",
        imglink: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/194ce632-1c1f-4f55-b237-3f2be82a06cb/dunk-low-retro-shoes-SHww49.png",
        price: "$189",
        desc: "Come, come to the cauldron where vintage hoops style boils and bubbles. Watch shadows creep from beneath the Swoosh. Like eyes peering out from the dark, dark night, the reflective-design upper brings a trick-or-treater shine. Lace up and beware, this basketball icon is sure to bring a little scare."
    },
    {
        id: 10,
        name: "Nike Air Force",
        imglink: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-WrLlWX.png",
        price: "$149",
        desc: "The radiance lives on in the Nike Air Force 1 '07, the basketball original that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine."
    },
]









let product = images.map((element2) => {
    return `
            <div " style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            transition: 0.3s;position:relative;margin-bottom:20px;margin-left:50px; height: 360px; width: 360px; display: inline-block";>
            <div><a href="product1.html"><img style=" position:absolute;height: 76%;width: 100%;object-fit: cover;" src="${element2.imglink}"/> </a>
                </div>
                <div>
                <img style="position:absolute; height:40px; width:40px;left:86%;top:3%" src="heart.png"/>
                </div>
                <div style="position:absolute;top:70%;margin-top:30px;margin-left:20px; color:black">
                <p style="font-family: Barlow'; ">${element2.price}</p>
                <p style="font-family: Barlow';">${element2.name}</p>
                </div>
            </div>
        `
})

product.forEach((element1) => {
    let ans = "items"
    let items = document.getElementById(ans);
    items.innerHTML += element1
})



