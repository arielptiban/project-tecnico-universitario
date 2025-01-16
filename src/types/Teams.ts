type TeamId =
    | "independiente-del-valle"
    | "ldu"
    | "barcelona"
    | "universidad-catolica"
    | "sd-aucas"
    | "mushuc-runa"
    | "el-nacional"
    | "orense"
    | "emelec"
    | "macara"
    | "delfin"
    | "cuenca"
    | "libertad"
    | "manta"
    | "vinotinto"

type TeamName =
    | "Club Independiente del Valle"
    | "Liga Deportiva Universitaria"
    | "Barcelona Sporting Club"
    | "Club Universidad Católica"
    | "Sociedad Deportiva Aucas"
    | "Mushuc Runa Sporting Club"
    | "Club Deportivo El Nacional"
    | "Orense Sporting Club"
    | "Club Sport Emelec"
    | "Club Deportivo Macará"
    | "Delfín Sporting Club"
    | "Club Deportivo Cuenca"
    | "Libertad Futbol Club"
    | "Manta Futbol Club"
    | "Vinotinto Futbol Club"


type TeamShortName =
    | "Independiente"
    | "Liga de Quito"
    | "Barcelona SC"
    | "Universidad Católica"
    | "SD Aucas"
    | "Mushuc Runa SC"
    | "CD El Nacional"
    | "Orense SC"
    | "CS Emelec"
    | "CD Macará"
    | "Delfín SC"
    | "CD Cuenca"
    | "Libertad FC"
    | "Manta FC"
    | "Vinotinto FC"


export interface Teams {
    id: TeamId
    name: TeamName
    shortName: TeamShortName
    estadio: string
    image: {
        name?: string
        width: number
        height: number
    }
}
