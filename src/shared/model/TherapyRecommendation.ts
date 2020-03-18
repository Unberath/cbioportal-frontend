export enum EvidenceLevel {
    NA = "NA",
    // I = "I",
    // II = "II",
    // III = "III",
    // IV = "IV",
    I = '1',
    II = '2',
    IIA = '2A',
    IIB = '2B',
    III = '3',
    IIIA = '3A',
    IIIB = '3B',
    IV = '4',
    R1 = 'R1',
    R2 = 'R2'
}

export enum Modified {
    CREATED = "Created",
    MODIFIED = "Modified",
    DELETED = "Deleted"
}


export interface IRecommender {
    credentials: string;
    full_name?: string;
    email?: string;
}

interface IModification {
    recommender: IRecommender;
    modified: Modified;
    timestamp: string;
}

export interface IRecommendation {
    therapyRecommendations: ITherapyRecommendation[];
    geneticCounselingRecommendation: Boolean;
    rebiopsyRecommendation: Boolean;
    generalRecommendation: string;
}

export interface ITherapyRecommendation {
    id: string;
    comment: string[];
    reasoning: IReasoning;
    evidenceLevel: EvidenceLevel;
    modifications: IModification[];
    treatments: ITreatment[];
    references: IReference[];
}

export interface IReference {
    name: string;
    pmid?: number;
    comment?: string;
}

export interface ITreatment {
    name: string;
    ncit_code?: string;
    synonyms?: string;
}

export interface IClinicalData {
    attribute: string;
    value: string;
}

export interface IReasoning {
    geneticAlterations?: IGeneticAlteration[];
    geneticAlterationsMissing?: IGeneticAlteration[];
    clinicalData?: IClinicalData[];
    tmb?: number;
    other?: string;
}

export interface IGeneticAlteration {
    entrezGeneId?: number;
    hugoSymbol: string;
    alteration?: string;
};
