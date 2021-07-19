import { barProps } from "./bar";

export const bubble = (bars: barProps[]) => {
    var stages = [];
    stages.push(JSON.parse(JSON.stringify(bars))); // push first stage to array

    var swapped = true;
    for (var n = 0; n < bars.length && swapped; n++) {
        // stop once a pass has completed with no swaps
        swapped = false;
        for (var i = 0; i < bars.length - 1 - n; i++) {
            // loops through the array, with each pass one less element needs to be checked as you know is in the correct position

            // sets current bars' state
            bars[i].state = "selected";
            bars[i + 1].state = "selected";

            if (bars[i].size > bars[i + 1].size) {
                stages.push(JSON.parse(JSON.stringify(bars))); // pushes step to stages

                [bars[i], bars[i + 1]] = [bars[i + 1], bars[i]]; // swaps elements
                swapped = true;
            }
            stages.push(JSON.parse(JSON.stringify(bars))); // pushes step to stages

            // sets bars back to unsorted
            bars[i].state = "unsorted";
            bars[i + 1].state = "unsorted";
        }
        bars[bars.length - n - 1].state = "sorted"; // sets the last bar to sorted
        stages.push(JSON.parse(JSON.stringify(bars))); // pushes step to stages

        // once no swaps have been made, all the remaining bars are looped through and set to sorted
        if (!swapped) {
            for (var i = 0; i < bars.length - 1 - n; i++) {
                bars[i].state = "sorted";
                stages.push(JSON.parse(JSON.stringify(bars))); // pushes step to stages
            }
        }
    }

    return stages;
};
