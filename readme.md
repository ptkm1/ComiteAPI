# Comite API utilizando Prisma

Abstração

**usuarios** requisitam criação (agendamento) de carteira RG, e **administradores** __registram__ carteiras RG

**usuarios** só podem registrar o status de agendado ou esperando resposta da coordenaçao, **administradores** podem dizer se ja foi registrado, se falta alguma etapa ou nao...


{
 "NomeCompleto":"Patrick Rocha Moreira",
 "NomeDoPai":"André Luis Santana",
 "NomeDaMae":"Cristina Cunha Rocha",
 "CPF":"85826134585",
 "Orgao":"IIPM",
 "Motivo":"Situação de vúlnerabilidade",
 "DataDeSolicitacao":"22/05/2021",
 "CidadaoSabeCPF":"sim",
 "CidadaoEmPosseCPF":"sim",
 "Contato1":"71985429908",
 "Contato2":"71985429908",
 "Contato3":"71985429908",
 "Whatsapp":"71985429908",
 "EstadoDeNaturalidade":"Bahia",
 "CidadeDeNaturalidade":"Salvador",
 "EnderecoResidencial":"Salvador",
 "CidadeResidencial":"Salvador",
 "Cep":"41320615",
 "Status":"Aguardando Resposta",
 "LocalDeAgendamento":"SAC Barra",
 "DataDeAgendamento":"25/05/2021",
 "HoraDoAgendamento":"10:30",
 "Resolvido":"Não",
 "Observacao":"Nenhuma",
 "coordenadorId":"856e1803-d3e4-4c03-8bf9-e4e6c778a55f"
}

{
  "NomeCompleto":"",
  "Status":"",
  "NomeDoPai":"",
  "NomeDaMae":"",
  "CPF":"",
  "RG":"",
  "Orgao":"",
  "EmailDoSolicitante":"",
  "Observacao":"",
  "Contato1":"",
  "EstadoDeNaturalidade":"",
  "CidadeDeNaturalidade":"",
  "DataDeSolicitacao":"",
  "coordenadorId":"",
  "AdminId":""
}

{
  "NomeCompleto": "Patrick Moreira",
  "Status": "Reeimpressão",
  "NomeDoPai": "André Luís Santana",
  "NomeDaMae": "Cristina Cunha Rocha",
  "CPF": "85826134585",
  "RG": "36564648489",
  "Orgao": "IIPM",
  "EmailDoSolicitante": "patrick.moreira@dpt.ba.gov.br",
  "Observacao": "",
  "Contato1": "71985429908",
  "EstadoDeNaturalidade": "Bahia",
  "CidadeDeNaturalidade": "Salvador",
  "DataDeSolicitacao": "22/06/2021",
  "coordenadorId": "",
  "AdminId": "7f25a510-fdd3-4a86-9a62-1022f63a5ba4"
}