export declare function calculateTotalPages(totalItems: number, limit: number): number;
export declare function calculatePagination(page: number, limit: number): {
    skip: number;
    take: number;
};
