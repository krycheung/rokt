export interface PhotoData {
    page: number;
    per_page: number;
    photos: Photo[];
    total_results: number;
    next_page: string;
    prev_page: string;
}

interface Photo {
    id: number;
    width: number;
    height: number;
    url: string;
    photographer: string;
    photographer_url: string;
    photographer_id: number;
    avg_color: string;
    src: Source;
    liked: boolean;
    alt: string
}

interface Source {
    original: string
    large2xlarge: string
    mediumsmall: string
    portraitlandscape: string
    tiny: string
}