import { ProductService } from './product.service';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { Image } from './entities/image.entity';
import { Size } from './entities/size.entity';
import { Color } from './entities/color.entity';
import { Spec } from './entities/spec.entity';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(productData: Partial<Product>, imageUrls: Image[], sizes: Size[], colors: Color[], specs: Spec[]): Promise<Product>;
    getProducts(sortByPrice: 'ASC' | 'DESC', sortByName: 'ASC' | 'DESC', page: number, limit: number): Promise<{
        data: Product[];
        currentPage: number;
        totalPages: number;
    }>;
    findAll(): Promise<Product[]>;
    getByLimit(limit: number): Promise<Product[]>;
    findOne(id: string): string;
    update(id: string, updateProductDto: UpdateProductDto): string;
    remove(id: string): string;
}
