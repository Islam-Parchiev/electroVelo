"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const argon2 = require("argon2");
const jwt_1 = require("@nestjs/jwt");
let UserService = class UserService {
    constructor(userRepository, jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }
    async create(createUserDto) {
        const existUser = await this.userRepository.findOne({
            where: {
                email: createUserDto.email,
            }
        });
        if (existUser) {
            throw new common_1.BadRequestException('This user already exist!');
        }
        const user = await this.userRepository.save({
            name: createUserDto.name,
            email: createUserDto.email,
            password: await argon2.hash(createUserDto.password),
        });
        const token = this.jwtService.sign({ email: createUserDto.email });
        return { user, token };
    }
    async update(id, updateUserDto) {
        const transaction = await this.userRepository.findOne({
            where: { id },
        });
        if (!transaction)
            throw new common_1.NotFoundException('Transaction not found');
        return await this.userRepository.update(id, updateUserDto);
    }
    findAll() {
        return this.userRepository.find();
    }
    findOne(email) {
        return this.userRepository.findOneBy({ email });
    }
    async remove(id) {
        await this.userRepository.delete(id);
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map