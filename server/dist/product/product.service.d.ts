import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
export declare class ProductService {
    private readonly productRepository;
    constructor(productRepository: Repository<Product>);
    create(createProductDto: CreateProductDto[]): Promise<any[]>;
    findAllWithLimit(limit: number): Promise<Product[]>;
    findOne(id: number): Promise<{
        id: number;
        title: string;
        description: string;
        articul: string;
        price: string;
        available: boolean;
        prewPrice: string;
        sizes: any;
        colors: any;
        images: any;
        specifications: any;
        brand: string;
    }>;
    update(id: number, updateProductDto: UpdateProductDto): string;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
