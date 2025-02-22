const cursos = [
    // TECNÓLOGOS
    {
        nome: 'Agronegócio',
        duracao: '3 anos',
        tipo: 'tecnologo',
        classe: 'a',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Agronegócio.'
    },
    {
        nome: 'Análise e Desenvolvimento De Sistemas',
        duracao: '2,5 anos',
        tipo: 'tecnologo',
        classe: 'a',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Análise e Desenvolvimento De Sistemas.'
    },
    {
        nome: 'Arquitetura De Dados',
        duracao: '2,5 anos',
        tipo: 'tecnologo',
        classe: 'a',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Arquitetura De Dados.'
    },
    {
        nome: 'Blockchain, Criptomoedas e Finanças',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'b',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Blockchain, Criptomoedas e Finanças.'
    },
    {
        nome: 'Cibersegurança',
        duracao: '2,5 anos',
        tipo: 'tecnologo',
        classe: 'c',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Cibersegurança.'
    },
    {
        nome: 'Ciência De Dados',
        duracao: '2,5 anos',
        tipo: 'tecnologo',
        classe: 'c',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Ciência De Dados.'
    },
    {
        nome: 'Coaching e Desenvolvimento Humano',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'c',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Coaching e Desenvolvimento Humano.'
    },
    {
        nome: 'Comércio Exterior',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'c',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Comércio Exterior.'
    },
    {
        nome: 'Computação Em Nuvem',
        duracao: '2,5 anos',
        tipo: 'tecnologo',
        classe: 'c',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Computação Em Nuvem.'
    },
    {
        nome: 'Desenvolvimento Back-end',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'd',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Desenvolvimento Back-end.'
    },
    {
        nome: 'Desenvolvimento Mobile',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'd',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Desenvolvimento Mobile.'
    },
    {
        nome: 'Desenvolvimento Web',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'd',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Desenvolvimento Web.'
    },
    {
        nome: 'Design De Moda',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'd',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Design De Moda.'
    },
    {
        nome: 'Design Gráfico',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'd',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Design Gráfico.'
    },
    {
        nome: 'Design De Interiores',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'd',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Design De Interiores.'
    },
    {
        nome: 'Devops',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'd',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Devops.'
    },
    {
        nome: 'Empreendedorismo',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'e',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Empreendedorismo.'
    },
    {
        nome: 'Empreendedorismo E Novos Negócios',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'e',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Empreendedorismo E Novos Negócios.'
    },
    {
        nome: 'Eventos',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'e',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Eventos.'
    },
    {
        nome: 'Fotografia',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'f',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Fotografia.'
    },
    {
        nome: 'Gerontologia',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'g',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Gerontologia.'
    },
    {
        nome: 'Gestão Ambiental',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'g',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Gestão Ambiental.'
    },
    {
        nome: 'Gestão Comercial',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'g',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Gestão Comercial.'
    },
    {
        nome: 'Gestão Da Inovação',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'g',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Gestão Da Inovação.'
    },
    {
        nome: 'Gestão Da Produção Industrial',
        duracao: '3 anos',
        tipo: 'tecnologo',
        classe: 'g',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Gestão Da Produção Industrial.'
    },
    {
        nome: 'Gestão Da Qualidade',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'g',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Gestão Da Qualidade.'
    },
    {
        nome: 'Gestão Da Tecnologia Da Informação',
        duracao: '2,5 anos',
        tipo: 'tecnologo',
        classe: 'g',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Gestão Da Tecnologia Da Informação.'
    },
    {
        nome: 'Gestão De Cooperativas',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'g',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Gestão De Cooperativas.'
    },
    {
        nome: 'Gestão De Produto',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'g',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Gestão De Produto.'
    },
    {
        nome: 'Gestão De Recursos Humanos',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'g',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Gestão De Recursos Humanos.'
    },
    {
        nome: 'Gestão De Saúde Pública',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'g',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Gestão De Saúde Pública.'
    },
    {
        nome: 'Gestão De Turismo',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'g',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Gestão De Turismo.'
    },
    {
        nome: 'Gestão Financeira',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'g',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Gestão Financeira.'
    },
    {
        nome: 'Gestão Hospitalar',
        duracao: '3 anos',
        tipo: 'tecnologo',
        classe: 'g',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Gestão Hospitalar.'
    },
    {
        nome: 'Gestão Portuária',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'g',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Gestão Portuária.'
    },
    {
        nome: 'Gastronomia',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'g',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Gastronomia.'
    },
    {
        nome: 'Gestão Pública',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'g',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Gestão Pública.'
    },
    {
        nome: 'Inteligência De Mercado E Análise De Dados',
        duracao: '2,5 anos',
        tipo: 'tecnologo',
        classe: 'i',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Inteligência De Mercado E Análise De Dados.'
    },
    {
        nome: 'Investigação E Perícia Criminal',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'i',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Investigação E Perícia Criminal.'
    },
    {
        nome: 'Jogos Digitais',
        duracao: '2,5 anos',
        tipo: 'tecnologo',
        classe: 'j',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Jogos Digitais.'
    },
    {
        nome: 'Logística',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'l',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Logística.'
    },
    {
        nome: 'Marketing',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'm',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Marketing.'
    },
    {
        nome: 'Marketing Digital',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'm',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Marketing Digital.'
    },
    {
        nome: 'Mediação',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'm',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Mediação.'
    },
    {
        nome: 'Negócios Imobiliários',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'n',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Negócios Imobiliários.'
    },
    {
        nome: 'Processos Gerenciais',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'p',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Processos Gerenciais.'
    },
    {
        nome: 'Produção Cervejeira',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'p',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Produção Cervejeira.'
    },
    {
        nome: 'Produção Audiovisual',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'p',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Produção Audiovisual.'
    },
    {
        nome: 'Redes De Computadores',
        duracao: '2,5 anos',
        tipo: 'tecnologo',
        classe: 'r',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Redes De Computadores.'
    },
    {
        nome: 'Secretariado',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 's',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Secretariado.'
    },
    {
        nome: 'Segurança Pública (Apenas Concursados)',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 's',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Segurança Pública (Apenas Concursados).'
    },
    {
        nome: 'Gestão de Segurança Privada',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'g',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Gestão de Segurança Privada.'
    },
    {
        nome: 'Serviços Jurídicos Cartorários E Notariais',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 's',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Serviços Jurídicos Cartorários E Notariais.'
    },
    {
        nome: 'Sistemas Para Internet',
        duracao: '2,5 anos',
        tipo: 'tecnologo',
        classe: 's',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Sistemas Para Internet.'
    },
    {
        nome: 'Segurança da Informação',
        duracao: '2,5 anos',
        tipo: 'tecnologo',
        classe: 's',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Segurança da Informação.'
    },
    {
        nome: 'Terapias Integrativas E Complementares',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 't',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Terapias Integrativas E Complementares.'
    },

    // BACHARELADOS
    {
        nome: 'Agronomia',
        duracao: '5 anos',
        tipo: 'bacharelado',
        classe: 'a',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Agronomia.'
    },
    {
        nome: 'Administração',
        duracao: '4 anos',
        tipo: 'bacharelado',
        classe: 'a',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Administração.'
    },
    {
        nome: 'Administração Pública',
        duracao: '4 anos',
        tipo: 'bacharelado',
        classe: 'a',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Administração Pública.'
    },
    {
        nome: 'Ciências Contábeis',
        duracao: '4 anos',
        tipo: 'bacharelado',
        classe: 'c',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Ciências Contábeis.'
    },
    {
        nome: 'Ciências Econômicas',
        duracao: '4 anos',
        tipo: 'bacharelado',
        classe: 'c',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Ciências Econômicas.'
    },
    {
        nome: 'Ciência da Computação',
        duracao: '3,5 anos',
        tipo: 'bacharelado',
        classe: 'c',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Ciência da Computação.'
    },
    {
        nome: 'Criminologia',
        duracao: '3 anos',
        tipo: 'bacharelado',
        classe: 'c',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Criminologia.'
    },
    {
        nome: 'Design',
        duracao: '3 anos',
        tipo: 'bacharelado',
        classe: 'd',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Design.'
    },
    {
        nome: 'Enfermagem',
        duracao: '5 anos',
        tipo: 'bacharelado',
        classe: 'e',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Enfermagem.'
    },
    {
        nome: 'Educação Física',
        duracao: '4 anos',
        tipo: 'bacharelado',
        classe: 'e',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Educação Física.'
    },
    {
        nome: 'Engenharia Da Computação',
        duracao: '5 anos',
        tipo: 'bacharelado',
        classe: 'e',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Engenharia Da Computação.'
    },
    {
        nome: 'Engenharia Civil',
        duracao: '5 anos',
        tipo: 'bacharelado',
        classe: 'e',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Engenharia Civil.'
    },
    {
        nome: 'Engenharia De Produção',
        duracao: '5 anos',
        tipo: 'bacharelado',
        classe: 'e',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Engenharia De Produção.'
    },
    {
        nome: 'Engenharia De Software',
        duracao: '3,5 anos',
        tipo: 'bacharelado',
        classe: 'e',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Engenharia De Software.'
    },
    {
        nome: 'Engenharia Elétrica',
        duracao: '5 anos',
        tipo: 'bacharelado',
        classe: 'e',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Engenharia Elétrica.'
    },
    {
        nome: 'Engenharia Mecânica',
        duracao: '5 anos',
        tipo: 'bacharelado',
        classe: 'e',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Engenharia Mecânica.'
    },
    {
        nome: 'Jornalismo',
        duracao: '4 anos',
        tipo: 'bacharelado',
        classe: 'j',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Jornalismo.'
    },
    {
        nome: 'Publicidade e Propaganda',
        duracao: '4 anos',
        tipo: 'bacharelado',
        classe: 'p',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Publicidade e Propaganda.'
    },
    {
        nome: 'Química',
        duracao: '3 anos',
        tipo: 'bacharelado',
        classe: 'q',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Química.'
    },
    {
        nome: 'Serviço Social',
        duracao: '4 anos',
        tipo: 'bacharelado',
        classe: 's',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Serviço Social.'
    },
    {
        nome: 'Sistemas de Informação',
        duracao: '3,5 anos',
        tipo: 'bacharelado',
        classe: 's',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Sistemas de Informação.'
    },
    {
        nome: 'Teologia',
        duracao: '4 anos',
        tipo: 'bacharelado',
        classe: 't',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Teologia.'
    },
    {
        nome: 'Engenharia Sanitária',
        duracao: '5 anos',
        tipo: 'bacharelado',
        classe: 'e',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Engenharia Sanitária.'
    },
    {
        nome: 'Engenharia Ambiental',
        duracao: '5 anos',
        tipo: 'bacharelado',
        classe: 'e',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Engenharia Ambiental.'
    },
    {
        nome: 'Engenharia De Controle E Automação',
        duracao: '5 anos',
        tipo: 'bacharelado',
        classe: 'e',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Engenharia De Controle E Automação.'
    },
    {
        nome: 'Psicopedagogia',
        duracao: '3 anos',
        tipo: 'bacharelado',
        classe: 'p',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Psicopedagogia.'
    },
    {
        nome: 'Relações Internacionais',
        duracao: '4 anos',
        tipo: 'bacharelado',
        classe: 'r',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Relações Internacionais.'
    },

    // LICENCIATURAS
    {
        nome: 'Artes Visuais',
        duracao: '4 anos',
        tipo: 'licenciatura',
        classe: 'a',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Artes Visuais.'
    },
    {
        nome: 'Educação Física',
        duracao: '4 anos',
        tipo: 'licenciatura',
        classe: 'e',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Educação Física.'
    },
    {
        nome: 'Educação Especial',
        duracao: '4 anos',
        tipo: 'licenciatura',
        classe: 'e',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Educação Especial.'
    },
    {
        nome: 'Filosofia',
        duracao: '4 anos',
        tipo: 'licenciatura',
        classe: 'f',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Filosofia.'
    },
    {
        nome: 'Geografia',
        duracao: '4 anos',
        tipo: 'licenciatura',
        classe: 'g',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Geografia.'
    },
    {
        nome: 'História',
        duracao: '4 anos',
        tipo: 'licenciatura',
        classe: 'h',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de História.'
    },
    {
        nome: 'Letras - Português',
        duracao: '4 anos',
        tipo: 'licenciatura',
        classe: 'l',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Letras - Português.'
    },
    {
        nome: 'Letras - Português e Espanhol',
        duracao: '4 anos',
        tipo: 'licenciatura',
        classe: 'l',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Letras - Português e Espanhol.'
    },
    {
        nome: 'Letras - Português e Inglês',
        duracao: '4 anos',
        tipo: 'licenciatura',
        classe: 'l',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Letras - Português e Inglês.'
    },
    {
        nome: 'Matemática',
        duracao: '4 anos',
        tipo: 'licenciatura',
        classe: 'm',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Matemática.'
    },
    {
        nome: 'Pedagogia',
        duracao: '4 anos',
        tipo: 'licenciatura',
        classe: 'p',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Pedagogia.'
    },
    {
        nome: 'Sociologia',
        duracao: '4 anos',
        tipo: 'licenciatura',
        classe: 's',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Sociologia.'
    },
    {
        nome: '2ª Licenciatura',
        duracao: '1,5 anos',
        tipo: 'licenciatura',
        classe: '2',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de 2ª Licenciatura.'
    },
    {
        nome: 'Formação Pedagógica',
        duracao: '1 ano',
        tipo: 'licenciatura',
        classe: 'f',
        link: 'https://api.whatsapp.com/send?phone=+556286273131&text=Olá! Quero informações sobre a graduação de Formação Pedagógica.'
    }
];