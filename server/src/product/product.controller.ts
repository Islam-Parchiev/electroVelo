import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe, ParseArrayPipe } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { Image } from './entities/image.entity';
import { Size } from './entities/size.entity';
import { Color } from './entities/color.entity';
import { Spec } from './entities/spec.entity';
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  // specs:Spec[],
    // sizes:Size[],
    // colors:Color[]
  
  @Post()
  async create(@Body() productData: Partial<Product>,
               @Body('imageUrls') imageUrls: Image[],
               @Body('sizes') sizes:Size[],
               @Body('colors') colors:Color[],
               @Body('specs') specs:Spec[]) {
    return this.productService.create(productData, imageUrls,specs,sizes,colors);
  }
  @Get()
  async getProducts(
    @Query('sortByPrice') sortByPrice: 'ASC' | 'DESC',
    @Query('sortByName') sortByName: 'ASC' | 'DESC',
    @Query('page', ParseIntPipe) page: number=1,
    @Query('limit', ParseIntPipe) limit: number=10,
    @Query('available') available: string,
    @Query('categories',new ParseArrayPipe({items:String})) categories:string[],
    @Query('materials',new ParseArrayPipe({items:String})) materials:string[]
  ): Promise<{ data: Product[], currentPage: number, totalPages: number }> {
    return this.productService.getProducts(sortByPrice, sortByName, page, limit,available,categories,materials);
  }
  @Get('byCategoriesAndMaterials/:categories/:materials')
  getProductsByCategoriesAndMaterials(
    @Param('categories', new ParseArrayPipe({items:String})) categories: string[],
    @Param('materials', new ParseArrayPipe({items:String})) materials: string[],
  ) {
    return this.productService.getProductsByCategoriesAndMaterials(categories, materials);
  }

  @Get('byCategories/:categories')
  getProductsByCategories(@Param('categories', new ParseArrayPipe({ items: String })) categories: string[]): Promise<Product[]> {
    return this.productService.getProductsByCategories(categories);
  }

  @Get('all')
  findAll() {
    return this.productService.findAll();
  }

  @Get('l/limit/:limit/skip/:skip')
  getByLimit(
    @Param('limit') limit: number=5,
    @Param('skip') skip: number=0,
  ): Promise<Product[]> {
    return this.productService.getByLimit(+limit,+skip);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Patch('id/:id')
  // @UseGuards(JwtAuthGuard,AuthorGuard)
  update(
    @Param('id') id:string,
    @Body('price') price:string,
    @Body('prevPrice') prevPrice:string |null
  ){
    return this.productService.update(+id,+prevPrice,+price)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
