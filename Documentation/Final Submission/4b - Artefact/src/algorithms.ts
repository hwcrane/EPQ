import { bar, stage } from "./types";

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
    // Push first stage to array
    stages.push({
        bars: JSON.parse(JSON.stringify(bars)),
        swaps: swaps,
        comparisons: comparisons,
    });

    // Run quicksort algorithm
    var [nextstages, swaps, comparisons] = quickSort(bars, swaps, comparisons, 0, bars.length)
    stages = stages.concat(nextstages);

    // Push final stages to array
    stages.push({
        bars: JSON.parse(JSON.stringify(bars)),
        swaps: swaps,
        comparisons: comparisons,
    });

    return stages;
}

const quickSort = (bars: bar[], swaps: number, comparisons: number, first: number, last: number): [stage[], number, number] => {
    var stages: stage[] = [];
    if (last - first <= 1) {
        comparisons++;
        try {
            bars[first].state = "sorted";
        } catch { bars[0].state = "sorted" }
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
            swaps++;
            bars[index].state = "selected";
            [bars[i], bars[index]] = [bars[index], bars[i]]; // swaps elements
            stages.push({
                bars: JSON.parse(JSON.stringify(bars)),
                swaps: swaps,
                comparisons: comparisons,
            });
            bars[i].state = "unsorted"
            bars[index].state = "unsorted"
            index++;
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

export const insertion = (bars: bar[]): stage[] => {
    var stages: stage[] = [];
    var comparisons = 0;
    var swaps = 0;
    stages.push({
        bars: JSON.parse(JSON.stringify(bars)),
        swaps: swaps,
        comparisons: comparisons,
    }); // push first stage to array

    for (var i = 1; i < bars.length; i++) {
        for (var j = i; j > 0; j--) {
            bars[j].state = "selected";
            bars[j - 1].state = "selected";
            comparisons++;
            stages.push({
                bars: JSON.parse(JSON.stringify(bars)),
                swaps: swaps,
                comparisons: comparisons,
            });
            if (bars[j - 1].size > bars[j].size) {
                swaps++;
                [bars[j], bars[j - 1]] = [bars[j - 1], bars[j]]; // swaps elements
                stages.push({
                    bars: JSON.parse(JSON.stringify(bars)),
                    swaps: swaps,
                    comparisons: comparisons,
                });
                bars[j].state = "sorted";
                bars[j - 1].state = "sorted";
            } else {
                bars[j].state = "sorted";
                bars[j - 1].state = "sorted";
                break;
            }
        }
    }
    stages.push({
        bars: JSON.parse(JSON.stringify(bars)),
        swaps: swaps,
        comparisons: comparisons,
    });
    return stages;
}

export const merge = (bars: bar[]): stage[] => {
    var stages: stage[] = [];
    var comparisons = 0;
    var swaps = 0;
    stages.push({
        bars: JSON.parse(JSON.stringify(bars)),
        swaps: swaps,
        comparisons: comparisons,
    }); // push first stage to array

    let first = 0;
    let last = bars.length - 1;
    var mid = Math.floor(first + (last - first) / 2);

    var [nextstages, swaps, comparisons] = mergeSort(bars, swaps, comparisons, first, mid);
    stages = stages.concat(nextstages);
    var [nextstages, swaps, comparisons] = mergeSort(bars, swaps, comparisons, mid + 1, last);
    stages = stages.concat(nextstages);

    var [bars, nextstages, swaps, comparisons] = mergeArray(bars, first, mid, last, true, swaps, comparisons);
    stages = stages.concat(nextstages);
    stages.push({
        bars: JSON.parse(JSON.stringify(bars)),
        swaps: swaps,
        comparisons: comparisons,
    });
    return stages;
}

const mergeSort = (bars: bar[], swaps: number, comparisons: number, first: number, last: number): [stage[], number, number] => {
    var stages: stage[] = [];
    if (first >= last) return [stages, swaps, comparisons];

    var mid = Math.floor(first + (last - first) / 2);
    var [nextstages, swaps, comparisons] = mergeSort(bars, swaps, comparisons, first, mid);
    stages = stages.concat(nextstages);
    var [nextstages, swaps, comparisons] = mergeSort(bars, swaps, comparisons, mid + 1, last);
    stages = stages.concat(nextstages);

    var [bars, nextstages, swaps, comparisons] = mergeArray(bars, first, mid, last, false, swaps, comparisons);
    stages = stages.concat(nextstages);

    return [stages, swaps, comparisons]
}

const mergeArray = (bars: bar[], first: number, mid: number, last: number, final: boolean, swaps: number, comparisons: number): [bar[], stage[], number, number] => {
    var stages: stage[] = [];
    var leftLen = mid - first + 1;
    var rightLen = last - mid;

    var tempLeft: bar[] = [];
    var tempRight: bar[] = [];

    for (var i = 0; i < leftLen; i++) {
        tempLeft[i] = bars[first + i];
    }
    for (var i = 0; i < rightLen; i++) {
        tempRight[i] = bars[mid + 1 + i];
    }

    var indexOfLeft = 0;
    var indexOfRight = 0;
    var indexOfMain = first;

    while (indexOfLeft < tempLeft.length && indexOfRight < tempRight.length) {
        var selected1 = bars[first + indexOfLeft + indexOfRight];
        selected1.state = "selected";
        var selected2 = bars[mid + 1 + indexOfRight]
        selected2.state = "selected";
        stages.push({
            bars: JSON.parse(JSON.stringify(bars)),
            swaps: swaps,
            comparisons: comparisons,
        }); // push first stage to array
        if (tempLeft[indexOfLeft].size <= tempRight[indexOfRight].size) {
            if (final) {
                selected1.state = "sorted";
                selected2.state = "unsorted";
            }
            indexOfLeft++;
        } else {
            swaps++
            bars.splice(mid + 1 + indexOfRight, 1);
            bars.splice(indexOfMain, 0, tempRight[indexOfRight]);
            if (final) {
                selected1.state = "unsorted";
                selected2.state = "sorted"
            }
            indexOfRight++;
        }

        indexOfMain++;
        comparisons++

        stages.push({
            bars: JSON.parse(JSON.stringify(bars)),
            swaps: swaps,
            comparisons: comparisons,
        });
        if (!final) {
            selected1.state = "unsorted";
            selected2.state = "unsorted";
        }
    }

    while (indexOfLeft < tempLeft.length) {
        var selected1 = bars[first + indexOfLeft + indexOfRight];
        selected1.state = "selected";
        indexOfLeft++;
        indexOfMain++;
        comparisons++
        stages.push({
            bars: JSON.parse(JSON.stringify(bars)),
            swaps: swaps,
            comparisons: comparisons,
        });
        selected1.state = "unsorted";
        if (final) {
            selected1.state = "sorted"
        }
    }

    while (indexOfRight < tempRight.length) {
        var selected2 = bars[mid + 1 + indexOfRight]
        selected2.state = "selected";
        comparisons++;
        swaps++;
        indexOfRight++;
        indexOfMain++;
        stages.push({
            bars: JSON.parse(JSON.stringify(bars)),
            swaps: swaps,
            comparisons: comparisons,
        });
        selected2.state = "unsorted";
        if (final) {
            selected2.state = "sorted"
        }

    }

    return [bars, stages, swaps, comparisons]
}
export const selection = (bars: bar[]): stage[] => {
    var stages: stage[] = [];
    var comparisons = 0;
    var swaps = 0;
    stages.push({
        bars: JSON.parse(JSON.stringify(bars)),
        swaps: swaps,
        comparisons: comparisons,
    }); // push first stage to array

    for (var i = 0; i < bars.length - 1; i++) {
        var min = i;
        bars[min].state = "selected";
        stages.push({
            bars: JSON.parse(JSON.stringify(bars)),
            swaps: swaps,
            comparisons: comparisons,
        });
        for (var j = i + 1; j < bars.length; j++) {
            bars[j].state = "selected";
            comparisons++;
            if (bars[j].size < bars[min].size) {
                bars[min].state = "unsorted"
                min = j;
            }
            stages.push({
                bars: JSON.parse(JSON.stringify(bars)),
                swaps: swaps,
                comparisons: comparisons,
            });
            bars[j].state = "unsorted"
            bars[min].state = "selected";
        }

        if (min != i) {
            swaps++;
            [bars[i], bars[min]] = [bars[min], bars[i]];
        }
        bars[min].state = "unsorted";
        bars[i].state = "sorted";
        stages.push({
            bars: JSON.parse(JSON.stringify(bars)),
            swaps: swaps,
            comparisons: comparisons,
        });
    }
    bars[bars.length - 1].state = "sorted";
    stages.push({
        bars: JSON.parse(JSON.stringify(bars)),
        swaps: swaps,
        comparisons: comparisons,
    }); // push first stage to array
    return stages;
}
