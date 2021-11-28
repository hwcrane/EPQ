import { bar, stage } from "./types";
// type for bar state

export const bubble = (bars: bar[]): stage[] => {
    var stages: stage[] = [];
    var comparisons = 0;
    var swaps = 0;
    stages.push({
        bars: JSON.parse(JSON.stringify(bars)),
        swaps: swaps,
        comparisons: comparisons,
    }); // push first stage to array

    var swapped = true;
    for (var n = 0; n < bars.length && swapped; n++) {
        // stop once a pass has completed with no swaps
        swapped = false;
        for (var i = 0; i < bars.length - 1 - n; i++) {
            // loops through the array, with each pass one less element needs to be checked as you know is in the correct position

            // sets current bars' state
            bars[i].state = "selected";
            bars[i + 1].state = "selected";

            comparisons++;

            if (bars[i].size > bars[i + 1].size) {
                stages.push({
                    bars: JSON.parse(JSON.stringify(bars)),
                    swaps: swaps,
                    comparisons: comparisons,
                }); // pushes step to stages

                [bars[i], bars[i + 1]] = [bars[i + 1], bars[i]]; // swaps elements
                swapped = true;
                swaps++;
            }
            stages.push({
                bars: JSON.parse(JSON.stringify(bars)),
                swaps: swaps,
                comparisons: comparisons,
            }); // pushes step to stages

            // sets bars back to unsorted
            bars[i].state = "unsorted";
            bars[i + 1].state = "unsorted";
        }
        bars[bars.length - n - 1].state = "sorted"; // sets the last bar to sorted
        stages.push({
            bars: JSON.parse(JSON.stringify(bars)),
            swaps: swaps,
            comparisons: comparisons,
        }); // pushes step to stages

        // once no swaps have been made, all the remaining bars are looped through and set to sorted
        if (!swapped) {
            for (var i = 0; i < bars.length - 1 - n; i++) {
                bars[i].state = "sorted";
                stages.push({
                    bars: JSON.parse(JSON.stringify(bars)),
                    swaps: swaps,
                    comparisons: comparisons,
                }); // pushes step to stages
            }
        }
    }

    return stages;
};

export const quick = (bars: bar[]): stage[] => {
    var stages: stage[] = [];
    var comparisons = 0;
    var swaps = 0;
    stages.push({
        bars: JSON.parse(JSON.stringify(bars)),
        swaps: swaps,
        comparisons: comparisons,
    }); // push first stage to array

    var [nextstages, swaps, comparisons] = quickSort(bars, swaps, comparisons, 0, bars.length)
    stages = stages.concat(nextstages);
    

    stages.push({
        bars: JSON.parse(JSON.stringify(bars)),
        swaps: swaps,
        comparisons: comparisons,
    }); // push first stage to array

    return stages;
}


const quickSort = (bars: bar[], swaps: number, comparisons: number, first:number, last: number): [stage[], number, number] => {
    var stages: stage[] = [];
    if (last - first <= 1) {
        comparisons++;
        try{
            bars[first].state = "sorted";
        } catch{bars[0].state = "sorted"}
        stages.push({
            bars: JSON.parse(JSON.stringify(bars)),
            swaps: swaps,
            comparisons: comparisons,
        });
        return [stages, swaps, comparisons];
    }

    var pivot = first;
    bars[pivot].state = "pivot";
    
    var index = pivot + 1;

    for (let i = index; i < last; i++) {
        bars[i].state = "selected";
        comparisons++;
        stages.push({
            bars: JSON.parse(JSON.stringify(bars)),
            swaps: swaps,
            comparisons: comparisons,
        });
        if (bars[i].size < bars[pivot].size) {
            swaps ++;
            bars[index].state = "selected";
            [bars[i], bars[index]] = [bars[index], bars[i]]; // swaps elements
            stages.push({
                bars: JSON.parse(JSON.stringify(bars)),
                swaps: swaps,
                comparisons: comparisons,
            });
            bars[i].state = "unsorted"
            bars[index].state = "unsorted"
            index ++;
        }
        bars[i].state = "unsorted";
        
    }
    [bars[pivot], bars[index - 1]] = [bars[index - 1], bars[pivot]];
    bars[pivot].state = "unsorted";
    bars[index - 1].state = "pivot";
    stages.push({
        bars: JSON.parse(JSON.stringify(bars)),
        swaps: swaps,
        comparisons: comparisons,
    });
    bars[index - 1].state = "sorted";

    var [nextstages, swaps, comparisons] = quickSort(bars, swaps, comparisons, first, index - 1)
    stages = stages.concat(nextstages);


    var [nextstages, swaps, comparisons] = quickSort(bars, swaps, comparisons, index, last)
    stages = stages.concat(nextstages);
    
    return [stages, swaps, comparisons];

}