export function calculateTotalPages(totalItems: number, limit: number): number {
    return Math.ceil(totalItems / limit);
  }
export function calculatePagination(page: number, limit: number): { skip: number, take: number } {
    const skip = (page - 1) * limit;
    const take = limit;
    return { skip, take };
  }