import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe } from '@nestjs/common';
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
  getProducts(
    @Query('sortByPrice') sortByPrice: 'ASC' | 'DESC',
    @Query('sortByName') sortByName: 'ASC' | 'DESC',
    @Query('page', ParseIntPipe) page: number,
    @Query('limit', ParseIntPipe) limit: number,
  ): Promise<{ data: Product[], currentPage: number, totalPages: number }> {
    return this.productService.getProducts(sortByPrice, sortByName, page, limit);
  }
  @Get('all')
  findAll() {
    return this.productService.findAll();
  }

  @Get('limit/:limit/skip/:skip')
  getByLimit(
    @Param('limit', ParseIntPipe) limit: number,
    @Param('skip', ParseIntPipe) skip: number,
  ): Promise<Product[]> {
    return this.productService.getByLimit(limit,skip);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
