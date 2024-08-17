export type ProductType = {
    id: number;
    attributes: {
        productName: string;
        slug: number;
        description: string;
        active: boolean;
        isFeatured: boolean;
        genero: string;
        origin: string;
        price: number;
        images:{
            data: {
                id: number;
                attributes: {
                    url: string;
                };
            }[];
        };
        category: {
            data: {
                attributes: {
                    slug: string;
                    categoryName: string;
                };
            };
        };
    };

};