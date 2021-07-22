// types for the stage
export interface stage {
    bars: bar[];
    comparisons: number;
    swaps: number;
}

// props passed into the description
export interface descriptionProps {
    selectedAlgorithm: string;
}

// Types for the props passed into the control component
export interface speedSelectorProps {
    setSpeed: (speed: any) => void;
}

export interface numOBarsSelectorProps {
    makeBars: (n: any) => void;
}

export interface stepForwardProps {
    stepForward: () => void;
}
export interface startStopProps {
    togglePlayState: () => void;
    isRunning: boolean;
}

export interface stepBackwardsProps {
    stepBackward: () => void;
}

export interface algoritmSelectorProps {
    setAlgorithm: (selection: any) => void;
    algorithms: string[];
}

export interface resetButtonProps {
    reset: () => void;
}

//interface for the props passed into the bar container
export interface barContainerProps {
    bars: Array<any>;
    maxSize: number;
}

// interface for the props passed into the metrics element
export interface metricsProps {
    swaps: number;
    comparisons: number;
}

// types for the application state
export interface appState {
    numOBars: number;
    bars: bar[];
    algorithms: string[];
    isRunning: boolean;
    sortingStages: stage[];
    sortingStage: number;
    selectedAlgorithm: string;
    stagesGenerated: boolean;
    speed: number;
    comparisons: number;
    swaps: number;
}

// type for bar state
export type barState = "unsorted" | "sorted" | "selected" | "pivot";

export interface bar {
    size: number;
    state: barState;
}

// Interface for the props passed into the bar
export interface barProps {
    size: number;
    maxSize: number;
    key: number;
    state: barState;
}

export interface progressBarProps {
    stage: number;
    max: number;
}
