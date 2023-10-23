import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(createProductDto: CreateProductDto[]): Promise<any[]>;
    findAllWithLimit(limit?: number): Promise<import("./entities/product.entity").Product[]>;
    searchPosts(keyword: string): Promise<import("./entities/product.entity").Product[]>;
    findOne(id: string): Promise<{
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
    update(id: string, updateProductDto: UpdateProductDto): string;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
