"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatePagination = exports.calculateTotalPages = void 0;
function calculateTotalPages(totalItems, limit) {
    return Math.ceil(totalItems / limit);
}
exports.calculateTotalPages = calculateTotalPages;
function calculatePagination(page, limit) {
    const skip = (page - 1) * limit;
    const take = limit;
    return { skip, take };
}
exports.calculatePagination = calculatePagination;
//# sourceMappingURL=helpers.js.map