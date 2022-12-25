import { useField } from 'vee-validate'
import * as zod from 'zod'

import { JobSchema } from '@/schemas/npc/human'

const origins = [
  'Acadêmico',
  'Agente de Saúde',
  'Amnésico',
  'Artista',
  'Atleta',
  'Chef',
  'Criminoso',
  'Cultista Arrependido',
  'Desgarrado',
  'Engenheiro',
  'Executivo',
  'Investigador',
  'Lutador',
  'Magnata',
  'Mercenário',
  'Militar',
  'Operário',
  'Policial',
  'Religioso',
  'Servidor Público',
  'Teórico da Conspiração',
  'T.I.',
  'Trabalhador Rural',
  'Trambiqueiro',
  'Universitário',
  'Vítima'
] as const

const _JobSchema = JobSchema.merge(zod.object({ specialization: zod.string().array() }))

const jobs: Array<TypeJobSchema> = [
  {
    main: 'Combatente',
    specialization: [
      'Aniquilador',
      'Comandante de Campo',
      'Guerreiro',
      'Tropa de Choque',
      'Operações Especiais'
    ]
  },
  {
    main: 'Especialista',
    specialization: ['Atirador de Elite', 'Infiltrador', 'Médico de Campo', 'Negociador', 'Técnico']
  },
  {
    main: 'Ocultista',
    specialization: ['Conduíte', 'Flagelador', 'Graduado', 'Intuitivo', 'Lâmina Paranormal']
  }
]

export const list = { origins, jobs }

export function helpUseField<T>(field: string) {
  const { value, errorMessage, setValue } = useField<T>(field)
  return { in: value, setValue, errorMessage }
}

//------------------------------------------------------------------------------------------------
//  Definitions
//------------------------------------------------------------------------------------------------
export type TypeJobSchema = zod.infer<typeof _JobSchema>
