function search(nums: number[], target: number): number {

    let lo = 0
    let hi = nums.length;

    do {
        const m = Math.floor(lo + (hi - lo) / 2);
        const v = nums[m];

        if (v === target) {
            return m;
        }

        else if (v > target) {
            hi = m;
        }

        else if (nums[m] < target) {
            lo = m + 1;
        }

        else {
            return -1;
        }
    }

    while (lo < hi) {
        return -1;
    }
}
