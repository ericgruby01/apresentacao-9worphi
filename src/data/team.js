import AlePhoto from '../images/equipe/foto/ale-min.jpg'
import AleSticker from "../images/equipe/figurinhas/ale.png"

import VeroPhoto from '../images/equipe/foto/vero-min.jpg'
import VeroSticker from '../images/equipe/figurinhas/vero.png'

import AndrePhoto from '../images/equipe/foto/andre-min.jpg'
import AndreSticker from '../images/equipe/figurinhas/andre.png'

import KatheFoto from '../images/equipe/foto/kathe-min.jpg'
import KatheSticker from '../images/equipe/figurinhas/kathe.png'

import PiriPhoto from "../images/equipe/foto/pirilampo-min.jpg"
import PiriSticker from "../images/equipe/figurinhas/pirilampo.png"

import BoliviaPhoto from "../images/equipe/foto/bolivia-min.jpg"
import BoliviaSticker from "../images/equipe/figurinhas/bolivia.png"

import ElvisPhoto from "../images/equipe/foto/elvis-min.jpg"
import ElvisSticker from "../images/equipe/figurinhas/elvis.png"

import VeiaPhoto from '../images/equipe/foto/veia-min.jpg'
import VeiaSticker from '../images/equipe/figurinhas/veia.png'

// import IgorPhoto from '../images/equipe/foto/igor-min.jpg'
import IgorSticker from '../images/equipe/figurinhas/igor.png'

export default {
    veia: {
        name: "Véia",
        nickname: "Véia mesmo",
        business: "Office Pet",
        interests: [
            "Bifinhos",
            "Uivar pro nada",
            "Sorrir com o único dente que ela tem",
            "Cavar",
            { label: "Ganhar carinho do Bolívia", link: "/team/member/helder" }
        ],
        photo: VeiaPhoto,
        sticker: VeiaSticker
    },
    alexandre: {
        name: "Alexandre Pereira",
        nickname: "Ale",
        business: "CEO/Manager",
        interests: [
            "Praia",
            "Viajar",
            "Sushi",
            "Suco de Coca Cola",
            "Jogos de tiro e fifinha"
        ],
        photo: AlePhoto,
        sticker: AleSticker
    },
    veronica: {
        name: "Verônica Sousa",
        nickname: "Vero",
        business: "CEO/HR/Manager",
        interests: [
            "Bichos",
            "Churrascos",
            "Música",
            "Dança",
            "Cumê, porque boca foi feita pá cumê"
        ],
        photo: VeroPhoto,
        sticker: VeroSticker
    },
    andre: {
        name: "André Martins",
        nickname: "Martins",
        business: "Support Team",
        interests: [
            "Viajar",
            "Estar com a família/amigos",
            "Aprender coisas novas",
            "Ser prestativo",
            "Jogar"
        ],
        photo: AndrePhoto,
        sticker: AndreSticker
    },
    kathe: {
        name: "Katherine Sousa",
        nickname: "Kathe",
        business: "Support Team",
        interests: [
            "Dinheiro",
            "Comer",
            "Comer",
            "Dinheiro",
            "Comer"
        ],
        photo: KatheFoto,
        sticker: KatheSticker
    },
    thiago: {
        name: "Thiago Sol",
        nickname: "Pirilampo",
        business: "UI/UX Designer",
        interests: [
            "Dinheiro",
            "Sombra",
            "Praia",
            "Skins",
            {"label": "Véia", "link": "/team/member/veia"}
        ],
        photo: PiriPhoto,
        sticker: PiriSticker
    },
    helder: {
        name: "Helder Ferrari",
        nickname: "Bolívia",
        business: "Backend Developer/Information Security Analyst",
        interests: [
            "Guitarrista de quarto",
            "Gamer nas horas vagas"
        ],
        photo: BoliviaPhoto,
        sticker: BoliviaSticker
    },
    eric: {
        name: "Eric Gruby",
        nickname: "Elvis",
        business: "Frontend Developer",
        interests: [
            "Aprender e ensinar",
            "Festas",
            "Música",
            "Jogos indie",
            "Javascript",
        ],
        photo: ElvisPhoto,
        sticker: ElvisSticker
    },
    // igor: {
    //     name: "Igor Wessel",
    //     nickname: "Pirigor",
    //     business: "Frontend Developer",
    //     interests: [
    //         "Aprender e ensinar",
    //         "Festas",
    //         "Música",
    //         "Jogos indie",
    //         "Javascript",
    //     ],
    //     photo: ElvisPhoto,
    //     sticker: IgorSticker
    // }
}