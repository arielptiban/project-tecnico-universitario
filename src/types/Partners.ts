type PartnerId =
    | "san-francisco"
    | "universidad-indoamerica"
    | "aluminios-hercules"
    | "plastivill"
    | "optica-interandina"
    | "venus"
    | "politecnica"
    | "extreme"
    | "arthur-fitness-club"
    | "assa"
    | "sierra-fertil"
    | "jhonatex"
    | "bogati"
    | "aurum"
    | "mi-negocio"
    | "boho"
    | "el-sagrario"
    | "kumho-tire"
    | "mutualista-ambato"
    | "moyolsa"
    | "cooperativa-crea"
    | "aguafina"
    | "infojobs"

type PartnerName =
    | "San Francisco"
    | "Universidad Indoamérica"
    | "Aluminios Hércules"
    | "Plastivill"
    | "Óptica Interandina"
    | "Venus"
    | "Preuniversitario Politécnica"
    | "Extreme"
    | "Arthur Fitness Club"
    | "Assa"
    | "Sierra Fertil"
    | "Jhonatex"
    | "Bogati"
    | "Aurum"
    | "Mi Negocio"
    | "Boho"
    | "El Sagrario"
    | "Kumho Tire"
    | "Mutualista Ambato"
    | "Moyolsa"
    | "Cooperativa Crea"
    | "Aguafina"
    | "InfoJobs"


export interface Partners {
    id: PartnerId
    name: PartnerName
    url: string
    image: {
        name?: string
        width: number
        height: number
    }
}
