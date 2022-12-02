let et = [
        document.getElementById('element1num').value,
        document.getElementById('element2num').value,
        document.getElementById('element3num').value,
        document.getElementById('element4num').value,
        document.getElementById('element5num').value
]

let e1p = document.getElementById('element1percent').value;
let e2p = document.getElementById('element2percent').value;
let e3p = document.getElementById('element3percent').value;
let e4p = document.getElementById('element4percent').value;
let e5p = document.getElementById('element5percent').value;

const massList = [
        1.00794,
        4.002602,
        6.941,
        9.012182,
        10.811,
        12.0107,
        14.0067,
        15.9994,
        18.9984032,
        20.1797,
        22.98976928,
        24.3050,
        26.9815386,
        28.0855,
        30.973762,
        32.065,
        35.453,
        39.948,
        39.0983,
        40.078,
        44.955912,
        47.867,
        50.9415,
        51.9961,
        54.938045,
        55.845,
        58.933195,
        58.6934,
        63.546,
        65.38,
        69.723,
        72.64,
        74.92160,
        78.96,
        79.904,
        83.798,
        85.4678,
        87.62,
        88.90585,
        91.224,
        92.90638,
        95.96,
        98,
        101.07,
        102.90550,
        106.42,
        107.8682,
        112.411,
        114.818,
        118.710,
        121.760,
        127.60,
        126.90447,
        131.293,
        132.9054519,
        137.327,
        138.90547,
        140.116,
        140.90765,
        144.242,
        145,
        150.36,
        151.964,
        157.25,
        158.92535,
        162.500,
        164.93032,
        167.259,
        168.93421,
        173.054,
        174.9668,
        178.49,
        180.94788,
        183.84,
        186.207,
        190.23,
        192.217,
        195.084,
        196.966569,
        200.59,
        204.3833,
        207.2,
        208.98040,
        209,
        210,
        222,
        223,
        226,
        227,
        232.03806,
        231.03588,
        238.02891,
        237,
        244,
        243,
        247,
        247,
        251,
        252,
        257,
        258,
        259,
        262,
        267,
        268,
        271,
        272,
        270,
        276,
        281,
        280,
        285,
        284,
        289,
        288,
        293,
        294,
        294
];

const symbolList = [
        "H",
        "He",
        "Li",
        "Be",
        "B",
        "C",
        "N",
        "O",
        "F",
        "Ne",
        "Na",
        "Mg",
        "Al",
        "Si",
        "P",
        "S",
        "Cl",
        "Ar",
        "K",
        "Ca",
        "Sc",
        "Ti",
        "V",
        "Cr",
        "Mn",
        "Fe",
        "Co",
        "Ni",
        "Cu",
        "Zn",
        "Ga",
        "Ge",
        "As",
        "Se",
        "Br",
        "Kr",
        "Rb",
        "Sr",
        "Y",
        "Zr",
        "Nb",
        "Mo",
        "Tc",
        "Ru",
        "Rh",
        "Pd",
        "Ag",
        "Cd",
        "In",
        "Sn",
        "Sb",
        "Te",
        "I",
        "Xe",
        "Cs",
        "Ba",
        "La",
        "Ce",
        "Pr",
        "Nd",
        "Pm",
        "Sm",
        "Eu",
        "Gd",
        "Tb",
        "Dy",
        "Ho",
        "Er",
        "Tm",
        "Yb",
        "Lu",
        "Hf",
        "Ta",
        "W",
        "Re",
        "Os",
        "Ir",
        "Pt",
        "Au",
        "Hg",
        "Tl",
        "Pb",
        "Bi",
        "Po",
        "At",
        "Rn",
        "Fr",
        "Ra",
        "Ac",
        "Th",
        "Pa",
        "U",
        "Np",
        "Pu",
        "Am",
        "Cm",
        "Bk",
        "Cf",
        "Es",
        "Fm",
        "Md",
        "No",
        "Lr",
        "Rf",
        "Db",
        "Sg",
        "Bh",
        "Hs",
        "Mt",
        "Ds",
        "Rg",
        "Cn",
        "Nh",
        "Fl",
        "Mc",
        "Lv",
        "Ts",
        "Og"
]


function calc() {

        let val1;
        let val2;
        let val3;
        let val4;
        let val5;



        if (et[0] !== "" && e1p !== "") {
                val1 = e1p / massList[et[0] - 1];
        } else {
                val1 = NaN;
        }
        if(et[1] !== "" && e2p !== "") {
                val2 = e2p / massList[et[1]-1];
        } else { val2 = NaN;}
        if(et[2] !== "" && e3p !== "") {
                val3 = e3p / massList[et[2]-1];
        } else { val3 = NaN;}
        if(et[3] !== "" && e4p !== "") {
                val4 = e4p / massList[et[3]-1];
        } else { val4 = NaN;}
        if(et[4] !== "" && e5p !== "") {
                val5 = e5p / massList[et[4]-1];
        } else { val5 = NaN;}

        let val = [
            val1,
            val2,
            val3,
            val4,
            val5
        ]

        val = val.filter(function(item) {
                return !isNaN(item);
        })

        let min = Math.min(...val);

        for(let i = 0; i < val.length; i++) {
                val[i] = Math.round(val[i]/min);
        }


        let final = [];

        for(let i = 0; i < val.length; i++) {
                if(val[i] !== 1) {
                        final.push(symbolList[et[i] - 1] + val[i].toString().sub());
                } else {
                        final.push(symbolList[et[i] - 1]);
                }
        }

        console.log(final)

        document.getElementById("result").innerHTML = final;

}