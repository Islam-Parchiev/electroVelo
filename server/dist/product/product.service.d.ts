import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { Image } from './entities/image.entity';
import { Spec } from './entities/spec.entity';
import { Size } from './entities/size.entity';
import { Color } from './entities/color.entity';
export declare class ProductService {
    private readonly productRepository;
    private readonly imageRepository;
    private readonly specRepository;
    private readonly sizeRepository;
    private readonly colorRepository;
    constructor(productRepository: Repository<Product>, imageRepository: Repository<Image>, specRepository: Repository<Spec>, sizeRepository: Repository<Size>, colorRepository: Repository<Color>);
    create(productData: Partial<Product>, imageUrls: Image[], specs: Spec[], sizes: Size[], colors: Color[]): Promise<Product>;
    findAll(): Promise<Product[]>;
    getByLimit(limit: number, skip: number): Promise<Product[]>;
    getProducts(sortByPrice: 'ASC' | 'DESC', sortByName: 'ASC' | 'DESC', page: number, limit: number, available: string): Promise<{
        data: Product[];
        currentPage: number;
        totalPages: number;
    }>;
    findOne(id: number): string;
    update(id: number, prevPrice: number | null, price: number): Promise<Product>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
