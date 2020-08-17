/** ninecontrol */
import logo_ninecontrol from '../images/projetos/ninecontrol/logo_ninecontrol.svg'
import manual_ninecontrol from '../images/projetos/ninecontrol/manual-de-marca-ninecontrol.pdf'
import ninecontrol_1 from '../images/projetos/ninecontrol/9control-1.png'
import ninecontrol_2 from '../images/projetos/ninecontrol/9control-2.png'
import ninecontrol_3 from '../images/projetos/ninecontrol/9control-3.png'
import ninecontrol_4 from '../images/projetos/ninecontrol/9control-4.png'
import ninecontrol_5 from '../images/projetos/ninecontrol/9control-5.png'
import ninecontrol_6 from '../images/projetos/ninecontrol/9control-6.png'

/** lusofix */
import logo_lusofix from '../images/projetos/lusofix/logo_lusofix.svg'
import manual_lusofix from '../images/projetos/lusofix/manual-de-marca-lusofix.pdf'
import lusofix_1 from '../images/projetos/lusofix/lusofix1.jpg'
import lusofix_2 from '../images/projetos/lusofix/lusofix2.jpg'
import lusofix_3 from '../images/projetos/lusofix/lusofix3.jpg'

/** nineskins */
import logo_nineskins from '../images/projetos/nineskins/logo_nineskins.svg'
import manual_nineskins from '../images/projetos/nineskins/manual-de-marca-nineskins.pdf'
import nineskins_1 from '../images/projetos/nineskins/nineskins_1.jpg'
import nineskins_2 from '../images/projetos/nineskins/nineskins_2.jpg'
import nineskins_3 from '../images/projetos/nineskins/nineskins_3.jpg'

/** nineproject */
import logo_nineproject from '../images/projetos/nineproject/logo_nineproject.svg'
import manual_nineproject from '../images/projetos/nineproject/9project.pdf'

export default {
    ninecontrol: {
        name: 'NineControl',
        description: 'Sistema de gerenciamento para pequenas e médias empresas.',
        features: [
            'Cadastro de funcionários, clientes, fornecedores, produtos',
            'Controle de estoque',
            'Cadastro de ordens de serviço',
            'Controle financeiro',
            'Exportação de relatórios'
        ],
        logo: logo_ninecontrol,
        prints: [
            ninecontrol_1,
            ninecontrol_2,
            ninecontrol_3,
            ninecontrol_4,
            ninecontrol_5,
            ninecontrol_6,
        ],
        document: manual_ninecontrol,
        document_author: { label: "Thiago Sol", link: "/team/member/thiago" }
    },
    lusofix: {
        name: 'Lusofix',
        description: 'Plataforma marketplace para prestadores de serviços focado no mercado português.',
        logo: logo_lusofix,
        prints: [lusofix_1, lusofix_2, lusofix_3],
        document: manual_lusofix,
        document_author: { label: "Thiago Sol", link: "/team/member/thiago" }
    },
    nineskins: {
        name: 'NineSkins',
        description: 'Plataforma de negociação de skins para jogos diversos.',
        logo: logo_nineskins,
        document: manual_nineskins,
        document_author: { label: "Thiago Sol", link: "/team/member/thiago" },
        prints: [
            nineskins_1,
            nineskins_2,
            nineskins_3
        ]
    },
    nineproject: {
        name: '9Project',
        description: 'App para gerenciamento de equipes, projetos e tarefas.',
        features: [
            'Cadastro de áreas de trabalho, equipes, clientes, projetos e tarefas',
            'Opção de cronometrar tarefas',
            'Relatórios',
            'Assinatura mensal'
        ],
        logo: logo_nineproject,
        document: manual_nineproject,
        document_author: { label: "Eric Gruby", link: "/team/member/eric" }
    },
}