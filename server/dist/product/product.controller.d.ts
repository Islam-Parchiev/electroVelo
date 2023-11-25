import { ProductService } from './product.service';
import { Product } from './entities/product.entity';
import { Image } from './entities/image.entity';
import { Size } from './entities/size.entity';
import { Color } from './entities/color.entity';
import { Spec } from './entities/spec.entity';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(productData: Partial<Product>, imageUrls: Image[], sizes: Size[], colors: Color[], specs: Spec[]): Promise<Product>;
    getProducts(sortByPrice: 'ASC' | 'DESC', sortByName: 'ASC' | 'DESC', page: number, limit: number, available: string, categories: string[], materials: string[]): Promise<{
        data: Product[];
        currentPage: number;
        totalPages: number;
    }>;
    getProductsByCategoriesAndMaterials(categories: string[], materials: string[]): Promise<Product[]>;
    getProductsByCategories(categories: string[]): Promise<Product[]>;
    findAll(): Promise<Product[]>;
    getByLimit(limit?: number, skip?: number): Promise<Product[]>;
    findOne(id: string): string;
    update(id: string, price: string, prevPrice: string | null): Promise<Product>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
