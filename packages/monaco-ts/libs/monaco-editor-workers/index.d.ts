export interface Environment {
    globalAPI?: boolean;
    baseUrl?: string;
    getWorker?(workerId: string, label: string): Promise<Worker> | Worker;
    getWorkerUrl?(workerId: string, label: string): string;
    workerOverrideGlobals: WorkerOverrideGlobals;
}
type WorkerOverrideGlobals = {
    basePath: string;
    workerPath: string;
    workerOptions: WorkerOptions;
};
export declare function buildWorkerDefinition(workerPath: string, basePath: string, useModuleWorker: boolean): void;
export {};
//# sourceMappingURL=index.d.ts.map