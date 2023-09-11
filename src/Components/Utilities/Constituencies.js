const constituencies= [
    {
        "county-code": 1,
        "code": 1,
        "name": "Changamwe"
    },
    {
        "county-code": 1,
        "code": 2,
        "name": "Jomvu"
    },
    {
        "county-code": 1,
        "code": 3,
        "name": "Kisauni"
    },
    {
        "county-code": 1,
        "code": 4,
        "name": "Nyali"
    },
    {
        "county-code": 1,
        "code": 5,
        "name": "Likoni"
    },
    {
        "county-code": 1,
        "code": 6,
        "name": "Mvita"
    },
    {
        "county-code": 2,
        "code": 7,
        "name": "Msambweni"
    },
    {
        "county-code": 2,
        "code": 8,
        "name": "Lungalunga"
    },
    {
        "county-code": 2,
        "code": 9,
        "name": "Matuga"
    },
    {
        "county-code": 2,
        "code": 10,
        "name": "Kinango"
    },
    {
        "county-code": 3,
        "code": 11,
        "name": "Kilifi North"
    },
    {
        "county-code": 3,
        "code": 12,
        "name": "Kilifi South"
    },
    {
        "county-code": 3,
        "code": 13,
        "name": "Kaloleni"
    },
    {
        "county-code": 3,
        "code": 14,
        "name": "Rabai"
    },
    {
        "county-code": 3,
        "code": 15,
        "name": "Ganze"
    },
    {
        "county-code": 3,
        "code": 16,
        "name": "Malindi"
    },
    {
        "county-code": 3,
        "code": 17,
        "name": "Magarini"
    },
    {
        "county-code": 4,
        "code": 18,
        "name": "Garsen"
    },
    {
        "county-code": 4,
        "code": 19,
        "name": "Galole"
    },
    {
        "county-code": 4,
        "code": 20,
        "name": "Bura"
    },
    {
        "county-code": 5,
        "code": 21,
        "name": "Lamu East"
    },
    {
        "county-code": 5,
        "code": 22,
        "name": "Lamu West"
    },
    {
        "county-code": 6,
        "code": 23,
        "name": "Taveta"
    },
    {
        "county-code": 6,
        "code": 24,
        "name": "Wundanyi"
    },
    {
        "county-code": 6,
        "code": 25,
        "name": "Mwatate"
    },
    {
        "county-code": 6,
        "code": 26,
        "name": "Voi"
    },
    {
        "county-code": 7,
        "code": 27,
        "name": "Garissa Township"
    },
    {
        "county-code": 7,
        "code": 28,
        "name": "Balambala"
    },
    {
        "county-code": 7,
        "code": 29,
        "name": "Lagdera"
    },
    {
        "county-code": 7,
        "code": 30,
        "name": "Dadaab"
    },
    {
        "county-code": 7,
        "code": 31,
        "name": "Fafi"
    },
    {
        "county-code": 7,
        "code": 32,
        "name": "Ijara"
    },
    {
        "county-code": 8,
        "code": 33,
        "name": "Wajir North"
    },
    {
        "county-code": 8,
        "code": 34,
        "name": "Wajir East"
    },
    {
        "county-code": 8,
        "code": 35,
        "name": "Tarbaj"
    },
    {
        "county-code": 8,
        "code": 36,
        "name": "Wajir West"
    },
    {
        "county-code": 8,
        "code": 37,
        "name": "Eldas"
    },
    {
        "county-code": 8,
        "code": 38,
        "name": "Wajir South"
    },
    {
        "county-code": 9,
        "code": 39,
        "name": "Mandera West"
    },
    {
        "county-code": 9,
        "code": 40,
        "name": "Banissa"
    },
    {
        "county-code": 9,
        "code": 41,
        "name": "Mandera North"
    },
    {
        "county-code": 9,
        "code": 42,
        "name": "Mandera South"
    },
    {
        "county-code": 9,
        "code": 43,
        "name": "Mandera East"
    },
    {
        "county-code": 9,
        "code": 44,
        "name": "Lafey"
    },
    {
        "county-code": 10,
        "code": 45,
        "name": "Moyale"
    },
    {
        "county-code": 10,
        "code": 46,
        "name": "North Horr"
    },
    {
        "county-code": 10,
        "code": 47,
        "name": "Saku"
    },
    {
        "county-code": 10,
        "code": 48,
        "name": "Laisamis"
    },
    {
        "county-code": 11,
        "code": 49,
        "name": "Isiolo North"
    },
    {
        "county-code": 11,
        "code": 50,
        "name": "Isiolo South"
    },
    {
        "county-code": 12,
        "code": 51,
        "name": "Igembe South"
    },
    {
        "county-code": 12,
        "code": 52,
        "name": "Igembe Central"
    },
    {
        "county-code": 12,
        "code": 53,
        "name": "Igembe North"
    },
    {
        "county-code": 12,
        "code": 54,
        "name": "Tigania West"
    },
    {
        "county-code": 12,
        "code": 55,
        "name": "Tigania East"
    },
    {
        "county-code": 12,
        "code": 56,
        "name": "North Imenti"
    },
    {
        "county-code": 12,
        "code": 57,
        "name": "Buuri"
    },
    {
        "county-code": 12,
        "code": 58,
        "name": "Central Imenti"
    },
    {
        "county-code": 12,
        "code": 59,
        "name": "South Imenti"
    },
    {
        "county-code": 13,
        "code": 60,
        "name": "Maara"
    },
    {
        "county-code": 13,
        "code": 61,
        "name": "Chuka/Igambang'ombe"
    },
    {
        "county-code": 13,
        "code": 62,
        "name": "Tharaka"
    },
    {
        "county-code": 14,
        "code": 63,
        "name": "Manyatta"
    },
    {
        "county-code": 14,
        "code": 64,
        "name": "Runyenjes"
    },
    {
        "county-code": 14,
        "code": 65,
        "name": "Mbeere South"
    },
    {
        "county-code": 14,
        "code": 66,
        "name": "Mbeere North"
    },
    {
        "county-code": 15,
        "code": 67,
        "name": "Mwingi North"
    },
    {
        "county-code": 15,
        "code": 68,
        "name": "Mwingi West"
    },
    {
        "county-code": 15,
        "code": 69,
        "name": "Mwingi Central"
    },
    {
        "county-code": 15,
        "code": 70,
        "name": "Kitui West"
    },
    {
        "county-code": 15,
        "code": 71,
        "name": "Kitui Rural"
    },
    {
        "county-code": 15,
        "code": 72,
        "name": "Kitui Central"
    },
    {
        "county-code": 15,
        "code": 73,
        "name": "Kitui East"
    },
    {
        "county-code": 15,
        "code": 74,
        "name": "Kitui South"
    },
    {
        "county-code": 16,
        "code": 75,
        "name": "Masinga"
    },
    {
        "county-code": 16,
        "code": 76,
        "name": "Yatta"
    },
    {
        "county-code": 16,
        "code": 77,
        "name": "Kangundo"
    },
    {
        "county-code": 16,
        "code": 78,
        "name": "Matungulu"
    },
    {
        "county-code": 16,
        "code": 79,
        "name": "Kathiani"
    },
    {
        "county-code": 16,
        "code": 80,
        "name": "Mavoko"
    },
    {
        "county-code": 16,
        "code": 81,
        "name": "Machakos Town"
    },
    {
        "county-code": 16,
        "code": 82,
        "name": "Mwala"
    },
    {
        "county-code": 17,
        "code": 83,
        "name": "Mbooni"
    },
    {
        "county-code": 17,
        "code": 84,
        "name": "Kilome"
    },
    {
        "county-code": 17,
        "code": 85,
        "name": "Kaiti"
    },
    {
        "county-code": 17,
        "code": 86,
        "name": "Makueni"
    },
    {
        "county-code": 17,
        "code": 87,
        "name": "Kibwezi West"
    },
    {
        "county-code": 17,
        "code": 88,
        "name": "Kibwezi East"
    },
    {
        "county-code": 18,
        "code": 89,
        "name": "Kinangop"
    },
    {
        "county-code": 18,
        "code": 90,
        "name": "Kipipiri"
    },
    {
        "county-code": 18,
        "code": 91,
        "name": "Ol Kalou"
    },
    {
        "county-code": 18,
        "code": 92,
        "name": "Ol Jorok"
    },
    {
        "county-code": 18,
        "code": 93,
        "name": "Ndaragwa"
    },
    {
        "county-code": 19,
        "code": 94,
        "name": "Tetu"
    },
    {
        "county-code": 19,
        "code": 95,
        "name": "Kieni"
    },
    {
        "county-code": 19,
        "code": 96,
        "name": "Mathira"
    },
    {
        "county-code": 19,
        "code": 97,
        "name": "Othaya"
    },
    {
        "county-code": 19,
        "code": 98,
        "name": "Mukurweini"
    },
    {
        "county-code": 19,
        "code": 99,
        "name": "Nyeri Town"
    },
    {
        "county-code": 20,
        "code": 100,
        "name": "Mwea"
    },
    {
        "county-code": 20,
        "code": 101,
        "name": "Gichugu"
    },
    {
        "county-code": 20,
        "code": 102,
        "name": "Ndia"
    },
    {
        "county-code": 20,
        "code": 103,
        "name": "Kirinyaga Central"
    },
    {
        "county-code": 21,
        "code": 104,
        "name": "Kangema"
    },
    {
        "county-code": 21,
        "code": 105,
        "name": "Mathioya"
    },
    {
        "county-code": 21,
        "code": 106,
        "name": "Kiharu"
    },
    {
        "county-code": 21,
        "code": 107,
        "name": "Kigumo"
    },
    {
        "county-code": 21,
        "code": 108,
        "name": "Maragwa"
    },
    {
        "county-code": 21,
        "code": 109,
        "name": "Kandara"
    },
    {
        "county-code": 21,
        "code": 110,
        "name": "Gatanga"
    },
    {
        "county-code": 22,
        "code": 111,
        "name": "Gatundu South"
    },
    {
        "county-code": 22,
        "code": 112,
        "name": "Gatundu North"
    },
    {
        "county-code": 22,
        "code": 113,
        "name": "Juja"
    },
    {
        "county-code": 22,
        "code": 114,
        "name": "Thika Town"
    },
    {
        "county-code": 22,
        "code": 115,
        "name": "Ruiru"
    },
    {
        "county-code": 22,
        "code": 116,
        "name": "Githunguri"
    },
    {
        "county-code": 22,
        "code": 117,
        "name": "Kiambu"
    },
    {
        "county-code": 22,
        "code": 118,
        "name": "Kiambaa"
    },
    {
        "county-code": 22,
        "code": 119,
        "name": "Kabete"
    },
    {
        "county-code": 22,
        "code": 120,
        "name": "Kikuyu"
    },
    {
        "county-code": 22,
        "code": 121,
        "name": "Limuru"
    },
    {
        "county-code": 22,
        "code": 122,
        "name": "Lari"
    },
    {
        "county-code": 23,
        "code": 123,
        "name": "Turkana North"
    },
    {
        "county-code": 23,
        "code": 124,
        "name": "Turkana West"
    },
    {
        "county-code": 23,
        "code": 125,
        "name": "Turkana Central"
    },
    {
        "county-code": 23,
        "code": 126,
        "name": "Loima"
    },
    {
        "county-code": 23,
        "code": 127,
        "name": "Turkana South"
    },
    {
        "county-code": 23,
        "code": 128,
        "name": "Turkana East"
    },
    {
        "county-code": 24,
        "code": 129,
        "name": "Kapenguria"
    },
    {
        "county-code": 24,
        "code": 130,
        "name": "Sigor"
    },
    {
        "county-code": 24,
        "code": 131,
        "name": "Kacheliba"
    },
    {
        "county-code": 24,
        "code": 132,
        "name": "Pokot South"
    },
    {
        "county-code": 25,
        "code": 133,
        "name": "Samburu West"
    },
    {
        "county-code": 25,
        "code": 134,
        "name": "Samburu North"
    },
    {
        "county-code": 25,
        "code": 135,
        "name": "Samburu East"
    },
    {
        "county-code": 26,
        "code": 136,
        "name": "Kwanza"
    },
    {
        "county-code": 26,
        "code": 137,
        "name": "Endebess"
    },
    {
        "county-code": 26,
        "code": 138,
        "name": "Saboti"
    },
    {
        "county-code": 26,
        "code": 139,
        "name": "Kiminini"
    },
    {
        "county-code": 26,
        "code": 140,
        "name": "Cherangany"
    },
    {
        "county-code": 27,
        "code": 141,
        "name": "Soy"
    },
    {
        "county-code": 27,
        "code": 142,
        "name": "Turbo"
    },
    {
        "county-code": 27,
        "code": 143,
        "name": "Moiben"
    },
    {
        "county-code": 27,
        "code": 144,
        "name": "Ainabkoi"
    },
    {
        "county-code": 27,
        "code": 145,
        "name": "Kapseret"
    },
    {
        "county-code": 27,
        "code": 146,
        "name": "Kesses"
    },
    {
        "county-code": 28,
        "code": 147,
        "name": "Marakwet East"
    },
    {
        "county-code": 28,
        "code": 148,
        "name": "Marakwet West"
    },
    {
        "county-code": 28,
        "code": 149,
        "name": "Keiyo North"
    },
    {
        "county-code": 28,
        "code": 150,
        "name": "Keiyo South"
    },
    {
        "county-code": 29,
        "code": 151,
        "name": "Tinderet"
    },
    {
        "county-code": 29,
        "code": 152,
        "name": "Aldai"
    },
    {
        "county-code": 29,
        "code": 153,
        "name": "Nandi Hills"
    },
    {
        "county-code": 29,
        "code": 154,
        "name": "Chesumei"
    },
    {
        "county-code": 29,
        "code": 155,
        "name": "Emgwen"
    },
    {
        "county-code": 29,
        "code": 156,
        "name": "Mosop"
    },
    {
        "county-code": 30,
        "code": 157,
        "name": "Tiaty"
    },
    {
        "county-code": 30,
        "code": 158,
        "name": "Baringo  North"
    },
    {
        "county-code": 30,
        "code": 159,
        "name": "Baringo Central"
    },
    {
        "county-code": 30,
        "code": 160,
        "name": "Baringo South"
    },
    {
        "county-code": 30,
        "code": 161,
        "name": "Mogotio"
    },
    {
        "county-code": 30,
        "code": 162,
        "name": "Eldama Ravine"
    },
    {
        "county-code": 31,
        "code": 163,
        "name": "Laikipia West"
    },
    {
        "county-code": 31,
        "code": 164,
        "name": "Laikipia East"
    },
    {
        "county-code": 31,
        "code": 165,
        "name": "Laikipia North"
    },
    {
        "county-code": 32,
        "code": 166,
        "name": "Molo"
    },
    {
        "county-code": 32,
        "code": 167,
        "name": "Njoro"
    },
    {
        "county-code": 32,
        "code": 168,
        "name": "Naivasha"
    },
    {
        "county-code": 32,
        "code": 169,
        "name": "Gilgil"
    },
    {
        "county-code": 32,
        "code": 170,
        "name": "Kuresoi South"
    },
    {
        "county-code": 32,
        "code": 171,
        "name": "Kuresoi North"
    },
    {
        "county-code": 32,
        "code": 172,
        "name": "Subukia"
    },
    {
        "county-code": 32,
        "code": 173,
        "name": "Rongai"
    },
    {
        "county-code": 32,
        "code": 174,
        "name": "Bahati"
    },
    {
        "county-code": 32,
        "code": 175,
        "name": "Nakuru Town West"
    },
    {
        "county-code": 32,
        "code": 176,
        "name": "Nakuru Town East"
    },
    {
        "county-code": 33,
        "code": 177,
        "name": "Kilgoris"
    },
    {
        "county-code": 33,
        "code": 178,
        "name": "Emurua Dikirr"
    },
    {
        "county-code": 33,
        "code": 179,
        "name": "Narok North"
    },
    {
        "county-code": 33,
        "code": 180,
        "name": "Narok East"
    },
    {
        "county-code": 33,
        "code": 181,
        "name": "Narok South"
    },
    {
        "county-code": 33,
        "code": 182,
        "name": "Narok West"
    },
    {
        "county-code": 34,
        "code": 183,
        "name": "Kajiado North"
    },
    {
        "county-code": 34,
        "code": 184,
        "name": "Kajiado Central"
    },
    {
        "county-code": 34,
        "code": 185,
        "name": "Kajiado East"
    },
    {
        "county-code": 34,
        "code": 186,
        "name": "Kajiado West"
    },
    {
        "county-code": 34,
        "code": 187,
        "name": "Kajiado South"
    },
    {
        "county-code": 35,
        "code": 188,
        "name": "Kipkelion East"
    },
    {
        "county-code": 35,
        "code": 189,
        "name": "Kipkelion West"
    },
    {
        "county-code": 35,
        "code": 190,
        "name": "Ainamoi"
    },
    {
        "county-code": 35,
        "code": 191,
        "name": "Bureti"
    },
    {
        "county-code": 35,
        "code": 192,
        "name": "Belgut"
    },
    {
        "county-code": 35,
        "code": 193,
        "name": "Sigowet/Soin"
    },
    {
        "county-code": 36,
        "code": 194,
        "name": "Sotik"
    },
    {
        "county-code": 36,
        "code": 195,
        "name": "Chepalungu"
    },
    {
        "county-code": 36,
        "code": 196,
        "name": "Bomet East"
    },
    {
        "county-code": 36,
        "code": 197,
        "name": "Bomet Central"
    },
    {
        "county-code": 36,
        "code": 198,
        "name": "Konoin"
    },
    {
        "county-code": 37,
        "code": 199,
        "name": "Lugari"
    },
    {
        "county-code": 37,
        "code": 200,
        "name": "Likuyani"
    },
    {
        "county-code": 37,
        "code": 201,
        "name": "Malava"
    },
    {
        "county-code": 37,
        "code": 202,
        "name": "Lurambi"
    },
    {
        "county-code": 37,
        "code": 203,
        "name": "Navakholo"
    },
    {
        "county-code": 37,
        "code": 204,
        "name": "Mumias West"
    },
    {
        "county-code": 37,
        "code": 205,
        "name": "Mumias East"
    },
    {
        "county-code": 37,
        "code": 206,
        "name": "Matungu"
    },
    {
        "county-code": 37,
        "code": 207,
        "name": "Butere"
    },
    {
        "county-code": 37,
        "code": 208,
        "name": "Khwisero"
    },
    {
        "county-code": 37,
        "code": 209,
        "name": "Shinyalu"
    },
    {
        "county-code": 37,
        "code": 210,
        "name": "Ikolomani"
    },
    {
        "county-code": 38,
        "code": 211,
        "name": "Vihiga"
    },
    {
        "county-code": 38,
        "code": 212,
        "name": "Sabatia"
    },
    {
        "county-code": 38,
        "code": 213,
        "name": "Hamisi"
    },
    {
        "county-code": 38,
        "code": 214,
        "name": "Luanda"
    },
    {
        "county-code": 38,
        "code": 215,
        "name": "Emuhaya"
    },
    {
        "county-code": 39,
        "code": 216,
        "name": "Mt. Elgon"
    },
    {
        "county-code": 39,
        "code": 217,
        "name": "Sirisia"
    },
    {
        "county-code": 39,
        "code": 218,
        "name": "Kabuchai"
    },
    {
        "county-code": 39,
        "code": 219,
        "name": "Bumula"
    },
    {
        "county-code": 39,
        "code": 220,
        "name": "Kanduyi"
    },
    {
        "county-code": 39,
        "code": 221,
        "name": "Webuye East"
    },
    {
        "county-code": 39,
        "code": 222,
        "name": "Webuye West"
    },
    {
        "county-code": 39,
        "code": 223,
        "name": "Kimilili"
    },
    {
        "county-code": 39,
        "code": 224,
        "name": "Tongaren"
    },
    {
        "county-code": 40,
        "code": 225,
        "name": "Teso North"
    },
    {
        "county-code": 40,
        "code": 226,
        "name": "Teso South"
    },
    {
        "county-code": 40,
        "code": 227,
        "name": "Nambale"
    },
    {
        "county-code": 40,
        "code": 228,
        "name": "Matayos"
    },
    {
        "county-code": 40,
        "code": 229,
        "name": "Butula"
    },
    {
        "county-code": 40,
        "code": 230,
        "name": "Funyula"
    },
    {
        "county-code": 40,
        "code": 231,
        "name": "Budalangi"
    },
    {
        "county-code": 41,
        "code": 232,
        "name": "Ugenya"
    },
    {
        "county-code": 41,
        "code": 233,
        "name": "Ugunja"
    },
    {
        "county-code": 41,
        "code": 234,
        "name": "Alego Usonga"
    },
    {
        "county-code": 41,
        "code": 235,
        "name": "Gem"
    },
    {
        "county-code": 41,
        "code": 236,
        "name": "Bondo"
    },
    {
        "county-code": 41,
        "code": 237,
        "name": "Rarieda"
    },
    {
        "county-code": 42,
        "code": 238,
        "name": "Kisumu East"
    },
    {
        "county-code": 42,
        "code": 239,
        "name": "Kisumu West"
    },
    {
        "county-code": 42,
        "code": 240,
        "name": "Kisumu Central"
    },
    {
        "county-code": 42,
        "code": 241,
        "name": "Seme"
    },
    {
        "county-code": 42,
        "code": 242,
        "name": "Nyando"
    },
    {
        "county-code": 42,
        "code": 243,
        "name": "Muhoroni"
    },
    {
        "county-code": 42,
        "code": 244,
        "name": "Nyakach"
    },
    {
        "county-code": 43,
        "code": 245,
        "name": "Kasipul"
    },
    {
        "county-code": 43,
        "code": 246,
        "name": "Kabondo Kasipul"
    },
    {
        "county-code": 43,
        "code": 247,
        "name": "Karachuonyo"
    },
    {
        "county-code": 43,
        "code": 248,
        "name": "Rangwe"
    },
    {
        "county-code": 43,
        "code": 249,
        "name": "Homa Bay Town"
    },
    {
        "county-code": 43,
        "code": 250,
        "name": "Ndhiwa"
    },
    {
        "county-code": 43,
        "code": 251,
        "name": "Suba North"
    },
    {
        "county-code": 43,
        "code": 252,
        "name": "Suba South"
    },
    {
        "county-code": 44,
        "code": 253,
        "name": "Rongo"
    },
    {
        "county-code": 44,
        "code": 254,
        "name": "Awendo"
    },
    {
        "county-code": 44,
        "code": 255,
        "name": "Suna East"
    },
    {
        "county-code": 44,
        "code": 256,
        "name": "Suna West"
    },
    {
        "county-code": 44,
        "code": 257,
        "name": "Uriri"
    },
    {
        "county-code": 44,
        "code": 258,
        "name": "Nyatike"
    },
    {
        "county-code": 44,
        "code": 259,
        "name": "Kuria West"
    },
    {
        "county-code": 44,
        "code": 260,
        "name": "Kuria East"
    },
    {
        "county-code": 45,
        "code": 261,
        "name": "Bonchari"
    },
    {
        "county-code": 45,
        "code": 262,
        "name": "South Mugirango"
    },
    {
        "county-code": 45,
        "code": 263,
        "name": "Bomachoge Borabu"
    },
    {
        "county-code": 45,
        "code": 264,
        "name": "Bobasi"
    },
    {
        "county-code": 45,
        "code": 265,
        "name": "Bomachoge Chache"
    },
    {
        "county-code": 45,
        "code": 266,
        "name": "Nyaribari Masaba"
    },
    {
        "county-code": 45,
        "code": 267,
        "name": "Nyaribari Chache"
    },
    {
        "county-code": 45,
        "code": 268,
        "name": "Kitutu Chache North"
    },
    {
        "county-code": 45,
        "code": 269,
        "name": "Kitutu Chache South"
    },
    {
        "county-code": 46,
        "code": 270,
        "name": "Kitutu Masaba"
    },
    {
        "county-code": 46,
        "code": 271,
        "name": "West Mugirango"
    },
    {
        "county-code": 46,
        "code": 272,
        "name": "North Mugirango"
    },
    {
        "county-code": 46,
        "code": 273,
        "name": "Borabu"
    },
    {
        "county-code": 47,
        "code": 274,
        "name": "Westlands"
    },
    {
        "county-code": 47,
        "code": 275,
        "name": "Dagoretti North"
    },
    {
        "county-code": 47,
        "code": 276,
        "name": "Dagoretti South"
    },
    {
        "county-code": 47,
        "code": 277,
        "name": "Langata"
    },
    {
        "county-code": 47,
        "code": 278,
        "name": "Kibra"
    },
    {
        "county-code": 47,
        "code": 279,
        "name": "Roysambu"
    },
    {
        "county-code": 47,
        "code": 280,
        "name": "Kasarani"
    },
    {
        "county-code": 47,
        "code": 281,
        "name": "Ruaraka"
    },
    {
        "county-code": 47,
        "code": 282,
        "name": "Embakasi South"
    },
    {
        "county-code": 47,
        "code": 283,
        "name": "Embakasi North"
    },
    {
        "county-code": 47,
        "code": 284,
        "name": "Embakasi Central"
    },
    {
        "county-code": 47,
        "code": 285,
        "name": "Embakasi East"
    },
    {
        "county-code": 47,
        "code": 286,
        "name": "Embakasi West"
    },
    {
        "county-code": 47,
        "code": 287,
        "name": "Makadara"
    },
    {
        "county-code": 47,
        "code": 288,
        "name": "Kamukunji"
    },
    {
        "county-code": 47,
        "code": 289,
        "name": "Starehe"
    },
    {
        "county-code": 47,
        "code": 290,
        "name": "Mathare"
    },
    // {
    //     "county-code": 48,
    //     "code": 291,
    //     "name": "Diaspora"
    // },
    // {
    //     "county-code": 49,
    //     "code": 292,
    //     "name": "Prisons"
    // }
]
export default constituencies;