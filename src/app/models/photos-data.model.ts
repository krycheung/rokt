export interface PhotoData {
    page: number;
    per_page: number;
    photos: Photo[];
    total_results: number;
    next_page: string;
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

// {
//     "page": 1,
//     "per_page": 10,
//     "photos": [
//         {
//             "id": 16392190,
//             "width": 2397,
//             "height": 3566,
//             "url": "https://www.pexels.com/photo/woman-with-book-sitting-on-couch-at-home-16392190/",
//             "photographer": "Ánh Đặng",
//             "photographer_url": "https://www.pexels.com/@anhdanghihi",
//             "photographer_id": 521366693,
//             "avg_color": "#9D9894",
//             "src": {
//                 "original": "https://images.pexels.com/photos/16392190/pexels-photo-16392190.jpeg",
//                 "large2x": "https://images.pexels.com/photos/16392190/pexels-photo-16392190.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//                 "large": "https://images.pexels.com/photos/16392190/pexels-photo-16392190.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
//                 "medium": "https://images.pexels.com/photos/16392190/pexels-photo-16392190.jpeg?auto=compress&cs=tinysrgb&h=350",
//                 "small": "https://images.pexels.com/photos/16392190/pexels-photo-16392190.jpeg?auto=compress&cs=tinysrgb&h=130",
//                 "portrait": "https://images.pexels.com/photos/16392190/pexels-photo-16392190.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
//                 "landscape": "https://images.pexels.com/photos/16392190/pexels-photo-16392190.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
//                 "tiny": "https://images.pexels.com/photos/16392190/pexels-photo-16392190.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
//             },
//             "liked": false,
//             "alt": ""
//         }
//     ],
//     "total_results": 8000,
//     "next_page": "https://api.pexels.com/v1/curated/?page=2&per_page=10"
// }