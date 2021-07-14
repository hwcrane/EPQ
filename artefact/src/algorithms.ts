interface bar {
    size: number;
}

export const bubble = (bars: bar[]) => {
    var stages = [];
    stages.push(JSON.parse(JSON.stringify(bars))); // push first stage to array

    var swapped = true;
    for (var n = 0; n < bars.length && swapped; n++) {
        // stop once a pass has completed with no swaps
        swapped = false;
        for (var i = 0; i < bars.length - 1 - n; i++) {
            // loops through the array, with each pass one less element needs to be checked as you know is in the correct position
            if (bars[i].size > bars[i + 1].size) {
                [bars[i], bars[i + 1]] = [bars[i + 1], bars[i]]; // swaps elements
                swapped = true;
            }
            stages.push(JSON.parse(JSON.stringify(bars))); // pushes step to stages
        }
    }

    return stages;
};
