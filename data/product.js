export let products = JSON.parse(localStorage.getItem('productss'))
if (!products) {
    products = [
        [
            {
                title:"Nike Air Max 270",
                rating:45,
                price:16000,
                image:'/pics/bestseller/pics/Nike_Air_Max_270_Women_s_Shoe__Black_-removebg-preview.png',
                keyword:['new arrivals','hot sales','shoes']
            },
            {
                title:"EcoSmart Sweatshirt",
                rating:35,
                price:1088,
                image:'/pics/bestseller/pics/61WY5nC9yfL._AC_UX679_-removebg-preview.png',
                keyword:['best sellers','hot sales','clothing']
            },
            {
                title:"Nike Air Force 1'07",
                rating:50,
                price:11000,
                image:'/pics/bestseller/pics/Nike_Air_Force_1__07_Fresh-removebg-preview.png',
                keyword:['best sellers','hot sales','shoes']
            },
            {
                title:"Topman textured Crochet",
                rating:45,
                price:5132,
                image:'/pics/bestseller/pics/Crochet_Shirt__Bode_Shirt__Unisex_Shirt__Crochet_Oversize_shirt__Vintage_Crochet_Shirt__Crochet_Shirt_for_Men__Crochet_Granny_Square_Shirt-removebg-preview.png',
                keyword:['best sellers','hot sales','new arrivals','clothing']
            },
            {
                title:"Air Jordan 12 Retro",
                rating:40,
                price:20000,
                image:'/pics/bestseller/pics/Air_Jordan_12__Field_Purple__Shoes_-_Size_11-removebg-preview.png',
                keyword:['new arrivals','best sellers','shoes']
            },
            {
                title:"TOM FORD SL Cargo",
                rating:40,
                price:4585,
                image:'/pics/bestseller/pics/TOM_FORD_Satin_straight-leg_cargo_pants-removebg-preview.png',
                keyword:['new arrivals','hot sales','best sellers','clothing']
            },
            {
                title:"NY Backpack in Navy",
                rating:40,
                price:3948,
                image:"/pics/bestseller/pics/__ny___rucksack-removebg-preview.png",
                keyword:['best sellers','bags']
            },
            {
                title:"Oakley Sunglasses in Black",
                rating:40,
                price:14291,
                image:"/pics/bestseller/pics/266317_1-removebg-preview.png",
                keyword:['best sellers','accessories']
            },
            {
                title:"NY Yankees Cap in Black",
                rating:50,
                price:3158,
                image:"/pics/bestseller/pics/CAPPELLINO_KIDS_NY_YANKEES_ESSENTIAL_9FORTY_-_YOUTH__6-12_YRS_-removebg-preview.png",
                keyword:['best sellers','accessories']
            },
            {
                title:"Barbour Logo Leather Bag",
                rating:40,
                price:11900,
                image:"/pics/bestseller/pics/Barbour_Debossed_Logo_Leather_Wash_Bag-removebg-preview.png",
                keyword:['bags']
            },
        ],
        [
            {
                title:"ASOS DESIGN GB Bag",
                rating:45,
                price:2600,
                image:"/pics/bestseller/pics/ASOS_DESIGN_scuba_bum_bag_with_rose_gold-Black-removebg-preview.png",
                keyword:['bags']
            },
            {
                title:"Shawl-lapel Jacket",
                rating:45,
                price:19900,
                image:'/pics/bestseller/pics/Shawl-lapel_cream_dinner_jacket-removebg-preview.png',
                keyword:['clothing']
            },
            {
                title:"ASOS DESIGN Tan Suede",
                rating:35,
                price:7200,
                image:'/pics/bestseller/pics/ASOS_DESIGN_loafers_in_tan_faux_suede_with_snaffle_detail-Brown-removebg-preview.png',
                keyword:['shoes']
            },
            {
                title:"Jack & Jones 3 pack Earrings",
                rating:45,
                price:3100,
                image:'/pics/bestseller/pics/Mini_Gold_Hoop_Earrings_Set-Of-Three__1_-removebg-preview.png',
                keyword:['accessories']
            },
            {
                title:"River Island Sunglasses Silver",
                rating:40,
                price:3400,
                image:'/pics/bestseller/pics/s-l1600-removebg-preview.png',
                keyword:['accessories']
            },
            {
                title:"Peakfreak Hiking Shoes",
                rating:40,
                price:18160,
                image:'/pics/bestseller/pics/Columbia_Flow_District_Men_s_Hiking_Shoes__Size__12__Grey-removebg-preview.png',
                keyword:['shoes']
            },
            {
                title:"Metallic Leather look Trouser",
                rating:35,
                price:7600,
                image:'/pics/bestseller/pics/ASOS_DESIGN_baggy_fit_cargo_jeans_in_black_leather_look__1_-removebg-preview.png',
                keyword:['clothing']
            },
            {
                title:"Flat Lay Bag",
                rating:50,
                price:3800,
                image:"/pics/bestseller/pics/The_Flat_Lay_Co__Open_Flat_Makeup_Bag_in_Sage_Green_Velvet-removebg-preview.png",
                keyword:['bags']
            },
            {
                title:"Bering Logo Watch",
                rating:45,
                price:16495,
                image:"/pics/bestseller/pics/5e705981-fb4e-490f-bf0b-eb412a1e697d.jpg.800x800_q85_background-removebg-preview.png",
                keyword:['accessories']
            },
            {
                title:"NY Tote in White",
                rating:40,
                price:2900,
                image:"/pics/bestseller/pics/New_Era_Shoppingväska_-_white-removebg-preview.png",
                keyword:['bags']
            },
        ],
        [
            {
                title:"Butterfly Shape Tote Bag",
                rating:40,
                price:2300,
                image:"/pics/bestseller/pics/Weekday_Unisex_butterfly_shape_tote_bag_in_beige_exclusive_to_ASOS-Neutral-removebg-preview.png",
                keyword:['bags']
            },
            {
                title:"Pleated Flared Trousers",
                rating:45,
                price:7555,
                image:'/pics/bestseller/pics/Acne_Studios_pinstripe_box_pleated_flared_trousers_-_Grey-removebg-preview-removebg-preview.png',
                keyword:['clothing']
            },
            {
                title:"Cloudmonster - Pearl",
                rating:40,
                price:26589,
                image:'/pics/bestseller/pics/Cloudmonster_-_Pearl___Arctic-removebg-preview.png',
                keyword:['shoes']
            },
            {
                title:"Valentino Divina Belt",
                rating:40,
                price:8300,
                image:'/pics/bestseller/pics/Valentino_Bags_-_Divina_-_Sort_bælte_med_V-spænde_i_sølv-removebg-preview.png',
                keyword:['accessories']
            },
            {
                title:"New Balance 530 Trainers",
                rating:35,
                price:15800,
                image:'/pics/bestseller/pics/Mens_Blue_New_Balance_530_Trainers___schuh-removebg-preview.png',
                keyword:['shoes']
            },
            {
                title:"Classic MEN SUIT",
                rating:50,
                price:14999,
                image:'/pics/bestseller/pics/c6cb84ba9353f7c0f49d2a336bd3716c-removebg-preview.png',
                keyword:['clothing']
            },
            {
                title:"ASOS Brace and Bow Tie",
                rating:45,
                price:2900,
                image:"/pics/bestseller/pics/ASOS_DESIGN_Brace_and_bow_tie_set_in_black-removebg-preview.png",
                keyword:['accessories']
            },
            {
                title:"Mocha Eva Sliders",
                rating:30,
                price:2500,
                image:'/pics/bestseller/pics/Mocha_Eva_Sliders-removebg-preview.png',
                keyword:['shoes']
            },
            {
                title:"Cotton Knitted Sweater Bag",
                rating:35,
                price:2399,
                image:"/pics/bestseller/pics/Elena_Handbags_Cotton_Knitted_Sweater_Bag-removebg-preview.png",
                keyword:['bags']
            },
            {
                title:"Casual Summer Outfit",
                rating:35,
                price:9999,
                image:"/pics/bestseller/pics/Men_Outfit_Set_2022_Men_s_Casual_Loose_Beach_Suit_Fashion_Printed_Short_Sleeve_Shirt_and_Shorts_2_Sets_Men_s_Clothing_1-S-removebg-preview.png",
                keyword:['clothing']
            },
        ],
        [
            {
                title:"Carhartt WIP nash Tote Bag",
                rating:35,
                price:11700,
                image:"/pics/bestseller/pics/Carhartt_WIP_Men_s_Nash_Tote_Blue-removebg-preview.png",
                keyword:['bags']
            },
            {
                title:"Classics 77 Hoop Earrings",
                rating:35,
                price:1350,
                image:'/pics/bestseller/pics/Classics_77_hoop_earrings_with_lightning_bolt_charms_in_gold-removebg-preview.png',
                keyword:['accessories']
            },
            {
                title:"Dr Martens Multi Strap Sandals",
                rating:50,
                price:16423,
                image:'/pics/bestseller/pics/Pearson_Ii_Sandals-removebg-preview.png',
                keyword:['shoes']
            },
            {
                title:"Adidas Sports Style Duffle Bag",
                rating:45,
                price:3700,
                image:'/pics/bestseller/pics/adidas_Performance_LINEAR_DUFFEL_M_-_Borsa_per_lo_sport_-_black_white-removebg-preview.png',
                keyword:['bags']
            },
            {
                title:"ASOS DESIGN Marvel Venom Print",
                rating:35,
                price:4500,
                image:'/pics/bestseller/pics/Camiseta_negra_extragrande_con_estampado_de_Venom_de_ASOS_DESIGN-Negro-removebg-preview.png',
                keyword:['clothing']
            },
            {
                title:"ASOS Skull Design Silver Tone",
                rating:30,
                price:1700,
                image:"/pics/bestseller/pics/ASOS_DESIGN_-_Boutons_de_manchette_tête_de_bélier_-_Argent_poli-Argenté-removebg-preview.png",
                keyword:['accessories']
            },
            {
                title:"Jack & Jones Flip Flop",
                rating:30,
                price:2100,
                image:'/pics/bestseller/pics/Jack_and_Jones_flip_flops_in_black-removebg-preview.png',
                keyword:['shoes']
            },
            {
                title:"Exclusive Seventeen Bumbag",
                rating:40,
                price:5900,
                image:"/pics/bestseller/pics/Exclusives_-_Seventeen_-_Heuptasje-removebg-preview.png",
                keyword:['bags']
            },
            {
                title:"ASOS DESIGN Steel Chain",
                rating:35,
                price:1200,
                image:'/pics/bestseller/pics/ADORNIA_Stainless_Steel_Padlock_Mixed_Chain_Bracelet_in_Silver_at_Nordstrom_Rack-removebg-preview.png',
                keyword:['accessories']
            },
            {
                title:"Carhartt WIP Cargo Pants",
                rating:35,
                price:19700,
                image:"/pics/bestseller/pics/Carhartt_WIP_Reisitaskuhousut_-_green-removebg-preview.png",
                keyword:['clothing']
            },
        ],
    ]
}
saveToStorage()

let productId = 0
for (let i = 0; i < products.length; i++) {
    const innerArray = products[i];
    for (let j = 0; j < innerArray.length; j++) {
        const element = innerArray[j];
        element.id = `product${productId}`
        element.discount = 1
        productId ++
    }
}
saveToStorage()

export function saveToStorage() {
    console.log('savetostorage');
    localStorage.setItem('productss', JSON.stringify(products));
}

